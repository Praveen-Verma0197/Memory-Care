import axios from "axios";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { TodayDiet } from "./TodayDiet";

let food_diet = [
  {
    id: "f1",
    food: "Sandwich and Orange Juice",
    description: "",
    dateTime: "9 March 2022, 9:00 am ",
  },
  {
    id: "f2",
    food: "Sandwich and Orange Juice",
    description: "",
    dateTime: "9 March 2022, 9:00 am ",
  },
];

export const Diet = () => {
  const selectRef = useRef();
  const [stateData, setStateData] = useState(food_diet);
  const [isModalOpen, setModal] = useState(false);

  const deleteItem = (id) => {
    setStateData(food_diet.filter((item) => item.id !== id));
  };

  const dietFormik = useFormik({
    initialValues: {
      type: "",
      title: "",
      description: "",
      dateTime: "",
    },
    onSubmit: (values) => {
      values.type = selectRef.current?.value;
      const newDiet = {
        type: values.type,
        title: values.title,
        description: values.description,
        date: values.dateTime,
      };

      createDietPlan(newDiet);
    },
  });

  const createDietPlan = async (newDiet) => {
    // setIsLoading(true);
    const res = await axios.post(
      process.env.REACT_APP_BASE_URL + "/diet/add-diet",
      newDiet
    );

    console.log(res.data);
    alert(res.data);
    // setIsLoading(false);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex py-3 my-1">
          <button
            class="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
            data-modal-toggle="dietModal"
            onClick={() => {
              setModal((prev) => !prev);
            }}
          >
            Create New Diet Plan
          </button>
        </div>
        <div className="bg-white p-8 shadow-md rounded-md">
          <div className="flex justify-end mb-3">
            <input
              type="date"
              className="py-2 text-base rounded-md bg-gray-100 border-0"
              name=""
              id=""
            />
          </div>
          <TodayDiet option={2} deleteItem={deleteItem} />
        </div>
      </div>

      {/* form modal */}
      {isModalOpen && (
        <form
          onSubmit={dietFormik.handleSubmit}
          id="dietModal"
          aria-hidden="true"
          className=" overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center h-modal h-10/12"
        >
          <div className="relative px-4 w-10/12 max-w-2xl h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex justify-between items-start px-5 py-2 rounded-t">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  data-modal-toggle="dietModal"
                  onClick={() => {
                    setModal((prev) => !prev);
                  }}
                >
                  Close
                </button>
              </div>

              <div className="p-6 space-y-2">
                <div className="flex flex-col gap-2 py-1">
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="role"
                  >
                    Select type
                  </label>
                  <select
                    ref={selectRef}
                    id="role"
                    name="role"
                    value={dietFormik.values.role}
                    onChange={dietFormik.handleChange}
                    className=" border border-gray-700 text-gray-900 rounded-md"
                  >
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Snacks</option>
                    <option>Dinner</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 py-1">
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="title"
                  >
                    Food Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={dietFormik.handleChange}
                    value={dietFormik.values.title}
                    className="rounded-md border-gray-700"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 py-1">
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="email"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    onChange={dietFormik.handleChange}
                    value={dietFormik.values.description}
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2 py-1">
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="dateTime"
                  >
                    Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="rounded-md border-gray-700"
                    name="dateTime"
                    id="dateTime"
                    onChange={dietFormik.handleChange}
                    value={dietFormik.values.dateTime}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex justify-center items-center gap-3 bg-blue-700 text-gray-100 rounded-md shadow-md px-6 py-2 text-lg my-2 mt-4 w-full"
                >
                  Submit Diet Plan
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
