import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center lg:justify-between px-4 lg:px-20 py-10 bg-gray-100 ">
      {/* Left Section: Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-5xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600 mb-6">
          I have built this blog website to share engaging content with my
          audience. The website leverages modern technologies like Sanity CMS to
          fetch and manage data efficiently. My aim is to create a seamless
          reading experience with dynamic and up-to-date posts.
        </p>
        {/* <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          Learn More
        </button> */}
      </div>

      {/* Right Section: Illustration */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="https://png.pngitem.com/pimgs/s/124-1246858_creative-about-us-hd-png-download.png"
          alt="About Us Illustration"
          className="max-w-full h-auto bg-transparent"
        />
      </div>
    </div>
  );
};

export default AboutUs;
