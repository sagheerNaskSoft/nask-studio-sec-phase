import React from "react";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { PiFlipVerticalLight } from "react-icons/pi";

const Form3 = ({ data, setData, nextStep, prevStep, snakbar }) => {
  const [falidError, setFalidError] = React.useState({});

  const validate = () => {
    let errors = {};
    if (!data.services_list?.length) {
      errors.name = "At least one service is required.";
    }
    setFalidError(errors);
    return Object.keys(errors).length === 0;
  };
  const handleCheckboxChange = (service) => {
    setData((prevState) => {
      const updatedList = prevState.services_list.includes(service)
        ? prevState.services_list.filter((item) => item !== service) // Remove if already checked
        : [...prevState.services_list, service]; // Add if not already checked

      return { ...prevState, services_list: updatedList };
    });
  };
  const submit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const {
        first_name,
        last_name,
        email,
        project_data,
        business_name,
        requirements,
        services_list,
        phone,
        images,
      } = data;

    
    
   
      const emailParams = {
        first_name,
        last_name,
        email,
        project_data,
        business_name,
        requirements,
        services_list: services_list.join(", "), // Convert array to string
        phone,
        images: images, // Base64 content
      };

      emailjs
        .send(
          "service_u5j8s4q", // Replace with your Service ID
          "template_3oc1u9w", // Replace with your Template ID
          emailParams,
          "KgIyy61KPfhRZSsNC" // Replace with your Public Key
        )
        .then(
          (response) => {
            snakbar(true, {
              succes: true,
              message: "Email sent successfully!",
            });
            nextStep();
            setData({ services_list: [] });
            console.log("SUCCESS!", response.status, response.text);
          },
          (error) => {
            snakbar(true, {
              succes: false,
              message: "Failed to send email. Please try again.",
            });
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        {[
          "Set's Art Direction & Construction",
          "Location Coordination",
          "Studio Renting",
          "Pre-Made Sets",
          "Props",
          "Models Coordination",
          "Makeup Artist",
          "Photographer/Videographer",
          "Equipment",
          "Generator",
          "Appliances (AC/Heaters)",
          "Food & Catering",
          "Support Staff",
        ].map((service) => (
          <Form.Check type="checkbox" key={service}>
            <Form.Check.Input
              type="checkbox"
              onChange={() => handleCheckboxChange(service)}
              checked={data?.services_list?.includes(service)}
              style={{ width: "20px", height: "20px" }}
              id="input-check"
            />
            <label className="mx-2">{service}</label>
          </Form.Check>
        ))}
        <span className="error text-danger">{falidError?.name}</span>
      </div>
      <div className="col-12 d-flex justify-content-end my-2">
        <button onClick={prevStep} type="button" className="pre_btn me-2">
          Previous
        </button>
        <button type="submit" className="banner_btn">
          Submit<PiFlipVerticalLight className="btn_icon"/>
        </button>
      </div>
    </form>
  );
};

export default Form3;
