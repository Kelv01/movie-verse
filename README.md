# MovieVerse

MovieVerse is a modern React application for discovering movies, exploring genres, and reading reviews. It uses the [TMDb API](https://www.themoviedb.org/documentation/api) to provide up-to-date movie data and trending titles. Built with Vite, Tailwind CSS, Zustand, and React Router.

![Desktop Theme Preview](./theme.png)

## Features

- Search for movies by title
- Browse Popular and Upcoming movies
- Explore by Genres
- View Movie Details
- Responsive and modern UI

## Navigation

- **Home**
- **Popular**
- **Upcoming**
- **Genres**

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/movie-verse.git
   cd movie-verse
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up TMDb API Key:**

   - Create a `.env` file in the root directory:
     ```
     VITE_TMDB_API_KEY=your_tmdb_api_key
     ```
   - Replace `your_tmdb_api_key` with your [TMDb API key](https://www.themoviedb.org/settings/api).

4. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

- `src/components/` – UI and layout components
- `src/pages/` – Page components (Home, Popular, Upcoming, Genres, Details)
- `src/store/` – Zustand stores for state management
- `src/utils/` – API utilities and constants
- `src/assets/` – Static assets

## API Integration

All movie data is fetched from the [TMDb API](https://www.themoviedb.org/documentation/api). The API key is loaded from your `.env` file and used in the API utility functions.

## Theme Guide

This project follows a custom theme designed in Figma.  
View the Figma design guide here: [Frontend Capstone Figma](https://www.figma.com/design/MWrQmDI8DYsrMAPE29DKsM/Frontend-Capstone?node-id=3-352&t=xceWZgd7i9WypEZQ-1)
