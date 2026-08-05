import { useEffect, useState } from "react";
import { NavBar } from "./layout/navBar";
import { Hero } from "./sections/hero";
import { Popular } from "./sections/popular";

export default function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Popular />
    </div>
  );
};
