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
                    <Link href="/" className={`text-sm uppercase ${isActive("/")?"text-[#67ac4d] font-bold scale-125":"text-[#9ac34d] font-medium scale-100"} p-1`}>Home</Link>
                    <Link href="/about" className={`text-sm uppercase ${isActive("/about")?"text-[#67ac4d] font-bold scale-125":"text-[#9ac34d] font-medium scale-100"} p-1`}>About</Link>
                    <Link href="/service" className={`text-sm uppercase ${isActive("/service")?"text-[#67ac4d] font-bold scale-125":"text-[#9ac34d] font-medium scale-100"} p-1`}>Services</Link>
                    <Link href="/calculator" className={`text-sm uppercase ${isActive("/calculator")?"text-[#67ac4d] font-bold scale-125":"text-[#9ac34d] font-medium scale-100"} p-1`}>Calculator</Link>
                    <Link href="/blog" className={`text-sm uppercase ${isActive("/blog")?"text-[#67ac4d] font-bold scale-125":"text-[#9ac34d] font-medium scale-100"} p-1`}>Blog</Link>
                    <Link href="/contact" className={`text-sm uppercase ${isActive("/contact")?"text-[#67ac4d] font-bold scale-125":"text-[#9ac34d] font-medium scale-100"} p-1`}>contact</Link>
                    <Link href="/careers" className={`text-sm uppercase ${isActive("/contact")?"text-[#67ac4d] font-bold scale-125":"text-[#9ac34d] font-medium scale-100"} p-1`}>career</Link>
                </div>
            </div>
        </>
    )
}