import React, { useEffect, useState } from "react";
import { useDataMoviesPopularQuery } from "../../services/Movies/get-movies-popular";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export const PopularMovie = () => {
  const [populars, setPopulars] = useState([]);

  const navigate = useNavigate();

  const { data: moviesPopular } = useDataMoviesPopularQuery();

  useEffect(() => {
    setPopulars(moviesPopular);
  }, [moviesPopular]);

  return (
    <>
      <div className="container mx-auto px-4 mt-7">
        <div className="my-5 md:flex justify-between items-center mx-6 ">
          <Typography variant="h3" color="black" className="mb-5 md:mb-0">
            Popular Movies
          </Typography>
          <a href="/all-popular" className="px-4 py-3 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
            See All Popular Movies
          </a>
        </div>
        <div className="flex flex-wrap  ">
          {populars?.slice(1, 5).map((popular) => (
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
                <img src={`https://image.tmdb.org/t/p/original/${popular.poster_path}`} alt={popular.title} className="w-full h-auto " />
              </div>
              <p className=" font-bold text-black mt-2 mb-1">{popular.title}</p>
              <p className=" text-xs font-bold text-gray-700">{popular.release_date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
