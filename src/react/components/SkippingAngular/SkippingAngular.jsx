import React from "react";

const SkippingAngular = ({
  color,
  onClickSetGreen,
  onClickSetRed,
  history,
  getPicture,
  picture
}) => (
  <div className={`${color} route`}>
    <h3>React with Route Level Provider</h3>
    <div className="button-row">
      <button onClick={() => onClickSetGreen()}>Set Green</button>
      <button onClick={() => onClickSetRed()}>Set Red</button>
      <button
        onClick={() => history.push("/", { search: "?test=boom&second=pow" })}
      >
        Go to Angular Component
      </button>
      <button onClick={() => getPicture()}>Change Picture</button>
    </div>
    <img alt="random 200x200" src={picture} />
  </div>
);

export default SkippingAngular;
