import React, { useEffect, useState } from "react";

import { Nav } from "../assets/components/Nav";
import { PopularMovie } from "../assets/components/PopularMovie";
import { Header } from "../assets/components/Header";
import { Footer } from "../assets/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { MovieAction } from "../redux/actions/MovieActions";

export const Home = () => {
  const data = useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MovieAction());
  }, [dispatch]);

  return (
    <div>
      <Nav color="transparent" />
      <Header data={data} />
      <PopularMovie />
      <Footer />
    </div>
  );
};
