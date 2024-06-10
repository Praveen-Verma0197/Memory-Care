import axios from "axios";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { TodayMedicine } from "./TodayMedicine";

const meidicines = [
  {
    id: "m1",
    title: "MKS Crocin",
    description: "",
    type: "Before Breakfast",
    dateTime: "9 March 2022, 9:00 am ",
  },
  {
    id: "m2",
    title: "JJ Brain Improve",
    description: "Lorem ipsum dolor sit amet consectetur",
    type: "After Dinner",
    dateTime: "9 March 2022, 9:00 pm ",
  },
];

export const Medicine = () => {
  const selectRef = useRef();
  const [stateData, setStateData] = useState(meidicines);
  const [isModalOpen, setModal] = useState(false);

  const deleteItem = (id) => {
    setStateData(meidicines.filter((item) => item.id !== id));
  };

  const medicineFormik = useFormik({
    initialValues: {
      type: "",
      title: "",
      description: "",
      dose: "",
      dateTime: "",
    },
    onSubmit: (values) => {
      values.type = selectRef.current?.value;
      const newMedicine = {
        id: window.sessionStorage.getItem("loggedId"),
        type: values.type,
        title: values.title,
        description: values.description,
        dose: values.dose,
        dateTime: values.dateTime,
      };

      console.log(newMedicine);
      createMedicinePlan(newMedicine);
    },
  });

  const createMedicinePlan = async (newMedicine) => {
    // setIsLoading(true);
    const res = await axios.post(
      process.env.REACT_APP_BASE_URL + "/medicine/add-medicine",
      newMedicine
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
            data-modal-toggle="medicineModal"
            onClick={() => {
              setModal((prev) => !prev);
            }}
          >
            Create New Medicine Plan
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
          <TodayMedicine option={2} deleteItem={deleteItem} />
        </div>
      </div>

      {/* form modal */}
      {isModalOpen && (
        <form
          onSubmit={medicineFormik.handleSubmit}
          id="medicineModal"
          aria-hidden="true"
          className=" overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center h-modal h-10/12"
        >
          <div className="relative px-4 w-10/12 max-w-2xl h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex justify-between items-start px-5 py-2 rounded-t">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 ml-auto inline-flex items-center"
                  data-modal-toggle="medicineModal"
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
                    value={medicineFormik.values.role}
                    onChange={medicineFormik.handleChange}
                    className=" border border-gray-700 text-gray-900 rounded-md"
                  >
                    <option>Before Breakfast</option>
                    <option>After Breakfast</option>
                    <option>Before Lunch</option>
                    <option>After Lunch</option>
                    <option>Before Dinner</option>
                    <option>After Dinner</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2 py-1">
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="title"
                  >
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={medicineFormik.handleChange}
                    value={medicineFormik.values.title}
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
                    className="rounded-md border-gray-700"
                    onChange={medicineFormik.handleChange}
                    value={medicineFormik.values.description}
                    cols="30"
                    rows="3"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-2 py-1">
                  <label
                    className="text-base font-semibold text-gray-700"
                    htmlFor="dose"
                  >
                    Medicine Dose
                  </label>
                  <input
                    type="text"
                    name="dose"
                    id="dose"
                    onChange={medicineFormik.handleChange}
                    value={medicineFormik.values.dose}
                    className="rounded-md border-gray-700"
                    required
                  />
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
                    onChange={medicineFormik.handleChange}
                    value={medicineFormik.values.dateTime}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex justify-center items-center gap-3 bg-blue-700 text-gray-100 rounded-md shadow-md px-6 py-2 text-lg my-2 mt-4 w-full"
                >
                  Submit medicine Plan
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};
