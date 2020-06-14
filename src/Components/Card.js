import React from "react";
function Card(props) {
  return (
    <div className="card">
      <div className="content">
        <img className="photo" src={props.imgUrl} alt="" />
        <label className="hel">Name: {props.name} </label>
        <label className="hel">Phone: {props.phone} </label>
      </div>
      <button className="social">Connect</button>
    </div>
  );
}
export default Card;
