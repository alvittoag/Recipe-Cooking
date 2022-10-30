import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ItemBrowse from "./ItemBrowse";

const Browse = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("/api/recipes").then((Response) => {
      setRecipes(Response.data.results);
      setLoading(true);
    });
  }, []);

  return (
    <div className="w-full px-4 lg:w-10/12 lg:mx-auto mt">
      <div className="mx-auto text-center">
        <h1 className="text-xl md:text-2xl md:mt-7 font-semibold text-slate-700">
          Terbaru
        </h1>
      </div>

      <div className="w-full px-4 flex flex-wrap mt-5">
        {loading ? (
          recipes.map((recipe) => (
            <ItemBrowse recipe={recipe} key={recipe.key} />
          ))
        ) : (
          <div className="mx-auto mt-10">
            <progress className="progress w-56"></progress>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
