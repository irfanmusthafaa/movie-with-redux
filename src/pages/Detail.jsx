import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Carousel, Typography } from "@material-tailwind/react";
import { Nav } from "../assets/components/Nav";
import { RatingStar } from "../assets/components/RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useDataMoviesDetailQuery } from "../services/Movies/get-movies-detail";
import { useDispatch, useSelector } from "react-redux";
import { DetailAction } from "../redux/actions/DetailAction";
import tmdbImage from "../assets/icons/tmdb.png";
import iconPlay from "../assets/icons/Play.png";

export const Detail = () => {
  const [key, setKey] = useState([]);

  const details = useSelector((state) => state.detail);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(DetailAction(id));
    setKey(details?.detail?.videos);
  }, [dispatch, id]);

  const idKey = details?.detail?.videos?.map((value) => value.key);
  const trailer = idKey?.shift();

  const dataGenre = details?.detail?.genres?.map((genre) => genre.name).join(", ");
  const rating = Math.floor(details?.detail?.vote_average / 2);

  return (
    <>
      <Nav color="transparent" />
      <Carousel
        prevArrow={() => false}
        nextArrow={() => false}
        navigation={() => false}
        autoplay={true}
        autoplayDelay={3000}
        className="relative h-screen"
      >
        <div key={details?.detail?.id}>
          <div className="relative h-[full] w-full">
            <img
              src={`https://image.tmdb.org/t/p/original/${details?.detail?.backdrop_path}`}
              alt={details?.detail?.title}
              className="h-screen w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full justify-items-start place-items-center px-10 bg-black/75">
              <div className="w-3/4  md:w-2/4 sm:scale-50 md:scale-100 ">
                <Typography variant="h1" color="white" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
                  {details?.detail?.title}.
                </Typography>
                <div>
                  <p className="mb-6 italic text-white opacity-80 ">{dataGenre}</p>
                </div>

                <p className="mb-4 text-white opacity-80 ">{details?.detail?.overview}</p>
                <div className="flex  items-center gap-2 mb-4">
                  <img src={tmdbImage} width={35} height={17} alt="rating" />
                  <p className=" text-white opacity-80 line-clamp-3">{`${details?.detail?.vote_average?.toFixed(1)} / 10`}</p>
                </div>
                {/* <div className="flex items-center gap-2 mb-4">
                  <RatingStar rating={details?.detail?.vote_average} />
                  <Typography color="white" className="font-medium opacity-80">
                    {rating}.0 Rated
                  </Typography>
                </div> */}
                <div className="flex justify-start gap-2">
                  <Link
                    to={`https://www.youtube.com/watch?v=${trailer}`}
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
      </Carousel>
    </>
  );
};
