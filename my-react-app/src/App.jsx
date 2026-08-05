import { useEffect, useState } from "react";
import { NavBar } from "./layout/NavBar";
import { Hero } from "./sections/Hero.jsx";

export default function App() {

  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
};
