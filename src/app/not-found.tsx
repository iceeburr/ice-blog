"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const NotFoundPage = () => {
  const raysRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raysNode = raysRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (raysNode) {
        const { clientX, clientY } = event;
        const xPercent = (clientX / window.innerWidth) * 5;
        const yPercent = (clientY / window.innerHeight) * 5;
        gsap.to(raysNode, {
          backgroundPosition: `${xPercent}% ${yPercent}%`,
          duration: 0.5,
          ease: "power1.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.killTweensOf(raysNode);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={raysRef}
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
      <footer className="w-full p-4 absolute bottom-0">
        <div className="inline-block p-4">
          <Link href="/" className="text-4xl font-rowdies not-found-logo">
            iceeburr.ru
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default NotFoundPage;
