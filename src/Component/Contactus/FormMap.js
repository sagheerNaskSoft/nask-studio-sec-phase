// import React from 'react'

// function FormMap() {
//   return (
//     <div className='contact-form'>

//     </div>
//   )
// }

// export default FormMap
import React from 'react'
import emailjs from 'emailjs-com';
function FormMap({snakbar}) {
    const [falidError, setFalidError] = React.useState({})
    const [data, setData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const validate = (e) => {

        let errors = {};
        if (!data.name) {
          errors.name = "Name is required.";
        }
        if (!data.email) {
          errors.email = "Email is required.";
        } else if (!isValidEmail(data.email)) {
          errors.email = "Please enter a valid email address.";
        }
    
        if (!data.message) {
          errors.message = "Message is required.";
        }
    
        if (!data.phone) {
          errors.phone = "Phone is required.";
        }
    
    
        setFalidError(errors);
    
        return Object.keys(errors).length === 0;
    }
    const submit = (e) => {
        e.preventDefault()
        if (validate()) {
            console.log('submit')
            const { name, email, message ,phone} = data;

            emailjs
              .send(
                'service_u5j8s4q', // Replace with your EmailJS Service ID
                'template_5p2nnqe', // Replace with your EmailJS Template ID
                { name, email, message,phone },
                'KgIyy61KPfhRZSsNC' // Replace with your EmailJS Public Key
              )
              .then(
                (response) => {
                    snakbar(true,{succes:true,message:"Email sent successfully!"})
                  console.log('SUCCESS!', response.status, response.text);
                  setData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                })
                },
                (error) => {
                    snakbar(true,{succes:false,message:"Failed to send email. Please try again."})
                  console.log('FAILED...', error);
                }
              );
          
        }
    }
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
    return (
        <div style={{color:"white"}} className='contact-form p-1'>
            
        <div className='container my-5 our_product '>
                    <h5 className='mb-4'>Contact Us</h5>
                    <div className='row'>
                        <div style={{height:"100%"}} className='col-lg-6 col-md-12 col-12 mb-5'>
                        {/* <div className='d-flex justify-content-center h-100'> */}
                <div style={{minHeight:"536px"}} className='form_box'>
                <h5 style={{fontSize:"14px",textAlign:"start"}}>Let's Talk About Everything!</h5>
                    <p style={{fontSize:"14px"}}>Hello there! If you'd like to ask us something, you can get in touch with us here! We'd love to address any and all concerns you may have.</p>
                    <form onSubmit={submit}>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='inp_box'>
                                    <label>Your Name <span className='text-danger'>*</span></label>
                                    <input value={data?.name} onChange={(e) => setData({ ...data, name: e.target.value })} type='text' placeholder='Your Name' className='w-100' />
                                    {falidError?.name && <span className='error'>Please Enter Your Name</span>}
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='inp_box'>
                                    <label>Email <span className='text-danger'>*</span></label>
                                    <input value={data?.email} onChange={(e) => setData({ ...data, email: e.target.value })} type='text' placeholder='E-mail' className='w-100' />
                                    {falidError?.email && <span className='error'>Please Enter Your Email</span>}
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <div className='inp_box'>
                                    <label>Mobile Number <span className='text-danger'>*</span></label>
                                    <input value={data?.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} type='text' placeholder='Mobile Number' className='w-100' />
                                    {falidError?.phone && <span className='error'>Please Enter Your Mobile Number</span>}
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='inp_box'>
                                    <label>Message <span className='text-danger'>*</span></label>
                                    <textarea value={data?.message} onChange={(e) => setData({ ...data, message: e.target.value })} type='text' placeholder='Message' className='w-100' />
                                    {falidError?.message && <span className='error'>Please Enter Your message</span>}
                                </div>
                            </div>
                            <div className='col-12 d-flex'>
                                <button type='submit' className='banner_btn'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            {/* </div> */}
                        </div>
                        <div className='col-lg-6 col-md-12 col-12'>
                            <div>
                                
                        <iframe style={{borderRadius:"5px"}} title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.070000692585!2d74.4394726!3d31.522237299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f6535ebd1af%3A0x941f600d892fae62!2sNaskStudio!5e0!3m2!1sen!2s!4v1736177659903!5m2!1sen!2s" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className='my-2 info_box'>
                <p className='p-0 m-0 '>Address: <span>CCA 21, Ex, DHA Phase 8 - Ex Park View Block D  Lahore</span></p>
                <p className='p-0 m-0 '>Call/WhatsApp Our Customer Support: <span>+92 305 111 5501</span></p>
                <p className='p-0 m-0 '>Email: <span>sales@naskstudio.com</span></p>
            </div>
                            </div>
                        </div>
                    </div>
        
           

        </div>
        </div>
    )
}

export default FormMap