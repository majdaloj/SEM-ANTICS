import React from "react";

function options({ handleChange }) {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio1">
        Positive
      </label>
      <input
        type="radio"
        className="btn-check "
        name="btnradio"
        id="btnradio2"
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio2">
        Neutral
      </label>
      <input
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio3"
        autoComplete="off"
      />
      <label className="btn btn-outline-primary" htmlFor="btnradio3">
        Negative
      </label>
    </div>
  );
}

export default options;
