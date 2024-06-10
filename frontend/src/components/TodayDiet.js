import axios from "axios";
import React, { useEffect, useState } from "react";

export const TodayDiet = ({ option = 1, deleteItem = "" }) => {
  const [dietData, setDietData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        process.env.REACT_APP_BASE_URL + "/diet/get-diet"
      );

      console.log(res.data.data);
      if (res.data.data === []) setDietData([]);
      else setDietData(res.data.data);
    };

    getData();
  }, []);

  console.log(dietData.length);

  return (
    <>
      {dietData.length === 0 && (
        <h4 className="text-xl font-semibold text-gray-700 mb-3">
          Patient's Diet Plan Not Added
        </h4>
      )}
      {dietData.length > 0 && (
        <div>
          <h4 className="text-xl font-semibold text-gray-700 mb-3">
            Patient's Today Diet
          </h4>
          <ol className="relative border-l border-gray-600 py-3">
            {dietData.length > 0 &&
              dietData?.map((item) => (
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-1.5 border border-gray-800"></div>
                  <p className="mb-1 text-base font-normal leading-none text-gray-700">
                    {item.type}
                  </p>
                  <time className="flex justify-between mb-1 text-base font-normal leading-none text-gray-700">
                    {item.diet_date}
                    {option === 2 && (
                      <button
                        type="button"
                        onClick={() => deleteItem(item.id)}
                        className="absolute z-20 right-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 hover:text-red-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    )}
                  </time>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mb-1 text-base font-normal leading-none text-gray-700">
                    {item.food_diet}
                  </p>
                </li>
              ))}
          </ol>
        </div>
      )}
    </>
  );
};
