import Header from "./components/layout/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/layout/Footer";
import NowPlaying from "./components/NowPlaying";
import UpcomingMovies from "./components/UpcomingMovies";
import Genres from "./components/Genres";
import Reviews from "./components/Reviews";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Now-Playing" element={<NowPlaying />} />
          <Route path="/Upcoming Movies" element={<UpcomingMovies />} />
          <Route path="/Genres" element={<Genres />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
