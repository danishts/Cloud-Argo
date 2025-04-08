// import React from "react";
// import techImage from "../../assets/tech.png";
// import { AnimatePresence } from "framer-motion";

// const servicesData = [
//   {
//     id: 1,
//     name: "Web Development",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results..",
//     image: techImage,
//   },
//   {
//     id: 2,
//     name: "Mobile App Development",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
//     image: techImage,
//   },
//   {
//     id: 3,
//     name: "UI/UX Design",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
//     image: techImage,
//   },
//   {
//     id: 4,
//     name: "SEO Optimization",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
//     image: techImage,
//   },
//   {
//     id: 5,
//     name: "SEO Optimization",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
//     image: techImage,
//   },
//   {
//     id: 6,
//     name: "SEO Optimization",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
//     image: techImage,
//   },

// ];

// const Services = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-3xl text-yellow-400 font-bold mb-4">OUR EXPERTISE</h1>
//       <h1 className="text-7xl text-gray-400 font-bold mt-10 mb-4">
//         <u>Services We Provide</u>{" "}
//       </h1>
//       <p className="text-gray-600 text-2xl mt-10 mb-4">
//         We offer innovative solutions to our customers in a variety of areas.
//         Our services include development & designing along <br /> with media
//         marketing, optimization, and branding.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2  mt-16 lg:grid-cols-4 gap-4">
//         {servicesData.map((service) => (
//           <div key={service.id} className=" rounded-lg p-4  py-4 shadow-md bg-white">
//             <img
//               src={service.image}
//               alt={service.name}
//               className="w-full h-40 object-cover rounded-md mb-2"
//             />
//             <h2 className="text-xl mt-10 font-semibold">{service.name}</h2>
//             <p className="text-gray-600 mt-2 ">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;


















// import React from "react";
// import techImage from "../../assets/tech.png";
// import { motion, AnimatePresence } from "framer-motion";

// const servicesData = [
//   {
//     id: 1,
//     name: "Web Development",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results..",
//     image: techImage,
//   },
//   {
//     id: 2,
//     name: "Mobile App Development",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
//     image: techImage,
//   },
//   {
//     id: 3,
//     name: "UI/UX Design",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
//     image: techImage,
//   },
//   {
//     id: 4,
//     name: "SEO Optimization",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
//     image: techImage,
//   },

// ];

// const Services = () => {
//   return (
//     <AnimatePresence>
//       <motion.div
//         className="p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-3xl text-yellow-400 font-bold mb-4">
//           OUR EXPERTISE
//         </h1>
//         <h1 className="text-7xl text-gray-400 font-bold mt-10 mb-4">
//           <u>Services We Provide</u>{" "}
//         </h1>
//         <p className="text-gray-600 text-2xl mt-10 mb-4">
//           We offer innovative solutions to our customers in a variety of areas.
//           Our services include development & designing along <br /> with media
//           marketing, optimization, and branding.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-4 gap-8">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={service.id}
//               className="rounded-lg p-4 py-4 shadow-md bg-white"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <motion.img
//                 src={service.image}
//                 alt={service.name}
//                 className="w-full h-40 object-cover rounded-md mb-2"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <h2 className="text-xl mt-10 font-semibold">{service.name}</h2>
//               <p className="text-gray-600 mt-2">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Services;

















// import React from "react";
// import { MdArrowOutward } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import techImage from "../../assets/tech.png";

// const servicesData = [
//   {
//     id: 1,
//     name: "Web Development",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results",
//     image: techImage,
//   },
//   {
//     id: 2,
//     name: "Mobile App Development",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results",
//     image: techImage,
//   },
//   {
//     id: 3,
//     name: "UI/UX Design",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results",
//     image: techImage,
//   },
//   {
//     id: 4,
//     name: "SEO Optimization",
//     description:
//       "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results",
//     image: techImage,
//   },
// ];

