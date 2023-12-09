import React from "react";
import Button from "../components/Lcomp/Button";
import Badge from "../components/Lcomp/Badge";
import SuccessStory from "../components/Lcomp/SuccessStory";
import Transplant from "../components/Lcomp/Transplant";

const page = () => {
  return (
    <>
      <section className="h-max flex items-center justify-center pr-14 gap-10 mt-16">
        <div className="w-1/2 h-full p-10 pl-0">
          <img src="./assets/bmt/service.png" alt="" className="object-cover" />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="w-full text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">
            Our Multi-Disciplinary Services
          </h2>
          <p className="w-[90%] text-[18px] leading-normal mt-8">
            Explore our diverse support services designed to accompany you
            through every phase. From counseling to post-transplant care,
            we&apos;re dedicated to ensuring you feel supported, empowered, and
            guided on your path to recovery. Discover our holistic network that
            prioritizes your well-being.
          </p>
          <Button
            classes="px-[68px] py-[10px] bg-primary_red font-lexend font-bold rounded-[4px] hover:bg-primary_red/80 trans_animate block text-white mt-5 text-[16.5px] w-max"
            text="Book Now"
          />
        </div>
      </section>
      <Badge />
      <Transplant/>
      <SuccessStory/>
    </>
  );
};

export default page;
