import React, { useEffect, useState } from "react";
import { Fetcher } from "../helpers/Fetcher";

export const JokesBlock = () => {
  const [jokesData, setJokesData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const data = await Fetcher("https://v2.jokeapi.dev/joke/Any");
    setJokesData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <p className="text-lg">Loading a funny joke for you..</p>}
      {!isLoading && (
        <>
          <h3 className="text-gray-700 text-xl font-bold mb-3">
            A Random Joke For you....
          </h3>
          <div className="bg-blue-700 p-5 text-gray-200 text-lg rounded-md my-3">
            <p className=" mb-2">{jokesData?.setup || jokesData?.joke}</p>
            <p className="font-medium">{jokesData?.delivery}</p>
          </div>
          <button
            type="button"
            className="rounded-md bg-blue-700 px-5 py-2 mt-3 text-base hover:bg-blue-900 text-gray-200 hover:shadow-md transition-all ease-in"
            onClick={getData}
          >
            One More Joke
          </button>
        </>
      )}
    </>
  );
};
