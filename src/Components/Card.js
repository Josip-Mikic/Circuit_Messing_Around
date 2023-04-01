import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="bg-red" src={props.data.image} alt="DIY voice assistant" />
      <div className="content-container">
        <h1 className="red">{props.data.name}</h1>{" "}
        <p>
         {props.data.headingText}
        </p>
        <span className="red">
          <s>kn{props.data.price}</s>kn{(props.data.price*props.data.discount).toFixed(2)}
        </span>
        <p className="red">Limited {props.data.discount*100}% discount</p>
        <div className="testing">
          <button>Shop now</button>
          <img className="age" src="age-9.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
