import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

const page = () => {
  return (
    <section className="mt-16 px-14">
      <h2 className="text-[40px] leading-[1.2] capitalize font-[600] text-primary_red text-center w-max m-auto">
        Frequently Asked Questions{" "}
      </h2>
      <section className="w-[70%] m-auto mt-12">
        <div>
          <div
            className="flex box_shadow cursor-pointer hover:box_shadow_hover items-center justify-between p-7 border-l-[8px] border-primary_red rounded-lg bg-[#FCFCFE
]"
          >
            <h3 className="text-[18px]">
              What is a Bone Marrow Transplant (BMT)?
            </h3>
            <FaChevronDown className="text-2xl text-primary_red" />
          </div>
          <div className="p-7 h-[260px] bg-[#FFF0F0]">
            <h3 className="text-[32px]">
              What is a Bone Marrow Transplant (BMT)?
            </h3>
            <p className="mt-5 w-[90%] text-[#232323]">
              A BMT is a medical procedure that involves replacing or restoring
              damaged or destroyed bone marrow with healthy stem cells,
              essential for blood cell production
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
