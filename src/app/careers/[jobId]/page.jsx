import CareersJD from "../../../components/careers/career-jd";
import { notFound } from "next/navigation";

const jobs = [
  {
    id: "jd1",
    title: "Manager - Direct & Indirect Tax (Chartered Accountant)",
    location: "Onsite-(Delhi)",
    type: "Full-time",
    experience: "3-6 years",
    description:
      "Lead and manage taxation matters, ensuring compliance with direct and indirect tax laws, and contributing to tax planning strategies.",
    about:
      "Are you a Chartered Accountant with expertise in direct and indirect taxation? Are you passionate about research, compliance, and strategic tax planning? Join our team and contribute to impactful projects in finance, taxation, and compliance.",
    responsibilities: [
      "Interpret and apply provisions of the Income Tax Act, 1961, and GST laws.",
      "Conduct tax research, analyze amendments, and ensure regulatory compliance.",
      "Handle tax audits, assessments, and litigation support.",
      "Optimize tax structures and provide strategic tax planning for clients.",
      "Stay updated on government incentives, grants, and exemptions for businesses.",
      "Prepare and review tax returns, filings, and advisory reports.",
      "Implement AI and automation tools for tax compliance and reporting.",
      "Collaborate with legal and finance teams to address complex tax issues.",
    ],
    requirements: [
      "Chartered Accountant (CA) with 3-6 years of relevant experience.",
      "Strong understanding of direct and indirect tax laws.",
      "Analytical mindset with expertise in tax research and compliance.",
      "Proficiency in tax software, Microsoft 365, and AI-driven tools.",
      "Ability to handle multiple assignments and meet deadlines.",
    ],
    whyJoin: [
      "Exposure to diverse taxation projects and strategic tax planning.",
      "Hands-on experience with AI and automation in taxation.",
      "Work with experts and industry leaders in finance and compliance.",
      "Opportunity to drive innovation and efficiency in tax operations.",
    ],
    link: "https://forms.gle/pFQjFQ8A9wtbAhnJ6",
  },
];

export default function JobDetailsPage({ params }) {
  const job = jobs.find((j) => j.id === params.jobId);

  if (!job) return notFound();

  return <CareersJD job={job} />;
}
