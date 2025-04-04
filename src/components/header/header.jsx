import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/header/assets/logo.png"
import Navbar from "./subcomponents/navbar";
import Hambar from "./subcomponents/hambar";

export default function Header(){
    return(
        <>
            <div className="w-full fixed z-50 flex items-center justify-between py-2 px-5 lg:px-20 backdrop-blur-2xl">
                <div className="flex gap-2">
                    <Image className="h-10 w-10" src={Logo}/>
                    <div className="flex flex-col items-center justify-center mt-1">
                        <h5 className="text-[#67ac4d] text-[20px] leading-5 font-bold">ASTRON</h5>
                        <h5 className="text-[#9ac34d] text-[8px] font-medium">FINANCIAL ADVISERS</h5>
                    </div>
                </div>
                <Navbar/>
                <Hambar/>
            </div>
        </>
    )
}