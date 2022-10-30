import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbSoup } from "react-icons/tb";
import { Link } from "react-router-dom";

const ItemBrowse = ({ recipe }) => {
  return (
    <div className=" p-8 sm:p-4 sm:mb-5 md:w-1/3">
      <div className="rounded-xl">
        <Link to={`/recipe/${recipe.key}`}>
          <img
            src={recipe.thumb}
            className="rounded-xl hover:scale-110 duration-300"
            alt="/"
          />
        </Link>
        <div>
          <div className="py-3 cursor-default ">
            <span className="badge mr-2 hover:scale-105 duration-300">
              <AiOutlineClockCircle className="mr-1" />
              {recipe.times}
            </span>
            <span className="badge mr-2 hover:scale-105">
              <TbSoup className="mr-1" /> {recipe.serving}
            </span>
            <span className="badge hover:scale-105">{recipe.difficulty}</span>
          </div>
        </div>
        <Link
          to={`/recipe/${recipe.key}`}
          className="text-lg sm:text-xl font-semibold"
        >
          {recipe.title}
        </Link>
      </div>
    </div>
  );
};

export default ItemBrowse;
