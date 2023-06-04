import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Register from "./components/Register/Register";
import Layout from "./Layout";
import Error from "./components/Error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />
    }
  ]);
  return (
    <div className="App bg-slate-200 h-screen">
      <Layout className="">
        <React.StrictMode>
          <RouterProvider router={route} />
        </React.StrictMode>
      </Layout>
    </div>
  );
}

export default App;
