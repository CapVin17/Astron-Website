'use client'
import React, {useState} from "react";
import Image from "next/image";
import msg from "@/components/contact/assets/message.jpg"
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "../ui/button";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")

    return (
        <>
            <div className="h-full bg-white py-20 px-10 lg:px-72">
                <h1 className="text-[#38434d] text-5xl lg:text-6xl font-extrabold pb-10 uppercase">Get In Touch</h1>
                <div className="flex flex-wrap-reverse items-center justify-center md:py-10 lg:py-10 xl:py-10 2xl:py-10">
                    <div className="w-full h-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col items-start justify-center gap-5 pt-5">
                        <h1 className="text-[#38434d] text-3xl font-bold text-start bg-white uppercase">Contact us</h1>
                        <Input type="text" color="secondary" label="Name" variant="bordered" className="text-[#38434d]" value={name} onChange={(e)=>setName(e.target.value)} />
                        <Input type="email" color="secondary" label="Email *" variant="bordered" className="text-[#38434d]" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <Textarea type="text" color="secondary" label="Message *" variant="bordered" className="text-[#38434d]" required value={message} onChange={(e)=>setMessage(e.target.value)} />
                        <Button size="lg" className="text-white text-base active:scale-75 transform duration-400">Send</Button>
                    </div>
                    <div className="">
                        <Image src={msg} />
                    </div>
                </div>
            </div>
        </>
    )
}