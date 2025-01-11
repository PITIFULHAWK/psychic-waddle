import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { CalendarDays, User } from 'lucide-react';

export default async function BlogDetailsPage({ params }) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "image": mainImage.asset->url,
    body,
    "author": author->name,
    publishedAt
  }`;
  const { slug } = await params;
  const blog = await client.fetch(query, { slug });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B7E]/90 to-[#003B7E]/80 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              {blog.title}
            </h1>
            <div className="flex items-center space-x-4 text-white/80">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="w-5 h-5 mr-2" />
                <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white shadow-md rounded-lg max-w-4xl mx-auto -mt-16 relative z-10 px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg prose-blue mx-auto">
          <PortableText
            value={blog.body}
            components={{
              list: {
                bullet: ({ children }) => <ul className="list-disc ml-6 my-4">{children}</ul>,
                number: ({ children }) => <ol className="list-decimal ml-6 my-4">{children}</ol>,
              },
              block: {
                normal: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
                h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-bold mt-6 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-bold mt-4 mb-2">{children}</h3>,
              },
            }}
          />
        </article>
      </section>
    </div>
  );
}

