import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./routes/About";
import Category from "./routes/Category";
import Home from "./routes/Home";
import RecipeDetail from "./routes/RecipeDetail";
import Search from "./routes/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/recipes/:key" element={<Category />} />
        <Route path="/recipe/:key" element={<RecipeDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
