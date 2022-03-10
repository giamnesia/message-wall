import React, { useState } from "react";
import { Link } from "react-router-dom";
const Search = () => {
  const [search, setSearch] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          class=" border border-indigo-800 outline-none p-2 rounded-l-md "
          onChange={handleSearch}
          value={search}
          placeholder="Search for a name"
        />
        <Link to={search ? `/results/${search}` : "/"}>
          <button
            type="submit"
            class="bg-indigo-600 border border-indigo-600 text-white rounded-r-md p-2 hover:bg-black"
          >
            Submit
          </button>{" "}
        </Link>
      </form>
    </div>
  );
};

export default Search;
