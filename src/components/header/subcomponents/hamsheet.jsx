"use client"
import React from "react";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function HamSheet() {

    const handleLinkClick = () => {
        document.querySelector('[data-state="open"]').click();
    };

    return (
        <div className="absolute z-[100]">
            <Sheet variant="right">
                <SheetTrigger>
                    <Menu color="#9ac34d" size={"40"}/>
                </SheetTrigger>
                <SheetContent className="bg-transparent backdrop-blur-[8px]">
                    <SheetHeader>
                        <SheetDescription className="pt-20 px-10 flex flex-col gap-4">
                            <Link onClick={handleLinkClick} href="/"><Button className="w-full items-center justify-start text-lg flex backdrop-blur-lg bg-clip-padding backdrop-filter uppercase text-[#9ac34d]" variant="outline ">Home</Button></Link>
                            <Link onClick={handleLinkClick} href="/about"><Button className="w-full items-center justify-start text-lg flex backdrop-blur-lg bg-clip-padding backdrop-filter uppercase text-[#9ac34d]" variant="outline ">About</Button></Link>
                            <Link onClick={handleLinkClick} href="/service"><Button className="w-full items-center justify-start text-lg flex backdrop-blur-lg bg-clip-padding backdrop-filter uppercase text-[#9ac34d]" variant="outline ">Services</Button></Link>
                            <Link onClick={handleLinkClick} href="/calculator"><Button className="w-full items-center justify-start text-lg flex backdrop-blur-lg bg-clip-padding backdrop-filter uppercase text-[#9ac34d]" variant="outline ">Calculator</Button></Link>
                            <Link onClick={handleLinkClick} href="/blog"><Button className=" w-full items-center justify-start text-lg flex backdrop-blur-lg bg-clip-padding backdrop-filter uppercase text-[#9ac34d]" variant="outline ">Blog</Button></Link>
                            <Link onClick={handleLinkClick} href="./contact"><Button className=" w-full items-center justify-start text-lg flex backdrop-blur-lg bg-clip-padding backdrop-filter uppercase text-[#9ac34d]" variant="outline ">Contact</Button></Link>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

        </div>
    );
}