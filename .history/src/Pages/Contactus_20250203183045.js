import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      <div className="bg-gray-800 text-white rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="bg-gradient-to-b from-blue-500 to-blue-400 p-10 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-lg mb-6">
              We'd love to hear from you! Reach out using any of the methods below.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Visit us</p>
                <p>67 Wisteria Way Croydon South VIC 3136 AU</p>
              </div>
              <div>
                <p className="font-semibold">Chat to us</p>
                <p>hello@paysphere.com</p>
              </div>
              <div>
                <p className="font-semibold">Call us</p>
                <p>(+995) 555-65-55-55</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <p className="font-semibold mb-2">Follow us</p>
            <div className="flex gap-4 text-lg">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10 w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 h-32"
            ></textarea>
            <div className="flex items-start gap-4">
              <input type="checkbox" className="mt-1 focus:ring-2 focus:ring-blue-500" />
              <label className="text-sm">
                I’d like to receive more information about the company. I
                understand and agree to the
                <a href="#" className="text-blue-500 underline ml-1">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg focus:ring-2 focus:ring-blue-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;