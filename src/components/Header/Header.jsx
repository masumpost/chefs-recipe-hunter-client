import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('header.jpg')`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-center">CHEF'S RECIPE</h1>
            <p className="mb-5">
              This is a wonderful recipes showcase . You can find here different type of recipe and if you need to find a awesome and expert international chef then you can do it.
            </p>
            <button className="btn btn-primary">Let's Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
