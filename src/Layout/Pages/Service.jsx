import React from "react";
import techImage from "../../assets/tech.png";

const servicesData = [
  {
    id: 1,
    name: "Web Development",
    description:
      "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results..",
    image: techImage,
  },
  {
    id: 2,
    name: "Mobile App Development",
    description:
      "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
    image: techImage,
  },
  {
    id: 3,
    name: "UI/UX Design",
    description:
      "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
    image: techImage,
  },
  {
    id: 4,
    name: "SEO Optimization",
    description:
      "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
    image: techImage,
  },
  {
    id: 5,
    name: "SEO Optimization",
    description:
      "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
    image: techImage,
  },
  {
    id: 6,
    name: "SEO Optimization",
    description:
      "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
    image: techImage,
  },
  {
    id: 7,
    name: "SEO Optimization",
    description:
      "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
    image: techImage,
  },
  {
    id: 8,
    name: "SEO Optimization",
    description:
      "For each query entered into its search engine, Google uses SEO to determine which websites should rank high. SEO is essential because it maintains the impartiality of search results.",
    image: techImage,
  },
];

const Services = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-yellow-400 font-bold mb-4">OUR EXPERTISE</h1>
      <h1 className="text-7xl  font-bold mb-4"> Services We Provide</h1>
      <p className="text-gray-600 text-2xl mb-4">
        We offer innovative solutions to our customers in a variety of areas.
        Our services include development & designing along <br /> with media
        marketing, optimization, and branding.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg p-4  shadow-md bg-white"
          >
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h2 className="text-xl mt-2 font-semibold">{service.name}</h2>
            <p className="text-gray-600 mt-2 ">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
