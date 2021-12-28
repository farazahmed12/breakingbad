import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="col-sm-3 mt-5">
      <div className="card">
        <img
          src={item.img}
          className="card-img-top"
          alt={item.name}
          style={{ height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
