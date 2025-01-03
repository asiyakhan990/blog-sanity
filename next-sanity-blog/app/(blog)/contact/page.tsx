import React from "react";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-2">Contact Us</h2>
        <p className="text-center text-gray-500 mb-6">
          We will get back to you asap!
        </p>

        {/* Form */}
        <form>
          {/* First and Last Name */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 mb-4 sm:mb-0"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          You may also call us at <span className="font-medium">333-33-33</span>
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
