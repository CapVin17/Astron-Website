import React from "react";
import { Button } from "../ui/button";

export default async function Founder() {
    return (
        <>
            <h1 className="text-[#38434d] text-4xl font-bold pb-5 text-center bg-white">Meet our Founder</h1>
            <div className="bg-white flex items-start justify-center gap-10 py-10 px-80">
                <div className="flex items-start justify-end">
                    <div className="h-60 w-60 rounded-2xl bg-black"></div>
                </div>
                <div className="flex flex-col items-start justify-center w-1/2">
                    <h4 className="text-[#38434d] text-2xl font-bold text-start">Anurag</h4>
                    <h6 className="text-[#67ac4d] text-lg font-bold mb-2 text-start">Founder & CEO</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sunt velit iste repellat reiciendis pariatur nemo aperiam eligendi quaerat ex, delectus adipisci expedita qui culpa reprehenderit quis harum perferendis, quo accusantium. Recusandae optio quae rerum consectetur, sint excepturi natus vitae maxime tenetur enim necessitatibus, reprehenderit ut! Sequi nisi tempora sint.</p>
                    <div className="py-10 flex items-center justify-start w-full">
                        <Button size="lg" className="text-white text-base active:scale-75 transform duration-400">Book a free consultation</Button>
                    </div>
                </div>
            </div>
        </>
    )
}