import React from "react";

const Documentary = () => {
  return (
    <section
      style={{
        backgroundImage: "url(./assets/bmt/nurse.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mt-28 h-screen relative p-14"
    >
      <img
        src="./assets/bmt/playIcon.png"
        alt=""
        className="w-[80px] h-[80px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:box_shadow_hover rounded-full trans_animate"
      />
      <div className="absolute bottom-10">
        <h2 className="w-max text-[44px] leading-[1.2] capitalize font-[600] text-primary_red text_shadow_">
          Documentary
        </h2>
        <p className="text-[18px] text_shadow_">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </section>
  );
};

export default Documentary;
