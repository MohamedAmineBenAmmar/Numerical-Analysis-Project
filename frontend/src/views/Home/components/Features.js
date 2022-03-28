import React from "react";

const Features = () => {
  return (
    <div className="surface-0 text-center mt-4 p-5">
      <div className="mb-3 font-bold text-2xl">
        <span className="text-900">We bring the Web, </span>
        <span className="text-blue-600">experience to the game</span>
      </div>
      <div className="grid mt-5">
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-desktop text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Newest Technologies</div>
          <span className="text-700 text-sm line-height-3">
            By using FastAPI and React JS we offer high performance and speed
            web application
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-pencil text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Process Automation</div>
          <span className="text-700 text-sm line-height-3">
            Our web application automated the process of matrices calculations
            and system resolution, with the possibility to visualise and analyse
            the results
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px" }}
          >
            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
          </span>
          <div className="text-900 mb-3 font-medium">Easy to Use</div>
          <span className="text-700 text-sm line-height-3">
            Our application offers great user experience by providing an easy to
            use GUI
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;
