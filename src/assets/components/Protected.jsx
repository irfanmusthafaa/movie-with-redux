import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Protected = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token == undefined) {
      toast.warn(`Please Login Now!`);
      return navigate("/");
    }
  }, []);
  return children;
};
