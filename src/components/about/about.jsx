import React from "react";
import Image from "next/image";
import about from "@/components/about/assets/about.jpg"
import { Button } from "../ui/button";

export default async function About() {
    return (
        <>
            <div className="bg-white flex items-center justify-center gap-16 py-10 px-40">
                <div className="flex items-center justify-end">
                    <Image className="h-96 w-96" src={about} />
                </div>
                <div className="flex flex-col items-center justify-start w-[40%]">
                    <h1 className="text-[#38434d] text-4xl font-bold mb-5">ABOUT US</h1>
                    <p className="text-[#2f2e2e] text-base font-medium mb-5">You've got the killer idea...the best team...and the right execution strategy. You are just missing one thing - clean books. That's where we come in.</p>
                    <p className="text-[#2f2e2e] text-base font-bold mb-5">We help companies understand the bigger picture of their company's financials, allowing them to effectively report to their board, and continue to raise capital.</p>
                    <p className="text-[#2f2e2e] text-base font-medium mb-5">We help <span className="font-bold">businesses</span> cleanup their books, and implement <span className="font-bold">effective</span> and <span className="font-bold">scalable Accounting</span> & Finance solutions, so that the founders can do what they do best...run their company.</p>
                    <p className="text-[#2f2e2e] text-base font-medium mb-5">Our team of dedicated <span className="font-bold">professionals</span> tackle each area of your company's financials, from implementing your first <span className="font-bold">accounting software</span>, to building a rockstar <span className="font-bold">financial model</span> that will woo investors.</p>
                    <p className="text-[#2f2e2e] text-base font-medium mb-5"><span className="font-bold">We love companies</span>, and we love numbers - I guess you can call it a match made in heaven.</p>
                    <div className="py-10 flex items-center justify-start w-full">
                        <Button size="lg" className="text-white text-base active:scale-75 transform duration-400">Book a free consultation</Button>
                    </div>
                </div>
            </div>
        </>
    )
}