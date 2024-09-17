# Simple React App with Vite, React, and Express.js

This project is based on a Fireship tutorial of a simple full stack app used to search through a list of animals.

## Overview

- **Frontend (React + Vite):** The frontend sends a query request to the server, displays the filtered result, and caches the latest result locally, so it is ready upon the next reload.
- **Backend (Express.js):** The backend generates an array of 250 random animals and returns a filtered array based on the user's query from the frontend.

## Features

### Frontend (React + Vite)
- **Vite:** A fast and modern build tool with Hot Module Replacement (HMR) for instant updates during development.
- **React:** A component-based library for building user interfaces.
- **Caching:** Caches the most recent result to enhance user experience during page reloads.

### Backend (Express.js)
- **Animal Generation:** Generates an array of 250 animals.
- **Filtering:** Returns a filtered list of animals based on a search query sent from the frontend.

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone git@github.com:LLosTy/animal-farm-fireship.git
   cd animal-farm-fireship
    ```
2. **Install dependencies:** root of the project
   ```bash 
    npm i
    ```
3. **Install dependencies:** server file of the project
   ```bash 
   cd server
   npm i
    ```
4. **Start the frontend**
   ```bash 
   npm run dev
    ```
    Vite will start the app on port 5173.

5. **Start the backend**
   ```bash 
    cd server
    node .
    ```
   The server will start on port 8080.