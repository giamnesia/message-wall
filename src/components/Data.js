import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";
import db from "../firebase/firebase";
import Archive from "./Archive";
const Data = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSearch = (e) => {
    setMessage(e.target.value);
  };

  const getContrastYIQ = (hexcolor) => {
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "black" : "white";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const collectionRef = collection(db, "messages");

    const payload = {
      value: message,
      color: color,
      timestamp: serverTimestamp(),
    };
    await addDoc(collectionRef, payload);
    setMessage("");
  };
  return (
    <div className="bg-gray-50 py-5 mt-20">
      <form onSubmit={handleSubmit} className="flex-columns mt-3">
        <div className="flex-rows ">
          <textarea
            type="text"
            className=" p-2 m-2 rounded-md border-2 w-64 h-48"
            required
            maxlength="150"
            placeholder="Place your message here (150 characters)"
            style={{
              resize: "none",
              backgroundColor: `${color}`,
              color: `${getContrastYIQ(color)}`,
            }}
            onChange={handleSearch}
            value={message}
          />
          <div>
            <HexColorPicker
              color={color}
              onChange={setColor}
              style={{ width: "16rem", height: "11.5rem" }}
            />
          </div>
        </div>
        <button
          className="p-2 m-5 w-44  rounded-md text-white bg-indigo-600 hover:bg-black"
          type="submit"
        >
          Submit
        </button>
      </form>

      <Archive />
    </div>
  );
};

export default Data;
