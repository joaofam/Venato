#include <TinyGPS++.h>
#include <SoftwareSerial.h>
//#include <AltSoftSerial.h>
#include<stdio.h>
#include<string.h>
#define DEBUG true
int pon=9;

SoftwareSerial sim808(7,8); 

//AltSoftSerial neogps;

TinyGPSPlus gps;

unsigned long previousMillis = 0;
long interval = 60000;


void setup()
{
  //Begin serial communication with Arduino and Arduino IDE (Serial Monitor)
  Serial.begin(9600);
  
  //Begin serial communication with Arduino and sim808
  sim808.begin(9600);

  pinMode(pon, OUTPUT);
  digitalWrite(pon, HIGH);
  delay(3000); 
  digitalWrite(pon, LOW);

  //Begin serial communication with Arduino and sim808
  //  neogps.begin(9600);

  Serial.println("Initializing...");
  delay(10000);

  //Once the handshake test is successful, it will back to OK
  sendATcommand("AT", "OK", 2000);
  sendATcommand("AT+CMGF=1", "OK", 2000);
  //sim808.print("AT+CMGR=40\r");
  
}

void loop()
{
  while(sim808.available()){
    Serial.println(sim808.readString());
  }
  while(Serial.available())  {
    sim808.println(Serial.readString());
  }

    unsigned long currentMillis = millis();
    if(currentMillis - previousMillis > interval) {
       previousMillis = currentMillis;
       sendGpsToServer();
    }
}

int sendGpsToServer()
{
    //Can take up to 60 seconds
    boolean newData = false;
//    for (unsigned long start = millis(); millis() - start < 2000;){
//      while (neogps.available()){
//        if (gps.encode(neogps.read())){
//          newData = true;
//          break;
//        }
//      }
//   }
  
    //If newData is true
    if(true){
      newData = false;
      
      String latitude, longitude;
      float altitude;
      unsigned long date, time, speed, satellites;
  
      latitude = String(gps.location.lat(), 6); // Latitude in degrees (double)
      longitude = String(gps.location.lng(), 6); // Longitude in degrees (double)
      altitude = gps.altitude.meters(); // Altitude in meters (double)
      date = gps.date.value(); // Raw date in DDMMYY format (u32)
      time = gps.time.value(); // Raw time in HHMMSSCC format (u32)
      speed = gps.speed.kmph();
      
      Serial.print("Latitude= "); 
      Serial.print(latitude);
      Serial.print(" Longitude= "); 
      Serial.println(longitude);
  
      //if (latitude == 0) {return 0;}
      
      String url, temp;
      url = "http://venatobike.000webhostapp.com/gpsdata.php?lat=";
      url += latitude;
      url += "&lng=";
      url += longitude;

      //url = "http://ahmadssd.000webhostapp.com/gpsdata.php?lat=222&lng=222";

      Serial.println(url);    
      delay(300);
          
    sendATcommand("AT+CFUN=1", "OK", 2000);
    //AT+CGATT = 1 Connect modem is attached to GPRS to a network. AT+CGATT = 0, modem is not attached to GPRS to a network
    sendATcommand("AT+CGATT=1", "OK", 2000);
    //Connection type: GPRS - bearer profile 1
    sendATcommand("AT+SAPBR=3,1,\"Contype\",\"GPRS\"", "OK", 2000);
    //sets the APN settings for your network provider.
    sendATcommand("AT+SAPBR=3,1,\"APN\",\"internet\"", "OK", 2000);
    //enable the GPRS - enable bearer 1
    sendATcommand("AT+SAPBR=1,1", "OK", 2000);
    //Init HTTP service
    sendATcommand("AT+HTTPINIT", "OK", 2000); 
    sendATcommand("AT+HTTPPARA=\"CID\",1", "OK", 1000);
    //Set the HTTP URL sim800.print("AT+HTTPPARA="URL","http://ahmadssd.000webhostapp.com/gpsdata.php?lat=222&lng=222"\r");
    sim808.print("AT+HTTPPARA=\"URL\",\"");
    sim808.print(url);
    sendATcommand("\"", "OK", 1000);
    //Set up the HTTP action
    sendATcommand("AT+HTTPACTION=0", "0,200", 1000);
    //Terminate the HTTP service
    sendATcommand("AT+HTTPTERM", "OK", 1000);
    //shuts down the GPRS connection. This returns "SHUT OK".
    sendATcommand("AT+CIPSHUT", "SHUT OK", 1000);

  }
  return 1;    
}

int8_t sendATcommand(char* ATcommand, char* expected_answer, unsigned int timeout){

    uint8_t x=0,  answer=0;
    char response[100];
    unsigned long previous;

    //Initialice the string
    memset(response, '\0', 100);
    delay(100);
    
    //Clean the input buffer
    while( sim808.available() > 0) sim808.read();
    
    if (ATcommand[0] != '\0'){
      //Send the AT command 
      sim808.println(ATcommand);
    }

    x = 0;
    previous = millis();

    //this loop waits for the answer with time out
    do{
        //if there are data in the UART input buffer, reads it and checks for the asnwer
        if(sim808.available() != 0){
            response[x] = sim808.read();
            //Serial.print(response[x]);
            x++;
            // check if the desired answer (OK) is in the response of the module
            if(strstr(response, expected_answer) != NULL){
                answer = 1;
            }
        }
    }while((answer == 0) && ((millis() - previous) < timeout));

  Serial.println(response);
  return answer;
}

//AT+CFUN=1
//AT+CGATT=1
//AT+SAPBR=3,1,"Contype","GPRS"
//AT+SAPBR=3,1,"APN","internet"
//AT+SAPBR=1,1
