import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/img/bg2.jpg";
import "react-toastify/dist/ReactToastify.css";
import GoogleLogin from "../../assets/components/GoogleLogin";
import { useDispatch, useSelector } from "react-redux";
import { AuthAction } from "../../redux/actions/AuthAction";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeDropper, faEyeSlash, faUser } from "@fortawesome/free-solid-svg-icons";

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    dispatch(
      AuthAction({
        email: Email,
        password: Password,
      })
    );
  };

  return (
    <>
      <div
        className="flex items-center justify-center  min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img})`, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

        <div className="lg:w-1/3 md:w-1/2  backdrop-blur-xl text-black bg-white font-[Poppins] py-8 px-12 shadow-xl rounded-xl">
          <div>
            <a href="/home" className="flex items-center justify-center gap-2 font-extrabold text-base text-[#BE123C] hover:scale-105 cursor-pointer">
              <img src={logo} width={25} alt="logo" />
              MovieBox
            </a>
          </div>
          <h1 className="text-2xl mt-8  text-center font-bold">Sign In</h1>
          <div className="mt-4">
            <GoogleLogin buttonText="Sign In with Google " />
          </div>

          <div className="my-12 border-b border-black text-center">
            <div className="leading-none px-2 inline-block text-sm text-black tracking-wide font-medium bg-white transform translate-y-1/2">
              Or sign in with e-mail
            </div>
          </div>

          <div className="w-full mb-5 mx-0 h-[50px] relative">
            <input
              onChange={handleInput}
              id="email"
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-500 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="email"
              placeholder="Email"
              required
            />
            <span className="bx text-grey-500 bxs-user absolute right-5 top-3 text-xl">
              <FontAwesomeIcon icon={faUser} />{" "}
            </span>
          </div>
          <div className="w-full  mb-5 mx-0 h-[50px] relative">
            <input
              onChange={handleInput}
              id="password"
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-500 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <span onClick={togglePasswordVisibility} className="bx text-grey-500 bxs-user absolute right-5 top-3 text-xl">
              {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </span>
          </div>
          <button
            onClick={() => {
              handleLogin();
            }}
            className="w-full rounded-md py-4 font-semibold bg-[#BE123C] hover:bg-pink-500 text-white flex justify-center items-center gap-3"
          >
            <FontAwesomeIcon icon={faUser} /> Sign In
          </button>

          <div className="text-center mt-5">
            <p className="text-sm">
              Dont have an account? <br></br>
              <Link className="text-blue-600 hover:underline font-bold text-md" to="/register">
                Register Here
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
