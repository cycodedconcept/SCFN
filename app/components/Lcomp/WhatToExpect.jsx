import React from "react";

const WhatToExpect = () => {
  return (
    <section className="h-max flex items-center justify-center gap-10 pr-14 mt-28 w-full">
      <div className="w-1/2 h-full p-10 pl-0">
        <img
          src="./assets/bmt/women.png"
          alt=""
          className="object-cover w-[80%]"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center p-10">
        <h2 className="w-[85%] text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">
          What to expect in stem cell transplantation <br />
          <span className="text-[20px] font-normal ml-2 p-0 mt-0">
            (Bone marrow transplantation)
          </span>
        </h2>
        <p className="w-full text-[18px] leading-normal mt-4">
          Welcome to our BMT hub. Learn about procedures, find resources, and be
          inspired by patient stories - your comprehensive guide to a successful
          transplant journey. Learn More
          <span className="font-bold text-primary_red text-[18px] pl-2 cursor-pointer">
            Learn More
          </span>
        </p>
      </div>
    </section>
  );
};

export default WhatToExpect;
