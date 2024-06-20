# GIF App

This is a React Native application built with Expo that allows users to search for GIFs and add new ones. The app integrates with the Tenor API and uses Formik for form handling and TanStack Query for state management and caching.

## Technologies Used

- **React Native**: Framework for building native apps using React.
- **Expo**: A framework and platform for universal React applications.
- **TanStack Query**: Data fetching and caching library for React.
- **Axios**: Promise-based HTTP client for the browser and node.js.

## WIP(adding gifs in the query cache)

- **Formik**: Library for building and managing forms in React.
- **Yup**: JavaScript schema builder for validation.

## Project Structure

The project is structured as follows:

### app/

app/
│
└── screens/ # Screens or pages of the application
├── HomeScreen.tsx# Main screen displaying GIF search results
├── AddGifScreen.tsx # Screen for adding a new GIF
└── ... # Other screens

The `app/` folder contains all the screens or pages of the application. Each screen is responsible for displaying different parts of the app's functionality.

### src/

src/
│
├── assets/ # Contains images, fonts, and other static assets
│
├── components/ # React components used throughout the app
│ ├── GifItem.tsx # Component for displaying a single GIF
│ ├── Search.tsx # Component for search functionality
│ └── ... # Other components
│
├── hooks/ # Custom hooks used for state management and logic
│ ├── useQuery.ts # Hook for querying GIF data using TanStack Query
│ ├── useSearch.ts # Hook for managing search functionality
│ └── ... # Other hooks
│
├── services/ # Services for interacting with external APIs
│ ├── gifService.ts # Service for fetching GIF data from Tenor API
│ └── ... # Other services
│
└── utils/ # Utility functions and helper modules
├── axiosInstance.ts # Configured Axios instance for API requests
└── ... # Other utility modules

## API Configuration

For testing purposes, you can use this Tenor API. Below are the API URL and key used:

- **API URL**: `https://tenor.googleapis.com/v2/`
- **API Key**: `AIzaSyDAiHolnUWPBXSnLOU1Iihpqs5W5Itebh4`