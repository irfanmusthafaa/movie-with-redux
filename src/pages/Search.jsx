import React, { useEffect, useState } from "react";
import { Nav } from "../assets/components/Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { SearchAction } from "../redux/actions/SearchAction";

export const Search = () => {
  const location = useLocation();
  const { query } = location.state ? location.state : "";

  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(SearchAction(query));
  }, [dispatch, query]);

  const InputValue = () => {
    if (search !== "") {
      return (
        <Typography color="black" variant="h3" className="container mx-auto px-4 mt-[7rem] ">
          Search Result "{query}"
        </Typography>
      );
    } else {
      return (
        <Typography color="black" variant="h3" className="container mx-auto px-4 mt-[7rem] ">
          No result found !!
        </Typography>
      );
    }
  };

  return (
    <>
      <Nav variant="gradient" />
      {<InputValue />}
      <div className=" flex flex-wrap mx-2 ">
        {search?.searchResult?.map((popular) => (
          <div
            onClick={() => {
              navigate(`/detail/${popular.id}`, {
                state: {
                  idMovie: popular.id,
                },
              });
            }}
            key={popular.id}
            className="w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-8 rounded-xl scale-90 cursor-pointer hover:scale-100"
          >
            <div className="relative group rounded-xl overflow-hidden border-2">
              <img src={`https://image.tmdb.org/t/p/original/${popular.poster_path}`} alt={popular.title} className="w-full h-auto " />
            </div>
            <p className=" font-bold text-black mt-2 mb-1">{popular.title}</p>
            <p className=" text-xs font-bold text-gray-700">{popular.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};
