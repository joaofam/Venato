#!/usr/bin/env python3

import json
import random
from shapely.geometry import Polygon, Point

# Since the shapely module is an external library in AWS Lambda, we have to zip the shapely packages together with the script.py file in order to run it in Lambda

# We only generate coordinates within this polygon area (roughly North Dublin)
area = Polygon([(53.38533138951978, -6.253677023027457), (53.387028079483805, -6.259692847484781), (53.384950167083666, -6.262155469637021), (53.38464873026008, -6.264745817014776), (53.38260668644, -6.265233312524856), (53.38198525888758, -6.260055982595483)])

# This function generates a coordinate within the polygon boundary
def random_coords(poly, num_points):
    min_x, min_y, max_x, max_y = area.bounds
    points = []

    while len(points) < num_points:
        random_point = Point([random.uniform(min_x, max_x), random.uniform(min_y, max_y)])
        if (random_point.within(area)):
            points.append(random_point)

    return points

# This function appends generated longitude and latitude coordinates into a list before returning it
def generate_coords(area):
    points = random_coords(area, 1)
    coords = []
    for point in points:
        coords.append(point.x)
        coords.append(point.y)

    return coords

# This function allows the program to comply with Lambda's handler and return coordinates
def lambda_handler(event, context):
    coordinates = generate_coords(area)
    latitude = coordinates[0]
    longitude = coordinates[1]
    
    return {
        'latitude': latitude,
        'longitude': longitude
    }
