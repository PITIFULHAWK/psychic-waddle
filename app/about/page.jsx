import { Card } from "@/components/ui/card";
import { PencilIcon, ClipboardList, Users2, UserRound } from "lucide-react";
import Image from "next/image";

const industries = [
  { name: "Distribution", icon: "📦" },
  { name: "Consumer Packaged Goods", icon: "🛍️" },
  { name: "Transportation", icon: "🚚" },
  { name: "SASS", icon: "💻" },
  { name: "Manufacturing", icon: "⚙️" },
  { name: "Professional Services", icon: "💼" },
  { name: "Real Estate", icon: "🏠" },
  { name: "Food & Beverage", icon: "🍽️" },
  { name: "Internet of Things", icon: "📱" },
  { name: "AgTech", icon: "🌱" },
  { name: "MedTech", icon: "⚕️" },
  { name: "Cannabis", icon: "🌿" },
];

export const metadata = {
  title: "Phynovate | About",
  description: "Phynovate - About",
  openGraph: {
    title: "Phynovate",
    description: "Phynovate - About",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Team photo"
          width={1920}
          height={500}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Your Outsourced Finance & Accounting Team
            </h1>
            <p className="text-xl text-white/90">
              Grow confidently with a professional financial team backing you
              up.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Phynovate is committed to recognizing the inherent worth and
            dignity of all people, without regard to race, age, creed, gender,
            or identity. We firmly believe that people who are respected, heard,
            treated and advanced equitably in our business perform their work
            with greater commitment and brilliance. We seek to promote diversity
            in our team which spreads across the U.S., Mexico and Canada, and to
            increase understanding of the cross-border, social and historical
            realities which make an emphasis on diversity a necessity.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            More Than a Fractional Phynovate
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FeatureCard
              icon={<PencilIcon className="w-6 h-6 text-green-600" />}
              title="We meet you where you are."
              description="Phynovate does not force you to adopt our software or reuse an Excel model that does not fit your business. We meet our customers where they are at, preserving the useful tools they have invested in."
            />
            <FeatureCard
              icon={<ClipboardList className="w-6 h-6 text-green-600" />}
              title="We plan before we execute"
              description="Many accounting and bookkeeping firms are eager to dive in and start cleaning up your books. This process is both unpredictable and wasteful. We begin each accounting engagement with a Controls Study."
            />
            <FeatureCard
              icon={<Users2 className="w-6 h-6 text-green-600" />}
              title="We work as a team"
              description="More than the sum of the parts – by engaging with a pod of professionals, you get a diversified finance team for the price of one full-time accountant."
            />
            <FeatureCard
              icon={<UserRound className="w-6 h-6 text-green-600" />}
              title="We value our relationships"
              description="Numbers are important, but people are what really drive profit. Our team looks deeper than the numbers to understand what really drives business results."
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <span className="text-4xl mb-2">{industry.icon}</span>
                <span className="text-sm font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the Team
          </h2>
          <div className="aspect-video max-w-4xl mx-auto">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Team members in a meeting"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="p-6 bg-green-50/50">
      <div className="flex flex-col gap-4">
        <div className="rounded-full w-12 h-12 bg-green-100 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
}
