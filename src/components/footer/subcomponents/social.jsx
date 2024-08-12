import React from "react";
import Link from "next/link";
import Image from "next/image";
import li from "@/components/footer/assets/linkedin.svg"
import gh from "@/components/footer/assets/github.svg"
import ig from "@/components/footer/assets/instagram.svg"
import x from "@/components/footer/assets/x.svg"
import gmail from "@/components/footer/assets/gmail.svg"
import discord from "@/components/footer/assets/discord.svg"
import telegram from "@/components/footer/assets/telegram.svg"

export default function Social() {
    return (
        <div>
            <div className="flex gap-5">
                <Link className="duration-500 backdrop-blur-sm bg-blue-800 md:bg-[#7e7e7e]/30 lg:bg-[#7e7e7e]/30 hover:bg-blue-800 rounded-full p-2 h-10 w-10" href="./https://www.linkedin.com/company/delhi-startup-village/?viewAsMember=true"><Image className="bg-transparent" src={li}/></Link>
                <Link className="duration-500 backdrop-blur-sm bg-gray-800 md:bg-[#7e7e7e]/30 lg:bg-[#7e7e7e]/30 hover:bg-gray-800 rounded-full p-2 h-10 w-10" href="./"><Image className="bg-transparent" src={x}/></Link>
                <Link className="duration-500 backdrop-blur-sm bg-gradient-to-bl from-blue-500 via-red-500 to-yellow-500 lg:from-[#7e7e7e]/30 md:from-[#7e7e7e]/30 lg:via-[#7e7e7e]/30 md:via-[#7e7e7e]/30 lg:to-[#7e7e7e]/30 md:to-[#7e7e7e]/30 hover:from-blue-500 hover:via-red-500 via-50% hover:to-yellow-500 rounded-full p-2 h-10 w-10" href="https://www.instagram.com/hotel_moksha?igsh=NnBxZnNiaDF4bzA="><Image className="bg-transparent" src={ig}/></Link>
            </div>
        </div>
    )
}