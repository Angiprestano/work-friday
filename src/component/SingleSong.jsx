import React from "react";

const SingleSong = (props) => {
  return (
    <div className="col mb-2 text-center px-1 ">
      <img className="img-fluid" src={props.poster} alt="moviepicture" />
    </div>
  );
};
export default SingleSong;
