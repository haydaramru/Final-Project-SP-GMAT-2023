# Final Project Software Programmer GMAT 2023

This is a web-based application that visualizes and monitors data received from a WebSocket connection, presenting the information in the form of graphs and maps. The project uses React, Plotly, and Leaflet to achieve this.

## Project Overview

The data from the WebSocket connection is in the following format:

```bash
1009,02:14:59,-15.18,174.00,89.13,-7.764325,110.378136,7.33,98.98,22.95;
```

The data fields are separated by commas, and each field represents specific information. I identified each of these data like this:
- data[0] = Team ID
- data[1] = Clock
- data[2] = Yaw
- data[3] = Pitch
- data[4] = Roll
- data[5] = Latitude
- data[6] = Longitude
- data[7] = Voltage
- data[8] = Pressure
- data[9] = Altitude

## Installation and Usage

To get started, clone this repository and install the required dependencies:
```bash
git clone
npm install
```

To run the development server, run this command:
```bash
npm run dev
```

## Future Improvements

- Enhanced data processing and analysis features.
- Improved user interface and customization options.
- Deployment to a production server for remote monitoring.