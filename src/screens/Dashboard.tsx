import React from "react";
import useHeroes from "../services/useHeroes";
import HeroCard from "../components/HeroCard";
import FilterBar from "../components/FilterBar";

const Dashboard = () => {
  const { heroes, loading } = useHeroes();

  console.log(heroes);

  return (
    <div className="bg-background-dark text-zinc-100">
      <div className="mx-auto flex w-2/3 flex-col items-center justify-center">
        <FilterBar />
        <div className="mx-auto grid grid-cols-5 gap-5">
          {heroes.map((hero) => (
            <HeroCard hero={hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
