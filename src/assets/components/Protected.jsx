import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Protected = ({ children }) => {
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token == undefined) {
      return navigate("/");
    }
  }, [navigate, token]);
  return children;
};
