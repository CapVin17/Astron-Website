import React from "react";
import Image from "next/image";
import bg from "@/components/hero/assets/bg.jpg"
import { Button } from "../ui/button";

export default async function Hero(){
    return(
        <>
            <div className="fixed -z-50">
                <Image className="h-screen w-screen" src={bg}/>
            </div>
            <div className="h-full bg-black/70 pt-32 pb-20 pl-10 lg:pl-40">
                <h1 className="text-xl lg:text-6xl font-bold text-white">SCALE WITH <span className="text-[#9ac34d]">FINANCE</span> & <span className="text-[#9ac34d]">ACCOUNTING</span></h1>
                <h2 className="text-xs lg:text-2xl leading-5 lg:leading-9 text-white font-normal w-3/4 lg:w-2/3 pt-5 lg:pt-10">We help <span className="text-[#9ac34d]">businesses scale</span> by supporting your <span className="text-[#9ac34d]">Finance & Accounting</span> needs with <span className="text-[#9ac34d]">Tech & Expertise</span></h2>
                <div className="py-5 lg:py-10">
                    <Button size="lg" className="hidden lg:block xl:block 2xl:block text-white text-xs lg:text-base active:scale-75 transform duration-400">Book a free consultation</Button>
                    <Button size="sm" className="lg:hidden xl:hidden 2xl:hidden text-white text-xs lg:text-base active:scale-75 transform duration-400">Book a free consultation</Button>
                </div>
            </div>
        </>
    )
}