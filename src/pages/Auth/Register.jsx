import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../services/Auth/post-register";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../../assets/img/bg2.jpg";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeDropper, faEyeSlash, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const Register = () => {
  // const [Username, setUsername] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [Email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const { mutate: registerUser, data, status, isSuccess, error } = useRegisterUser();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  // const clickPass = () => {
  //   setShowPassword(!showPassword);
  // };

  // const clickPassConfirm = () => {
  //   setShowPassConfirm(!showPassConfirm);
  // };

  useEffect(() => {
    if (error) {
      toast.error(error.response.data.message);
    }
    if (isSuccess) {
      navigate("/");
    }
  }, [status]);

  const register = () => {
    if (ConfirmPass === Password) {
      if (FirstName.trim() === "") {
        toast.warning("First name is required");
      } else {
        const Username = `${FirstName}` + `${LastName}`;
        registerUser({
          email: Email,
          name: Username,
          password: Password,
        });
      }
    } else {
      toast.warn("Your password confirmation doesn't match");
    }
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "firstName") {
        setFirstName(e.target.value + " ");
      }
      if (e.target.id === "lastName") {
        setLastName(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "confirmPass") {
        setConfirmPass(e.target.value);
      }
    }
  };

  return (
    <div
      className="flex items-center justify-center  min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})`, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

      <div className="lg:w-1/3 md:w-1/2 mt-8  backdrop-blur-xl text-black bg-white font-[Poppins] py-8 px-12 shadow-xl rounded-xl">
        <div>
          <a href="/home" className="flex items-center justify-center gap-2 font-extrabold text-base text-[#BE123C] hover:scale-105 cursor-pointer">
            <img src={logo} width={25} alt="logo" />
            MovieBox
          </a>
        </div>
        <h1 className="text-2xl my-8  text-center font-bold">Sign Up</h1>

        <div className="w-full mb-5 mx-0 h-[50px] relative">
          <input
            onChange={handleInput}
            id="firstName"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-500 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="text"
            placeholder="First Name"
            required
          />
          <span className="bx text-grey-500 bxs-user absolute right-5 top-3 text-xl">
            <FontAwesomeIcon icon={faUser} />{" "}
          </span>
        </div>
        <div className="w-full mb-5 mx-0 h-[50px] relative">
          <input
            onChange={handleInput}
            id="lastName"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-500 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type="text"
            placeholder="Last Name"
            required
          />
          <span className="bx text-grey-500 bxs-user absolute right-5 top-3 text-xl">
            <FontAwesomeIcon icon={faUser} />{" "}
          </span>
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
        <div className="w-full  mb-5 mx-0 h-[50px] relative">
          <input
            onChange={handleInput}
            id="confirmPass"
            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-500 placeholder-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            type={showPasswordConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            required
          />
          <span onClick={togglePasswordConfirm} className="bx text-grey-500 bxs-user absolute right-5 top-3 text-xl">
            {showPasswordConfirm ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
          </span>
        </div>
        <button
          onClick={() => {
            register();
          }}
          className="w-full rounded-md py-4 font-semibold bg-[#BE123C] hover:bg-pink-500 text-white flex justify-center items-center gap-3"
        >
          <FontAwesomeIcon icon={faUserPlus} /> Sign Up
        </button>

        <div className="text-center mt-5">
          <p>
            Already have an account?<br></br>
            <Link className="text-blue-600 hover:underline font-bold text-md" to="/">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>

    // <div>
    //   <div
    //     className="flex items-center justify-center  min-h-screen bg-cover bg-center bg-no-repeat"
    //     style={{ backgroundImage: `url(${img})`, backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    //   >
    //     <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    //     <div className="lg:w-1/4 md:w-1/2 border border-[rgba(255,255,255, .2)] backdrop-blur-xl shadow-xl text-white bg-transparent font-[Poppins] p-8 rounded-xl">
    //       <h1 className="text-4xl text-center font-bold">Register</h1>
    //       <div className="w-full my-4 mx-0 h-[50px] relative">
    //         <input
    //           onChange={handleInput}
    //           id="firstName"
    //           className="w-full h-full bg-transparent px-6 py-4 text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
    //           type="text"
    //           placeholder="First Name"
    //         />
    //         <i className="bx text-white bxs-user absolute right-5 top-3 text-xl"></i>
    //       </div>
    //       <div className="w-full my-4 mx-0 h-[50px] relative">
    //         <input
    //           onChange={handleInput}
    //           id="lastName"
    //           className="w-full h-full bg-transparent px-6 py-4 text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
    //           type="text"
    //           placeholder="Last Name"
    //         />
    //         <i className="bx text-white bxs-user absolute right-5 top-3 text-xl"></i>
    //       </div>
    //       <div className="w-full my-4 mx-0 h-[50px] relative">
    //         <input
    //           onChange={handleInput}
    //           id="email"
    //           className="w-full h-full px-6 py-4 bg-transparent text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
    //           type="email"
    //           placeholder="Email"
    //         />
    //         <i className="bx text-white bxs-envelope absolute right-5 top-3 text-xl"></i>
    //       </div>
    //       <div className="w-full my-4 mx-0 h-[50px] relative">
    //         <input
    //           onChange={handleInput}
    //           id="password"
    //           className="w-full h-full bg-transparent px-6 py-4 text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
    //           type={showPassword ? "text" : "password"}
    //           placeholder="Password"
    //         />
    //         <button onClick={clickPass}>
    //           {showPassword ? (
    //             <i className="bx bxs-hide text-white absolute right-5 top-3 text-xl"></i>
    //           ) : (
    //             <i className="bx bxs-show text-white absolute right-5 top-3 text-xl"></i>
    //           )}
    //         </button>
    //       </div>
    //       <div className="w-full my-4 mx-0 h-[50px] relative">
    //         <input
    //           onChange={handleInput}
    //           id="confirmPass"
    //           className="w-full h-full bg-transparent px-6 py-4 text-white text-md outline-none border-2 border-gray-200 rounded-[40px] placeholder:text-white"
    //           type={showPassConfirm ? "text" : "password"}
    //           placeholder="Password Confirmation"
    //         />
    //         <button onClick={clickPassConfirm}>
    //           {showPassConfirm ? (
    //             <i className="bx bxs-hide text-white absolute right-5 top-3 text-xl"></i>
    //           ) : (
    //             <i className="bx bxs-show text-white absolute right-5 top-3 text-xl"></i>
    //           )}
    //         </button>
    //       </div>
    //       <button
    //         onClick={() => {
    //           register();
    //         }}
    //         className="w-full rounded-full py-2 font-semibold bg-white text-black hover:opacity-80"
    //       >
    //         Register
    //       </button>
    //       <div className="text-center mt-5">
    //         <p>
    //           Already have an account?{" "}
    //           <Link className="text-blue-600 hover:underline font-bold text-md" to="/">
    //             Login
    //           </Link>{" "}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
