import React from "react";

import { Ripple } from "primereact/ripple";
import "../../../styles/RippleDemo.css";

const DisplayMatrix = ({ data, type }) => {
  console.log("data recieved")
  console.log(data)
  const matrix = data.elements.map((element) => {
    if (type !== "VECTOR") {
      return (
        <>
          <div className="matrix-row flex">
            {element.map((item) => (
              <div className="card primary-box p-ripple">
                {item}
                <Ripple />
              </div>
            ))}
          </div>
          <br />
        </>
      );
    } else {
      return (
        <>
          <div className="vector-item flex align-items-center justify-content-center">
            <div className="card primary-box p-ripple" style={{marginBottom: '21.3px'}}>
              {element}
              <Ripple />
            </div>
          </div>
        </>
      );
    }
  });

  // const flexColFlag = type === "VECTOR" ? "flex-column" : null;
  return (
    <div className="ripple-demo">
      <div className="card-container flex-column">
        {matrix}
      </div>
    </div>
  );
};

export default DisplayMatrix;
