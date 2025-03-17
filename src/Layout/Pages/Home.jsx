// import React from "react";
// import videos from "../../assets/videos.mp4"; // Ensure correct path

// const Home = () => {
//   return (
//     <div className="relative    min-h-screen">
//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       Video
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 left-0 w-full h-full object-cover"
//       >
//         <source src={videos} />
//       </video>

//       {/* Content on Top */}
//       <div className="absolute text-white text-center px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//         <h1 className="text-4xl font-bold">Welcome to Cloud Argo</h1>
//         <p className="text-lg">Experience the future of cloud technology</p>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Home = () => {
//   return (
//     <div className="flex justify-between items-center  bg-yellow-500 p-4">
//       {/* Main content section */}
//       <div>
//         <Link to="/contact">
//           {/* Add the Link component with the target route */}
//           <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
//             Contact
//           </button>
//         </Link>
//       </div>
//       <div className="text-white text-3xl font-bold">
//         <p>Alikis Back</p>
//       </div>

//       {/* Contact Button */}
//     </div>
//   );
// };

// export default Home;








// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import img from "../../assets/img.png";

// const Home = () => {
//   return (
//     <div className="relative min-h-screen flex flex-col">
//       {/* Background Section */}
//       <div className="relative flex-grow">
//         <div className="absolute inset-0 bg-yellow-500"></div>

//         {/* Content on Top */}
//         <div className="relative flex flex-col md:flex-row justify-between items-center px-4 md:px-12 h-full">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="flex justify-center font-bold items-center flex-col w-full md:w-1/2 text-center md:text-left"
//           >
//             <h1 className="text-white text-4xl md:text-6xl">
//               The Perfect <br /> destination for <br /> all the IT Services &{" "}
//               <br /> solutions
//             </h1>
//             <p className="text-white text-lg md:text-2xl mt-4">
//               We help you excel in your digital journey with our proficient
//               solutions
//             </p>
//             <Link to="/contact">
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="border-2 h-12 md:h-16 w-36 md:w-44 text-white px-4 md:px-6 py-2 rounded-full hover:bg-blue-700 mt-6"
//               >
//                 Contact
//               </motion.button>
//             </Link>
//           </motion.div>

//           {/* Right Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2 }}
//             className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0"
//           >
//             <img
//               src={img}
//               alt="Your Image"
//               className="h-72 md:h-[85%] w-auto object-cover"
//             />
//           </motion.div>
//         </div>
//       </div>

//       {/* New Section Below */}
//       <div className="bg-white py-12 md:py-16 px-4 md:px-8 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-6xl text-black font-bold"
//         >
//           Welcome to Cloud Argo
//         </motion.h1>
//         <p className="text-gray-600 text-base md:text-lg mt-4">
//           Cloud Argo is a digital platform where your imagination meets reality.
//           <br /> We help strengthen your web-based presence and elevate your
//           business!
//         </p>

//         {/* YouTube Video Section */}
//         <div className="mt-12 w-full flex justify-center">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="w-full md:w-3/4 lg:w-1/2 p-4 md:p-6 rounded-lg shadow-lg text-center"
//           >
//             <div className="relative w-full h-48 md:h-64">
//               <iframe
//                 className="w-full h-full rounded-lg"
//                 src="https://www.youtube.com/embed/bQMSteM3LL0?si=iaMDvn-JXvTm9I2y"
//                 title="YouTube Video"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </motion.div>
//         </div>

//         {/* Social Media Links */}
//         <div className="mt-10">
//           <h2 className="text-xl md:text-2xl font-bold text-gray-700">
//             Follow Social Links
//           </h2>
//           <div className="flex justify-center gap-4 md:gap-6 mt-4">
//             {[
//               {
//                 href: "https://www.facebook.com",
//                 icon: "fab fa-facebook-f",
//                 color: "text-blue-600 hover:text-blue-800",
//               },
//               {
//                 href: "https://twitter.com",
//                 icon: "fab fa-twitter",
//                 color: "text-blue-400 hover:text-blue-600",
//               },
//               {
//                 href: "https://www.instagram.com",
//                 icon: "fab fa-instagram",
//                 color: "text-pink-600 hover:text-pink-800",
//               },
//               {
//                 href: "https://www.linkedin.com",
//                 icon: "fab fa-linkedin-in",
//                 color: "text-blue-700 hover:text-blue-900",
//               },
//               {
//                 href: "https://www.youtube.com",
//                 icon: "fab fa-youtube",
//                 color: "text-red-600 hover:text-red-800",
//               },
//             ].map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i
//                   className={`${item.icon} text-2xl md:text-4xl ${item.color}`}
//                 ></i>
//               </a>
//             ))}
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




























































































