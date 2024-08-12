import React from "react";
import Social from "./subcomponents/social";
import EmailSnppet from "./subcomponents/emailSnippet";

export default async function Footer() {
    return (
        <>
            <div className="bg-white">
                <div className="flex flex-col lg:flex-row mx-10 lg:mx-96 py-10 bg-[#38434d] rounded-t-3xl">
                    <div className="w-full lg:w-1/2 flex flex-col gap-1.5 items-center justify-center">
                        <h1 className="text-white text-2xl font-medium mb-3">Links</h1>
                        <h2 className="text-[#eeeeee] hover:text-[#7e7e7e] duration-300 text-sm font-normal">Contact us</h2>
                        <h2 className="text-[#eeeeee] hover:text-[#7e7e7e] duration-300 text-sm font-normal">Blogs</h2>
                        <h2 className="text-[#eeeeee] hover:text-[#7e7e7e] duration-300 text-sm font-normal">Privacy Policy</h2>
                        <h2 className="text-[#eeeeee] hover:text-[#7e7e7e] duration-300 text-sm font-normal">Terms of Service</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 pt-5 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
                        <Social />
                        <EmailSnppet />
                    </div>
                </div>
            </div>
        </>
    )
}