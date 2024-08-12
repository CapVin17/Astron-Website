import React from "react";
import { Snippet } from "@nextui-org/react";
import Link from "next/link";

export default function EmailSnppet() {
    return (
        <div className="">
            <div className="flex justify-evenly gap-2 group">
                <div className="backdrop-blur-sm mail-icon backdrop:blur-lg group-hover:bg-[#e0e0e0] bg-[#e0e0e0] md:bg-[#67ac4d]/30 lg:bg-[#67ac4d]/30 rounded-full h-10 w-10 py-2 px-[5px]">
                    <Link href="mailto:"><svg className="p-1" xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66">
                        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
                        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
                        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-10.65-14.4-7.2" />
                        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
                    </svg></Link>                    
                </div>
                <Link href="mailto:"><Snippet symbol="" className="backdrop-blur-sm h-10 hover:bg-[#67ac4d]/30 bg-[#67ac4d]/30 text-[#e0e0e0] text-sm">the companies mail</Snippet></Link>
            </div>
        </div>
    );
}

