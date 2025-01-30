import React, { useState } from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import LastStep from './LastStep';

function WizerdForm({snakbar}) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
      services_list: [],
    });
    
    // Function to go to the next step
    const nextStep = () => {
      setCurrentStep(currentStep + 1);
      
    };
    const back = () => {
      setCurrentStep(1);
      setFormData({services_list: [],}); // Clear the form data
    };
  
    // Function to go to the previous step
    const prevStep = () => {
      setCurrentStep(currentStep - 1);
    };
  
    // Function to handle form data change
    const handleChange = (input, value) => {
      setFormData({
        ...formData,
        [input]: value,
      });
    };
  
  return (
    <div className='d-flex justify-content-center my-5'>
        
    <div className='wizerd-form form_box'>
     <div className='step_bar mb-4'>
        <div style={{width:`${currentStep*25}%`}} className='sub_bar'></div>
        <div className='sub_dots'></div>
        <div className='sub_dots dot1'></div>
        <div className='sub_dots dot2'></div>
     </div>
    {currentStep === 1 && (
      <Form1 data={formData} handleChange={handleChange} nextStep={nextStep} />
    )}
    {currentStep === 2 && (
      <Form2 data={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
    )}
    {currentStep === 3 && (
      <Form3 data={formData} setData={setFormData} prevStep={prevStep} nextStep={nextStep} snakbar={snakbar}/>
    )}
    {currentStep === 4 && (
      <LastStep prevStep={back} />
    )}
  </div>
  </div>
  )
}

export default WizerdForm