import React from "react";
import img from "./login.png";
import log from "./layout.png";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="cont flex justify-between h-full p-4">
      <div className="left flex-1">
        <div className="flex justify-center items-center h-full flex-col px-16">
          <img src={img} alt="" srcset="" className="max-w-[180px] mb-6" />
          <form className=" flex flex-col gap-y-6 w-3/4">
            <div className="flex flex-col justify-center items-start">
              <label
                htmlFor="name"
                className="font-semibold justify-self-start ml-6 mb-2 text-[14px]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                className="rounded-3xl border-gray-400 py-2 border-[2px] bg-gray-200 text-[14px] w-full indent-6 placeholder:text-gray-400 text-black
              "
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label
                htmlFor="psword"
                className="font-semibold justify-self-start ml-6 mb-2 text-[14px]"
              >
                Password
              </label>
              <input
                type="password"
                id="psword"
                placeholder="Enter Password"
                className="rounded-3xl border-gray-400 py-2 border-[2px] bg-gray-200 text-[14px] w-full indent-6 placeholder:text-gray-400 text-black
              "
              />
            </div>
            <div className="flex items-center gap-x-2 ml-6">
              <input type="checkbox" id="terms" />
              <p className="text-[12px]">
                I agree to <span className="underline">Terms & privacy</span>
              </p>
            </div>
            <button className="w-full py-2 text-white text-[14px] font-semibold bg-blue-500 rounded-md">
              Login
            </button>
          </form>
          <p className="text-[14px] my-4 cursor-pointer">
            Don't have an account ?{" "}
            <span
              className="text-blue-500"
              onClick={() => navigate("/register")}
            >
              Register
            </span>
          </p>
        </div>
      </div>
      <div className="right bg-blue-500 rounded-2xl flex-1 relative">
        <div className="flex justify-center h-full items-center relative">
          <div class="area">
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="card w-3/4 h-[400px] absolute m-auto p-4">
            <img src={log} alt="" srcset="" className="w-[20px] mb-6" />
            <h1 className="text-[40px] font-extrabold text-white">
              Say goodbye to your <br />
               <span className="text-blue-500">
                <Typewriter
                  words={["financial", "expenses", "creditors"]}
                  loop={5}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={60}
                  delaySpeed={800}
                />
              </span><br />problems with <span className="text-slate-800">Cyrotec</span>
            </h1>
            <p className="text-slate-300 text-[12px]">
              Take control of your small leaks since they can sink your great
              ship
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
