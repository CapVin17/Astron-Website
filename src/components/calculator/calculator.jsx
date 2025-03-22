"use client"
import React, { useState, useEffect } from "react";

export default function Tools() {
  const [activeSection, setActiveSection] = useState("");

  const tools = [
    {
      id: "resume-scanner",
      title: "Resume Scanner",
      description:
        "Our Resume Scanner analyzes your resumes and let you export an excel file which has all sorts of information like Name, Email, Phone-Number etc extracted out for your convinience. You can have all information from your resumes at just one click and use it in your way.",
      instructions: [
        "Upload your resume PDFs.",
        "You can add multiple resume's at once and can also delete resumes from the list.",
        "When done with above steps you can click on Upload.",
        "Wait and few seconds then a download button will appear, click on it and your excel will be automatically downloaded.",
      ],
      icon: "📄",
      bgColor: "bg-blue-50",
      accentColor: "bg-blue-600",
      link: "https://resume-frontend-5smj.onrender.com/",
    },
    {
      id: "depreciation-calculator",
      title: "Depreciation Calculator",
      description:
        "Calculate depreciated value for any number of assets you have in your organization very easily. Just need to upload the data about your assets and as well add corresponding depreciation rates/values for those defined assets and you are just one click away to find the real cost of your current assets.",
      instructions: [
        "You need to have two excel sheets one for Assets and one for Depreciation rates.",
        "Upload both of the sheets using the drag drop feature or navigate and select the files.",
        "Click on upload and wait a few seconds after that your final excel sheet with all the calculations will be downloaded automatically on your device.",
      ],
      icon: "📊",
      bgColor: "bg-green-50",
      accentColor: "bg-green-600",
      link: "https://depreciation-calculator-tau.vercel.app",
    },
    {
      id: "qr-code-generator",
      title: "QR Code Generator",
      description:
        "You might be exhausted after visiting multiple sites to just get an simple QR code which can ease out your work. But some user interfaces can be hard to understand and some might be easy but would spoil your QR with their watermarks. But here you can generate simple QR codes in just one click with no watermarks or any sorts of complications.",
      instructions: [
        "Simply add a URL in the input box.",
        "Click on generate QR code.",
        "A QR code will be generated.",
        "Click on download and you will have your simple QR code on your PC in just one click.",
      ],
      icon: "📱",
      bgColor: "bg-purple-50",
      accentColor: "bg-purple-600",
      link: "https://qr-generator-seven-rho.vercel.app",
    },
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sections = tools.map((tool) => document.getElementById(tool.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(tools[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section when nav item is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 bg-white shadow-md py-4 px-6 lg:px-72">
        <div className="flex items-center justify-between">
          <h1 className="text-[#38434d] text-3xl font-bold">Tools</h1>
          <nav className="hidden md:flex space-x-6">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => scrollToSection(tool.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === tool.id
                    ? `${tool.accentColor} text-white font-medium`
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tool.title}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <div className="pt-16 px-6 lg:px-72">
        <h2 className="text-[#38434d] text-5xl lg:text-6xl font-extrabold">
          Powerful Tools
          <br />
          for Everyday Tasks
        </h2>
        <p className="text-xl text-gray-600 mt-8 mb-16 max-w-3xl">
          Our collection of tools is designed to help you tackle common
          challenges with ease. Each tool comes with comprehensive instructions
          to get you started quickly.
        </p>
      </div>

      {/* Tool sections */}
      <div className="space-y-32 pb-32 px-6 lg:px-72">
        {tools.map((tool) => (
          <section key={tool.id} id={tool.id} className="scroll-mt-20">
            <div
              className={`rounded-3xl overflow-hidden ${tool.bgColor} shadow-xl`}
            >
              <div className="p-10 md:p-16">
                <div className="flex flex-col md:flex-row items-start gap-10">
                  {/* Icon and Title */}
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">{tool.icon}</div>
                    <h3 className="text-4xl font-bold text-[#38434d] mb-6">
                      {tool.title}
                    </h3>
                    <div
                      className={`w-20 h-1 ${tool.accentColor} rounded-full mb-6`}
                    ></div>
                    <a
                      href={`${tool.link}`} target="_blank"
                      className={`inline-block ${tool.accentColor} text-white px-8 py-3 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity duration-300`}
                    >
                      Open Tool
                    </a>
                  </div>

                  {/* Description and Instructions */}
                  <div className="md:w-2/3">
                    <p className="text-xl text-gray-700 mb-8">
                      {tool.description}
                    </p>

                    <div className="bg-white bg-opacity-70 rounded-2xl p-8">
                      <h4 className="font-bold text-2xl text-[#38434d] mb-6">
                        How to use:
                      </h4>
                      <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-700">
                        {tool.instructions.map((instruction, index) => (
                          <li key={index} className="pl-2">
                            {instruction}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
