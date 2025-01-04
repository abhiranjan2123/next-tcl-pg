"use client";
import Image from "next/image";
import { whatsAppUrl,WhatsAppImage } from "../constants/constant";

const WhatsAppIcon = () => {
  return (
    <div className="w-12 h-12 bg-glassy z-50 bottom-10 right-10 fixed   rounded-full flex justify-center items-center">
        <button
          onClick={() => {
            window.open(whatsAppUrl, "_blank");
          }}
        >
            <Image src={WhatsAppImage} alt="whatsapp" className="w-10 h-10" />
        </button>
      </div>
  )
}

export default WhatsAppIcon