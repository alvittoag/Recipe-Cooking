import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbSoup } from "react-icons/tb";
import axios from "axios";

const RecipeDetail = () => {
  const [detail, setDetail] = useState([]);
  const [need, setNeed] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [step, setStep] = useState([]);
  const params = useParams();
  const url = `	/api/recipe/${params.key}`;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    axios.get(url).then((res) => {
      setDetail(res.data.results);
      setNeed(res.data.results.needItem);
      setIngredient(res.data.results.ingredient);
      setStep(res.data.results.step);
      // console.log(res.data.results);
      setLoading(true);
    });
  }, [url]);

  return (
    <>
      {loading ? (
        <div className="w-full px-4 sm:px-6 mt-10">
          <div className="mx-auto text-center">
            <div>
              <div className="lg:w-10/12 sm:px-6 md:px-4 mx-auto text-sm breadcrumbs mb-7 sm:mb-0 -mt-8 sm:mt-8">
                <ul>
                  <li>
                    <Link to="/" className="badge hover:no-underline ">
                      Home
                    </Link>
                  </li>
                  <li>{params.key}</li>
                </ul>
              </div>
            </div>
            <h1 className="text-lg md:text-2xl md:mt-16 font-semibold text-slate-700">
              {detail.title}
            </h1>
          </div>
          <div className="w-full px-4 mt-5">
            <div className="mx-auto text-center flex flex-wrap ">
              <div className="py-3 cursor-default mx-auto ">
                <span className="badge mr-2 hover:scale-105 duration-300">
                  <AiOutlineClockCircle className="mr-1" />
                  {detail.times}
                </span>
                <span className="badge mr-2 hover:scale-105">
                  <TbSoup className="mr-1" /> {detail.servings}
                </span>
                <span className="badge hover:scale-105">
                  {detail.difficulty}
                </span>
              </div>
            </div>
            <div className="mx-auto mt-5 px-4  lg:px-52">
              {detail.thumb != null ? (
                <img
                  className="mx-auto rounded-lg hover:scale-110 duration-300"
                  src={detail.thumb}
                  alt="/"
                />
              ) : (
                <p className="text-center my-28 font-lg text-red-600 font-semibold cursor-default">
                  *Gambar tidak tersedia!!
                </p>
              )}

              <p className="text-justify mt-8 sm:w-1/1 mx-auto font-normal">
                {detail.desc}
              </p>
            </div>
          </div>
          <div className="mx-auto text-center mt-16 sm:24 px-4 mb-20">
            <h1 className="text-xl md:text-2xl md:mt-16 font-semibold text-slate-700">
              Bahan - Utama
            </h1>
            {need.map((dtl) => (
              <div
                className="w-1/2 lg:w-1/3 flex mx-auto items-center mt-16 sm:mt-20"
                key={dtl.item_name}
              >
                <img
                  src={dtl.thumb_item}
                  alt="/"
                  className="-ml-5 sm:-ml-0 sm:w-52  mx-auto"
                  key={dtl.thumb_item}
                />
                <p
                  className="ml-7 lg:ml-5 lg:mx-auto md:text-lg"
                  key={dtl.item_name}
                >
                  {dtl.item_name}
                </p>
              </div>
            ))}
            <div className="mt-16 sm:28 px-4 md:text-center text-left mx-auto text-md md:text-lg">
              <div className="overflow-x-auto mx-auto">
                <ul className="steps steps-vertical">
                  {ingredient.map((ing) => (
                    <li className="step step-primary" key={ing}>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-16 sm:mt-28">
              <h1 className="text-xl md:text-2xl md:mt-16 font-semibold text-slate-700">
                Cara Membuat
              </h1>
              <div className="mt-10 text-left text-md md:text-lg md:w-1/2 md:mx-auto">
                {step.map((st) => (
                  <p className="py-2" key={st}>
                    {st}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full px-4 sm:px-6 mt-48">
          <div className="mx-auto text-center mt-16 sm:24 px-4 mb-20">
            <progress className="progress w-56"></progress>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeDetail;
