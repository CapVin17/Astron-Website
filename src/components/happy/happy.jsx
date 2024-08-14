"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default async function Happy() {

    const left = {
        hidden: { x: -100, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.6,
                ease: "easeInOut",
            },
        }),
    };
    const right = {
        hidden: { x: 100, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 0.6,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <>
            <div className="bg-white flex items-center justify-center text-center">
                <h1 className="text-[#38434d] text-4xl font-bold mb-5 uppercase">Happy Customers</h1>
            </div>
            <div className="bg-white pt-5 pb-20 px-10 lg:px-[420px] grid grid-cols-1 lg:grid-cols-2 gap-2.5 lg:gap-5">
                <motion.div className="col-span-1 row-span-1 h-40 w-80 border border-[#909090]/50 rounded-2xl p-5 mx-5 my-2 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 md:my-0 lg:my-0 xl:my-0 2xl:my-0"
                    variants={left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}>
                    <div className="flex items-center justify-start gap-5 mb-5">
                        <div className="h-10 w-10 bg-black rounded-full"></div>
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="text-[#38434d] text-sm font-bold">Lorem, ipsum.</h1>
                            <h1 className="text-[#38434d] text-xs font-semibold">Co-Founder & CEO  Lorem, ipsum.</h1>
                        </div>
                    </div>
                    <p className="text-[#38434d] text-xs font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum placeat adipisci vero officiis pariatur inventore unde quam nam eum?</p>
                </motion.div>
                <motion.div className="col-span-1 row-span-2 h-[340px] w-80 border border-[#909090]/50 rounded-2xl p-5 mx-5 my-2 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 md:my-0 lg:my-0 xl:my-0 2xl:my-0"
                    variants={right}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}>
                    <div className="flex items-center justify-start gap-5 mb-5">
                        <div className="h-10 w-10 bg-black rounded-full"></div>
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="text-[#38434d] text-sm font-bold">Lorem, ipsum.</h1>
                            <h1 className="text-[#38434d] text-xs font-semibold">Co-Founder & CEO  Lorem, ipsum.</h1>
                        </div>
                    </div>
                    <p className="text-[#38434d] text-xs font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur inventore unde placeat, nesciunt enim sunt repudiandae tempore tenetur vel fugiat! Voluptatum vitae odio ratione amet, cum quia veniam beatae molestiae eius, perferendis quidem doloribus, vero velit nesciunt quod perspiciatis laboriosam?</p>
                </motion.div>
                <motion.div className="col-span-1 row-span-1 h-40 w-80 border border-[#909090]/50 rounded-2xl p-5 mx-5 my-2 md:mx-0 lg:mx-0 xl:mx-0 2xl:mx-0 md:my-0 lg:my-0 xl:my-0 2xl:my-0"
                    variants={left}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}>
                    <div className="flex items-center justify-start gap-5 mb-5">
                        <div className="h-10 w-10 bg-black rounded-full"></div>
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="text-[#38434d] text-sm font-bold">Lorem, ipsum.</h1>
                            <h1 className="text-[#38434d] text-xs font-semibold">Co-Founder & CEO  Lorem, ipsum.</h1>
                        </div>
                    </div>
                    <p className="text-[#38434d] text-xs font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatum placeat adipisci vero officiis pariatur inventore unde quam nam eum?</p>
                </motion.div>
            </div>
        </>
    )
}