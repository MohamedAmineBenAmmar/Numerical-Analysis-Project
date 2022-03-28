import React from "react";

import { useSelector } from "react-redux";
import BarChart from "../../../components/BarChart";
import { InputText } from 'primereact/inputtext';

const Summary = () => {
  const { calculation_time } = useSelector((state) => ({
    calculation_time: state.dataManager.data.calculation_time,
  }));
  console.log(calculation_time);
  return (
    <>
      <div className="mt-8">
        <h2>System Performence</h2>
        <BarChart
          labels={calculation_time.labels}
          data={calculation_time.data}
          label="Calculation Time Dataset"
        />
      </div>

      <div className="mt-5">
        <h2 style={{float: 'left'}}>Global execution time</h2>
        <InputText value={calculation_time.global} disabled className="ml-3 mt-3" /> sec
      </div>
    </>
  );
};

export default Summary;
