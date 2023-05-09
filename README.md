# city-explorer-api

**Author**: Chyniece Matthews
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
This app is a simple weather app built with React that allows a user to search for weather information by city name. The app uses Axios to fetch data from a weather API, and updates the interface based on the data received. The user can enter a city name in a form input field, and when they click on the Explore button, the app makes a request to the weather API and updates the webpage with the weather information for the specified city. The weather information is displayed in a Weather component, which receives the data as props. This app also includes error handling for cases where a user enters an invalid city name or there is an issue with the API request.

## Getting Started
To build and run this app on their own machine, a user should:

1. Make sure that Node.js and npm are installed on their machine.
2. Clone or download the project repository from a code hosting platform such as GitHub.
3. Navigate to the project directory in their terminal or command prompt.
Run the command `"npm install"` to install all the necessary dependencies.
4. Run the command "npm start" to start the development server and launch the app in a browser.
6. If everything is set up correctly, the app should now be running on the local server at `http://localhost:3000/.`
7. Note: The app requires a backend server running at `http://localhost:3001/` to fetch data from the weather API. The instructions for setting up the backend server is included in the project documentation.

## Architecture
The application is a simple weather app that allows users to search for weather information about a particular city. It is built using the following:

- React: A JavaScript library for building user interfaces
- Bootstrap: A front-end CSS framework for building responsive web pages
- Axios: A promise-based HTTP client for making HTTP requests from the browser
- OpenWeatherMap API: An API that provides weather information based on city names or geographic coordinates.
- The app consists of a single-page interface that allows the user to enter a city name in a search bar. When the user submits the search, the app makes a GET request to the OpenWeatherMap API using the Axios library, passing the city name as a parameter. The API returns a JSON object containing weather information about the city, which is then parsed and displayed to the user on the same page.

- The main App component uses the useState and useEffect hooks to manage state and fetch data from the API. The Weather component is a child component of the App component, and is responsible for rendering the weather data returned from the API.

- The styling of the app is done using the Bootstrap CSS framework, and some customer CSS as well. 


## Change Log

## Credit and Collaborations
`https://www.grabient.com/`
`https://react-bootstrap.github.io/components/modal/`

Name of feature: Front-end: Weather info for the city I searched

Estimate of time needed to complete: 1 day

Start time: 2:00 pm

Finish time: 5:30 pm

Actual time needed to complete: 3.5 hours

Name of feature: Front-end: clear messages if something goes wrong

Estimate of time needed to complete: 1 day

Start time: 8:15 pm

Finish time: 10:15 pm

Actual time needed to complete: 2 hours
