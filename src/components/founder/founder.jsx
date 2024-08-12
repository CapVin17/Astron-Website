"use client";
import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Founder() {
    // Variants for sliding in the image and text titles
    const imageAndTitleVariants = {
        hidden: { x: "-100%", opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
    };

    // Variants for the paragraph text and button
    const textVariants = {
        hidden: { x: "-100%", opacity: 0 },
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

    const buttonVariants = {
        hidden: { x: "100%", opacity: 0 },
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
        <>
            <h1 className="text-[#38434d] text-4xl font-bold pb-5 text-center bg-white">Meet our Founder</h1>
            <div className="bg-white flex items-start justify-center gap-10 py-10 px-80">
                <motion.div
                    className="flex items-start justify-end"
                    variants={imageAndTitleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }} // Animation starts when 50% of the component is in view
                >
                    <div className="h-60 w-60 rounded-2xl bg-black"></div>
                </motion.div>
                <motion.div
                    className="flex flex-col items-start justify-center w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }} // Animation starts when 50% of the component is in view
                >
                    <motion.h4
                        className="text-[#38434d] text-2xl font-bold text-start"
                        variants={imageAndTitleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        Anurag
                    </motion.h4>
                    <motion.h6
                        className="text-[#67ac4d] text-lg font-bold mb-2 text-start"
                        variants={imageAndTitleVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        Founder & CEO
                    </motion.h6>
                    <motion.p
                        className="text-base font-medium mb-5"
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sunt velit iste repellat reiciendis pariatur nemo aperiam eligendi quaerat ex, delectus adipisci expedita qui culpa reprehenderit quis harum perferendis, quo accusantium. Recusandae optio quae rerum consectetur, sint excepturi natus vitae maxime tenetur enim necessitatibus, reprehenderit ut! Sequi nisi tempora sint.
                    </motion.p>
                    <motion.div
                        className="py-10 flex items-center justify-start w-full"
                        variants={buttonVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <Button size="lg" className="text-white text-base active:scale-75 transform duration-400">
                            Book a free consultation
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
