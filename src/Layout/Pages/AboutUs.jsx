// import React from "react";
// import about from "../../assets/about.png"; // ✅ Correct path
// import { motion } from "framer-motion";

// const AboutUs = () => {
//   return (
//     <div>
//       {/* Yellow Section with Heading */}
//       <div className="flex items-center justify-center h-[400px] bg-yellow-300">
//         <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
//       </div>

//       {/* Paragraph Section */}
//       <div className="bg-white px-6  py-10 flex items-center justify-center">
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <p className="max-w-4xl text-gray-700  text-lg text-center">
//             At Humantek, we deliver superior branding and marketing solutions,
//             leveraging state-of-the-art techniques to align with your strategic
//             objectives. From tailored software solutions to meticulous
//             execution, our approach ensures exceptional conversion rates. With a
//             global presence in the UK, USA, and PK, we are a trusted partner for
//             businesses seeking innovative IT solutions that transform their
//             goals into reality.
//           </p>
//         </motion.div>
//       </div>
//       {/* Image and Text Section */}
//       <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         {/* Left - Image with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>

//         {/* Right - Text with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
//             ABOUT US
//           </h1>
//           <h2 className="text-5xl text-center font-bold mb-4">
//             <span className="text-gray-500">CLOUD</span>
//             <span className="text-yellow-500">ARGO</span>
//           </h2>

//           <p className="text-gray-700 text-lg leading-relaxed">
//             Since 2021, our expert team has driven success across diverse
//             industries with tailored strategies, cutting-edge technology, and
//             data-driven insights. Our customer-centric ethos, creative vision,
//             and global reach make us the ideal partner for growth in the digital
//             age. Together, let’s shape a future where innovation meets
//             excellence.where innovation meets excellence.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// import React from "react";
// import about from "../../assets/about.png";

// import { motion } from "framer-motion";

// const AboutUs = () => {
//   return (
//     <div>
//       {/* Yellow Section with Heading */}
//       <div className="flex items-center justify-center h-[400px] bg-yellow-300">
//         <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
//       </div>

//       {/* Paragraph Section */}
//       <div className="bg-white px-6 py-10 flex items-center justify-center">
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <p className="max-w-4xl text-gray-700 text-lg text-center">
//             At Humantek, we deliver superior branding and marketing solutions,
//             leveraging state-of-the-art techniques to align with your strategic
//             objectives. From tailored software solutions to meticulous
//             execution, our approach ensures exceptional conversion rates. With a
//             global presence in the UK, USA, and PK, we are a trusted partner for
//             businesses seeking innovative IT solutions that transform their
//             goals into reality.
//           </p>
//         </motion.div>
//       </div>

//       {/* Image and Text Section */}
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         {/* Left - Text with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
//             ABOUT US
//           </h1>
//           <h2 className="text-5xl text-center font-bold mb-4">
//             <span className="text-gray-500">CLOUD</span>
//             <span className="text-yellow-500">ARGO</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             Since 2021, our expert team has driven success across diverse
//             industries with tailored strategies, cutting-edge technology, and
//             data-driven insights. Our customer-centric ethos, creative vision,
//             and global reach make us the ideal partner for growth in the digital
//             age. Together, let’s shape a future where innovation meets
//             excellence.
//           </p>
//         </motion.div>

//         {/* Right - Image with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//       </div>
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         {/* Left - Text with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h2 className="text-5xl text-center gap-2 font-bold mb-4">
//             <span className="text-gray-500">Our </span>
//             <span className="text-yellow-500">Vision</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             To be a globally recognized leader in providing comprehensive IT
//             services, delivering exceptional value and service to our clients
//             while fostering a collaborative and inclusive work environment
//           </p>
//         </motion.div>

//         {/* Right - Image with animation */}
//       </div>
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         {/* Left - Text with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h2 className="text-5xl text-center gap-2 font-bold mb-4">
//             <span className="text-gray-500">Our</span>
//             <span className="text-yellow-500">Mission</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             To be a globally recognized leader in providing comprehensive IT
//             services, delivering exceptional value and service to our clients
//             while fostering a collaborative and inclusive work environment
//           </p>
//         </motion.div>

//         {/* Right - Image with animation */}
//       </div>
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         {/* Left - Text with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h2 className="text-5xl text-center gap-2 font-bold mb-4">
//             <span className="text-gray-500">Our </span>
//             <span className="text-yellow-500">Vision</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             To be a globally recognized leader in providing comprehensive IT
//             services, delivering exceptional value and service to our clients
//             while fostering a collaborative and inclusive work environment
//           </p>
//         </motion.div>

//         {/* Right - Image with animation */}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// import React from "react";
// import about from "../../assets/about.png";
// import { motion } from "framer-motion";
// import { FaUser } from "react-icons/fa"; // Import the icon
// import { FaChessKing } from "react-icons/fa";

