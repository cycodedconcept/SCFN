"use client";

import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Button from "../Lcomp/Button";

const Navbar = () => {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [showChevronUp, setShowChevronUp] = useState(false); // Added state for chevron direction
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set a threshold value for scroll position when you want the opacity change to occur
      const threshold = 50; // Adjust this value according to your design

      if (scrollPosition > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowMoreDropdown(true);
    setShowChevronUp(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMoreDropdown(false);
      setShowChevronUp(false);
    }, 200); // Adjust this delay (in milliseconds) as needed
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowMoreDropdown(false);
      setShowChevronUp(false);
    }, 200);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const pathname = usePathname();

  return (
    <nav
      className={`bg-primary_dark px-14 py-3 grid_col-fix text-[#fffff2] w-full text-[16.5px] sticky top-0 z-50 ${
        isScrolled ? "opacity-[0.98]" : "" // Apply opacity class based on scroll state
      }`}
    >
      <Link href="/">
        <div>
          <img src="./assets/bmt/Group 20653.png" alt="BMT Logo" className="" />
        </div>
      </Link>

      <ul className="flex items-center justify-center gap-12 group:cursor-pointer font-lexend w-full ml-10">
        <Link
          href="/about"
          className={
            pathname == "/about"
              ? "active_class"
              : "hover:text-slate-200 duration-200 transition-all ease-linear w-max"
          }
        >
          About Us
        </Link>
        <Link
          href="/services"
          className={
            pathname == "/services"
              ? "active_class"
              : "hover:text-slate-200 duration-200 transition-all ease-linear w-max"
          }
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={
            pathname == "/contact"
              ? "active_class"
              : "hover:text-slate-200 duration-200 transition-all ease-linear w-max"
          }
        >
          Contact Us
        </Link>
        <div
          className="cursor-pointer hover:text-slate-200 duration-200 transition-all ease-linear w-max"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          onClick={() => {
            setShowMoreDropdown(!showMoreDropdown);
            setShowChevronUp(!showChevronUp); // Toggle chevron direction on click
          }}
        >
          <div className="flex items-center justify-center gap-3">
            <span>More</span>
            {showChevronUp ? <FaChevronUp /> : <FaChevronDown />}{" "}
            {/* Render chevron based on state */}
          </div>
          <div
            className={`flex flex-col bg-white text-primary_dark font-lexend p-8 font-normal rounded-[16px] trans_animate space-y-4 ${
              showMoreDropdown ? "show_more_nav" : "hidden"
            }`}
          >
            <Link
              href="/donation"
              className={
                pathname == "/donation"
                  ? "active_class"
                  : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
              }
            >
              Donation
            </Link>
            <Link
              href="/education"
              className={
                pathname == "/education"
                  ? "active_class"
                  : "duration-200 transition-all ease-linear w-max"
              }
            >
              Education & Awareness
            </Link>
            <Link
              href="/research_inno"
              className={
                pathname == "/research_inno"
                  ? "active_class"
                  : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
              }
            >
              Research & Innovation{" "}
            </Link>
            <Link
              href="/patient-info"
              className={
                pathname == "/patient-info"
                  ? "active_class"
                  : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
              }
            >
              Patient Information
            </Link>
            <Link
              href="/faq"
              className={
                pathname == "/faq"
                  ? "active_class"
                  : "hover:text-slate-700 duration-200 transition-all ease-linear w-max"
              }
            >
              FAQ{" "}
            </Link>
          </div>
        </div>
      </ul>

      <div className="w-max pl-24">
        <Link href="/donation">
          <Button
            classes="px-[28px] py-[8px] bg-primary_red font-lexend font-bold rounded-[4px] text-[15px] hover:bg-primary_red/80 trans_animate"
            text="Donate Now"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
