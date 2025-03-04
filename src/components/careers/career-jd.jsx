import React from "react";
import { Button } from "../ui/button";

export default function CareersJD({ job }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-white p-4 flex justify-between items-center shadow-sm">
        <div className="logo">
          <img
            src="/api/placeholder/120/40"
            alt="Company Logo"
            className="h-8"
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="text-orange-500 font-medium">Home</li>
          </ul>
        </nav>
      </header>

      <div className="bg-[#9ac34d] w-full py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">{job.title}</h1>
          <div className="flex flex-wrap items-center text-white space-x-4 mt-2">
            <div className="flex items-center">
              <span className="mr-2">⏱</span>
              <span>{job.experience}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📍</span>
              <span>{job.location}</span>
            </div>
            <div className="flex items-center">
              <span className="mr-2">📋</span>
              <span>{job.type}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row py-8 px-6 w-full gap-8">
        <div className="md:w-2/3 flex flex-col text-black">
          <h3 className="text-xl font-semibold mt-4">About Us:</h3>
          <p className="text-gray-700 mb-4">{job.about}</p>
          <h3 className="text-xl font-semibold mt-4">Description:</h3>
          <p className="text-gray-700 mb-4">{job.description}</p>
          <h3 className="text-xl font-semibold mt-4">Responsibilities:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {job.responsibilities.map((resp, index) => (
              <li key={index} className="mt-1">
                {resp}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-4">Requirements:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {job.requirements.map((req, index) => (
              <li key={index} className="mt-1">
                {req}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-semibold mt-4">Why Join Us:</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {job.whyJoin.map((point, index) => (
              <li key={index} className="mt-1">
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-1/3">
          <div className="sticky top-6 mt-6">
            <a href={job.link} target="_blank">
              <Button className="w-full text-white">
                Apply for this job
              </Button>
            </a>

            {/* <div className="mt-6">
              <p className="text-gray-600 mb-2">Share with someone awesome</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  f
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  in
                </div>
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  X
                </div>
              </div>
            </div> */}

            <a href="/careers" className="ml-2">
              <button className="mt-8 text-black-400 hover:underline text-black">
                View all job openings
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
