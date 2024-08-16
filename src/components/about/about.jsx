"use client";
import React from "react";
import Image from "next/image";
import about from "@/components/about/assets/about.jpg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function About() {
    
    const imageVariants = {
        hidden: { scale: 0, x: -100, y: -100,opacity:0 },
        visible: (i) => ({
                scale: 1,
                opacity:1,
                x:0,
                y:0,
                transition: { 
                    delay:0.2, 
                    duration: 0.5, 
                    ease: "easeInOut",
                },
        }),
    };

    const textVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeInOut",
            },
        }),
    };

    const buttonVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.2, 
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            className="bg-white flex flex-wrap items-center justify-center gap-16 py-10 px-10 lg:px-40 rounded-t-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} 
        >
            <motion.div
                className="flex items-center justify-end"
                variants={imageVariants}
            >
                <Image className="h-96 w-96" src={about} alt="About Us" />
            </motion.div>
            <div className="flex flex-col items-center justify-start lg:w-[40%]">
                <motion.h1
                    className="text-[#38434d] text-4xl font-bold mb-5"
                    custom={0}
                    variants={textVariants}
                >
                    ABOUT US
                </motion.h1>
                <motion.p
                    className="text-[#2f2e2e] text-base font-normal mb-5"
                    custom={1}
                    variants={textVariants}
                >
                    You&apos;ve got the killer idea...the best team...and the right execution strategy. You are just missing one thing - clean books. That&apos;s where we come in.
                </motion.p>
                <motion.p
                    className="text-[#2f2e2e] text-base font-bold mb-5"
                    custom={2}
                    variants={textVariants}
                >
                    We help companies understand the bigger picture of their company&apos;s financials, allowing them to effectively report to their board, and continue to raise capital.
                </motion.p>
                <motion.p
                    className="text-[#2f2e2e] text-base font-normal mb-5"
                    custom={3}
                    variants={textVariants}
                >
                    We help <span className="font-bold">businesses</span> cleanup their books, and implement <span className="font-bold">effective</span> and <span className="font-bold">scalable Accounting</span> & Finance solutions, so that the founders can do what they do best...run their company.
                </motion.p>
                <motion.p
                    className="text-[#2f2e2e] text-base font-normal mb-5"
                    custom={4}
                    variants={textVariants}
                >
                    Our team of dedicated <span className="font-bold">professionals</span> tackle each area of your company&apos;s financials, from implementing your first <span className="font-bold">accounting software</span>, to building a rockstar <span className="font-bold">financial model</span> that will woo investors.
                </motion.p>
                <motion.p
                    className="text-[#2f2e2e] text-base font-normal mb-5"
                    custom={5}
                    variants={textVariants}
                >
                    <span className="font-bold">We love companies</span>, and we love numbers - I guess you can call it a match made in heaven.
                </motion.p>
                <motion.div
                    className="py-10 w-full"
                    variants={buttonVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} 
                >
                    <Button size="lg" className="text-white text-base active:scale-75 transform duration-400">
                        Book a free consultation
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    );
}