import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../../assets/img.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import pic from "../../assets/pic.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Section */}
      <div className="relative flex-grow">
        <div className="absolute inset-0 bg-yellow-500"></div>

        {/* Content on Top */}
        <div className="relative flex flex-col md:flex-row justify-between items-center px-4 md:px-12 h-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center font-bold items-center flex-col w-full md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-white text-4xl md:text-6xl">
              The Perfect <br /> destination for <br /> all the IT Services &{" "}
              <br /> solutions
            </h1>
            <p className="text-white text-lg md:text-1xl mt-4">
              We help you excel in your digital journey with our proficient
              solutions
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="border-2 h-12 md:h-16 w-36 md:w-44  px-4 md:px-6 py-2 rounded-full hover:bg-white mt-6"
              >
                Contact
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0"
          >
            <img
              src={img}
              alt="Your Image"
              className="h-72 md:h-[85%] w-auto object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* New Section Below */}
      <div className="bg-white py-12 md:py-16 px-4 md:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl text-black font-bold"
        >
          Welcome to Cloud Argo
        </motion.h1>
        <p className="text-gray-600 text-base md:text-lg mt-4">
          Cloud Argo is a digital platform where your imagination meets reality.
          <br /> We help strengthen your web-based presence and elevate your
          business!
        </p>
        {/* YouTube Video Section */}
        <div className="mt-12 w-full flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full md:w-3/4 lg:w-1/2 p-4 md:p-6 rounded-lg shadow-lg text-center"
          >
            <div className="relative w-full h-48 md:h-64">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/bQMSteM3LL0?si=iaMDvn-JXvTm9I2y"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
        {/* Social Media Links */}
        <div className="mt-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700">
            Follow Social Links
          </h2>
          <div className="flex justify-center gap-4 md:gap-6 mt-4">
            {[
              {
                href: "https://www.facebook.com",
                icon: "fab fa-facebook-f",
                color: "text-blue-600 hover:text-blue-800",
              },
              {
                href: "https://twitter.com",
                icon: "fab fa-twitter",
                color: "text-blue-400 hover:text-blue-600",
              },
              {
                href: "https://www.instagram.com",
                icon: "fab fa-instagram",
                color: "text-pink-600 hover:text-pink-800",
              },
              {
                href: "https://www.linkedin.com",
                icon: "fab fa-linkedin-in",
                color: "text-blue-700 hover:text-blue-900",
              },
              {
                href: "https://www.youtube.com",
                icon: "fab fa-youtube",
                color: "text-red-600 hover:text-red-800",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={`${item.icon} text-2xl md:text-4xl ${item.color}`}
                ></i>
              </a>
            ))}
          </div>
        </div>
        {/* Image Row Section */}
        import {motion} from "framer-motion";
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {[
            { src: img1, text: "Better Market And\nUser Research" },
            { src: img2, text: "How To Grow\nYour Business" },
            { src: img3, text: "How To Improve\nCreative Idea" },
            { src: img4, text: "More Information\nTo Marketing" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-y-3 p-4 rounded-lg hover:bg-gray-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={item.src}
                alt={item.text}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-lg transition duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
              />
              <p className="text-gray-700 text-xl md:text-2xl font-bold text-center leading-snug">
                {item.text.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line} <br />
                  </React.Fragment>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
        {/* New Section Below */}
        <div className="w-full flex flex-col md:flex-row items-center gap-8 mt-16">
          {/* Left Image Section */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={pic} // Yahan apni desired image import karein
              alt="Description"
              className="w-[90%] md:w-[80%] h-auto object-cover rounded-lg "
            />
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            className="w-full md:w-1/2 border-l p-4 border-b h-auto md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-6xl font-bold text-gray-800">
              Who Are We?
            </h2>
            <p className="text-yellow-500 font-sans text-lg md:text-xl mt-4">
              At <b>Cloud Argo</b>, we specialize in delivering fast and
              effective solutions customized to the evolving needs of online
              businesses. Our mission is to provide top-tier IT services that
              help companies prosper in the digital world.
            </p>
            <p className="text-2xl mt-6">
              We are committed to offering not just high-quality services but
              also expert guidance on enhancing your website and strengthening
              your online presence.
            </p>
            <p className="text-2xl mt-6">
              With a reputation built on professionalism and reliability,
              HumanTek combines innovative ideas with the exceptional skills of
              our team. We understand the critical role your online presence
              plays in your business’s success, which is why we tailor our IT
              services to perfectly align with your specific goals and needs
            </p>
            <button
              className="mt-6 px-6 py-3 bg-[#ed9421]  rounded-full hover:bg-yellow-400 transition"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="w-full flex flex-col mt-12 md:flex-row items-center justify-between gap-8 p-8">
          {/* Left Side: Text + Button */}
          <div className="w-full md:w-1/2 flex justify-center flex-col items-center md:text-left">
            <h2 className="text-5xl font-bold text-gray-800">
              WANT TO PLACE AN ORDER ?
            </h2>
            <p className="mt-4 text-2xl text-gray-600">
              If you’d like to place an order, please provide some more details
              about what you would like to order We appreciate your business and
              look forward to helping you with your order.
            </p>
            <div className="flex flex-col items-center">
              {/* Button to Open Form */}
              <button
                className="mt-11 px-6 h-16 w-44 py-3 bg-[#ed9421] text-white font-semibold rounded-full hover:bg-yellow-400 transition"
                onClick={() => setIsOpen(true)}
              >
                Order Now
              </button>

              {/* Popup Form */}
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold text-center mb-4">
                      Place Your Order
                    </h2>

                    <form className="flex flex-col gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="border p-2 rounded-md"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="border p-2 rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="Your Address"
                        className="border p-2 rounded-md"
                      />

                      <button
                        type="submit"
                        className="bg-[#ed9421] text-white py-2 rounded-md hover:bg-yellow-400"
                      >
                        Submit Order
                      </button>
                    </form>

                    {/* Close Button */}
                    <button
                      className="mt-4 text-red-500 hover:text-red-700 font-semibold w-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={pic}
              alt="Description"
              className="w-full max-w-sm md:max-w-md rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
