import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SingleCocktail = () => {
  const [cocktail, setCocktail] = useState({
    loading: false,
    data: null,
    error: false,
  });

  let content = null;
  const { id } = useParams();
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

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
  }, [url]);

  cocktail.loading && (content = <p>Loading...</p>);
  cocktail.error && (content = <p>Error occured</p>);

  return (
    <div className="min-h-screen flex justify-center items-center">
      {cocktail.data ? (
        <div>
          {cocktail.data.drinks.map((item) => {
            const {
              idDrink: id,
              strDrinkThumb: image,
              strCategory: category,
              strInstructions: desc,
            } = item;
            return (
              <div
                key={id}
                className="w-4/6 transform scale-75 shadow-lg mx-auto rounded-lg overflow-hidden my-2 bg-white"
              >
                <img src={image} alt="pic" />
                <div className="p-2">
                  {" "}
                  <p>{id}</p>
                  <p>Category: {category}</p>
                  <p>Description: {desc.slice(0, 20) + "..."}</p>
                  <Link to={"/cocktail"}>
                    {" "}
                    <button className="bg-gray-700 w-3/6 my-2 py-2 px-6 rounded text-white">
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default SingleCocktail;
