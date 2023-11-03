import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";
import { AllMovies } from "../pages/AllMovies";
import { Register } from "../pages/Auth/Register";
import { Login } from "../pages/Auth/Login";
import { Protected } from "../assets/components/Protected";
import { LoginPage } from "../pages/Auth/LoginPage";

export const RouterList = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/loginExample" element={<LoginPage />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          ></Route>
          <Route
            path="/all-popular"
            element={
              <Protected>
                <AllMovies />
              </Protected>
            }
          ></Route>
          <Route
            path="/detail/:id"
            element={
              <Protected>
                <Detail />
              </Protected>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <Protected>
                <Search />
              </Protected>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
