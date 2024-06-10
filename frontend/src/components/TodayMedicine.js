import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./anmol.css";

export const TodayMedicine = ({ option = 1, deleteItem = "" }) => {
  const [medicineData, setMedicineData] = useState([]);
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);
  const {
    userData: { id },
  } = useSelector((state) => state?.users);

  // Function to speak the given text
  const speak = (text) => {
    console.log("Speaking:", text);
    const utterance = new SpeechSynthesisUtterance(text);

    // Select the first English voice
    const voices = speechSynthesis.getVoices();
    const englishVoice = voices.find((voice) => voice.lang.startsWith("en"));

    if (!englishVoice) {
      console.error("No English voice found.");
      return;
    }

    utterance.voice = englishVoice;
    utterance.volume = 1; // Full volume
    utterance.rate = 1; // Normal speed
    utterance.pitch = 1; // Normal pitch

    speechSynthesis.speak(utterance);
  };

  // Ensure voices are loaded before using them
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => {
      // Example to test the setup
      speak("Testing voice setup");
    };
  } else {
    // Directly speak if the voices are already loaded (e.g., revisiting the component)
    speak("Testing voice setup");
  }

  // Function to fetch medicine data
  const getData = async () => {
    try {
      const res = await axios.post(
        process.env.REACT_APP_BASE_URL + "/medicine/get-medicine",
        { carTakerId: id }
      );

      console.log("Medicine Data:", res.data.message);
      if (res.data.message.length === 0) {
        setMedicineData([]);
      } else {
        setMedicineData(res.data.message);
      }
    } catch (error) {
      console.error("Error fetching medicine data:", error);
    }
  };

  const sendEmail = async () => {
    try {
      await axios.post(process.env.REACT_APP_BASE_URL + "/user/notify", {
        userId: id,
        message: "Voice notifications have been disabled.",
      });
      console.log("Email sent");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const toggleVoice = () => {
    setIsVoiceEnabled(!isVoiceEnabled);
    console.log("Voice Enabled:", isVoiceEnabled);
    if (isVoiceEnabled) {
      sendEmail();
    }
  };

  // Function to check medicine time and trigger speech notification
  const checkMedicineTimes = () => {
    const currentTime = new Date();
    const istOffset = 330;
    const istTime = new Date(currentTime.getTime() + istOffset * 60000)
      .toISOString()
      .slice(0, 16);
    // console.log("Current Time:", currentTime, "Medicine Data:", medicineData, );
    medicineData.forEach((medicine) => {
      console.log(
        "Medicine Time:",
        medicine.medicine_time,
        "Current Time:",
        istTime
      );
      if (medicine.medicine_time === istTime) {
        console.log(`Time to take ${medicine.medicine_name}`);
        speak(`Time to take ${medicine.medicine_name}`);
      } else {
        console.log("No medicine to take");
      }
    });
  };

  useEffect(() => {
    let interval = null;
    if (isVoiceEnabled) {
      interval = setInterval(checkMedicineTimes, 2000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [medicineData, isVoiceEnabled]);

  // Function to delete medicine
  const handleDelete = async (medicineId) => {
    console.log("Deleting medicine with ID:", medicineId);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/medicine/delete-medicine`,
        { medicineID: medicineId }
      );
      if (res.status === 200) {
        getData();
      }
    } catch (error) {
      console.error("Failed to delete medicine:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button
        onClick={() => setIsVoiceEnabled(!isVoiceEnabled)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isVoiceEnabled ? "Disable Voice" : "Enable Voice"}
      </button>
      {medicineData.length === 0 && (
        <h4 className="text-xl font-semibold text-gray-700 mb-3">
          Patient's Medicine Plan Not Added
        </h4>
      )}
      {medicineData.length > 0 && (
        <div>
          <h4 className="text-2xl font-semibold text-gray-800 mb-3">
            Patient's Today Medicine
          </h4>
          <ol className="relative border-l border-gray-600 py-3">
            {medicineData.map((item) => (
              <li className="mb-6 ml-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-1.5 border border-gray-800"></div>
                <div className="absolute z-20 right-0 flex items-center">
                  <label className="switch mr-2">
                    <input type="checkbox" onChange={toggleVoice} />
                    <span className="slider round"></span>
                  </label>
                  <button
                    type="button"
                    onClick={() => handleDelete(item._id)}
                    className="text-red-500 hover:text-red-700"
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.medicine_name}
                </h3>
                <p className="flex gap-2 my-1 text-base leading-none text-red-700 font-medium">
                  {item.type} ({item.dose} dose)
                </p>
                <p className="my-1 text-base font-normal leading-none text-gray-700">
                  {item.description}
                </p>
                <p className="my-1 text-base font-normal leading-none text-gray-700">
                  Time: {item.medicine_time}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
};
