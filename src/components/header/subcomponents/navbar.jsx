import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="hidden md:block lg:block ">
                <div className="flex gap-10">
                    <Link href="./" className="text-[#2b2b2b] text-sm font-medium uppercase">Home</Link>
                    <Link href="./" className="text-[#2b2b2b] text-sm font-medium uppercase">About</Link>
                    <Link href="./" className="text-[#2b2b2b] text-sm font-medium uppercase">Services</Link>
                    <Link href="./" className="text-[#2b2b2b] text-sm font-medium uppercase">contact</Link>
                </div>
            </div>
        </>
    )
}