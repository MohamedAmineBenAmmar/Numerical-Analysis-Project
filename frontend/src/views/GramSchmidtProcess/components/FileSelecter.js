import React, { useRef, useState, useEffect } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { Dropdown } from "primereact/dropdown";

import { useDispatch, useSelector } from "react-redux";
import { gramSchmidtProcess } from "../../../redux/dataManagerSlice";

import Message from "../../../components/Message";
import { clearError, setError } from "../../../redux/errorSlice";
import { clearSuccess } from "../../../redux/successSlice";

const FileSelecter = () => {
  const toast = useRef(null);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => ({ error: state.error }));

  const [selectedSeparator, setSelectedSeparator] = useState(null);
  const separators = [
    { name: "Space", code: " " },
    { name: "Comma", code: "," },
    { name: "Colon ", code: ";" },
    { name: "Hashtag", code: "#" },
  ];

  const onSepChange = (e) => {
    setSelectedSeparator(e.value);
  };

  const myUploader = (e) => {
    // console.log("upload test");
    // console.log(e.files);

    // Clear previous error and success
    dispatch(clearError());
    dispatch(clearSuccess());

    // UI Validations
    if (e.files.length > 1) {
      dispatch(
        setError({
          id: "UI_FILE_SELECTION_VALIDATION",
          msg: "You are allowed to upload only one file.",
          status: "Error",
        })
      );
    } else {
      // Extract file extension
      let file_extension = e.files[0]["name"].substr(
        e.files[0]["name"].lastIndexOf(".") + 1,
        e.files[0]["name"].length
      );
      if (["csv", "txt"].indexOf(file_extension) === -1) {
        dispatch(
          setError({
            id: "UI_FILE_SELECTION_VALIDATION",
            msg: "File extension not supported, only txt and csv extension are allowed.",
            status: "Error",
          })
        );
      } else {
        // The user must select a separator
        if (selectedSeparator == null) {
          dispatch(
            setError({
              id: "UI_FILE_SELECTION_VALIDATION",
              msg: "You must select a separator.",
              status: "Error",
            })
          );
        } else {
          // Everything is good to go
          let formData = new FormData();
          formData.append("file", e.files[0]);
          formData.append("sep", selectedSeparator.code);
          dispatch(gramSchmidtProcess(formData));
        }
      }
    }
  };

  return (
    <div className="grid mt-8">
      <div className="col-6 col-offset-3">
        <Toast ref={toast}></Toast>
        <FileUpload
          name="input_file"
          customUpload
          uploadHandler={myUploader}
          emptyTemplate={<p className="m-0">Select file to upload.</p>}
        />

        <div className="dropdown-wrapper">
          <Dropdown
            value={selectedSeparator}
            options={separators}
            onChange={onSepChange}
            optionLabel="name"
            placeholder="Select a Separator"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div className="col-6 col-offset-3">
        {(error.id === "DETERMINANT_CALCULATION_ERROR" ||
          error.id === "UI_FILE_SELECTION_VALIDATION") && (
          <Message
            severity="error"
            summary=""
            detail={error.msg}
            sticky={true}
          />
        )}
      </div>
    </div>
  );
};

export default FileSelecter;
