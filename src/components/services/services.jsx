"use client";

import { motion } from "framer-motion";

export default function Service() {
  const services = [
    {
      title: "1",
      description: "Description",
    },
    {
      title: "2",
      description: "Description",
    },
    {
      title: "3",
      description: "Description",
    },
    {
      title: "4",
      description: "Description",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="h-full bg-white pt-20 px-10 lg:px-72">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#38434d] text-5xl lg:text-6xl font-extrabold mb-10"
        >
          Service
        </motion.h1>
      </div>

      {/* Service Content Section */}
      <div className="bg-[#9ac34d] py-16 px-10 lg:px-72 text-white">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg leading-relaxed"
        >
          We offer a range of digital services to help your business grow and
          succeed. Our expertise spans across multiple domains, ensuring you get
          the best solutions tailored to your needs.
        </motion.p>
      </div>

      {/* Service Cards Section */}
      <div className="py-16 px-10 lg:px-72 grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 hover:shadow-2xl transition-all"
          >
            <h2 className="text-[#38434d] text-2xl font-bold mb-3">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
