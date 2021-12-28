import React from "react";

import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items }) => {
  return (
    <div className="row mt-5">
      {items.map((item, ind) => {
        return <CharacterItem item={item} key={ind} />;
      })}
    </div>
  );
};

export default CharacterGrid;
