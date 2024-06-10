import React from "react";

export const modal = () => {
  return (
    <div
      id="defaultModal"
      aria-hidden="true"
      className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
    >
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl ">
              Add New Member
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="defaultModal"
            >
              <svg
                class="w-5 h-5"
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
          </div>

          <div className="p-6 space-y-6">
            <form>
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
                  // onChange={Formik.handleChange}
                  // value={Formik.values.email}
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
                  type="text"
                  className="rounded-md border-gray-700"
                  name="password"
                  id="password"
                  // onChange={Formik.handleChange}
                  // value={Formik.values.password}
                  placeholder="*********"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex justify-center items-center gap-3 bg-blue-700 text-gray-100 rounded-md shadow-md px-6 py-2 text-lg my-2"
              >
                Add User +
              </button>
            </form>
          </div>

          <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
