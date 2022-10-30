import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Form = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const form = (e) => {
    navigate("/search", { state: { search: `/api/search/?q=${query}` } });
    e.preventDefault();
    setQuery("");
  };
  return (
    <div>
      <form className="flex" onSubmit={form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Masak apa hari ini"
          className="input sm:w-full input-bordered h-10 max-w-xs mr-3 w-72"
        />
        <button className="py-2 px-4 bg-sky-600 rounded-2xl text-white font-semibold flex text-md hover:bg-sky-700 transition duration-300">
          <AiOutlineSearch className="text-xl mr-1" />
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
