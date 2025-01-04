"use client";
import React from 'react'

const BookVisitFixedIcon = () => {
  return (
    <div className="fixed w-8 h-36 z-50 rounded-tl-lg rounded-bl-lg bg-[#1B6A5A]  top-1/2 right-0 flex justify-center items-center">
    <button
      onClick={() => {
        window.open("https://forms.gle/YSA8GcK2eq316mTy9");
      }}
    >
      <p className="text-white font-mono font-bold rotate-90 text-nowrap text-[10px] ">
        Schedule a Visit &#8594;{" "}
      </p>
    </button></div>
  )
}

export default BookVisitFixedIcon