import React from "react";
import { useParams } from "react-router-dom";
import techImage from "../../assets/tech.png";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    description: "We provide top-notch web development services.",
    image: techImage,
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
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id));

  if (!service) {
    return (
      <h1 className="text-center text-red-500 text-3xl">Service Not Found</h1>
    );
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-yellow-400">{service.name}</h1>
      <img
        src={service.image}
        alt={service.name}
        className="w-80 mx-auto mt-6 rounded-lg shadow-md"
      />
      <p className="text-lg text-gray-600 mt-4">{service.description}</p>
    </div>
  );
};

export default ServiceDetails;
