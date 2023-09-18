import React from "react";
import { Hero } from "../types/HeroesType";
import { useNavigate } from "react-router-dom";

type Props = {
  hero: Hero;
};

const HeroCard = (props: Props) => {
  const { localized_name: hero_name } = props.hero;
  const navigate = useNavigate();

  const handleHeroCardClick = (heroName: string) => {
    navigate(`/hero/${heroName}`);
  };

  return (
    <div
      className="h-32 w-48 bg-zinc-600 flex items-center justify-center cursor-pointer shadow-2xl"
      onClick={() => handleHeroCardClick(hero_name)}
    >
      {hero_name}
    </div>
  );
};

export default HeroCard;
