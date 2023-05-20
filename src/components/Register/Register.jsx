import React from "react";
import img from "./login.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="cont flex justify-between h-full p-4">
      <div className="left bg-blue-500 rounded-2xl flex-1 relative">
        <div className="flex justify-center h-full items-center">
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
          <div className="card w-3/4 h-[400px] absolute m-auto">
          </div>
        </div>
      </div>
      <div className="right flex-1">
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
                className="rounded-3xl py-2 border-gray-400 border-[2px] bg-gray-200 text-[14px] w-full indent-6 placeholder:text-gray-400 text-black
              "
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label
                htmlFor="email"
                className="font-semibold justify-self-start ml-6 mb-2 text-[14px]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@email.com"
                className="rounded-3xl py-2 border-gray-400 border-[2px] bg-gray-200 text-[14px] w-full indent-6 placeholder:text-gray-400 text-black
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
                className="rounded-3xl py-2 border-gray-400 border-[2px] bg-gray-200 text-[14px] w-full indent-6 placeholder:text-gray-400 text-black
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
              Register
            </button>
          </form>
          <p className="text-[14px] my-4 cursor-pointer">
            Have an account ?{" "}
            <span className="text-blue-500" onClick={() => navigate("/login")}>
              Sign in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
