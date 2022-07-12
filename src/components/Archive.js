import React, { useState, useEffect } from "react";
import { onSnapshot, collection, orderBy, query } from "@firebase/firestore";
import db from "../firebase/firebase";
import Display from "./Display";
import Loader from "react-loader-spinner";
import Search from "./Search";
const Archive = () => {
  const [display, setDisplay] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState();
  useEffect(() => {
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setDisplay(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
      setResults(snapshot.docs.length);
    });
    return unsub;
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex-rows">
          <Loader
            type="ThreeDots"
            color="#000000"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        <div className="mt-5">
          <Search />
          <div class="flex-columns">
            <p class="mt-7 text-3xl">{results} Posts Found</p>
            <div class="w-20 mt-3 h-1 bg-black"></div>
          </div>
          <div className=" my-5 flex-rows">
            {display.map((item) => (
              <>
                <Display
                  value={item.value}
                  color={item.color}
                  name={item.name}
                  timestamp={
                    item.timestamp ? item.timestamp.toDate().toDateString() : []
                  }
                />
              </>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Archive;
