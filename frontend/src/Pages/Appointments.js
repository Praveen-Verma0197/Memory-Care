import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useSession } from "../helpers/useSession";
import { SignIn } from "./SignIn";
import axios from "axios";

const appointmentsData = [
  {
    name: "John doe",
    contact: "996939391",
    role: "Ortho",
    status: "Confirmed",
  },
];

export const Appointments = () => {
  useSession();
  const [isModalOpen, setModal] = useState(false);
  const [appointmentData, setAppointments] = useState([]);
  const { isLoggedIn } = useSelector((state) => state?.users);
  const Formik = useFormik({
    initialValues: {
      dname: "",
      pname: "",
      email: "",
      contact: "",
      date: "",
      time: "",
    },
    onSubmit: (values) => {
      const newAppointment = {
        id: window.sessionStorage.getItem("loggedId"),
        pname: values.pname,
        email: values.email,
        contact: values.contact,
        dname: values.dname,
        date: values.date,
        time: values.time,
      };

      console.log(newAppointment);
      bookAppointment(newAppointment);
    },
  });

  const bookAppointment = async (newAppointment) => {
    const res = await axios.post(
      process.env.REACT_APP_BASE_URL + "/user/bookAppointment",
      newAppointment
    );

    console.log(res.data.message);
    alert(res.data.message);
  };

  useEffect(() => {
    const getData = async () => {
      console.log("in");
      // setIsLoading(true);
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "/user/fetchAppointment",
        { email: window.sessionStorage.getItem("loggedEmail") }
      );

      console.log(res.data.message);
      setAppointments(res.data.message);
      // setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <>
      {!isLoggedIn && <SignIn />}
      {isLoggedIn && (
        <Layout>
          <div className="grid grid-cols-1 w-full gap-7 mx-2">
            <div className="w-auto">
              <button
                class="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                type="button"
                data-modal-toggle="defaultModal"
                onClick={() => {
                  setModal((prev) => !prev);
                }}
              >
                Book Appointment
              </button>
            </div>

            <div className="p-1">
              <div className="flex flex-col">
                <h3 className="text-xl my-2 font-semibold text-gray-700">
                  All Appointments
                </h3>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-md sm:rounded-lg">
                      <table className="min-w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm tracking-wider text-left text-blue-700 uppercase font-bold"
                            >
                              Doctor Name
                            </th>
                            {/* <th
                              scope="col"
                              className="py-3 px-6 text-sm tracking-wider text-left text-blue-700 uppercase font-bold"
                            >
                              Role
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm tracking-wider text-left text-blue-700 uppercase font-bold"
                            >
                              Address
                            </th> */}
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm tracking-wider text-left text-blue-700 uppercase font-bold"
                            >
                              Date & Time
                            </th>
                            <th
                              scope="col"
                              className="py-3 px-6 text-sm tracking-wider text-left text-blue-700 uppercase font-bold"
                            >
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {appointmentData.length > 0 &&
                            appointmentData.map((item) => (
                              <tr className="bg-white border-b">
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                  {item.doctorName}
                                </td>
                                {/* <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                  {item.specialization}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                  {item.hospitalName}
                                  <br />
                                  {item.location}
                                </td> */}
                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                  {new Date(item.date).toDateString()}{" "}
                                  {item.time}
                                </td>
                                <td className="flex py-4 p-4 text-sm font-bold text-red-600 whitespace-nowrap align-text-bottom">
                                  {item.status === 0 ? "Confirmed" : "Pending"}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* form modal */}
          {isModalOpen && (
            <form
              onSubmit={Formik.handleSubmit}
              id="defaultModal"
              className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center h-modal h-10/12"
            >
              <div className="relative px-4 w-10/12 max-w-2xl h-full">
                <div className="relative bg-white rounded-lg shadow">
                  <div className="flex justify-between items-start px-5 py-2 rounded-t">
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                      data-modal-toggle="defaultModal"
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
                        htmlFor="dname"
                      >
                        Doctor Name
                      </label>
                      <input
                        type="text"
                        name="dname"
                        id="dname"
                        onChange={Formik.handleChange}
                        value={Formik.values.dname}
                        className="rounded-md border-gray-700"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2 py-1">
                      <label
                        className="text-base font-semibold text-gray-700"
                        htmlFor="email"
                      >
                        Doctor Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={Formik.handleChange}
                        value={Formik.values.email}
                        className="rounded-md border-gray-700"
                        placeholder="example@gmail.com"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2 py-1">
                      <label
                        className="text-base font-semibold text-gray-700"
                        htmlFor="pname"
                      >
                        Patient Name
                      </label>
                      <input
                        type="text"
                        name="pname"
                        id="pname"
                        onChange={Formik.handleChange}
                        value={Formik.values.pname}
                        className="rounded-md border-gray-700"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2 py-1">
                      <label
                        className="text-base font-semibold text-gray-700"
                        htmlFor="password"
                      >
                        Your Contact Number
                      </label>
                      <input
                        type="number"
                        className="rounded-md border-gray-700"
                        name="contact"
                        id="contact"
                        onChange={Formik.handleChange}
                        value={Formik.values.contact}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="flex flex-col gap-2 py-1">
                        <label
                          className="text-base font-semibold text-gray-700"
                          htmlFor="date"
                        >
                          Your Preferred Date
                        </label>
                        <input
                          type="date"
                          className="rounded-md border-gray-700"
                          name="date"
                          id="date"
                          onChange={Formik.handleChange}
                          value={Formik.values.date}
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-2 py-1">
                        <label
                          className="text-base font-semibold text-gray-700"
                          htmlFor="time"
                        >
                          Your Preferred Time
                        </label>
                        <input
                          type="time"
                          className="rounded-md border-gray-700"
                          name="time"
                          id="time"
                          onChange={Formik.handleChange}
                          value={Formik.values.time}
                          required
                        />
                      </div>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center gap-3 bg-blue-700 text-gray-100 rounded-md shadow-md px-6 py-2 text-lg my-2 mt-4"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Layout>
      )}
    </>
  );
};
