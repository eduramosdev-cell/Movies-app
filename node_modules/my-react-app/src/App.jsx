import { useEffect, useState } from "react";
import { NavBar } from "./layout/NavBar";
import { Hero } from "./sections/Hero.jsx";
import { Trending } from "./sections/Trending.jsx";

export default function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Trending />
    </div>
  );
};