// const Services = () => {
//   const navigate = useNavigate();

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-3xl text-center text-yellow-400 font-bold mb-4">
//           OUR EXPERTISE
//         </h1>
//         <h1 className="text-7xl text-center text-gray-400 font-bold mt-10 mb-4">
//           Services We Provide
//         </h1>
//         <p className="text-gray-600 text-center text-2xl mt-10 mb-4">
//           We offer innovative solutions to our customers in a variety of areas.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-4 gap-8">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={service.id}
//               className="rounded-lg p-4 py-4 shadow-md bg-white relative"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <motion.img
//                 src={service.image}
//                 alt={service.name}
//                 className="w-full h-40 object-cover rounded-md mb-2"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <h2 className="text-xl mt-10 font-semibold">{service.name}</h2>
//               <p className="text-gray-600 mt-2">{service.description}</p>

//               {/* Arrow Button for Navigation */}
//               <button
//                 onClick={() => navigate(`/services/${service.id}`)}
//                 className="absolute top-4 right-4 text-yellow-500 text-2xl hover:text-yellow-600 transition"
//               >
//                 <MdArrowOutward />
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Services;



































































// import React, { useState } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";
// import techImage from "../../assets/tech.png";

// const servicesData = [
//   {
//     id: 1,
//     name: "Web Development",
//     description: "We provide top-notch web development services.",
//     image: techImage,
//   },
//   {
//     id: 2,
//     name: "Mobile App Development",
//     description: "Building modern and scalable mobile applications.",
//     image: techImage,
//   },
//   {
//     id: 3,
//     name: "UI/UX Design",
//     description: "Crafting user-friendly and appealing designs.",
//     image: techImage,
//   },
//   {
//     id: 4,
//     name: "SEO Optimization",
//     description: "Boosting website rankings with SEO strategies.",
//     image: techImage,
//   },
// ];

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null);

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-3xl text-yellow-400 font-bold mb-4">
//           OUR EXPERTISE
//         </h1>
//         <h1 className="text-7xl text-gray-400 font-bold mt-10 mb-4">
//           <u>Services We Provide</u>{" "}
//         </h1>
//         <p className="text-gray-600 text-2xl mt-10 mb-4">
//           We offer innovative solutions to our customers in a variety of areas.
//         </p>

//         {/* Selected Service Details */}
//         {selectedService && (
//           <motion.div
//             className="rounded-lg p-6 shadow-lg bg-white mb-10"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-4xl font-semibold text-yellow-500">
//               {selectedService.name}
//             </h2>
//             <motion.img
//               src={selectedService.image}
//               alt={selectedService.name}
//               className="w-96 mx-auto mt-4 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//             <p className="text-lg text-gray-600 mt-4">
//               {selectedService.description}
//             </p>
//           </motion.div>
//         )}

//         {/* Services List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-4 gap-8">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={service.id}
//               className="rounded-lg p-4 py-4 shadow-md bg-white relative"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <motion.img
//                 src={service.image}
//                 alt={service.name}
//                 className="w-full h-40 object-cover rounded-md mb-2"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <h2 className="text-xl mt-10 font-semibold">{service.name}</h2>
//               <p className="text-gray-600 mt-2">{service.description}</p>

//               {/* Arrow Button for Showing Details */}
//               <button
//                 onClick={() => setSelectedService(service)}
//                 className="absolute top-4 right-4 text-yellow-500 text-2xl hover:text-yellow-600 transition"
//               >
//                 <MdArrowOutward />
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Services;

























































































































// import React, { useState, useRef } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";
// import techImage from "../../assets/tech.png";

// const servicesData = [
//   {
//     id: 1,
//     name: "Web Development",
//     description: "We provide top-notch web development services.",
//     image: techImage,
//   },
//   {
//     id: 2,
//     name: "Mobile App Development",
//     description: "Building modern and scalable mobile applications.",
//     image: techImage,
//   },
//   {
//     id: 3,
//     name: "UI/UX Design",
//     description: "Crafting user-friendly and appealing designs.",
//     image: techImage,
//   },
//   {
//     id: 4,
//     name: "SEO Optimization",
//     description: "Boosting website rankings with SEO strategies.",
//     image: techImage,
//   },
//   {
//     id: 5,
//     name: "Cloud Computing",
//     description: "Providing cloud-based scalable solutions.",
//     image: techImage,
//   },
//   {
//     id: 6,
//     name: "Cybersecurity",
//     description: "Enhancing security measures for businesses.",
//     image: techImage,
//   },
// ];

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null);
//   const serviceRefs = useRef([]);

