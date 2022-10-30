import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbSoup } from "react-icons/tb";
import { Link } from "react-router-dom";

const ItemsCategory = ({ ctg }) => {
  return (
    <div className=" p-8 sm:p-4 sm:mb-5 md:w-1/3 -mt-10 sm:mt-1">
      <div className="rounded-xl">
        <Link to={`/recipe/${ctg.key}`}>
          <img
            src={ctg.thumb}
            className="rounded-xl hover:scale-110 duration-300"
            alt="/"
          />
        </Link>
        <div>
          <div className="py-3 cursor-default ">
            <span className="badge mr-2 hover:scale-105 duration-300">
              <AiOutlineClockCircle className="mr-1" />
              {ctg.times}
            </span>
            <span className="badge mr-2 hover:scale-105">
              <TbSoup className="mr-1" /> {ctg.serving}
            </span>
            <span className="badge hover:scale-105">{ctg.difficulty}</span>
          </div>
        </div>
        <Link
          to={`/recipe/${ctg.key}`}
          className="text-lg sm:text-xl font-semibold"
        >
          {ctg.title}
        </Link>
      </div>
    </div>
  );
};

export default ItemsCategory;
