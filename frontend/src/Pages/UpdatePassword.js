import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UpdatePassword = () => {
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const updatedPassword = {
        email: values.email,
        password: values.password,
      };

      updatePassword(updatedPassword);
    },
  });

  const updatePassword = async (updatedPassword) => {
    const res = await axios.post(
      process.env.REACT_APP_BASE_URL + "/user/changePassword",
      updatedPassword
    );

    console.log(res.data.message);
    alert(res.data.message);

    if (res.data.status === 200) navigate("/sign-in");
  };

  return (
    <div className="flex flex-col">
      {" "}
      <nav className="px-4 sm:px-4 py-4 bg-blue-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/homepage" className="flex items-center link">
            <span
              className="self-center text-xl font-semibold whitespace-nowrap text-white"
              style={{ letterSpacing: "4px" }}
            >
              CARIFY
            </span>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col justify-center items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 text-lg rounded md:bg-transparent md:p-0 link"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pr-4 pl-3 text-lg text-gray-300 hover:text-gray-100 hover:font-medium transition link"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to={"/sign-in"}>
                  <button className="bg-gray-100 text-blue-800 text-lg font-medium px-8 py-1 rounded-md w-full hover:shadow-lg hover:scale-105 ease-in transform transition-all ">
                    Sign in
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center h-full my-4">
        <form
          onSubmit={Formik.handleSubmit}
          className="flex flex-col gap-y-2 bg-gray-200 py-8 px-14 rounded-lg shadow-lg my-3"
        >
          <h3 className="text-3xl text-gray-800 font-normal">
            Welcome to
            <span className="text-blue-700 px-2 font-bold">CARIFY</span>
          </h3>
          <div className="flex flex-col gap-2 py-3">
            <label
              className="text-base font-semibold text-gray-700"
              htmlFor="email"
            >
              Enter Your Registered Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={Formik.handleChange}
              value={Formik.values.email}
              className="rounded-md bg-gray-200 border-gray-700"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="flex flex-col gap-2 py-3">
            <label
              className="text-base font-semibold text-gray-700"
              htmlFor="email"
            >
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={Formik.handleChange}
              value={Formik.values.password}
              className="rounded-md bg-gray-200 border-gray-700"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <button
            type="submit"
            className="flex justify-center items-center gap-3 bg-blue-700 text-gray-100 rounded-md shadow-md px-6 py-2 text-lg my-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
