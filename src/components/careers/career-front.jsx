import Link from "next/link";

const jobs = [
  {
    id: "jd1",
    title: "Manager - Direct & Indirect Tax (Chartered Accountant)",
    location: "Onsite-(Delhi)",
    type: "Full-time",
  },
];

export default function CareersFront() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <div className="pt-16">
        <div className="bg-[#9ac34d] text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-2">Join Our Team</h1>
          <p className="text-lg">
            Be part of an innovative and passionate team. Let&apos;s build
            something amazing together.
          </p>
        </div>
      </div>
      <div className="bg-white h-full w-full">
        <div className="max-w-4xl mx-auto my-10 mt-16 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <Link key={job.id} href={`/careers/${job.id}`}>
                <div className="block p-4 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer mb-10 bg-white">
                  <h3 className="text-xl font-medium">{job.title}</h3>
                  <p className="text-gray-600">
                    {job.location} - {job.type}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-32 w-full bg-white">

      </div>
    </div>
  );
}
