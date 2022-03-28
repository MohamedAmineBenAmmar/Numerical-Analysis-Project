import React from "react";
import { useSelector } from "react-redux";

import DisplayMatrix from "./DisplayMatrix";

const QRDecomposition = () => {
  const { q, r } = useSelector((state) => ({
    q: state.dataManager.data.q,
    r: state.dataManager.data.r,
  }));
  return (
    <>
      <div className="grid mt-8">
        <div className="col-6">
          <h2>Q Matrix</h2>
          <DisplayMatrix data={q} />
        </div>
        <div className="col-6">
          <h2>R Matrix</h2>
          <DisplayMatrix data={r} />
        </div>
      </div>
    </>
  );
};

export default QRDecomposition;
