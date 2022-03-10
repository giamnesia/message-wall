import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";
import Display from "./Display";
import Loader from "react-loader-spinner";
const Results = () => {
  const { queryName } = useParams();
  const [display, setDisplay] = useState();
  const [num, setNum] = useState();
  const [loading, setLoading] = useState(true);
  const results = [];
  let queryVariations = [
    queryName.toLowerCase(),
    queryName.toUpperCase(),
    queryName.charAt(0).toUpperCase() + queryName.slice(1).toLowerCase(),
  ];

  useEffect(() => {
    async function fetch() {
      const q = query(
        collection(db, "messages"),
        where("name", "in", queryVariations)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        results.push(doc.data());
        setDisplay(results ? results : []);
        setNum(results.length);
        setLoading(false);
      });
    }
    fetch();
  }, [queryName]);
  return (
    <div>
      {loading ? (
        <div className="flex-columns mt-5">
          <p className="text-lg">Searching the archive for '{queryName}'</p>
          <Loader
            type="ThreeDots"
            color="#000000"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        <>
          <p class="mt-5">
            <p className="text-lg mb-3">
              Searching the archive for '{queryName}'
            </p>
            {num ? num : 0} Results for '{queryName}'
          </p>
          <div className=" my-5 flex-rows">
            {display ? (
              display.map((item) => (
                <>
                  <Display
                    value={item.value}
                    name={item.name}
                    color={item.color}
                    timestamp={item.timestamp.toDate().toDateString()}
                  />
                </>
              ))
            ) : (
              <p>No results</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