//   const handleServiceClick = (service, index) => {
//     setSelectedService(service);

//     // Scroll to the selected service smoothly
//     setTimeout(() => {
//       serviceRefs.current[index]?.scrollIntoView({
//         behavior: "smooth",
//         block: "center", // Ensures the selected card appears in the center of the screen
//         inline: "nearest",
//       });
//     }, 300); // Delay to allow re-render before scrolling
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-3xl text-yellow-400 font-bold mb-4">
//           OUR EXPERTISE
//         </h1>
//         <h1 className="text-7xl text-gray-400 font-bold mt-10 mb-4">
//           <u>Services We Provide</u>
//         </h1>
//         <p className="text-gray-600 text-2xl mt-10 mb-4">
//           We offer innovative solutions to our customers in a variety of areas.
//         </p>

//         {/* Selected Service Details */}
//         {selectedService && (
//           <motion.div
//             className="rounded-lg p-6 shadow-lg bg-white mb-10"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-4xl font-semibold text-yellow-500">
//               {selectedService.name}
//             </h2>
//             <motion.img
//               src={selectedService.image}
//               alt={selectedService.name}
//               className="w-96 mx-auto mt-4 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//             <p className="text-lg text-gray-600 mt-4">
//               {selectedService.description}
//             </p>
//           </motion.div>
//         )}

//         {/* Services List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-4 gap-8">
//           {servicesData.map((service, index) => (
//             <motion.div
//               key={service.id}
//               className="rounded-lg p-4 py-4 shadow-md bg-white relative"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               ref={(el) => (serviceRefs.current[index] = el)}
//             >
//               <motion.img
//                 src={service.image}
//                 alt={service.name}
//                 className="w-full h-40 object-cover rounded-md mb-2"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <h2 className="text-xl mt-10 font-semibold">{service.name}</h2>
//               <p className="text-gray-600 mt-2">{service.description}</p>

//               {/* Arrow Button for Showing Details */}
//               <button
//                 onClick={() => handleServiceClick(service, index)}
//                 className="absolute top-4 right-4 text-yellow-500 text-2xl hover:text-yellow-600 transition"
//               >
//                 <MdArrowOutward />
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Services;






























































// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import { motion, AnimatePresence } from "framer-motion";
// import techImage from "../../assets/tech.png";

// const servicesData = [
//   {
//     id: 1,
//     name: "Web Development",
//     description: "We provide top-notch web development services.",
//     image: techImage,
//   },
//   {
//     id: 2,
//     name: "Mobile App Development",
//     description: "Building modern and scalable mobile applications.",
//     image: techImage,
//   },
//   {
//     id: 3,
//     name: "UI/UX Design",
//     description: "Crafting user-friendly and appealing designs.",
//     image: techImage,
//   },
//   {
//     id: 4,
//     name: "SEO Optimization",
//     description: "Boosting website rankings with SEO strategies.",
//     image: techImage,
//   },
//   {
//     id: 5,
//     name: "Cloud Computing",
//     description: "Providing cloud-based scalable solutions.",
//     image: techImage,
//   },
//   {
//     id: 6,
//     name: "Cybersecurity",
//     description: "Enhancing security measures for businesses.",
//     image: techImage,
//   },
// ];

// const Services = () => {
//   const [selectedService, setSelectedService] = useState(null);

//   // Scroll to top when a new service is selected
//   useEffect(() => {
//     if (selectedService) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [selectedService]);

//   const handleServiceClick = (service) => {
//     setSelectedService(service);
//   };

//   return (
//     <AnimatePresence>
//       <motion.div
//         className="p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-3xl text-yellow-400 font-bold mb-4">
//           OUR EXPERTISE
//         </h1>
//         <h1 className="text-7xl text-gray-400 font-bold mt-10 mb-4">
//           <u>Services We Provide</u>
//         </h1>
//         <p className="text-gray-600 text-2xl mt-10 mb-4">
//           We offer innovative solutions to our customers in a variety of areas.
//         </p>

