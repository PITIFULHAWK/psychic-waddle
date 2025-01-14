import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata = {
  title: "Phynovate | Services",
  description: "Phynovate - Services",
  openGraph: {
    title: "Phynovate",
    description: "Phynovate - Services",
  },
};

const services = [
  {
    id: "book-keeping",
    title: "Book-Keeping Services",
    description:
      "Accurate and timely bookkeeping is crucial for maintaining financial clarity. We provide end-to-end bookkeeping services, including transaction recording, Bank Account and Credit card reconciliation, and financial reporting to keep your books updated.",
    imageSrc: "https://cdn.pixabay.com/photo/2016/11/19/21/01/analysis-1841158_1280.jpg",
  },
  {
    id: "accounts-payable",
    title: "Accounts Payable and Receivable Services",
    description:
      "Stay on top of your obligations with efficient AP management. We manage vendor payments, monitor expenses, and help optimize cash outflows to improve your working capital. And Improve cash flow by staying on top of incoming payments. Our AR management services help businesses monitor outstanding invoices, ensure timely collections, and maintain healthy liquidity.",
    imageSrc: "https://cdn.pixabay.com/photo/2022/04/04/16/24/technology-7111763_1280.jpg",
  },
  {
    id: "payroll",
    title: "Payroll Services",
    description:
      "Ensure seamless payroll processing, compliance with tax regulations, and timely salary disbursement. Our payroll management services guarantee that your employees are compensated accurately and on time.",
    imageSrc: "https://cdn.pixabay.com/photo/2023/06/22/07/59/women-8080878_1280.png",
  },
  {
    id: "management-accounting",
    title:
      "Management Accounting Services/ Financial Planning and Analysis (FP&A)",
    description:
      "Gain deep financial insights with custom financial models designed to meet your business needs. We specialize in preparing comprehensive Management Information System (MIS) reports to track performance metrics, identify trends, and support strategic decision-making. Additionally, we provide loan processing support by assisting with loan applications, financial statements, projections, and necessary documentation to secure funding.",
    imageSrc: "https://cdn.pixabay.com/photo/2020/02/18/08/35/finance-4858797_1280.jpg",
  },
  {
    id: "compliances-risk",
    title: "Compliances and Risk Management",
    description:
      "Stay ahead of regulatory requirements with our Taxation and Compliance Tracker and Companies Compliance services. We ensure timely tax filings, accurate record-keeping, and adherence to evolving tax laws to avoid penalties and facilitate smooth audits. Additionally, we assist businesses in meeting corporate compliance requirements, helping them adhere to statutory obligations, regulations, and reporting standards to mitigate legal risks and ensure seamless operations.",
    imageSrc: "https://cdn.pixabay.com/photo/2023/04/02/18/21/ai-generated-7895198_1280.jpg",
  },
  {
    id: "strategic-financial",
    title: "Strategic Financial and Cash Flow Management",
    description:
      "Achieving financial stability and growth starts with effective management of cash flow and overall finances. We provide expert support in forecasting, monitoring, and managing cash inflows and outflows to ensure your business maintains liquidity and meets its financial obligations. Additionally, our comprehensive financial management services encompass budgeting, forecasting, and in-depth financial analysis, empowering businesses to track performance, optimize resources, and make data-driven decisions for long-term success.",
    imageSrc: "https://cdn.pixabay.com/photo/2024/08/03/10/09/business-8941855_1280.jpg",
  },
  {
    id: "audit-assurance",
    title: "Audit and Assurance Support",
    description:
      "Ensure a smooth and hassle-free audit process with our professional Audit Assistance services. We help businesses prepare for internal, statutory, or external audits by organizing and reviewing financial records, reconciling discrepancies, and ensuring compliance with applicable accounting standards and regulations. Our services include compiling accurate and comprehensive documentation, coordinating with auditors, and addressing queries to facilitate a seamless audit experience.",
    imageSrc: "https://cdn.pixabay.com/photo/2024/09/18/16/40/business-9056542_1280.jpg",
  },
];

function ServiceCard({ title, description, imageSrc, imageOnRight }) {
  return (
    <Card className="overflow-hidden border-[#003B7E]/10 hover:shadow-lg transition-shadow duration-300">
      <div
        className={`flex flex-col md:flex-row ${imageOnRight ? "md:flex-row-reverse" : ""}`}
      >
        <div className="md:w-1/2">
          <Image
            src={imageSrc}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-4 text-[#003B7E]">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{description}</p>
            <Button className="mt-4 bg-[#FFA500] hover:bg-[#FF8C00] text-white">Learn More</Button>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Updated with image */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn.pixabay.com/photo/2024/10/28/03/42/ai-generated-9154856_1280.jpg"
            alt="Financial Services"
            width={1920}
            height={500}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B7E]/90 to-[#003B7E]/80 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in-up">
              Comprehensive financial solutions for your business
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                  imageOnRight={index % 2 !== 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
