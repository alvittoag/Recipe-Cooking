import React from "react";
import Picture1 from "./img/carousel/1.jpg";
import Picture2 from "./img/carousel/2.jpg";
import Picture3 from "./img/carousel/3.jpg";
import Picture4 from "./img/carousel/4.jpg";

const Carousel = () => {
  return (
    <div className="py-8 px-10 sm:px-24 sm:py-10 md:px-30 lg:px-40">
      <div className="carousel rounded-3xl w-full">
        <div
          id="item1"
          className="carousel-item w-full hover:scale-110 duration-500"
        >
          <img src={Picture1} className="w-full" alt="food" />
        </div>
        <div id="item2" className="carousel-item w-full ">
          <img
            src={Picture2}
            className="w-full hover:scale-110 duration-500"
            alt="food"
          />
        </div>
        <div id="item3" className="carousel-item w-full ">
          <img
            src={Picture3}
            className="w-full hover:scale-110 duration-500"
            alt="food"
          />
        </div>
        <div id="item4" className="carousel-item w-full ">
          <img
            src={Picture4}
            alt="food "
            className="w-full hover:scale-110 duration-500"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 ">
        <a
          href="#item1"
          className="w-2 h-2 bg-slate-700 rounded-full hover:bg-sky-700 hover:scale-150 duration-300"
        ></a>
        <a
          href="#item2"
          className="w-2 h-2 bg-slate-700 rounded-full hover:bg-sky-700 hover:scale-150 duration-300"
        ></a>
        <a
          href="#item3"
          className="w-2 h-2 bg-slate-700 rounded-full hover:bg-sky-700 hover:scale-150 duration-300"
        ></a>
        <a
          href="#item4"
          className="w-2 h-2 bg-slate-700 rounded-full hover:bg-sky-700 hover:scale-150 duration-300"
        ></a>
      </div>
    </div>
  );
};

export default Carousel;
