import React, { useState, useRef, useEffect } from "react";
import { Steps } from "primereact/steps";
import { Toast } from "primereact/toast";
import "../../../styles/StepsDemo.css";

import { useDispatch, useSelector } from "react-redux";
import { clearSuccess } from "../../../redux/successSlice";

// Importing the different steps of the form wizard
import FileSelecter from "./FileSelecter";
import QRDecomposition from "./QRDecomposition";
import SystemResolution from "./SystemResolution";
import Summary from "./Summary";

const Wizard = () => {
  const { success } = useSelector((state) => ({ success: state.success }));
  const dispatch = useDispatch();

  // Detect success
  useEffect(() => {
    if (success.id === "GRAM_SCHMIDT_PROCESS_SUCESS" && activeIndex === 0) {
      incrementStep();
      dispatch(clearSuccess());
    }
  }, [success]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index) => {
    if (!((activeIndex === 0) && (index > 0) && (success.id !== "GRAM_SCHMIDT_PROCESS_SUCESS"))) {
      setActiveIndex(index);
    }
  };

  const incrementStep = () => {
    setActiveIndex(activeIndex + 1);
  };
  const decrementStep = () => {
    setActiveIndex(activeIndex - 1);
  };

  const toast = useRef(null);
  const items = [
    {
      label: "File Selection",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "Select file to extract data from.",
          detail: event.item.label,
        });
      },
    },
    {
      label: "QR Decomposition",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "You will be able to visualize the Q and R matrices.",
          detail: event.item.label,
        });
      },
    },
    {
      label: "System Resolution",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "You will be able to visualize the system solution.",
          detail: event.item.label,
        });
      },
    },
    {
      label: "Summary",
      command: (event) => {
        toast.current.show({
          severity: "info",
          summary: "A global overview of the system performence.",
          detail: event.item.label,
        });
      },
    },
  ];

  const ComponentToDisplay = () => {
    switch (activeIndex) {
      case 0:
        return <FileSelecter incrementStep={incrementStep} />;

      case 1:
        return <QRDecomposition incrementStep={incrementStep} />;

      case 2:
        return <SystemResolution incrementStep={incrementStep} />;

      case 3:
        return <Summary incrementStep={incrementStep} />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="grid grid-nogutter surface-0 ">
        <div className="col-12 p-4 ">
          <div className="steps-demo">
            <Toast ref={toast}></Toast>

            <div className="card">
              <Steps
                model={items}
                activeIndex={activeIndex}
                onSelect={(e) => {
                  handleActiveIndex(e.index);
                }}
                readOnly={false}
              />
            </div>
          </div>
        </div>
      </div>

      <ComponentToDisplay />
    </>
  );
};

export default Wizard;