// const AboutUs = () => {
//   return (
//     <div>
//       {/* Yellow Section with Heading */}
//       <div className="flex items-center justify-center h-[400px] bg-yellow-300">
//         <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
//       </div>

//       {/* Paragraph Section */}
//       <div className="bg-white px-6 py-10 flex items-center justify-center">
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <p className="max-w-4xl text-gray-700 text-lg text-center">
//             At Humantek, we deliver superior branding and marketing solutions,
//             leveraging state-of-the-art techniques to align with your strategic
//             objectives. From tailored software solutions to meticulous
//             execution, our approach ensures exceptional conversion rates. With a
//             global presence in the UK, USA, and PK, we are a trusted partner for
//             businesses seeking innovative IT solutions that transform their
//             goals into reality.
//           </p>
//         </motion.div>
//       </div>

//       {/* Image and Text Section */}
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         {/* Left - Text with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
//             ABOUT US
//           </h1>
//           <h2 className="text-5xl text-center font-bold mb-4">
//             <span className="text-gray-500">CLOUD</span>
//             <span className="text-yellow-500">ARGO</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             Since 2021, our expert team has driven success across diverse
//             industries with tailored strategies, cutting-edge technology, and
//             data-driven insights. Our customer-centric ethos, creative vision,
//             and global reach make us the ideal partner for growth in the digital
//             age. Together, let’s shape a future where innovation meets
//             excellence.
//           </p>

//           {/* 10k+ and Icon */}
//         </motion.div>

//         {/* Right - Image with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//       </div>

//       {/* Mission Section */}
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         {/* Left - Text with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
//             ABOUT US
//           </h1>
//           <h2 className="text-5xl text-center font-bold mb-4">
//             <span className="text-gray-500">CLOUD</span>
//             <span className="text-yellow-500">ARGO</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             Since 2021, our expert team has driven success across diverse
//             industries with tailored strategies, cutting-edge technology, and
//             data-driven insights. Our customer-centric ethos, creative vision,
//             and global reach make us the ideal partner for growth in the digital
//             age. Together, let’s shape a future where innovation meets
//             excellence.
//           </p>

//           {/* 10k+ and Icon */}
//         </motion.div>

//         {/* Right - Image with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//       </div>
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         {/* Left - Text with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
//             ABOUT US
//           </h1>
//           <h2 className="text-5xl text-center font-bold mb-4">
//             <span className="text-gray-500">CLOUD</span>
//             <span className="text-yellow-500">ARGO</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             Since 2021, our expert team has driven success across diverse
//             industries with tailored strategies, cutting-edge technology, and
//             data-driven insights. Our customer-centric ethos, creative vision,
//             and global reach make us the ideal partner for growth in the digital
//             age. Together, let’s shape a future where innovation meets
//             excellence.
//           </p>

//           {/* 10k+ and Icon */}
//         </motion.div>

//         {/* Right - Image with animation */}
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//       </div>
//       <div></div>

//      <div class="flex justify-start py-6 overflow-hidden">
//   <div class="flex animate-scroll space-x-16">

//     <div class="flex items-center space-x-4">
//       <div>
//         <FaChessKing className="h-10 w-10 text-yellow-600" />
//       </div>
//       <div class="flex flex-col">
//         <div class="mt-6">
//           <div class="text-4xl font-bold">10K+</div>
//           <div class="text-lg text-gray-500">Project Done</div>
//         </div>
//       </div>
//     </div>

//     <div class="flex items-center space-x-4">
//       <div>
//         <FaChessKing className="h-10 text-yellow-600 w-10" />
//       </div>
//       <div class="flex flex-col">
//         <div class="mt-6">
//           <div class="text-4xl font-bold">100%</div>
//           <div class="text-lg text-gray-500">Project Done</div>
//         </div>
//       </div>
//     </div>

//     <div class="flex items-center space-x-4">
//       <div>
//         <FaChessKing className="h-10 text-yellow-600 w-10" />
//       </div>
//       <div class="flex flex-col">
//         <div class="mt-6">
//           <div class="text-4xl font-bold">15K+</div>
//           <div class="text-lg text-gray-500">Project Done</div>
//         </div>
//       </div>
//     </div>

