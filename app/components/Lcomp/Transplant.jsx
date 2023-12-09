import React from "react";

const Transplant = () => {
  return (
    <section className="px-14 mt-28">
      <h2 className="w-full text-[40px] text-center uppercase leading-[1.2] font-[600] text-primary_red">
        THE TRANSPLANT TEAM
      </h2>
      <p className="text-[18px] leading-normal text-center">
        The Transplant Team is multidisciplinary, consisting of the following
      </p>
      <div className="w-[70%] m-auto grid_special mt-10">
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold">
            Social workers/Counsellors{" "}
          </span>
        </div>
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold">
            Dietitian
          </span>
        </div>
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold w-full">
            Physical therapist/
            <br />
            Physiotherapist
          </span>
        </div>
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold">
            Pharmacist
          </span>
        </div>
        <div className="flex flex-col w-[250px] h-[180px] place-content-center items-center p-8">
          <img
            src="./assets/bmt/bullet_point.png"
            alt=""
            className="w-[25px] h-[25px]"
          />
          <span className="text-center mt-2 text-[18px] font-bold">Nurses</span>
        </div>
      </div>
    </section>
  );
};

export default Transplant;
