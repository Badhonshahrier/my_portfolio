// Contact.jsx
import React from "react";
import { MdEmail, MdPhone, MdLocationOn, MdWhatsapp } from "react-icons/md";

const Contact = () => {
  return (
    <section className="max-w-7xl px-6 py-16 mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Information */}
        <div className="bg-gradient-to-r  from-blue-100 via-white to-blue-50 rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-black">Contact Information</h3>
          <div className="space-y-4 text-lg">
            <p className="flex items-center text-black"><MdEmail className="mr-2 text-2xl text-green-600" /> badhonshahrier404@gmail.com</p>
            <p className="flex items-center text-black"><MdPhone className="mr-2 text-2xl text-green-600" />+8801767331349</p>
            <p className="flex items-center text-black"><MdWhatsapp className="mr-2 text-2xl text-green-600" /> +8801767331349</p>
            <p className="flex items-center text-black"><MdLocationOn className="mr-2 text-2xl text-green-600" />Rangpur,Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-xl p-6 shadow-md">
          <form method="POST" action="badhonshahrier404@gmail.com" className="space-y-4">
            <div>
              <label className="label">
                <span className=" font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Your Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full"
                rows="5"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-success w-full text-white text-lg"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;