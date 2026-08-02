import { useEffect, useState } from "react";
import { NavBar } from "./layout/NavBar";
import MovieCard from "./components/MovieCard";

export default function App() {

  return (
    <div>
      <NavBar />
      <MovieCard />
    </div>
  );
};
