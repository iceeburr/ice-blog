"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const NotFoundPage = () => {
  const jumboRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const jumboNode = jumboRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (jumboNode) {
        const { clientX, clientY } = event;
        const xPercent = (clientX / window.innerWidth) * 5;
        const yPercent = (clientY / window.innerHeight) * 5;
        gsap.to(jumboNode, {
          backgroundPosition: `${xPercent}% ${yPercent}%`,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.killTweensOf(jumboNode);
    };
  }, []);

  useEffect(() => {
    const link = linkRef.current;

    const handleMouseEnter = () => {
      gsap.to(link, {
        "--underline-width": "100%",
        "--underline-left": "0",
        duration: 0.5,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(link, {
        "--underline-width": "0",
        "--underline-left": "50%",
        duration: 0.5,
        ease: "power1.out",
      });
    };

    if (link) {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (link) {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={jumboRef}
          className="not-found-rays absolute -inset-10 opacity-50"
        ></div>
      </div>
      <div className="p-8 bg-white bg-opacity-10 font-varela-round backdrop-filter backdrop-blur-lg rounded-xl shadow-lg text-white w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h1 className="text-3xl mb-4">Error 404 - Page not found.</h1>
        <p className="mb-4">
          You tried to access a page that doesn&apos;t exist. Maybe you made a
          typo in the link.
        </p>
        <Link href="/" className="not-found-return text-blue-300">
          Go to landing page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
