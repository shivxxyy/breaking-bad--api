import React, { useState } from "react";

const Search = ({getQuery}) => {
  const [text, setText] = useState("");
  const onChange=(q)=>{
      setText(q)
      getQuery(q)
  }
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          value={text}
          onChange={(e)=> onChange(e.target.value)}
          autoFocus
        />
        {/* The autofocus attribute is a boolean attribute. When present, it specifies that an <input> element should automatically get focus when the page loads. */}
      </form>
    </section>
  );
};

export default Search;
