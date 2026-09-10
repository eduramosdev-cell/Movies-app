import { useEffect, useState } from "react";
import { NavBar } from "./layout/navBar";
import { Hero } from "./sections/hero";
import { Popular } from "./sections/popular";
import { TopRated } from "./sections/topRated";
import { Upcoming } from "./sections/upcoming";
import { TrendingActors } from "./sections/TrendingActors";

export default function App() {

  return (


    <div>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <header>
        <NavBar />
      </header>
      <main id="main-content">
        <Hero />
        <Popular />
        <TopRated />
        <Upcoming />
        <TrendingActors />
      </main>
        
    </div>
  );
};