//     <div class="flex items-center space-x-4">
//       <div>
//         <FaChessKing className="h-10 w-10 text-yellow-600" />
//       </div>
//       <div class="flex flex-col">
//         <div class="mt-6">
//           <div class="text-4xl font-bold">300+</div>
//           <div class="text-lg text-gray-500">Project Done</div>
//         </div>
//       </div>
//     </div>

//     <div class="flex items-center space-x-4">
//       <div>
//         <FaChessKing className="h-10 text-yellow-600 w-10" />
//       </div>
//       <div class="flex flex-col">
//         <div class="mt-6">
//           <div class="text-4xl font-bold">10K+</div>
//           <div class="text-lg text-gray-500">Project Done</div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

// <style>
//   @keyframes scroll {
//     0% {
//       transform: translateX(0);
//     }
//     100% {
//       transform: translateX(-100%);
//     }
//   }

//   .animate-scroll {
//     animation: scroll 15s linear infinite;
//   }
// </style>

//     </div>
//   );
// };

// export default AboutUs;

// import React, { useState, useEffect } from "react";
// import { FaChessKing } from "react-icons/fa"; // Import the icons
// import { motion } from "framer-motion"; // Import Framer Motion for animations
// import about from "../../assets/about.png";

// const AboutUs = () => {
//   // State to store the animated values
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);
//   const [count4, setCount4] = useState(0);

//   // Effect hook to animate the numbers on load
//   useEffect(() => {
//     // Increase number at a faster pace
//     const interval1 = setInterval(() => {
//       if (count1 < 10000) {
//         setCount1((prev) => Math.min(prev + 500, 10000)); // Increase by 500 every 20ms
//       }
//     }, 20);

//     const interval2 = setInterval(() => {
//       if (count2 < 100) {
//         setCount2((prev) => Math.min(prev + 5, 100)); // Increase by 5 every 20ms
//       }
//     }, 20);

//     const interval3 = setInterval(() => {
//       if (count3 < 15000) {
//         setCount3((prev) => Math.min(prev + 1000, 15000)); // Increase by 1000 every 20ms
//       }
//     }, 20);

//     const interval4 = setInterval(() => {
//       if (count4 < 300) {
//         setCount4((prev) => Math.min(prev + 20, 300)); // Increase by 20 every 20ms
//       }
//     }, 20);

//     // Cleanup the intervals when the component unmounts
//     return () => {
//       clearInterval(interval1);
//       clearInterval(interval2);
//       clearInterval(interval3);
//       clearInterval(interval4);
//     };
//   }, [count1, count2, count3, count4]);

//   return (
//     <div>
//       {/* Yellow Section with Heading */}
//       <div className="flex items-center justify-center h-[400px] bg-yellow-300">
//         <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
//       </div>

//       {/* Paragraph Section */}
//       <div className="bg-white px-6 py-10 flex items-center justify-center">
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <p className="max-w-4xl text-gray-700 text-lg text-center">
//             At Humantek, we deliver superior branding and marketing solutions,
//             leveraging state-of-the-art techniques to align with your strategic
//             objectives. From tailored software solutions to meticulous
//             execution, our approach ensures exceptional conversion rates. With a
//             global presence in the UK, USA, and PK, we are a trusted partner for
//             businesses seeking innovative IT solutions that transform their
//             goals into reality.
//           </p>
//         </motion.div>
//       </div>

//       {/* Image and Text Section */}
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
//             ABOUT US
//           </h1>
//           <h2 className="text-5xl text-center font-bold mb-4">
//             <span className="text-gray-500">CLOUD</span>
//             <span className="text-yellow-500">ARGO</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             Since 2021, our expert team has driven success across diverse
//             industries with tailored strategies, cutting-edge technology, and
//             data-driven insights. Our customer-centric ethos, creative vision,
//             and global reach make us the ideal partner for growth in the digital
//             age. Together, let’s shape a future where innovation meets
//             excellence.
//           </p>
//         </motion.div>

//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//       </div>

//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">

//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
//             ABOUT US
//           </h1>
//           <h2 className="text-5xl text-center font-bold mb-4">
//             <span className="text-gray-500">CLOUD</span>
//             <span className="text-yellow-500">ARGO</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             Since 2021, our expert team has driven success across diverse
//             industries with tailored strategies, cutting-edge technology, and
//             data-driven insights. Our customer-centric ethos, creative vision,
//             and global reach make us the ideal partner for growth in the digital
//             age. Together, let’s shape a future where innovation meets
//             excellence.
//           </p>
//         </motion.div>
//       </div>
//       <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 gap-12">
//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: 100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
//             ABOUT US
//           </h1>
//           <h2 className="text-5xl text-center font-bold mb-4">
//             <span className="text-gray-500">CLOUD</span>
//             <span className="text-yellow-500">ARGO</span>
//           </h2>

