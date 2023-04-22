# React Weather App

This is a simple weather app built using React that allows users to search for weather information of a particular location. The app retrieves weather data using an API and displays it in a user-friendly way.

## Features

- Search for weather information by location name or zip code.
- Displays current weather information including temperature, weather description, and weather icon.
- Provides a 5-day weather forecast, including temperature, weather description, and weather icon for each day.
- Unit conversion between Celsius and Fahrenheit.
- Responsive design for seamless user experience on different devices.

## Technologies Used

- React: A popular JavaScript library for building user interfaces.
- OpenWeatherMap API: An API that provides weather data for various locations around the world.
- Axios: A popular HTTP client for making API requests in JavaScript.
- Bootstrap: A popular CSS framework for building responsive web applications.
- Font Awesome: A popular icon library for adding icons to web applications.
- CSS: Cascading Style Sheets for styling the app components.

## Installation

1. Clone the repository to your local machine using the following command:
```
git clone <repository-url>
```
2. Change to the project directory:
```
cd react-weather-app
```
3. Install the dependencies:
```
npm install
```
4. Sign up on [OpenWeatherMap](https://openweathermap.org/) to get an API key.
5. Create a `.env` file in the root of the project and add your API key as follows:
```
REACT_APP_API_KEY=YOUR_API_KEY
```
6. Start the development server:
```
npm start
```
7. Open a web browser and go to `http://localhost:3000` to see the app running.

## Usage

- Enter a location name or zip code in the search bar and press Enter or click the Search button to retrieve weather information.
- Current weather information will be displayed at the top, including temperature, weather description, and weather icon.
- The 5-day weather forecast will be displayed below, showing temperature, weather description, and weather icon for each day.
- You can toggle between Celsius and Fahrenheit units using the unit conversion button at the top right corner.
- The app is responsive and can be used on different devices including desktops, tablets, and mobile phones.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [Font Awesome](https://fontawesome.com/) for the weather icons.
- [Bootstrap](https://getbootstrap.com/) for the CSS framework.
- [Axios](https://axios-http.com/) for making API requests in JavaScript.
- [Create React App](https://create-react-app.dev/) for the React project setup.
