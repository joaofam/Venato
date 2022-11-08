## 1. Overview

Our project, Venato, is a GPS tracking app for bikes. Venato is designed with the goal of
providing security and peace of mind to fellow cyclists. The users of Venato will therefore be
cyclists who want to prevent any potential theft of their bikes. Venato will be of significant
value to our users, as our product will allow users to know exactly where their bike is at any
given time. Venato will establish a direct connection between our users and their bikes,
which will provide users with a strong feeling of assurance and security, knowing that their
bikes are safe.
Our project is an all-in-one bike device and companion app that will allow users to keep their
bikes secure. Users will be able to interact with our mobile app, which will enable them to
connect to our device and easily access the range of tracking features that we will provide.
Our Venato app allows users to register their own personal account, enabling them to easily
sign in and out of the app. The user chooses their unique username, a password and
provides their email address for verification. In our system, each user has a unique user ID,
allowing them to be easily authenticated by our user database.
Another feature of our app is the user profile. Each user has their own profile, containing
important information about themselves. The user profile contains their name, Instagram
handle, location, phone number and email. Furthermore, there are interactive features such
as help, settings, terms and conditions and a sign out option.
The most important feature of our app is the ability for users to view the location of their
bike. Users can see the current location of their bike through our GPS tracking system, which
is then conveniently displayed on a map within our app. This map is the central tab on our
app, which was a conscious design choice that emphasises the importance of this feature.
This key feature is the selling point of our product, and is also what provides our users with
peace of mind by knowing that they have an accurate, real-time location of their bike.

## 2. Motivation

Motivation Last summer, we cycled to Dun Laoghaire together to go for a swim. Unfortunately, Aaron’s bike was stolen in broad daylight while we were swimming in the water. When we later realised that the bike had been stolen, we immediately recognised how useful it would be if we had a way to track the bike down. Having already decided to partner for our 3rd year project, we thought this could be a great potential idea for the project. Shortly after starting the college year, it eventually came time to choose an idea for our 3rd year project. We remembered the idea that we had come up with months ago in Dun Laoghaire, and thus decided to research the feasibility of it. After realising it was possible to create a GPS tracker for a bike, we committed to this idea for our project. We named our project Venato, meaning ‘tracker’ in Latin. Having both had our bikes stolen, we know that the safety of one’s bike is of paramount importance, which gave us motivation to ensure that Venato could safeguard fellow cyclists from going through the same tough experience as we did. We believe that our project has a real, relevant use case that can provide enormous benefit to potential users.

## 3. Design 

This section details the system architecture of our project. As seen below, there is a system architecture diagram, a data flow diagram and a use case diagram. The system architecture diagram contains the key components in our system and explains how they interact. The use case diagram and data flow diagrams are used to further illustrate the high-level design of our project

### 3.1 System Architecture Diagram
![[Pasted image 20221108173733.png]]

### 3.2 GPS Satellite -> GPS Module 

The GPS/GSM module has a GPS antenna integrated into its hardware. This GPS antenna needs a GPS signal in order to be able to retrieve the coordinates of its current location. This required GPS signal is broadcasted by a GPS satellite located in space. Once the GPS signal is received by the device, the device’s GPS antenna can begin broadcasting its own location.

### 3.3 GSM Module -> GSM Cellular Antenna -> Internet 

For any tracking device, we require a GSM antenna/module in order to be able to form a connection to networks such as 2g, 3g, 4g, bluetooth and Wi-Fi. The GSM antenna in our device is integrated with a sim card and when both are operating together, they form a network connection to the Internet to then furthermore have the ability to store and send data. 

### 3.4 Device/Android Wireless Device 

Our Venato app was built through a React Native application and an Android Studio emulator. In order for a user to access Venato’s application, they must first have access to an Android device (as our app is currently built for Android only). 

### 3.5 User & Bike 

The aim of the Venato is for a user to have the ability to track their bike through the use of a GPS device and an application. This means that in order to track their bike, the user must first securely mount their GPS device onto their bike so that it can be tracked.

### 3.6 Application

Venato’s front-end is created with React Native CLI, this is where we designed the user interface that the user will see when they are running the application. The application has access to the web server, as well as AWS, in order to retrieve important data such as user information and device data. This data is then utilised within the application to display necessary GPS tracking information to the user. 

### 3.7 Web Server 

The web server consists of both a database and a back-end server. This is where the behind-the-scenes of the application is operated. Data gets sent to our web server before then being stored within our database, and this data then runs through our back-end and is filtered to then be sent to the application. 

### 3.8 AWS

Throughout the project, we decided to use AWS and the services that it provides in order to create a functioning and effective authentication system for our users. Firstly, we used AWS Amplify to handle user registration/login/signout. We also used AWS Cognito to create and view user pools that contain our users’ provided information. 

### 3.9 Data Flow Diagram 
![[Pasted image 20221108174137.png]]
The data flow diagram above illustrates the process behind the user registering for a new account. Our app forms a signup request based on the credentials that the user inputs on their screen. This request is then sent to our app’s AWS backend. We used the AWS amplify framework in order to make a serverless backend. After a user’s details are successfully validated by Amplify, the payload is sent to the AWS Cognito API. The Cognito API then sends a verification email to the email address that the user provided. After user verification, a new user is created in the Cognito User Pool, and the user data is stored to Amplify. 

### 3.10 Use Case Diagram
![[Pasted image 20221108174158.png]]
The use case diagram above illustrates how a user will interact with our Venato app system. Upon opening the app, the user must first sign in. This is dependent on the login feature of our app, whereby a user must first be signed up. If they are not signed up, their login is dependent on them receiving their email verification code, which then authorises them to access our app. When a user is logging in, our app is also able to handle invalid credentials (e.g. password) as well as a change password option. There are other remaining use cases of our app that become available to the user after signing in, which include the ability to access the home screen, viewing their bike location, opening their user profile and finally signing out. These use cases are all dependent on the user first signing into the app, as illustrated in the diagram through the dotted line dependencies. The sign out use case is also dependent on the user opening their user profile, as that is where the sign out button is located.