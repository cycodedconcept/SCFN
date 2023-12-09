import React from "react";
import Button from "./Button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="h-max flex items-center justify-center px-14 gap-20 mt-28">
      <div className="w-1/2 h-full p-10">
        <img src="./assets/bmt/cta_img.png" alt="" className="object-cover" />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="w-[90%] text-[44px] leading-[1.2] capitalize font-[600] text-primary_red">
          This is a CALL TO ACTION! BE A HERO!
          <br /> CONTRIBUTE TODAY!
        </h2>
        <p className="w-full text-[20px] leading-normal mt-8">
          Your contributions will help subsidies this life-saving procedure for
          the vast majority of Nigerians living with sickle cell disorder,
          giving them the opportunity for a cure.
          <br />
          <br /> Help make this cure a reality for many! 
          <br />
          <br /> THANK YOU!
          <Link href="/donation">
            <Button
              classes="px-[75px] py-[14px] bg-primary_red font-lexend font-bold rounded-[4px] hover:bg-primary_red/90 trans_animate tracking-wide mt-5 text-white"
              text="Donate Now"
            />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CTA;
