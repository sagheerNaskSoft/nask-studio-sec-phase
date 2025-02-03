import React from 'react'

function Contactus() {
  return (
  <>
  <div className="min-h-screen bg-gray-900 flex justify-center items-center p-4">
      <div className="bg-gray-800 text-white rounded-xl shadow-lg max-w-6xl w-full flex">
        {/* Left Section */}
        <div className="bg-gradient-to-b from-blue-500 to-blue-400 p-8 rounded-l-xl w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
          <p className="mb-4">
            <strong>Visit us</strong>
            <br />
            Come say hello at our office HQ.
            <br />
            67 Wisteria Way Croydon South VIC 3136 AU
          </p>
          <p className="mb-4">
            <strong>Chat to us</strong>
            <br />
            Our friendly team is here to help.
            <br />
            hello@paysphere.com
          </p>
          <p className="mb-4">
            <strong>Call us</strong>
            <br />
            Mon-Fri from 8am to 6pm
            <br />
            (+995) 555-65-55-55
          </p>
          <p className="mb-4">
            <strong>Social media</strong>
            <br />
            <div className="flex gap-3 mt-2">
              <i className="fab fa-facebook fa-lg"></i>
              <i className="fab fa-twitter fa-lg"></i>
              <i className="fab fa-instagram fa-lg"></i>
              <i className="fab fa-linkedin fa-lg"></i>
            </div>
          </p>
        </div>

        {/* Right Section */}
        <div className="p-8 w-1/2">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 p-2 rounded-md border border-gray-600 bg-gray-900 text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 p-2 rounded-md border border-gray-600 bg-gray-900 text-white"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-900 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-900 text-white"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-900 text-white"
            />
            <textarea
              placeholder="Tell us what we can help you with"
              className="w-full p-2 rounded-md border border-gray-600 bg-gray-900 text-white h-24"
            ></textarea>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
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
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contactus
