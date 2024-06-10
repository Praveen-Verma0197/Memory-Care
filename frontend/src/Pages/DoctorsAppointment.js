import React from "react";
import { useSelector } from "react-redux";
import { Layout } from "../components/Layout";
import { useSession } from "../helpers/useSession";
import { SignIn } from "./SignIn";

const confirmedAppointment = [
  {
    name: "John doe",
    contact: "996939391",
    dateTime: "On 9 March 2022 11.30 am",
    status: "Confirmed",
  },
  {
    name: "John doe",
    contact: "996939391",
    dateTime: "On 9 March 2022 11.30 am",
    status: "Confirmed",
  },
];

const requestAppointment = [
  {
    name: "John doe",
    contact: "996939391",
    date: "9 March 2022",
    time: "11.30 am",
    status: "pending",
  },
  {
    name: "John doe",
    contact: "996939391",
    date: "9 March 2022",
    time: "11.30 am",
    status: "pending",
  },
];

export const DoctorsAppointment = () => {
  useSession();
  const { isLoggedIn } = useSelector((state) => state?.users);

  return (
    <>
      {!isLoggedIn && <SignIn />}
      {isLoggedIn && (
        <Layout>
          <div className="flex gap-4">
            {/* doctors appointments */}
            <div className="bg-white p-8 shadow-md rounded-md h-auto flex flex-col flex-grow">
              <div className="p-1">
                <div className="flex flex-col">
                  <h3 className="text-xl my-2 font-semibold text-gray-700">
                    Scheduled Appointments
                  </h3>
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden sm:rounded-lg">
                        <table className="min-w-full">
                          <thead className="bg-gray-50">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 px-6 text-sm tracking-wider text-left text-blue-700 uppercase font-bold"
                              >
                                Name
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 text-sm tracking-wider text-left text-blue-700 uppercase font-bold"
                              >
                                Date Time
                              </th>
                              <th
                                scope="col"
                                className="py-3 px-6 text-sm tracking-wider text-left text-blue-700 uppercase font-bold"
                              >
                                Contact
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
                            {confirmedAppointment.map((item) => (
                              <tr className="bg-white border-b">
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                                  {item.name}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                  {item.dateTime}
                                </td>
                                <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                                  {item.contact}
                                </td>
                                <td className="py-4 px-6 text-sm text-red-600 font-bold whitespace-nowrap">
                                  {item.status}
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
            {/* doctors appointment requests */}
            <div className="bg-white py-8 px-5 shadow-md rounded-md h-auto flex flex-col">
              <h4 className="text-xl font-semibold text-gray-700 mb-3">
                Pending Requests
              </h4>
              {/* card */}
              <ul className="flex flex-col space-y-4">
                {requestAppointment.map((item) => (
                  <li className="bg-gray-100 px-8 py-6 rounded-lg flex flex-col gap-2">
                    <h4 className="font-bold text-xl text-gray-800">
                      {item.name}
                    </h4>
                    <p className="flex items-center gap-2 text-md text-gray-600">
                      <i class="fa fa-calendar" aria-hidden="true"></i>
                      {item.date}
                    </p>
                    <p className="flex items-center gap-2 text-md text-gray-600">
                      <i class="fas fa-clock"></i>
                      {item.time}
                    </p>
                    <p className="flex items-center gap-2 text-md text-gray-600">
                      <i class="fa fa-phone" aria-hidden="true"></i>
                      <a href={`tel:+91${item.contact}`}>+91 {item.contact}</a>
                    </p>
                    <div className="flex gap-3 mt-2">
                      <button
                        type="button"
                        className="px-4 text-white bg-blue-600 rounded-md py-2 hover:bg-blue-900"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="px-4 text-red-600 border border-red-600 rounded-md py-2 hover:bg-red-800 hover:text-white"
                      >
                        Reject
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};
