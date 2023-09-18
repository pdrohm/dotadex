import { useEffect, useState } from "react";
import axios from "axios";
import { Hero } from "../types/HeroesType";

const useHeroes = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://api.opendota.com/api/heroes"
        );

        const sortedHeroes = response.sort(
          (a: { localized_name: string }, b: { localized_name: string }) => {
            const nameA = a.localized_name.toUpperCase();
            const nameB = b.localized_name.toUpperCase();

            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          }
        );

        setHeroes(sortedHeroes);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    heroes,
    loading,
  };
};

export default useHeroes;
