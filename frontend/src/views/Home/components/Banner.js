/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Banner = () => {
  return (
    <div className="fixed bottom-0 left-0 bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap mt-8" style={{width: '100%'}}>
      <div className="font-bold mr-4">🔥</div>
      <div className="align-items-center hidden lg:flex">
        <span className="line-height-3">
          Developed by Nada Ben Taarit, Mouna Rekik and Mohamed Amine Ben Ammar
        </span>
      </div>
      <div className="font-bold ml-4">🔥</div>
    </div>
  )
};

export default Banner
