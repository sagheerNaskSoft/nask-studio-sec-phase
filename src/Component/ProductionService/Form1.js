import React from "react";
import { PiFlipVerticalLight } from "react-icons/pi";

const Form1 = ({ data, handleChange, nextStep }) => {
    const [falidError, setFalidError] = React.useState({})
    const validate = (e) => {

        let errors = {};
        if (!data.first_name) {
          errors.first_name = "Name is required.";
        }
        if (!data.last_name) {
          errors.last_name = "Name is required.";
        }
        if (!data?.project_data) {
          errors.project_data = "Name is required.";
        }
        if (!data.email) {
          errors.email = "Email is required.";
        } else if (!isValidEmail(data.email)) {
          errors.email = "Please enter a valid email address.";
        }

        if (!data.business_name) {
          errors.business_name = "Message is required.";
        }
    
        if (!data.phone) {
          errors.phone = "Phone is required.";
        }
    
    
        setFalidError(errors);
    
        return Object.keys(errors).length === 0;
    }
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    const submit = (e) => {
        e.preventDefault()
        if (validate()) {
            
            nextStep()
          
        }
    }
  return (
    <form onSubmit={submit}>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='inp_box'>
                                    <label>First Name <span className='text-danger'>*</span></label>
                                    <input value={data?.first_name}  onChange={(e) => handleChange("first_name", e.target.value)} type='text' placeholder='Your Name' className='w-100' />
                                    {falidError?.first_name && <span className='error'>Please Enter Your First Name</span>}
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='inp_box'>
                                    <label>Last Name <span className='text-danger'>*</span></label>
                                    <input value={data?.last_name}  onChange={(e) => handleChange("last_name", e.target.value)} type='text' placeholder='Your Name' className='w-100' />
                                    {falidError?.last_name && <span className='error'>Please Enter Your Last Name</span>}
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='inp_box'>
                                    <label>Email <span className='text-danger'>*</span></label>
                                    <input value={data?.email} onChange={(e) => handleChange("email", e.target.value)} type='text' placeholder='E-mail' className='w-100' />
                                    {falidError?.email && <span className='error'>Please Enter Your Email</span>}
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='inp_box'>
                                    <label>Mobile Number <span className='text-danger'>*</span></label>
                                    <input value={data?.phone}  onChange={(e) => handleChange("phone", e.target.value)} type='text' placeholder='Mobile Number' className='w-100' />
                                    {falidError?.phone && <span className='error'>Please Enter Your Mobile Number</span>}
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='inp_box'>
                                    <label>Execution Date of Project <span className='text-danger'>*</span></label>
                                    <input value={data?.project_data}  onChange={(e) => handleChange("project_data", e.target.value)} type='datetime-local' placeholder='Mobile Number' className='w-100' />
                                    {falidError?.project_data && <span className='error'>Please Enter Your Date of Project</span>}
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='inp_box'>
                                    <label>Business Name <span className='text-danger'>*</span></label>
                                    <input value={data?.business_name}  onChange={(e) => handleChange("business_name", e.target.value)} type='text' placeholder='Business Name' className='w-100' />
                                    {falidError?.business_name && <span className='error'>Please Enter Your Business Name</span>}
                                </div>
                            </div>
                            
                            <div className='col-12 d-flex justify-content-end my-2'>
                                <button type='submit' className='banner_btn'>Next <PiFlipVerticalLight className="btn_icon"/></button>
                            </div>
                        </div>
                    </form>
  );
};

export default Form1;
