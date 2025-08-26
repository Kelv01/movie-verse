import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import Genres from "./pages/Genres";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="popular" element={<Popular />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="genres" element={<Genres />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
