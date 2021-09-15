import React, { useState, useEffect } from "react";
import axios from "axios";
import CocktailCard from "./CocktailCard";

const Cocktail = () => {
  const [cocktail, setCocktail] = useState({
    loading: false,
    data: null,
    error: false,
  });
  const [search, setSearch] = useState("");

  let content = null;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;

  useEffect(() => {
    setCocktail({
      loading: true,
      data: null,
      error: false,
    });

    axios
      .get(`${url}`)
      .then((resp) => resp.data)
      .then((data) =>
        setCocktail({
          loading: false,
          data: data,
          error: false,
        })
      )
      .catch((error) =>
        setCocktail({
          loading: false,
          data: null,
          error: true,
        })
      );
  }, [search, url]);

  cocktail.loading && (content = <p>Loading...</p>);
  cocktail.error && (content = <p>Error occured</p>);

  return (
    <div>
      <input
        className="rounded-lg ring ring-gray-300 focus:ring-blue-500 border-none"
        type="text"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {cocktail.data ? (
        <div className="flex md:flex-row flex-col gap-4 flex-wrap justify-center">
          {cocktail.data.drinks ? (
            cocktail.data.drinks
              .map((item) => {
                const {
                  idDrink: id,
                  strDrinkThumb: image,
                  strCategory: category,
                  strInstructions: desc,
                } = item;
                return (
                  <CocktailCard
                    key={id}
                    id={id}
                    category={category}
                    desc={desc.slice(0, 25) + "..."}
                    image={image}
                  />
                );
              })
              .slice(0, 6)
          ) : (
            <p className="text-xl text-gray-700">Ooops! Content Not Found</p>
          )}
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default Cocktail;
