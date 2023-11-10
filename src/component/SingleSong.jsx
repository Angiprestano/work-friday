import React from "react";

const SingleSong = (props) => {
  return (
    <div className="col mb-2 text-center px-1 ">
      <h5 className="text-white">{props.generes}</h5>
      <img className="img-fluid" src={props.poster} alt="moviepicture" />
      <p className="text-white">{props.tracks}</p>
      <span className="text-white">{props.artist}</span>
    </div>
  );
};
export default SingleSong;
