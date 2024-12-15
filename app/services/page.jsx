import ServiceCard from "@/components/ServiceCard";
import React from "react";

const services = [
  {
    id: "book-keeping",
    title: "Book-Keeping Services",
    description:
      "Accurate and timely bookkeeping is crucial for maintaining financial clarity. We provide end-to-end bookkeeping services, including transaction recording, Bank Account and Credit card reconciliation, and financial reporting to keep your books updated.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "accounts-payable",
    title: "Accounts Payable and Receivable Services",
    description:
      "Stay on top of your obligations with efficient AP management. We manage vendor payments, monitor expenses, and help optimize cash outflows to improve your working capital. And Improve cash flow by staying on top of incoming payments. Our AR management services help businesses monitor outstanding invoices, ensure timely collections, and maintain healthy liquidity.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "payroll",
    title: "Payroll Services",
    description:
      "Ensure seamless payroll processing, compliance with tax regulations, and timely salary disbursement. Our payroll management services guarantee that your employees are compensated accurately and on time.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "management-accounting",
    title:
      "Management Accounting Services/ Financial Planning and Analysis (FP&A)",
    description:
      "Gain deep financial insights with custom financial models designed to meet your business needs. We specialize in preparing comprehensive Management Information System (MIS) reports to track performance metrics, identify trends, and support strategic decision-making. Additionally, we provide loan processing support by assisting with loan applications, financial statements, projections, and necessary documentation to secure funding.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "compliances-risk",
    title: "Compliances and Risk Management",
    description:
      "Stay ahead of regulatory requirements with our Taxation and Compliance Tracker and Companies Compliance services. We ensure timely tax filings, accurate record-keeping, and adherence to evolving tax laws to avoid penalties and facilitate smooth audits. Additionally, we assist businesses in meeting corporate compliance requirements, helping them adhere to statutory obligations, regulations, and reporting standards to mitigate legal risks and ensure seamless operations.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "strategic-financial",
    title: "Strategic Financial and Cash Flow Management",
    description:
      "Achieving financial stability and growth starts with effective management of cash flow and overall finances. We provide expert support in forecasting, monitoring, and managing cash inflows and outflows to ensure your business maintains liquidity and meets its financial obligations. Additionally, our comprehensive financial management services encompass budgeting, forecasting, and in-depth financial analysis, empowering businesses to track performance, optimize resources, and make data-driven decisions for long-term success.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "audit-assurance",
    title: "Audit and Assurance Support",
    description:
      "Ensure a smooth and hassle-free audit process with our professional Audit Assistance services. We help businesses prepare for internal, statutory, or external audits by organizing and reviewing financial records, reconciling discrepancies, and ensuring compliance with applicable accounting standards and regulations. Our services include compiling accurate and comprehensive documentation, coordinating with auditors, and addressing queries to facilitate a seamless audit experience.",
    imageSrc: "/placeholder.svg?height=400&width=600",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16 text-teal-800 drop-shadow-lg">
          Our Services
        </h1>
        <div className="grid gap-16">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="h-[400px]">
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageOnRight={services.indexOf(service) % 2 !== 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
