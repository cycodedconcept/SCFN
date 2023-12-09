import React from "react";

const Research = () => {
  return (
    <section className="h-max flex items-center justify-center px-14 gap-10 mt-28">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">
          Research and Innovations
        </h2>
        <p className="w-full text-[18px] leading-normal mt-8">
          Embark on the frontier of healthcare with our Research and Innovations
          hub. Explore opportunities to participate in groundbreaking clinical
          trials; stay updated on the latest medical innovations enhancing our
          BMT procedures. Join us in shaping the future of healthcare through
          knowledge and progress.
          <span className="font-bold text-primary_red text-[18px] pl-2 cursor-pointer">
            Learn More
          </span>
        </p>
      </div>
      <div className="w-1/2 h-full p-10 pl-28">
        <img src="./assets/bmt/women2.png" alt="" className="object-cover" />
      </div>
    </section>
  );
};

export default Research;
