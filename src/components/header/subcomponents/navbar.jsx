"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {

    const pathname = usePathname();
    const isActive = (route) => pathname === route;

    return (
        <>
            <div className="hidden md:block lg:block ">
                <div className="flex gap-10">
                    <Link href="/" className={`text-[#9ac34d] text-sm font-medium uppercase ${isActive("/")?"border-b border-[#9ac34d] scale-125":"border-b-0 scale-100"} p-1`}>Home</Link>
                    <Link href="/about" className={`text-[#9ac34d] text-sm font-medium uppercase ${isActive("/about")?"border-b border-[#9ac34d] scale-125":"border-b-0 scale-100"} p-1`}>About</Link>
                    <Link href="/" className={`text-[#9ac34d] text-sm font-medium uppercase ${isActive("/")?"border-b border-[#9ac34d] scale-125":"border-b-0 scale-100"} p-1`}>Services</Link>
                    <Link href="/" className={`text-[#9ac34d] text-sm font-medium uppercase ${isActive("/")?"border-b border-[#9ac34d] scale-125":"border-b-0 scale-100"} p-1`}>contact</Link>
                </div>
            </div>
        </>
    )
}