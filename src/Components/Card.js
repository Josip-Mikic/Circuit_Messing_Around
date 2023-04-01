import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        style={{ backgroundColor: props.data.accent }}
        src={props.data.image}
        alt="product that we are selling"
      />
      <div className="content-container">
        <h1 style={{ color: props.data.accent }}>{props.data.name}</h1>

        <div className="content">
          <p>{props.data.headingText}</p>
          {/* price */}
          <div className="price">
            <span style={{ color: props.data.accent }}>
              <s>kn{props.data.price}</s>kn
              {(props.data.price * (1- props.data.discount)).toFixed(2)}
            </span>
            <p style={{ color: props.data.accent }}>
              Limited {props.data.discount * 100}% discount
            </p>
          </div>
        </div>

        <div className="bottom-container">
          <button style={{ backgroundColor: props.data.accent }}>
            Shop now
          </button>
          <img
            style={{ fill: props.data.accent }}
            className="age"
            src={"age-" + props.data.age + ".svg"}
            alt="minimum required age"
          />
        </div>
      </div>
    </div>
  );
}
