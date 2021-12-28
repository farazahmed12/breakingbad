import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const textChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div>
      <form className="form-inline d-flex justify-content-center my-5">
        <input
          class="form-control form-control-sm ml-3 w-25 "
          type="text"
          placeholder="Search"
          aria-label="Search"
          autoFocus
          value={text}
          onChange={(e) => textChange(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
