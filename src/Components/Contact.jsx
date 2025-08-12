// import React, { useRef, useState } from "react";
// import { MdEmail, MdPhone, MdLocationOn, MdWhatsapp } from "react-icons/md";
// import emailjs from "emailjs-com";
// import Swal from "sweetalert2";

// const Contact = () => {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_tsn8g5m",
//         "template_dlngdpf",
//         form.current,
//         "hGGVU2-9ll7Od27VQ"
//       )
//       .then(
//         (result) => {
//           setLoading(false);
//           Swal.fire({
//             icon: "success",
//             title: "Message sent successfully!",
//             showConfirmButton: false,
//             timer: 2000,
//           });
//           form.current.reset();
//         },
//         (error) => {
//           setLoading(false);
//           Swal.fire({
//             icon: "error",
//             title: "Oops! Something went wrong.",
//             text: "Please try again.",
//           });
//           console.error(error.text);
//         }
//       );
//   };

//   return (
//     <section className="max-w-7xl px-6 py-16 mx-auto">
//       <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
//         Contact Me
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Contact Info */}
//         <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-xl p-8 shadow-lg">
//           <h3 className="text-3xl font-semibold mb-6 text-black">Contact Information</h3>
//           <div className="space-y-6 text-lg text-black">
//             <p className="flex items-center gap-3">
//               <MdEmail className="text-3xl text-green-600" />
//               <a href="mailto:badhonshahrier404@gmail.com" className="hover:underline">
//                 badhonshahrier404@gmail.com
//               </a>
//             </p>
//             <p className="flex items-center gap-3">
//               <MdPhone className="text-3xl text-green-600" />
//               <a href="tel:+8801767331349" className="hover:underline">
//                 +8801767331349
//               </a>
//             </p>
//             <p className="flex items-center gap-3">
//               <MdWhatsapp className="text-3xl text-green-600" />
//               <a
//                 href="https://wa.me/8801767331349"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 +8801767331349
//               </a>
//             </p>
//             <p className="flex items-center gap-3">
//               <MdLocationOn className="text-3xl text-green-600" />
//               Rangpur, Bangladesh
//             </p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-xl p-8 shadow-lg">
//           <form ref={form} onSubmit={sendEmail} className="space-y-6">
//             <div>
//               <label htmlFor="name" className="font-semibold text-black block mb-2">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 placeholder="Enter your name"
//                 className="input input-bordered w-full"
//                 required
//                 disabled={loading}
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="font-semibold text-black block mb-2">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email"
//                 className="input input-bordered w-full"
//                 required
//                 disabled={loading}
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="font-semibold text-black block mb-2">
//                 Your Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 rows="5"
//                 placeholder="Type your message here..."
//                 className="textarea textarea-bordered w-full"
//                 required
//                 disabled={loading}
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className={`btn btn-success w-full text-white text-lg ${
//                 loading ? "loading cursor-not-allowed" : ""
//               }`}
//               disabled={loading}
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useRef, useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdWhatsapp, MdSend } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);


    setTimeout(() => {
      setLoading(false);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactItems = [
    {
      icon: MdEmail,
      label: "Email",
      value: "badhonshahrier404@gmail.com",
      href: "mailto:badhonshahrier404@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: MdPhone,
      label: "Phone",
      value: "+8801767331349",
      href: "tel:+8801767331349",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: MdWhatsapp,
      label: "WhatsApp",
      value: "+8801767331349",
      href: "https://wa.me/8801767331349",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MdLocationOn,
      label: "Location",
      value: "Rangpur, Bangladesh",
      href: null,
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen  py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 opacity-5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Animated Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-pulse">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300">
            Ready to bring your ideas to life? Drop me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white text-center lg:text-left">
              Get In Touch
            </h3>
            
            {contactItems.map((item, index) => (
              <div
                key={item.label}
                className="group relative transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                
                <div className="relative bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 border-opacity-50">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                      <item.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target={item.label === "WhatsApp" ? "_blank" : undefined}
                          rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                          className="text-white text-lg hover:text-cyan-400 transition-colors duration-300 hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white text-lg">{item.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl mb-4 font-bold text-white ">
                Send Message
              </h3>
            <div className="relative group">
             
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
           
            
            <div className="relative bg-slate-800 bg-opacity-80  rounded-3xl p-8 border border-slate-700 border-opacity-50">
              
              
              <div className="space-y-4">
                <div className="relative">
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 bg-slate-700 bg-opacity-50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                      focusedField === 'name' ? 'transform scale-105 shadow-lg shadow-cyan-500 shadow-opacity-25' : 'border-slate-600'
                    }`}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 bg-slate-700 bg-opacity-50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 ${
                      focusedField === 'email' ? 'transform scale-105 shadow-lg shadow-cyan-500 shadow-opacity-25' : 'border-slate-600'
                    }`}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Type your message here..."
                    className={`w-full  bg-slate-700 bg-opacity-50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none ${
                      focusedField === 'message' ? 'transform scale-105 shadow-lg shadow-cyan-500 shadow-opacity-25' : 'border-slate-600'
                    }`}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    disabled={loading}
                  ></textarea>
                </div>

                <button
                  onClick={sendEmail}
                  className={`relative w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 group overflow-hidden ${
                    loading 
                      ? "opacity-70 cursor-not-allowed" 
                      : "hover:from-cyan-600 hover:to-purple-600 hover:shadow-xl hover:shadow-purple-500 hover:shadow-opacity-25 transform hover:scale-105 active:scale-95"
                  }`}
                  disabled={loading}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  
                  <div className="relative flex items-center justify-center space-x-2">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <MdSend className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                  
                  {/* Button shine effect */}
                  <div className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white via-opacity-20 to-transparent transform skew-x-12 group-hover:top-full transition-all duration-700"></div>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;