import React from "react";
import { PiFlipVerticalLight } from "react-icons/pi";

const Form1 = ({ data, handleChange, nextStep, prevStep }) => {
  const [falidError, setFalidError] = React.useState({});

  const validate = () => {
    let errors = {};
    if (!data.requirements) {
      errors.requirements = "Please enter requirements.";
    }
    if (!data.images) {
      errors.images = "Please attach at least one image.";
    }
    // if (data.images?.some((file) => file.size > 5 * 1024 * 1024)) {
    //   errors.images = "Each image must be less than 5MB.";
    // }
    setFalidError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFileInputChange = (event) => {
    // const file = event.target.files[0];
    // if (file) {
    //     const reader = new FileReader();

    //     reader.onload = (event) => {
    //         const base64String = event.target.result;
            handleChange("images",event.target.value)
    //     };

    //     reader.readAsDataURL(file);
    // }
};
  

  const submit = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="inp_box">
            <label>
              Detailed Brief <span className="text-danger">*</span>
            </label>
            <textarea
              style={{ resize: "both" }}
              value={data?.requirements}
              onChange={(e) => handleChange("requirements", e.target.value)}
              placeholder="Describe Your Requirements"
              className="w-100"
            />
            {falidError?.requirements && (
              <span className="error">{falidError.requirements}</span>
            )}
          </div>
          <div className="inp_box">
            <label>
              Attach References link
              <span className="text-danger">*</span>
            </label>
            <input
              type="text"
            //   accept="image/*"
              onChange={handleFileInputChange}
              className="w-100"
            />
            {falidError?.images && (
              <span className="error">{falidError.images}</span>
            )}
            {/* <img style={{width:"100px"}} src={data?.images} alt="..."/> */}
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end my-2">
          <button onClick={prevStep} className="pre_btn me-2">
            Previous
          </button>
          <button type="submit" className="banner_btn">
            Next<PiFlipVerticalLight className="btn_icon"/>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form1;