//           <p className="text-gray-700 p-9 text-lg leading-relaxed">
//             Since 2021, our expert team has driven success across diverse
//             industries with tailored strategies, cutting-edge technology, and
//             data-driven insights. Our customer-centric ethos, creative vision,
//             and global reach make us the ideal partner for growth in the digital
//             age. Together, let’s shape a future where innovation meets
//             excellence.
//           </p>
//         </motion.div>

//         <motion.div
//           className="w-full lg:w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <img
//             src={about}
//             alt="About Humantek"
//             className="w-full h-auto rounded-lg"
//           />
//         </motion.div>
//       </div>
//       {/* Scrolling Section - Centered Scroll Effect */}
//       <div className="flex justify-center py-6 overflow-hidden">
//         <div className="flex flex-col lg:flex-row gap-14">
//           {/* Repeated items */}
//           {[
//             { count: count1, label: "Project Done" },
//             { count: count2, label: "Positive Result" },
//             { count: count3, label: "Happy Clients" },
//             { count: count4, label: "Industry Experts" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex items-center space-x-8 mb-6 lg:mb-0 group"
//             >
//               <div className="group-hover:translate-y-[-8px] transition-all duration-300">
//                 <FaChessKing className="h-16 w-16 text-yellow-600 group-hover:scale-110 transition-all duration-300" />
//               </div>
//               <div className="flex flex-col">
//                 <div className="mt-6">
//                   <motion.div
//                     className="text-3xl mt-2 text-gray-600 font-bold"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                   >
//                     {item.count.toLocaleString()}
//                   </motion.div>
//                   <div className="text-lg mt-2">{item.label}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useState, useEffect } from "react";
import { FaChessKing } from "react-icons/fa"; // Import the icons
import { motion } from "framer-motion"; // Import Framer Motion for animations
import about from "../../assets/about.png";
import { FaHandPointRight } from "react-icons/fa";
import Services from "./Service";

