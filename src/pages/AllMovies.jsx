import React, { useEffect, useState } from "react";
import { useDataMoviesPopularQuery } from "../services/Movies/get-movies-popular";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../assets/components/Nav";
import { Footer } from "../assets/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../redux/actions/MovieActions";

export const AllMovies = () => {
  const data = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(MovieAction());
  }, [dispatch]);

  return (
    <>
      <Nav variant="gradient" />
      <div className="my-5 flex justify-between items-center mx-6 mt-[6rem]">
        <Typography variant="h3" color="black" className="">
          Popular Movies
        </Typography>
      </div>
      <div className="flex flex-wrap -mx-2  ">
        {data?.dataMovies?.map((popular) => (
          <div
            onClick={() => {
              navigate("/detail", {
                state: {
                  idMovie: popular.id,
                },
              });
            }}
            key={popular.id}
            className="w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-8 rounded-xl scale-90 cursor-pointer hover:scale-100"
          >
            <div className="relative group rounded-xl overflow-hidden border-2">
              <img src={`https://image.tmdb.org/t/p/original/${popular.poster_path}`} alt={popular.title} className="w-full h-auto" />
            </div>
            <p className=" font-bold text-black mt-2 mb-1">{popular.title}</p>
            <p className=" text-xs font-bold text-gray-700">{popular.release_date}</p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};
