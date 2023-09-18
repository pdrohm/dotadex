import React from "react";
import { useParams } from "react-router-dom";
import { Hero } from "../types/HeroesType";

type Props = {
  hero: Hero;
};

const HeroInfo = (props: Props) => {
  const { nameOftheHero } = useParams();

  console.log(nameOftheHero);

  return <div>{nameOftheHero}</div>;
};

export default HeroInfo;
