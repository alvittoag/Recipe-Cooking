import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Items from "./Items";

const SearchItem = () => {
  const location = useLocation();
  const [searchForm, setSearchForm] = useState([]);
  const url = location.state.search;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(url).then((Response) => {
      setSearchForm(Response.data.results);
      // console.log(Response.data.results);
      setLoading(true);
    });
    setLoading(false);
  }, [url]);

  return (
    <div className="w-full px-4 lg:w-10/12 lg:mx-auto mt-10 ">
      <div className="mx-auto text-center">
        <div>
          <div className=" sm:px-7 mx-auto text-sm breadcrumbs mb-7 sm:mb-0 -mt-8 sm:mt-8">
            <ul>
              <li>
                <Link to="/" className="badge hover:no-underline ">
                  Home
                </Link>
              </li>
              <li>Search</li>
            </ul>
          </div>
        </div>
        <h1 className="text-xl md:text-2xl md:mt-7 font-semibold text-slate-700">
          Hasil Pencarian Anda
        </h1>
      </div>
      <div className="w-full px-4 flex flex-wrap mt-20">
        {loading ? (
          searchForm.length !== 0 ? (
            searchForm.map((search) => (
              <Items search={search} key={search.key} />
            ))
          ) : (
            <div class="alert alert-error shadow-lg w-1/2 mx-auto animate-bounce">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Hasil Pencarian Tidak Ditemukan!</span>
              </div>
            </div>
          )
        ) : (
          <div className="mx-auto mt-10">
            <progress className="progress w-56"></progress>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
