import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Recipes from "./Recipes";
import ItemsCategory from "../components/ItemsCategory";

const Category = () => {
  const [category, setCategory] = useState([]);
  const params = useParams();
  const url = `/api/category/recipes/${params.key}`;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(url).then((Response) => {
      setCategory(Response.data.results);
      console.log(Response.data);
      setLoading(true);
    });
  }, [url]);

  return (
    <div className="w-full px-4 lg:w-10/12 lg:mx-auto mt-10">
      <div className="mx-auto text-center">
        <div>
          <div className=" sm:px-7 mx-auto text-sm breadcrumbs mb-7 sm:mb-0 -mt-8 sm:mt-8">
            <ul>
              <li>
                <Link to="/" className="badge hover:no-underline ">
                  Home
                </Link>
              </li>
              <li>Category</li>
            </ul>
          </div>
        </div>
        <Recipes />
      </div>
      <div className="w-full px-4 flex flex-wrap mt-20">
        {loading ? (
          category.map((ctg) => <ItemsCategory ctg={ctg} key={ctg.key} />)
        ) : (
          <div className="mx-auto mt-10">
            <progress className="progress w-56"></progress>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
