import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <section className="h-max flex items-center justify-center px-14 gap-10 mt-28">
      <div className="w-1/2 h-full p-10">
        <img
          src="./assets/bmt/smiling_family.png"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="w-full text-[40px] leading-[1.2] capitalize font-[600] text-primary_red">
          Do u live with sickle cell disorder? Or seeking support for a loved
          one? Click on the contact us button below.
        </h2>
        <div className="w-full text-[18px] leading-normal mt-1">
          <Button
            classes="px-[68px] py-[10px] bg-primary_red font-lexend font-bold rounded-[4px] hover:bg-primary_red/80 trans_animate block text-white mt-5 text-[16.5px]"
            text="Contact Us"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
