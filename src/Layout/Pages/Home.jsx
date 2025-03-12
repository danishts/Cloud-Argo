import React from "react";
import videos from "../../assets/videos.mp4"; // Ensure correct path

const Home = () => {
  return (
    <div className="relative w-screen   min-h-screen">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videos} />
      </video>

      {/* Content on Top */}
      <div className="absolute text-white text-center px-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold">Welcome to Cloud Argo</h1>
        <p className="text-lg">Experience the future of cloud technology</p>
      </div>
    </div>
  );
};

export default Home;
