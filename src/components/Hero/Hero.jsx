import React from "react";

const Hero = () => {
  return (
    <div
      className="hero my-3 min-h-screen bg-base-200 rounded-lg shadow-md"
      style={{
        backgroundImage: `url("https://i.ibb.co/LC2PRyG/scratched-dark-brown-wooden-textured-background.jpg")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "80vh",
      }}
    >
      <div className="hero-overlay bg-opacity-50 rounded-lg">
        <div className="hero-content text-center text-neutral-content flex-col lg:flex-row-reverse">
          <div className="max-w-md rounded-lg shadow-2xl width-auto overflow-hidden">
            <img src="https://i.ibb.co/4KDHb5d/image.png" />
          </div>
          <div className="">
            <h1 className="text-5xl font-bold">Online Resume Builder!</h1>
            <p className="py-6 mx-10">
              Choose from a variety of customizable templates and highlight your
              skills, experience and achievements to stand out from the crowd.
              Create the perfect resume in minutes with ease and confidence.
            </p>
            <button className="btn btn-primary">Get Started For Free</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
