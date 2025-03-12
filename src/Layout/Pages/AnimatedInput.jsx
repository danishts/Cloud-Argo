import React, { useState } from "react";

const AnimatedInput = ({ label, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (onChange) onChange(e); // Call the onChange function if provided
  };

  return (
    <div className="relative my-5">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        required
        className="bg-transparent border-0 border-b w-full py-3 text-lg font-semibold border-[#202124] text-black placeholder-transparent focus:outline-none focus:border-black"
        placeholder="Enter text"
      />
      <label className="absolute top-3 left-0 pointer-events-none">
        {label.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block text-base min-w-[5px] text-black transition-transform duration-300 ease-in-out ${
              inputValue ? "-translate-y-8 text-black" : ""
            }`}
            style={{ transitionDelay: `${index * 50}ms` }} // Use backticks
          >
            {char}
          </span>
        ))}
      </label>
    </div>
  );
};

export default AnimatedInput;
