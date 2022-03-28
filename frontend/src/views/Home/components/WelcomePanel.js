import React from "react";
import { Button } from "primereact/button";

// import WelcomePanelImg from "../../../assets/img/hero-1.png";
import WelcomePanelImg from "../../../assets/img/img_panel.jpg";

import { useHistory } from "react-router-dom";

const WelcomePanel = () => {
  const history = useHistory();

  const handleNavigation = (url) => {
    history.push(url);
  };

  return (
    <div className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <span className="block text-6xl font-bold mb-1">
            Numerical Analysis
          </span>
          <div className="text-6xl text-primary font-bold mb-3">
            Gram-Schmidt Procedure
          </div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            This web application will take you through the QR decomposition
            technique for decomposing a matrix into a form that is easier to
            work with in further applications.
          </p>

          <a
            href="https://www.math.ucla.edu/~yanovsky/Teaching/Math151B/handouts/GramSchmidt.pdf"
            target="_blank"
          >
            <Button
              label="Learn More"
              type="button"
              className="mr-3 p-button-raised"
            />
          </a>
          <Button
            label="Live Demo"
            type="button"
            className="p-button-outlined"
            onClick={() => {
              handleNavigation("/gram-schmidt-process");
            }}
          />
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
        <img
          src={WelcomePanelImg}
          alt="hero-1"
          className="md:ml-auto block md:h-full"
          style={{ clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" }}
        />
      </div>
    </div>
  );
};

export default WelcomePanel;