const AboutUs = () => {
  // State to store the animated values
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  // Effect hook to animate the numbers on load
  useEffect(() => {
    // Increase number at a faster pace
    const interval1 = setInterval(() => {
      if (count1 < 10000) {
        setCount1((prev) => Math.min(prev + 500, 30000)); // Increase by 500 every 20ms
      }
    }, 20);

    const interval2 = setInterval(() => {
      if (count2 < 100) {
        setCount2((prev) => Math.min(prev + 7, 100)); // Increase by 5 every 20ms
      }
    }, 20);

    const interval3 = setInterval(() => {
      if (count3 < 15000) {
        setCount3((prev) => Math.min(prev + 3000, 35000)); // Increase by 1000 every 20ms
      }
    }, 20);

    const interval4 = setInterval(() => {
      if (count4 < 300) {
        setCount4((prev) => Math.min(prev + 20, 300)); // Increase by 20 every 20ms
      }
    }, 20);

    // Cleanup the intervals when the component unmounts
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [count1, count2, count3, count4]);

  return (
    <div className="overflow-hidden">
      {/* Yellow Section with Heading */}
      <div className="flex items-center justify-center h-[400px] bg-yellow-300">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
      </div>
      {/* UPDATE */}
      {/* <div className="bg-white px-6 py-10 flex items-center justify-center">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="max-w-4xl text-gray-700 text-lg text-center">
            At Humantek, we deliver superior branding and marketing solutions,
            leveraging state-of-the-art techniques to align with your strategic
            objectives. From tailored software solutions to meticulous
            execution, our approach ensures exceptional conversion rates. With a
            global presence in the UK, USA, and PK, we are a trusted partner for
            businesses seeking innovative IT solutions that transform their
            goals into reality.
          </p>
        </motion.div>
      </div> */}
      <div className="bg-white px-6 py-10 flex items-center justify-center">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <p className="max-w-4xl  text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl text-center">
            At Humantek, we deliver superior branding and marketing solutions,
            leveraging state-of-the-art techniques to align with your strategic
            objectives. From tailored software solutions to meticulous
            execution, our approach ensures exceptional conversion rates. With a
            global presence in the UK, USA, and PK, we are a trusted partner for
            businesses seeking innovative IT solutions that transform their
            goals into reality.
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center px-20 justify-between  py-16 gap-12">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
            ABOUT US
          </h1>
          <h2 className="text-5xl text-center font-bold mb-4">
            <span className="text-gray-500">CLOUD</span>
            <span className="text-yellow-500">ARGO</span>
          </h2>

          <p className="text-gray-700 p-9 text-lg leading-relaxed">
            Since 2021, our expert team has driven success across diverse
            industries with tailored strategies, cutting-edge technology, and
            data-driven insights. Our customer-centric ethos, creative vision,
            and global reach make us the ideal partner for growth in the digital
            age. Together, let’s shape a future where innovation meets
            excellence.
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={about}
            alt="About Humantek"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center px-20 justify-between  py-16 gap-12">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
            ABOUT US
          </h1>
          <h2 className="text-5xl text-center font-bold mb-4">
            <span className="text-gray-500">CLOUD</span>
            <span className="text-yellow-500">ARGO</span>
          </h2>

          <p className="text-gray-700 p-9 text-lg leading-relaxed">
            Since 2021, our expert team has driven success across diverse
            industries with tailored strategies, cutting-edge technology, and
            data-driven insights. Our customer-centric ethos, creative vision,
            and global reach make us the ideal partner for growth in the digital
            age. Together, let’s shape a future where innovation meets
            excellence.
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={about}
            alt="About Humantek"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center px-20 justify-between  py-16 gap-12">
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-lg text-center font-semibold text-gray-500 mb-2">
            ABOUT US
          </h1>
          <h2 className="text-5xl text-center font-bold mb-4">
            <span className="text-gray-500">CLOUD</span>
            <span className="text-yellow-500">ARGO</span>
          </h2>

          <p className="text-gray-700 p-9 text-lg leading-relaxed">
            Since 2021, our expert team has driven success across diverse
            industries with tailored strategies, cutting-edge technology, and
            data-driven insights. Our customer-centric ethos, creative vision,
            and global reach make us the ideal partner for growth in the digital
            age. Together, let’s shape a future where innovation meets
            excellence.
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={about}
            alt="About Humantek"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
      .
      <div className="flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20 py-16">
        {/* Left Section (Collaboration Text) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          {[...Array(5)].map((_, index) => (
            <p
              key={index}
              className="text-gray-700 flex items-center p-3 text-lg leading-relaxed"
            >
              <FaHandPointRight className="mr-4 text-yellow-600" />
              <span className="font-bold">Collaboration:</span>
              <span>
                {" "}
                Fostering teamwork and inclusivity to achieve shared goals.
              </span>
            </p>
          ))}
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative group">
            {/* Image with Hover Effect */}
            <motion.img
              src={about}
              alt="About Humantek"
              className="w-full h-auto rounded-lg group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="p-8 sm:p-16 md:p-32">
        <Services />
      </div>
      <div class="text-center mt-10">
        <h1 class="text-3xl font-bold text-[#121b54] mb-8">
          What Our Clients Say About Us
        </h1>
      </div>
      <div className="flex justify-center  space-x-9 p-6 flex-wrap">
        <div className="bg-[#121b54] text-white rounded-lg shadow-lg p-6 w-80 text-center mb-8 sm:mb-0">
          <h3 className="text-xl font-semibold mb-4">John Doe</h3>
          <p className="text-white mb-4">
            "I had an amazing experience! The staff were so friendly and the
            service was top-notch. Will definitely come back!"
          </p>
          <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-[#121b54] text-white rounded-lg shadow-lg p-6 w-80 text-center mb-8 sm:mb-0">
          <h3 className="text-xl font-semibold mb-4">John Doe</h3>
          <p className="text-white mb-4">
            "I had an amazing experience! The staff were so friendly and the
            service was top-notch. Will definitely come back!"
          </p>
          <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-[#121b54] text-white rounded-lg shadow-lg p-6 w-80 text-center mb-8 sm:mb-0">
          <h3 className="text-xl font-semibold mb-4">John Doe</h3>
          <p className="text-white mb-4">
            "I had an amazing experience! The staff were so friendly and the
            service was top-notch. Will definitely come back!"
          </p>
          <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="bg-[#121b54] text-white rounded-lg shadow-lg p-6 w-80 text-center mb-8 sm:mb-0">
          <h3 className="text-xl font-semibold mb-4">John Doe</h3>
          <p className="text-white mb-4">
            "I had an amazing experience! The staff were so friendly and the
            service was top-notch. Will definitely come back!"
          </p>
          <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
