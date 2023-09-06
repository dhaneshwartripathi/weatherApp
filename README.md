# weatherApp

## Introduction
Welcome to the Weather App! This web application provides real-time weather information for locations around the world. It is built using HTML, CSS, and JavaScript and uses the OpenWeather API as its backend data source.

## Features
- **Current Weather**: Get the latest weather conditions for any location, including temperature, humidity, wind speed, and more.
- **Search by Location**: Enter the name of a city or a location to get weather information.
- **Responsive Design**: The app is designed to work on both desktop and mobile devices.

## Prerequisites
Before using the Weather App, make sure you have the following:
- A modern web browser (e.g., Google Chrome, Mozilla Firefox)
- Internet connectivity

## Installation
1. Clone this repository to your local machine or download the ZIP file.
2. Open the project folder in your preferred code editor.
3. Open the `index.html` file in your web browser to launch the Weather App.

## Usage
1. Upon launching the app, you will see the current weather for a default location.
2. To check the weather for a different location, enter the name of the city or location in the search bar and press the "Search" button or hit "Enter" on your keyboard.
3. The app will display the current weather conditions for the entered location.
4. You can also view the 5-day weather forecast by clicking the "5-Day Forecast" button.
5. To return to the current weather, simply click the "Current Weather" button.

## API Configuration
This Weather App uses the OpenWeather API to fetch weather data. You will need to obtain an API key from [OpenWeather](https://openweathermap.org/api) and replace the placeholder in the `js/weather.js` file with your API key. Here's where you should replace the API key:

```javascript
const apiKey = 'YOUR_API_KEY_HERE';
```

## Credits.
- Weather data is provided by the [OpenWeather API](https://openweathermap.org/).

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
- Special thanks to the developers at OpenWeather for providing the weather data API.
- Thanks to the open-source community for creating the tools and libraries used in this project.

Feel free to customize and enhance the Weather App according to your needs. If you encounter any issues or have suggestions for improvements, please don't hesitate to open an issue or submit a pull request. Enjoy using the Weather App!
