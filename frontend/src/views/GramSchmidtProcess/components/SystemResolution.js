import React from "react";
import { useSelector } from "react-redux";

import DisplayMatrix from "./DisplayMatrix";

const SystemResolution = () => {
  const { a, x, b } = useSelector((state) => ({
    a: state.dataManager.data.a,
    x: state.dataManager.data.x,
    b: state.dataManager.data.b,
  }));
  return (
    <>
      <div className="grid mt-8">
        <div className="col-6">
          <h2>A Matrix</h2>
          <DisplayMatrix data={a} />
        </div>
        <div className="col-3">
          <h2 className="center-text">X (Solution) Vector</h2>
          <DisplayMatrix data={x} type="VECTOR" />
        </div>
        <div className="col-3">
          <h2 className="center-text">b (Output) Vector</h2>
          <DisplayMatrix data={b} type="VECTOR" />
        </div>
      </div>
    </>
  );
};

export default SystemResolution;
