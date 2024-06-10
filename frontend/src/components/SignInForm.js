import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { UsersActions } from "../redux/UsersSlice";

export const SignInForm = ({ setFormState }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const userData = {
        email: values.email,
        password: values.password,
      };

      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "/careTaker/login",
        userData
      );

      alert(response.data.message);

      if (response.status) {
        const userData = {
          id: response.data.data.user["_id"],
          email: response.data.data.user.email,
          name: response.data.data.user.name,
          role: response.data.data.user.role ?? "caretaker",
        };
        dispatch(UsersActions.addUser(userData));
        dispatch(UsersActions.toggleLogIn(true));
        // session starts
        window.sessionStorage.setItem("isLoggedIn", true);
        window.sessionStorage.setItem("loggedEmail", userData.email);
        window.sessionStorage.setItem("loggedRole", userData.role);
        window.sessionStorage.setItem("loggedName", userData.name);
        window.sessionStorage.setItem("loggedId", userData.id);
        setTimeout(() => navigate("/dashboard"), 1500);
      }
    },
  });

  return (
    <div className="flex flex-col justify-center items-center gap-3 px-4 py-6 w-10/12 rounded-md shadow-md">
      <h3 className="text-3xl text-gray-800 font-normal">
        Welcome Back to
        <span className="text-blue-700 px-2 font-bold">CARIFY</span>
      </h3>
      <p className="text-base text-gray-600">
        Now take care of your patient more smartly
      </p>
      <form
        className="grid grid-cols-1 p-3 w-3/4"
        onSubmit={Formik.handleSubmit}
      >
        <div className="flex flex-col gap-2 py-3">
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={Formik.handleChange}
            value={Formik.values.email}
            className="rounded-md border-gray-700"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col gap-2 py-3">
          <label
            className="text-base font-semibold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className="rounded-md border-gray-700"
            name="password"
            id="password"
            onChange={Formik.handleChange}
            value={Formik.values.password}
            placeholder="*********"
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
        <button type="button" className="my-2 mb-1">
          Don't have an account?
          <span
            className="text-blue-700 px-2 font-medium hover:underline"
            onClick={() => setFormState((prev) => !prev)}
          >
            Sign Up
          </span>
        </button>
        <Link to="/user/update-password" className="my-1 text-center">
          Already a member?
          <span
            className="text-blue-700 px-2 font-medium hover:underline"
            onClick={() => setFormState((prev) => !prev)}
          >
            Enter password
          </span>
        </Link>
        <div className="flex justify-center">
          <Link to="/" className="underline hover:text-blue-700 text-base">
            Go back to Homepage
          </Link>
        </div>
      </form>
    </div>
  );
};
