import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/header/assets/logo.png"
import Navbar from "./subcomponents/navbar";

export default function Header(){
    return(
        <>
            <div className="w-full fixed z-50 flex items-center justify-between py-2 px-5 lg:px-20">
                <div className="flex gap-2">
                    <Image className="h-10 w-10" src={Logo}/>
                    <div className="flex flex-col">
                        <h5 className="text-[#67ac4d] text-xl font-bold">ASTRON</h5>
                        <h5 className="text-[#9ac34d] text-[8px] font-medium">FINANCIAL ADVISERS</h5>
                    </div>
                </div>
                <Navbar/>
            </div>
        </>
    )
}