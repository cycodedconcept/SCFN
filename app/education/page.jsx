import Link from "next/link";
import React from "react";
import Button from "../components/Lcomp/Button";
import Badge from "../components/Lcomp/Badge";
import SuccessStory from "../components/Lcomp/SuccessStory";
import LatestNews from "../components/Hcomp/LatestNews";

const page = () => {
  return (
    <>
      <section className="h-max flex items-center justify-center px-14">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="w-[80%] text-[44px] leading-[1.2] capitalize font-extrabold text-primary_red">
            Understanding stem cell transplantation
            <span className="text-[22px] font-extrabold ml-2 block">
              (Bone marrow transplantation)
            </span>
          </h2>
          <p className="w-[80%] text-[20px] leading-normal mt-8">
            Access in-depth disease information on conditions like Sickle Cell
            Disease and Leukemia treated with BMT. Stay informed and engaged
            with upcoming webinars and workshops, fostering knowledge of BMT and
            related health topics.
          </p>
          <Button
            classes="px-[75px] py-[14px] bg-primary_red font-lexend font-bold rounded-[4px] hover:bg-primary_red/90 trans_animate tracking-wide mt-8 w-max text-white"
            text="Donate Now"
          />
        </div>
        <div className="w-1/2 h-full p-10 pl-28 relative">
          <img
            src="./assets/bmt/red_slash3.png"
            alt=""
            className="object-cover"
          />
          <img
            src="./assets/bmt/happy-black-male-doctor-using-tablet-computer-technology-medicine-concept (1).png"
            alt=""
            className="object-cover absolute bottom-5 w-[80%] h-auto"
          />
        </div>
      </section>
      <Badge />
      <div className="flex items-center justify-center px-14 gap-20 mt-16 my-28">
        <div className="w-1/2 h-full">
          <img
            src="./assets/bmt/stc2.png"
            alt=""
            className="h-full w-max object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-[44px] w-[90%] leading-[1.2] capitalize font-[600] text-primary_dark">
            What Is{" "}
            <span className="text-primary_red">
              Bone Marrow Transplantation
            </span>{" "}
            (BMT)?
          </h2>
          <div className="w-full text-[20px] leading-normal mt-6">
            <p className="mt-7">
              Bone marrow transplantation (BMT) is a medical procedure that
              replaces damaged or diseased bone marrow with healthy bone marrow.
              Bone marrow is the spongy tissue inside bones that produces blood
              cells. BMT can be used to treat a variety of diseases, including
              leukemia, lymphoma, and sickle cell disease. One of the most
              important advancements in BMT technology has been the development
              of new conditioning regimens. Conditioning regimens are the drugs
              or radiation therapy that are used to destroy the diseased bone
              marrow before the transplant. New conditioning regimens have been
              shown to be more effective at destroying diseased bone marrow
              while causing fewer side effects.
            </p>
            <p className="mt-7">
              Another important advancement in BMT technology has been the
              development of new graft-versus-host disease (GVHD) prophylaxis
              regimens. GVHD is a serious complication of BMT that can occur
              when the donor&apos;s bone marrow attacks the recipient&apos;s
              body. New GVHD prophylaxis regimens have been shown to be more
              effective at preventing GVHD without increasing the risk of other
              complications. In addition to these advancements in drug therapy,
              there have also been a number of technological advancements in
              BMT. These advancements include the development of new stem cell
              collection methods, the use of gene therapy to improve
              engraftment, and the use of robotics to perform BMT procedures.
            </p>
            <p className="mt-7">
              As a result of these advancements, BMT is now a more effective and
              safer treatment for many patients. However, it is important to
              note that BMT is still a complex procedure with a number of risks
              and side effects. Patients should carefully consider the risks and
              benefits of BMT before making a decision about treatment.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-[40px] leading-[1.2] capitalize font-bold text-primary_red text-center">
            Diseases Treated with BMT
          </h2>
          <p className="w-[60%] text-[20px] m-auto text-center mt-3 leading-[1.3]">
            Bone marrow transplant (BMT) is a medical procedure that replaces
            damaged or diseased bone marrow with healthy bone marrow. Bone
            marrow is the spongy tissue inside bones that produces blood cells.
            BMT can be used to treat a variety of diseases, including:
          </p>
        </div>
        <div className="mt-16">
          <div className="w-[80%] m-auto grid grid-cols-3 gap-10">
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/bmt1.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[18px] capitalize font-bold mb-5">
                  Sickle cell disease
                </span>
                <p>
                  Sickle cell disease is a genetic blood disorder that causes
                  red blood cells to sickle or become crescent-shaped. Sickle
                  cells can block blood flow to the body&apos;s tissues and
                  organs, which can cause pain, organ damage, and stroke. BMT is
                  an internationally approved curative treatment for
                  sickle cell disease.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/bmt2.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[18px] capitalize font-bold mb-5">
                  Leukemia disease{" "}
                </span>
                <p>
                  Leukemia is a cancer of the blood cells. There are many
                  different types of leukemia, but they all start in the bone
                  marrow. Leukemias are caused by changes in the DNA of blood
                  cells that cause them to grow and divide uncontrollably. BMT
                  is a common treatment for leukemia.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/bmt3.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[18px] capitalize font-bold mb-5">
                  Lymphomas disease{" "}
                </span>
                <p>
                  Lymphomas are cancers of the lymphatic system, which is a
                  network of vessels and nodes that helps fight infection. There
                  are two main types of lymphoma: Hodgkin lymphoma and
                  non-Hodgkin lymphoma. BMT is sometimes used to treat lymphoma
                  that has not responded to other treatments.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 w-[80%] m-auto grid grid-cols-3 gap-10">
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/bmt4.png" alt="" className="w-full" />
              <div className="flex flex-col p-5">
                <span className="text-[18px] capitalize font-bold mb-5">
                  Aplastic anemia disease{" "}
                </span>
                <p>
                  Aplastic anemia is a condition in which the body does not
                  produce enough blood cells. This can cause fatigue, pale skin,
                  shortness of breath, and an increased risk of infection. BMT
                  is a potentially curative treatment for aplastic anemia.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px] invisible">
              <img src="./assets/bmt/bmt2.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[18px] capitalize font-bold mb-5">
                  Leukemia disease{" "}
                </span>
                <p>
                  Leukemia is a cancer of the blood cells. There are many
                  different types of leukemia, but they all start in the bone
                  marrow. Leukemias are caused by changes in the DNA of blood
                  cells that cause them to grow and divide uncontrollably. BMT
                  is a common treatment for leukemia.
                </p>
              </div>
            </div>
            <div className="box_shadow rounded-[12px]">
              <img src="./assets/bmt/bmt5.png" alt="" />
              <div className="flex flex-col p-5">
                <span className="text-[18px] capitalize font-bold mb-5">
                  Immune deficiency disorders{" "}
                </span>
                <p>
                  Immune deficiency disorders are a group of diseases in which
                  the immune system does not work properly. This can make it
                  difficult for the body to fight infection. BMT is sometimes
                  used to treat immune deficiency disorders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-max flex items-center justify-center px-14 mt-28">
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="w-[80%] text-[44px] leading-[1.2] capitalize font-extrabold text-primary_dark">
            How is <span className="text-primary_red">Stem Cell</span>{" "}
            Transplantation <span className="text-primary_red">(BMT) Used</span>{" "}
            to Treat <span className="text-primary_red">Disease</span>{" "}
          </h2>
          <div className="text-[20px] leading-normal mt-3">
            BMT is used to replace diseased bone marrow with healthy bone
            marrow. The healthy bone marrow can then produce healthy blood
            cells. There are two main types of BMT:
            <ul className="p-8 px-10">
              <li className="list-disc">
                <b>Autologous BMT</b> uses the patient&apos;s own bone marrow. The
                bone marrow is collected from the patient and then stored. The
                patient then receives high-dose chemotherapy or radiation
                therapy to destroy the diseased bone marrow. The stored bone
                marrow is then infused back into the patient.
              </li>

              <li className="list-disc mt-8">
                <b>Allogeneic BMT</b> uses bone marrow from a donor. The donor
                must have a tissue type that is compatible with the patient&apos;s
                tissue type. The patient then receives high-dose chemotherapy or
                radiation therapy to destroy the diseased bone marrow. The
                donor&apos;s bone marrow is then infused into the patient.
              </li>
            </ul>
            BMT is a complex procedure with a number of risks and side effects.
            However, it can be a life-saving treatment for people with certain
            diseases.
          </div>
        </div>
        <div className="w-1/2 h-full p-10 pl-28 relative">
          <img
            src="./assets/bmt/red_slash3.png"
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <SuccessStory />
      <LatestNews />
    </>
  );
};

export default page;
