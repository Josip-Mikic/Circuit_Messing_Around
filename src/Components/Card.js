import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img className="bg-red" src={props.image} alt="DIY voice assistant" />
      <div className="content-container">
        <h1 className="red">Spencer</h1>{" "}
        <p>
          A DIY voice assistant that talks, lights up, and understands voice
          commands
        </p>
        <span className="red">
          <s>kn1,027.99</s>kn813.99
        </span>
        <p className="red">Limited 20% discount</p>
        <div>
          <button>Shop now</button>
          <p>AGES 11+</p>
        </div>
      </div>
    </div>
  );
}
