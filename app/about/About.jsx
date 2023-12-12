"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

// const lineClamp = {lineClamp: "line-clamp-[12]"}
const About = () => {
  // const lineClamp = "line-clamp-[13] ";
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const lineClamp = isExpanded ? "" : "line-clamp-[13]";
  
  return (
    <section className="flex items-center justify-center gap-1  w-full ">
      <div className=" m-10 w-1/2">
        <Image
          src="/assets/about/about_bmt.png"
          alt="About Our BMT"
          width={547}
          height={649}
          className="w-[90%]"
        />
      </div>
      <div className="w-1/2 block h-[670px] my-auto box-border pt-[40px] pr-10 overflow-y-scroll overflow-hidden cursor-pointer">
        <p className={lineClamp}>
          <span className="w-full text-[17px] font-[300] font-lexend text-primary_dark leading-tight whitespace-break-spaces mt-4 text-justify ">
            <span className="font-[700] ">
              Stem Cell Transplantation Or Bone Marrow Transplantation (BMT)
            </span>{" "}
            is the only internationally-approved cure for sickle cell disorder,
            and Sickle Cell Foundation Nigeria (SCFN) and the Lagos University
            Teaching Hospital (LUTH) have partnered to establish a BMT Programme
            in Lagos, in order that quality, safe, affordable and life-changing
            cure for sickle cell disorder will be locally available and
            accessible to Nigerians in Nigeria.
            <span>
              This is indeed fitting as Nigeria is by far the country with the
              highest burden of sickle cell disorder in the world. Over 40
              million Nigerians are carriers of the sickle cell gene and an
              estimated 150,000 babies are born every year with sickle cell in
              the country. Sadly, 100,000 of these babies do not live to
              celebrate their 5th birthday – dying mostly from ignorance and
              lack of access to proper diagnosis, treatment and care.{" "}
            </span>
            <br />
            <br />
            <span>
              <span className="font-[700] text-primary_red ">
                Our BMT Journey:
              </span>{" "}
              <br />
              Our BMT journey started in 2011 when SCFN and LUTH partnered with
              the Mediterranean Institute of Haematology (IME) Rome, and nearly
              50 Nigerian children travelled to Italy and received free BMT.
              Unfortunately, the programme was abruptly terminated due to
              funding challenges in Italy. 
            </span>
            <br />
            <br />
            <span>
              <span className="font-[700] text-primary_red ">
                The Tripartite Partnership for BMT:
              </span>
              <br />
              It was following the abrupt cessation of our partnership with
              Rome, that SCFN and LUTH in 2017, entered into partnership with
              Vanderbilt University Medical Centre as our technical partners,
              for the establishment of our own BMT Centre in Lagos, Nigeria. The
              centre is a state-of-the-art facility and it will be the
              first-ever, comprehensive BMT centre for Sickle Cell Disease in
              all of Africa – spanning the entire value chain of the Bone Marrow
              Transplantation process – from HLA Typing for selection of the
              best Donor for the patient, through harvesting of the marrow to
              its infusion into the patient, and finally, a Post-BMT Clinic
              where patients can continue to be followed up after the procedure.
            </span>
            <br />
            <br />
            <span>
              A Public-Private-Partnership, our BMT programme brings quality,
              safe and more affordable cure for sickle cell disorder to
              Nigerians in Nigeria, for Africans and indeed for the world as a
              whole.
            </span>
            <br />
            <br />
            <span>
              The SCFN/LUTH BMT Centre was officially opened January 2021 and it
              is heartwarming to know that the SCFN/LUTH BMT Centre will not
              only provide safe, quality and affordable cure for sickle cell
              disorder, but also serve as a Centre of Excellence for BMT
              training in Africa. In addition, it will usher a new dawn for
              Nigeria and the concept of Reverse Medical Tourism as Nigeria will
              be hosting patients from other countries travelling in to access
              SAFE, QUALITY, MORE AFFORDABLE BONE MARROW TRANSPLANTATION AT THE
              SCFN/LUTH BMT CENTRE, LAGOS.
            </span>
          </span>
        </p>
        <button
          className="font-bold text-primary_red text-[18px] pl-2 cursor-pointer"
          onClick={toggleExpand}
        >
          {!isExpanded ? "Read more" : "See Less"}
        </button>
      </div>
    </section>
  );
};

export default About;
