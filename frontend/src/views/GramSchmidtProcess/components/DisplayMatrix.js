import React from "react";

import { Ripple } from "primereact/ripple";
import "../../../styles/RippleDemo.css";

const DisplayMatrix = ({ data, type }) => {
  const matrix = data.elements.map((element) => {
    if (type !== "VECTOR") {
      return (
        <>
          <div className="matrix-row">
            {element.map((item) => (
              <div className="card primary-box p-ripple mb-2">
                {item}
                <Ripple />
              </div>
            ))}
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="vector-item flex align-items-center justify-content-center">
            <div className="card primary-box p-ripple mb-2">
              {element}
              <Ripple />
            </div>
          </div>
        </>
      );
    }
  });

  const flexColFlag = type === "VECTOR" ? "flex-column" : null;
  return (
    <div className="ripple-demo">
      <div className={`card-container flex ${flexColFlag}`}>
        {matrix}
        {/* <div className="card styled-box-green p-ripple">
          Green
          <Ripple />
        </div>
        <div className="card styled-box-orange p-ripple">
          Orange
          <Ripple />
        </div>
        <div className="card styled-box-purple p-ripple">
          Purple
          <Ripple />
        </div> */}
      </div>
    </div>
  );
};

export default DisplayMatrix;
