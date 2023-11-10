import React from "react";

const SingleSong = (props) => {
  return (
    <div className="col mb-2 text-center px-1 ">
      <h4 className="text-dark">{props.generes}</h4>
      <img className="img-fluid" src={props.poster} alt="moviepicture" />
      <p className="text-dark">{props.tracks}</p>
      <span className="text-dark">{props.artist}</span>
    </div>
  );
};
export default SingleSong;
