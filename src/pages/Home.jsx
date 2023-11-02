import React, { useEffect, useState } from "react";

import { Nav } from "../assets/components/Nav";
import { useDataMoviesNowPlayingQuery } from "../services/get-movies-nowplaying";
import { PopularMovie } from "../assets/components/PopularMovie";
import { Header } from "../assets/components/Header";
import { NowPlayingMovie } from "../assets/components/NowPlayingMovie";
import { Footer } from "../assets/components/Footer";
import { useDataMoviesPopularQuery } from "../services/Movies/get-movies-popular";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../redux/actions/MovieActions";

export const Home = () => {
  const data = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MovieAction());
  }, [dispatch]);

  console.log(data, "Data");

  return (
    <div>
      <Nav color="transparent" />
      <Header data={data} />
      <PopularMovie />
      <Footer />
    </div>
  );
};
