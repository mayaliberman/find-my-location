## Introduction

On this app I used the React library to show the user location using his own IP address. 
The technologies I used:
Axios and React.

## Installation Google Maps & IPDate API keys

Download the project files.

Create ipdate account here: https://ipdata.co/sign-up.html and get your API Key.

Go to Google developer's website: https://developers.google.com/maps/documentation/embed/get-api-key and get your API Key.

## Create a Config file

You’ll need to set up a config.js file in your project that imports your API keys into your application so that you and other users can request data from the both APIs. This should be imported into src/App.js.
The config.js file should look something like this:

const IPdataAPIKey = 'YOUR API KEY';

const GoogleAPIKey = 'YOUR API KEY';

export {IPdataAPIKey, GoogleAPIKey};

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


