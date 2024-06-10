import axios from "axios";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { TodayRoutine } from "./TodayRoutine";

const dailyRoutines = [
  {
    id: "r1",
    title: "Morning Exercise",
    description: "30 minutes of jogging",
    dateTime: "9 March 2022, 7:00 am",
  },
  {
    id: "r2",
    title: "Afternoon Break",
    description: "Take a short break and stretch",
    dateTime: "9 March 2022, 2:00 pm",
  },
];

export const Routine = () => {
  const selectRef = useRef();
  const [stateData, setStateData] = useState(dailyRoutines);
  const [isModalOpen, setModal] = useState(false);

  const deleteItem = (id) => {
    setStateData(dailyRoutines.filter((item) => item.id !== id));
  };

  const routineFormik = useFormik({
    initialValues: {
      title: "",
      description: "",
      dateTime: "",
    },
    onSubmit: (values) => {
      const newRoutine = {
        id: window.sessionStorage.getItem("loggedId"),
        title: values.title,
        description: values.description,
        dateTime: values.dateTime,
      };

      console.log(newRoutine);
      createRoutinePlan(newRoutine);
    },
  });

  const createRoutinePlan = async (newRoutine) => {
    const res = await axios.post(
      process.env.REACT_APP_BASE_URL + "/routine/add-routine",
      newRoutine
    );

    console.log(res.data);
    alert(res.data);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex py-3 my-1">
          <button
            className="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="button"
            data-modal-toggle="routineModal"
            onClick={() => {
              setModal((prev) => !prev);
            }}
          >
            Create New Daily Routine
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
          <TodayRoutine option={2} deleteItem={deleteItem} />
        </div>
      </div>

      {/* form modal */}
{isModalOpen && (
  <form
    onSubmit={routineFormik.handleSubmit}
    id="routineModal"
    aria-hidden="true"
    className=" overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center h-modal h-10/12"
  >
    <div className="relative px-4 w-10/12 max-w-2xl h-full">
      <div className="relative bg-white rounded-lg shadow">
        <div className="flex justify-between items-start px-5 py-2 rounded-t">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 ml-auto inline-flex items-center"
            data-modal-toggle="routineModal"
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
              htmlFor="title"
            >
              Routine Name
            </label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={routineFormik.handleChange}
              value={routineFormik.values.title}
              className="rounded-md border-gray-700"
              required
            />
          </div>
          <div className="flex flex-col gap-2 py-1">
            <label
              className="text-base font-semibold text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="rounded-md border-gray-700"
              onChange={routineFormik.handleChange}
              value={routineFormik.values.description}
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
              onChange={routineFormik.handleChange}
              value={routineFormik.values.dateTime}
              required
            />
          </div>
          <button
            type="submit"
            className="flex justify-center items-center gap-3 bg-blue-700 text-gray-100 rounded-md shadow-md px-6 py-2 text-lg my-2 mt-4 w-full"
          >
            Submit Daily Routine
          </button>
        </div>
      </div>
    </div>
  </form>
)}

    </>
  );
};
