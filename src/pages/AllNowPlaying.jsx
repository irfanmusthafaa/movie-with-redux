import React, { useEffect, useState } from "react";
import { useDataMoviesNowPlayingQuery } from "../services/get-movies-nowplaying";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Nav } from "../assets/components/Nav";

export const AllNowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [PageNow, setPageNow] = useState(2);

  const navigate = useNavigate();

  const { data: movies } = useDataMoviesNowPlayingQuery({
    language: "en-US",
    page: PageNow,
  });

  useEffect(() => {
    setNowPlayingMovies(movies);
  }, [movies]);

  return (
    <>
      <Nav variant="gradient" />
      <div className="my-5 flex justify-between items-center mx-6 mt-[6rem]">
        <Typography variant="h3" color="black" className="">
          Now Playing Movies
        </Typography>
      </div>
      <div className="flex flex-wrap -mx-2  ">
        {nowPlayingMovies?.map((movie) => (
          <div
            onClick={() => {
              navigate("/detail", {
                state: {
                  idMovie: movie.id,
                },
              });
            }}
            key={movie.id}
            className="w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-8 rounded-xl scale-90 cursor-pointer hover:scale-100"
          >
            <div className="relative group rounded-xl overflow-hidden border-2">
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className="w-full h-auto" />
            </div>
            <p className=" font-bold text-black mt-2 mb-1">{movie.title}</p>
            <p className=" text-xs font-bold text-gray-700">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};
