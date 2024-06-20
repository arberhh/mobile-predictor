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

- **Screens (`app/screens/`)**: Contains the main screens or pages of the application.
- **Components (`src/components/`)**: Reusable React components used throughout the app.
- **Hooks (`src/hooks/`)**: Custom hooks for state management and logic, including data fetching with TanStack Query.
- **Services (`src/services/`)**: Services responsible for interacting with external APIs, such as fetching GIFs from the Tenor API.
- **Utilities (`src/utils/`)**: Utility functions and modules, including `axiosInstance.ts` for handling API requests.


## API Configuration

For testing purposes, you can use this Tenor API. Below are the API URL and key used:

- **API URL**: `https://tenor.googleapis.com/v2/`
- **API Key**: `AIzaSyDAiHolnUWPBXSnLOU1Iihpqs5W5Itebh4`