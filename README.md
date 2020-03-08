Note: This is an in-progress upgrade of an app to React + Typescript. Original/complete code is at https://github.com/jocaron27/weatherwear

## Contents
-------------
1. [About](#about)
2. [Deploy Link](#deployed)
3. [Requirements](#reqs)
4. [Run Locally](#local)
5. [Looking Ahead](#next)

<a name="about"></a>

## About
-------------

WeatherAwear is a weather app providing weather-based apparel suggestions.

Users can:<br>
-Create an account or sign up with Google <br>
-See the weather for their last search on their personal dashboard<br>
-Search any city in the world<br>
-See the 7-day forecast for the selected city<br>
-View weather-based apparel suggestions for each day in the forecast<br>
-Switch between Fahrenheit and Celcius<br>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<a name="deployed"></a>

## Deployed on Heroku
---------------
https://weatherawear.herokuapp.com/

<a name="reqs"></a>

## Requirements
---------------

Node > 6.0

<a name="local"></a>

## Run Locally
---------------

git clone https://github.com/jocaron27/weatherwear.git<br>
Create server/secrets.ts with: process.env.DARKSKY_KEY, process.env.GOOGLE_CALLBACK, process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_GEOLOCATION_KEY, process.env.PG_USER, process.env.PG_PW, process.env.PORT<br>
npm install<br>
npm run start<br>
view on localhost:8080 or your specified process.env.PORT<br>

<a name="next"></a>

## Looking Ahead
---------------

Additional features in the works:<br>

-Mobile app<br>
-Personalized Suggestions: User feedback creates personalizes associations between weather and clothing<br>
-Custom clothing items: User can add photos of their personal wardrobe items<br>
-Packing lists: User can create a packing list based on destination's weather & suggested items<br>