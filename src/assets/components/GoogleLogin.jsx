import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import IconGoogle from "../../assets/icons/icons-google.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerLoginWithGoogle } from "../../redux/actions/AuthGoogle";

function GoogleLogin({ buttonText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => dispatch(registerLoginWithGoogle(responseGoogle.access_token, navigate)),
  });

  return (
    <button
      className="w-full flex justify-center items-center rounded-md py-3 font-semibold bg-indigo-100 text-black transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
      onClick={() => loginWithGoogle()}
    >
      <img src={IconGoogle} alt="icon-google" width={25} /> {buttonText}
    </button>
  );
}

export default GoogleLogin;
