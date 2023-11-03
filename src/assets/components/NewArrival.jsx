import React, { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../../redux/actions/MovieActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import tmdbImage from "../icons/tmdb.png";

export const NewArrival = () => {
  const data = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(MovieAction());
  }, [dispatch]);

  return (
    <>
      <div className="container mx-auto px-4 mt-7 mb-8">
        <div className="my-5 sm:flex justify-between sm:items-center mx-6 ">
          <Typography variant="h3" color="black" className="">
            New Arrival
          </Typography>
          <a href="/all-popular" className=" text-[#BE123C] font-bold  hover:opacity-75">
            See More <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
        <div className="flex flex-wrap" data-aos="zoom-in-up">
          {data?.dataMovies?.slice(6, 10).map((popular) => (
            <div
              onClick={() => {
                navigate(`/detail/${popular.id}`, {
                  state: {
                    idMovie: popular.id,
                  },
                });
              }}
              key={popular.id}
              className="w-1/2 md:w-1/3 lg:w-1/4 px-2  rounded-xl scale-90 cursor-pointer hover:scale-100"
            >
              <div className="relative group rounded-xl overflow-hidden border-2">
                <img src={`https://image.tmdb.org/t/p/original/${popular.backdrop_path}`} alt={popular.title} className="w-full h-auto " />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className=" font-bold text-black mt-2 mb-1">{popular.title.slice(0, 20)}</p>
                  <p className=" text-xs font-bold text-gray-700">{popular.release_date}</p>
                </div>

                <div className="flex  items-center gap-1 mt-2">
                  <img src={tmdbImage} width={35} height={17} alt="rating" />
                  <p className="text-xs font-bold text-black ">{`${popular.vote_average.toFixed(1)} / 10`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
