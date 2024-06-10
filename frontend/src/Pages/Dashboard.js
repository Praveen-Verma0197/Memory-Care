import React, { useEffect } from "react";
import { AccuracyChart } from "../components/AccuracyChart";
import { JokesBlock } from "../components/JokesBlock";
import { Layout } from "../components/Layout";
import { useSelector } from "react-redux";
import { useSession } from "../helpers/useSession";
import { SignIn } from "./SignIn";
import { TodayDiet } from "../components/TodayDiet";

const food_diet = [
  {
    food: "Sandwhich and Orange Juice",
    dateTime: "9 March 2022, 9:00 am ",
  },
  {
    food: "Sandwhich and Orange Juice",
    dateTime: "9 March 2022, 9:00 am ",
  },
  {
    food: "Sandwhich and Orange Juice",
    dateTime: "9 March 2022, 9:00 am ",
  },
  {
    food: "Sandwhich and Orange Juice",
    dateTime: "9 March 2022, 9:00 am ",
  },
];

export const Dashboard = () => {
  useSession();
  const {
    isLoggedIn,
    userData: { name, role },
  } = useSelector((state) => state?.users);

  return (
    <>
      {!isLoggedIn && <SignIn />}
      {isLoggedIn && (
        <Layout>
          <div className="flex flex-col mb-3 p-4 ps-0 rounded-md">
            <div className="flex gap-1">
              <h3 className="text-2xl font-medium text-gray-700">
                Welcome Back,
              </h3>
              <span className="px-2 text-2xl font-bold text-gray-700">
                {name}
              </span>
            </div>
            <span className="text-base text-gray-500">
              Currently Logged in as {role}
            </span>
          </div>
          <div className="grid grid-cols-2 w-full gap-7 mb-2 h-96">
            <div className="bg-white p-8 shadow-md rounded-md overflow-y-scroll">
              <TodayDiet />
            </div>
            <div className="bg-white p-8 shadow-md rounded-md h-auto flex flex-col items-center">
              <JokesBlock />
            </div>
          </div>

          <div className="grid grid-cols-1 w-full h-auto gap-7 mt-2">
            <div className="bg-white p-8 shadow-md rounded-md">
              <h4 className="text-xl font-semibold text-gray-700 mb-3">
                Patient's Accuracy
              </h4>
              <AccuracyChart />
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
