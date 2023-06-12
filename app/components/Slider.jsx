"use client";
import Image from "next/image";
import React, { useState } from "react";
const sliderData = [
  {
    id: 1,
    url: "/banner/1.jpg",
  },
  {
    id: 2,
    url: "/banner/2.jpeg",
  },
  {
    id: 3,
    url: "/banner/3.jpeg",
  },
  {
    id: 4,
    url: "/banner/4.jpeg",
  },
];

const Slider = () => {
  let [index, setIndex] = useState(0);
  return (
    <div className="flex relative">
      <button
        className="absolute left-0 top-16 text-black font-black py-10 px-3 rounded bg-white"
        onClick={() => setIndex((index > 0)? (index -= 1) : ((index = sliderData.length - 1)))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <Image
        className="w-full"
        width={1000}
        height={300}
        src={sliderData[index].url}
      />
      <button
        className="absolute right-0 top-16 text-black font-black py-10 px-3 rounded bg-white"
        onClick={() => setIndex((index < sliderData.length - 1)? (index += 1) : (index = 0))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
