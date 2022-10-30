import React from "react";

import { Link } from "react-router-dom";
import { MdOutlineFastfood } from "react-icons/md";
import Form from "./Form";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-md lg:px-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex="0">
                <div>
                  <h5 className="text-md cursor-default font-semibold">
                    <MdOutlineFastfood /> Food
                    <span className="text-sky-600 font-semibold">Everyone</span>
                  </h5>
                </div>
              </li>
              <li tabIndex="0">
                <Link to="/">
                  <h5 className="text-md">Home</h5>
                </Link>
              </li>
              <li tabIndex="0">
                <Link to="#" className="justify-between">
                  Resep
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-sky-600 rounded-2xl shadow-lg text-white font-semibold">
                  <li>
                    <Link to="/category/recipes/resep-dessert">Desert</Link>
                  </li>
                  <li>
                    <Link to="/category/recipes/masakan-hari-raya">
                      Masakan Hari Raya
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/recipes/masakan-tradisional">
                      Masakan Traditional
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/recipes/makan-malam">
                      Menu Makan Malam
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/recipes/makan-siang">
                      Menu Makan Siang
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/recipes/resep-ayam">Resep Ayam</Link>
                  </li>
                  <li>
                    <Link to="/category/recipes/resep-daging">
                      Resep Daging
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/recipes/resep-sayuran">
                      Resep Sayuran
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/recipes/resep-seafood">
                      Resep Seafood
                    </Link>
                  </li>
                  <li>
                    <Link to="/category/recipes/sarapan">Sarapan</Link>
                  </li>
                </ul>
              </li>
              <li tabIndex="0">
                <Link to="/">
                  <h5 className="text-md">About</h5>
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to=""
            className="sm:flex hidden  normal-case text-2xl  sm:text-3xl text-slate-700 font-semibold "
          >
            <MdOutlineFastfood />
            Food<span className="text-sky-600 ">Everyone</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex lg:mr-28">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex="0">
              <Link to="">
                <h5 className="text-md hover:scale-95  duration-300">Home</h5>
              </Link>
            </li>
            <li tabIndex="0">
              <h5 className=" text-md hover:scale-95 transition  duration-300">
                Resep
              </h5>
              <ul className="p-2 bg-sky-600 rounded-2xl shadow-lg text-white font-semibold">
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/resep-dessert">Desert</Link>
                </li>
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/masakan-hari-raya">
                    Masakan Hari Raya
                  </Link>
                </li>
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/masakan-tradisional">
                    Masakan Traditional
                  </Link>
                </li>
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/makan-malam">
                    Menu Makan Malam
                  </Link>
                </li>
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/makan-siang">
                    Menu Makan Siang
                  </Link>
                </li>
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/resep-ayam">Resep Ayam</Link>
                </li>
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/resep-daging">Resep Daging</Link>
                </li>
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/resep-sayuran">
                    Resep Sayuran
                  </Link>
                </li>
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/resep-seafood">
                    Resep Seafood
                  </Link>
                </li>
                <li className="hover:scale-95  duration-300">
                  <Link to="/category/recipes/sarapan">Sarapan</Link>
                </li>
              </ul>
            </li>
            <li tabIndex="0">
              <Link to="/about">
                <h5 className="text-md hover:scale-95  duration-300">About</h5>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className=" md:block">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
