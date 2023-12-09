import React from "react";
import Button from "../components/Lcomp/Button";
import Link from "next/link";
import { CiMail, CiTwitter } from "react-icons/ci";
import { PiFacebookLogo, PiInstagramLogoLight } from "react-icons/pi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const page = () => {
  return (
    <section className="h-max flex items-center justify-center px-14 gap-24 mt-10">
      <div className="w-1/2 h-full p-10 pl-0">
        <img
          src="./assets/bmt/smiling_family.png"
          alt=""
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2">
        <h2 className="w-full text-[40px] leading-[1.2] capitalize font-[600] text-primary_dark">
          Reach Out To Us
        </h2>
        <div className="w-[90%] text-[18px] leading-normal mt-4">
          <ul className="flex flex-col w-max space-y-7">
            <Link
              href="tel:+2347086622570"
              className="flex items-center justify-start w-full h-max gap-2"
            >
              <MdOutlinePhoneInTalk className="text-2xl" />

              <div>
                <span className="flex items-center justify-center">
                  <span>+234 708 662 2570 - </span>
                  <span className="capitalize font-bold">
                    &nbsp;SEYE KOLAWOLE
                  </span>
                </span>
              </div>
            </Link>
            <Link
              href="https://twitter.com/sicklecellnig"
              target="_blank"
              className="flex items-center justify-start w-full h-max gap-2"
            >
              <CiTwitter className="text-3xl" />

              <div className="w-full">
                <span>
                  <span className="">sicklecellnig</span>
                </span>
              </div>
            </Link>
            <Link
              href="https://instagram.com/sicklecellfoundationng?igshid=MzMyNGUyNmU2YQ=="
              target="_blank"
              className="flex items-center justify-start w-full h-max gap-2"
            >
              <PiInstagramLogoLight className="text-3xl" />

              <div className="w-full">
                <span>
                  <span className="">sicklecellfoundationng</span>
                </span>
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/sicklecellfoundation?mibextid=ZbWKwL"
              target="_blank"
              className="flex items-center justify-start w-full h-max gap-2"
            >
              <PiFacebookLogo className="text-3xl" />

              <div className="w-full">
                <span>
                  <span className="">sicklecellfoundation</span>
                </span>
              </div>
            </Link>
            <Link
              href="mailto:info@sicklecellfoundation.com"
              target="_blank"
              className="flex items-center justify-start w-full h-max gap-2"
            >
              <CiMail className="text-3xl" />

              <div className="w-full">
                <span>
                  <span className="">sicklecellfoundation</span>
                </span>
              </div>
            </Link>
          </ul>
        </div>
        <div className="mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.043488074915!2d3.3517910742182466!3d6.5161799934763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c372f833edf%3A0x2aac8965d8776cf8!2sSickle%20Cell%20Foundation%20Nigeria%20Idi-Araba%20Surulere%20Lagos!5e0!3m2!1sen!2sng!4v1702041884187!5m2!1sen!2sng"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex items-start justify-start gap-3 w-[80%] mt-10">
            <CiLocationOn className="text-6xl font-bold" />
            <p className="text-[18px]">
              National Sickle Cell Centre,Opp Lagos University Teaching
              Hospital(LUTH),Ishaga Road, Idi-Araba,Surulere, Lagos. Nigeria.
              P.O Box 3463, Surulere, Lagos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
