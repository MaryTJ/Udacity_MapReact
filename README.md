# Coffee Places Search - React Map App 
---
## Table of Contents

* [Overview](#overview)
* [How to access webpage](#HowToAccessWebpage)
* [Features](#features)
* [Service Worker](#ServiceWorker)
* [ThirdParty API](#ThirdPartyAPI)
* [Credits](#credits)
* [Author](#author)

## Overview

This is a webpage to find coffee shops & their details near union square in SanFrancisco.

## How to access webpage

* From inside the project directory, 
1. Run command ```npm install``` to install dependencies
2. Run command ```npm start``` to start the server
3. Visit the site in your browser at http://localhost:3000

## Features
This is a single page web application that searches coffee shops near Union square San Francisco. The user can click on a marker to display information regarding a particular coffee shop. The web page has a search text field that can be used to filter markers. The markers corresponding to filtered results are shown on the map. A user can also click on the displayed list of shops to show its corresponding marker and shop information.
The webpage contains a responsive design and works on different viewports. The webpage also implements accessibility features for users

## Service Worker
Service work is available in production mode. Use 
```npm run build```
```serve -s build```

##ThirdParty API
The project uses google map API to render map. The project is integrated with FoursquareAPI, which is used to search coffee shops and also fetch their detailed information

## Credits
The project is developed by using lectures and help from the following websites
* https://itnext.io/google-maps-react-makes-adding-google-maps-api-to-a-react-app-a-breeze-effb7b89e54

* https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb

* https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb

* https://stackoverflow.com/questions/43859785/how-do-i-display-multiple-markers-with-react-google-maps

* https://github.com/tomchentw/react-google-maps/issues/333

### Author
This project is developed by Marium Talha for the Udacity FrontEnd Web development Course.

