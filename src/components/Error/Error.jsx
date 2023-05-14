import React from "react";
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bg from "./bg.jfif";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <h1 className="text-center text-2xl font-bold text-gray-700">Oops! Page not found.</h1>
      <span
        className="error text-[14rem] font-extrabold tracking-[20px] bg-clip-text"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain" }}
      >
        404
      </span>
      <p className="text-center text-2xl font-bold text-gray-700">Sorry, an unexpected error has occurred.</p>
      <div className="flex justify-center my-4">
        <button
          className="text-2xl bg-blue-600 text-white font-bold px-4 py-2 rounded-lg m-auto"
          onClick={() => navigate("/")}
        >
          Go back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
