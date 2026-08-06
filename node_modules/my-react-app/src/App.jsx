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
      <NavBar />
      <Hero />
      <Popular />
      <TopRated />
      <Upcoming />
      <TrendingActors />
    </div>
  );
};
