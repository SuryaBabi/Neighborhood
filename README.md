# Neighborhood Map Project React

> By Dylan Blur

![Part of the Udacity Front-End Web Development Nanodegree](https://img.shields.io/badge/Udacity-React-02b3e4.svg)

This is the **Udacity Neighborhood Map Project**. It's intended as a challenge to put together a website from various APIs. This includes making function calls to Google Maps and other location-based services like Foursquare.

Included is a list of some places in Yaoundé, Cameroon that I can recall I used to go when I attended my primary studies.

The app allows you to filter the list down as you type. In return, it displays the locations on the map.

This application follow this [Udacity Project Rubric](https://review.udacity.com/#!/rubrics/1351/view)

## Run Online Project

You can get the hosted project here -> https://SuryaBabi.github.io/Neighborhood

## Features

1. Click on any marker to see the location details fetched from the [FourSquare APIs](https://developer.foursquare.com/).
2. Search through availaible locations.
3. Get information on locations from the search or through marker click

## Installing

The project uses [Create-React-App starter code](https://github.com/facebookincubator/create-react-app) on a [Node.js >= 6](https://nodejs.org/en/) environment

Follow these steps:

1. Install node from the link above
1. Clone this repository to your computer
1. Install all the dependencies with `npm install`
1. Launch the app with this command `npm start`

The app will launch in your browser at the address[http://localhost:3000/](http://localhost:3000/).

### Constraints

> It is important to note that, the assets will only be cached when we are on production mode.

## Build

You can run the build for testing the service worker or any other reason following these steps

1 First `npm run build` to create an optimized version of the project
2 Then `npm run deploy` to deploy to the specified address
