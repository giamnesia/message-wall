import React, { useState, useEffect } from "react";
import { onSnapshot, collection, orderBy, query } from "@firebase/firestore";
import Loader from "../images/loader.svg";
import db from "../firebase/firebase";
import Display from "./Display";
const Archive = () => {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setDisplay(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    });
    return unsub;
  }, []);

  return (
    <div>
        {loading ? (
        <div className='flex-rows'>
        <img src={Loader} alt="" />
        </div>
      ) : (
        <div className=" my-5 flex-rows">
          {display.map((item) => (
            <>
              <Display value={item.value} color={item.color} />
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;
