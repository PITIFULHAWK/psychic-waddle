import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Phynovate | Blogs",
  description: "Phynovate - Blogs",
  openGraph: {
    title: "Phynovate",
    description: "Phynovate - Blogs",
  },
};

const blogPosts = [
  {
    title: "Understanding Financial Statements",
    excerpt:
      "Learn how to read and interpret financial statements for better business decisions.",
    author: "John Doe",
    date: "2024-12-10",
    image: "https://cdn.pixabay.com/photo/2015/02/02/11/09/office-620822_1280.jpg",
  },
  {
    title: "Tax Planning Strategies for Small Businesses",
    excerpt:
      "Discover effective tax planning strategies to minimize your small business tax liability.",
    author: "Jane Smith",
    date: "2024-12-08",
    image: "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg",
  },
  {
    title: "The Importance of Cash Flow Management",
    excerpt:
      "Explore why cash flow management is crucial for business success and how to improve it.",
    author: "Mike Johnson",
    date: "2024-12-05",
    image: "https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_1280.jpg"
            alt="Blog and Insights"
            width={1920}
            height={500}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B7E]/90 to-[#003B7E]/80 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Blogs</h1>
            <p className="text-xl text-white/90 mb-8">
              Insights and advice for financial success
            </p>
            <div className="flex gap-4 max-w-md">
              <Input
                placeholder="Search articles..."
                className="bg-white/90 text-black placeholder:text-gray-500"
              />
              <Button variant="secondary" className="bg-[#FFA500] hover:bg-[#FF8C00] text-white">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden border-[#003B7E]/10 hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-[#003B7E]">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 gap-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-[#003B7E]" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1 text-[#003B7E]" />
                      {post.author}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="p-0">
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with our latest financial insights and tips
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" type="email" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
