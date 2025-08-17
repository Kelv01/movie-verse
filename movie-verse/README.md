# MovieVerse

MovieVerse is a modern React application for discovering movies, exploring genres, and reading reviews. Powered by the OMDb API, it features a clean UI, search functionality, and responsive design with Tailwind CSS.

![Desktop Theme Preview](./Desktop-theme.png)

## Features

- 🔍 **Search** for movies by title
- 🎬 Browse **Now Playing** and **Upcoming Movies**
- 🎭 Explore by **Genres**
- 📝 Read **Reviews**
- Responsive layout and modern design

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
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

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following content:

   ```
   VITE_API_KEY=your_omdb_api_key
   VITE_DATA_URL=http://www.omdbapi.com/?apikey=[yourkey]&
   VITE_POSTER_URL=http://img.omdbapi.com/?apikey=[yourkey]&
   ```

   Replace `your_omdb_api_key` with your OMDb API key.

4. **Start the development server:**

   ```sh
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

## Project Structure

- `src/components/` – React components (pages, layout, UI)
- `src/components/utils/` – Zustand store for search state
- `src/assets/` – Static assets
- `public/` – Public files (e.g., favicon)
- `Desktop-theme.png` – Desktop UI preview

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Router](https://reactrouter.com/)
- [OMDb API](https://www.omdbapi.com/)

## License

This project is licensed under the MIT License.

---

**Desktop Preview:**

![Desktop Theme](./Desktop-theme.png)