//         {/* Selected Service Details */}
//         {selectedService && (
//           <motion.div
//             className="rounded-lg p-6 shadow-lg bg-white mb-10"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//           >
//             <h2 className="text-4xl font-semibold text-yellow-500">
//               {selectedService.name}
//             </h2>
//             <motion.img
//               src={selectedService.image}
//               alt={selectedService.name}
//               className="w-96 mx-auto mt-4 rounded-lg"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             />
//             <p className="text-lg text-gray-600 mt-4">
//               {selectedService.description}
//             </p>
//           </motion.div>
//         )}

//         {/* Services List */}
//         <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-4 gap-8">
//           {servicesData.map((service) => (
//             <motion.div
//               key={service.id}
//               className="rounded-lg p-4 py-4 shadow-md bg-white relative"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 50 }}
//               transition={{ duration: 0.6 }}
//             >
//               <motion.img
//                 src={service.image}
//                 alt={service.name}
//                 className="w-full h-40 object-cover rounded-md mb-2"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.3 }}
//               />
//               <h2 className="text-xl mt-10 font-semibold">{service.name}</h2>
//               <p className="text-gray-600 mt-2">{service.description}</p>

//               {/* Arrow Button for Showing Details */}
//               <button
//                 onClick={() => handleServiceClick(service)}
//                 className="absolute top-4 right-4 text-yellow-500 text-2xl hover:text-yellow-600 transition"
//               >
//                 <MdArrowOutward />
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default Services;

























































import React, { useState, useEffect } from "react";
import { MdArrowOutward, MdClose } from "react-icons/md"; // Import close icon
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation
import techImage from "../../assets/tech.png";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    image: techImage,
    description: "We provide top-notch web development services.",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Building modern and scalable mobile applications.",
    image: techImage,
  },
  {
    id: 3,
    name: "UI/UX Design",
    description: "Crafting user-friendly and appealing designs.",
    image: techImage,
  },
  {
    id: 4,
    name: "SEO Optimization",
    description: "Boosting website rankings with SEO strategies.",
    image: techImage,
  },
  {
    id: 5,
    name: "Cloud Computing",
    description: "Providing cloud-based scalable solutions.",
    image: techImage,
  },
  {
    id: 6,
    name: "Cybersecurity",
    description: "Enhancing security measures for businesses.",
    image: techImage,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation(); // Get current route

  useEffect(() => {
    // Scroll to top only if the user is on the Services page
    if (selectedService && location.pathname === "/services") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedService, location.pathname]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl text-center text-yellow-400 font-bold mb-4">
          OUR EXPERTISE
        </h1>
        <h1 className="text-7xl text-center  font-bold mt-10 mb-4">
          <u>Services We Provide</u>
        </h1>
        <p className="text-gray-600 text-center text-2xl mt-10 mb-4">
          We offer innovative solutions to our customers in a variety of areas.
        </p>

        {/* Selected Service Details with Close Button */}
        {selectedService && (
          <motion.div
            className="rounded-lg p-6 shadow-lg bg-white mb-10 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl"
            >
              <MdClose />
            </button>

            <h2 className="text-4xl text-center font-semibold text-yellow-500">
              {selectedService.name}
            </h2>
            <motion.img
              src={selectedService.image}
              alt={selectedService.name}
              className="w-96  mx-auto rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <p className="text-lg text-gray-600 mt-4">
              {selectedService.description}
            </p>
          </motion.div>
        )}

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="rounded-lg p-4 py-4 shadow-md bg-white relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-md mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <h2 className="text-xl mt-10 font-semibold">{service.name}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>

              {/* Arrow Button for Showing Details */}
              <button
                onClick={() => handleServiceClick(service)}
                className="absolute top-4 right-4 text-yellow-500 text-2xl hover:text-yellow-600 transition"
              >
                <MdArrowOutward />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Services;
