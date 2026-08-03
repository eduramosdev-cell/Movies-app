import { useEffect, useState } from "react";
import { NavBar } from "./layout/NavBar";
import MovieCard from "./components/MovieCard";
import { Hero } from "./sections/Hero.jsx";

export default function App() {

  return (
    <div>
      <NavBar />
      <MovieCard />
      <Hero />
    </div>
  );
};
