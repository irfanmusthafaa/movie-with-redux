import React from "react";

import { Carousel, Typography, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import tmdbImage from "../icons/tmdb.png";
import iconPlay from "../icons/Play.png";
import { Link } from "react-router-dom";

export const Header = ({ data }) => {
  return (
    <Carousel
      prevArrow={() => false}
      nextArrow={() => false}
      autoplay={true}
      autoplayDelay={3000}
      className="relative h-screen"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {data?.dataMovies?.slice(8, 12).map((movie) => (
        <div key={movie.id}>
          <div className="relative h-[full] w-full">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className="h-screen w-full object-cover" />
            <div
              data-aos="flip-right"
              className="absolute inset-0 grid h-full w-full justify-items-start place-items-center sm:px-10 lg:px-14 bg-black/75"
            >
              <div className="w-3/4  md:w-2/4  ">
                <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  {movie.title}
                </Typography>
                <div className="flex  items-center gap-2 mb-4">
                  <img src={tmdbImage} width={35} height={17} alt="rating" />
                  <p className=" text-white opacity-80 line-clamp-3">{`${movie.vote_average.toFixed(1)} / 10`}</p>
                </div>

                <p className="mb-4 text-white opacity-80 line-clamp-3">{movie.overview}</p>
                <div className="flex justify-start gap-2">
                  <Link
                    to={`https://www.youtube.com/watch?v=${movie.videos?.map((value) => value.key).shift()}`}
                    target="_blank"
                    className="flex justify-start gap-2 text-white text-sm font-bold py-4 px-7  bg-[#BE123C] rounded-xl hover:opacity-75"
                  >
                    <img src={iconPlay} alt="icon play" /> WATCH TRAILER
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
