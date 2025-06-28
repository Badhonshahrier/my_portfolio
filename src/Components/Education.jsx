import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Educationa = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className=" bg-gradient-to-r p-10 rounded-4xl from-white via-blue-100 to-white ">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12 text-blue-800 "
          data-aos="fade-up"
        >
          Educational Qualification
        </h2>

        {/* Single Degree Block */}
        <div className="border-l-4 border-blue-500 pl-6 relative" data-aos="fade-right">
          <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>
          <h3 className="text-2xl font-semibold text-gray-800">
            B.Sc. in Textile Engineering 
          </h3>
          <p className="text-md text-gray-600">
            Rangpur Textile Engineering College, Pirganj, Rangpur <br />
            <span className="text-sm italic"> Session: 2021 – Present</span>
          </p>
          <p className="text-sm text-gray-600 font-medium">
            Specialized in : Yarn Manufacturing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Educationa;