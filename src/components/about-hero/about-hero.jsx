import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/components/about-hero/assets/logo.png"

export default async function AboutHero(){
    return(
        <>
            <div className="h-full bg-white pt-20 px-10 lg:px-72">
                <h1 className="text-[#38434d] text-5xl lg:text-6xl font-extrabold mb-10">About Us</h1>
                <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-5 pb-20 border-b-[0.1px] border-[#38434d]/30">
                    <div className="h-full w-3/4 flex items-center justify-center"><Image className="h-40 w-40" src={logo}/></div>
                    <div className="text-[#38434d] text-sm md:text-lg lg:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vel temporibus magni molestiae repellat voluptate doloremque saepe fugit consequuntur numquam, ducimus esse aperiam. Quisquam amet consectetur voluptates reprehenderit obcaecati atque maiores tempora voluptate corporis aperiam vel impedit tempore blandit iis alias, rerum veniam labore, et corrupti libero nostrum ab? Consectetur, aspernatur!</div>
                </div>
            </div> 
            <div className="bg-white py-20 px-10 lg:px-72">
                <div className="text-[#38434d] text-3xl font-bold text-center bg-white"> Meet The Team</div>   
            </div>      
        </>
    )
}