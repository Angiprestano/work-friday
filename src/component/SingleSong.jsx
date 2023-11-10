import React from "react";

const SingleSong = (props) => {
  return (
    <div className="col text-center px-1 mx-2 fs-6">
      <h5 className="text-white">{props.title_short}</h5>
      <h5 className="text-white">{props.generes}</h5>
      <img className="img-fluid" src={props.poster} alt="moviepicture" />
      <p className="text-white">{props.tracks}</p>
      <span className="text-white">{props.artist}</span>
      <span className="text-white">{props.duration}</span>
    </div>
  );
};
export default SingleSong;
