import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

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

  console.log(blog);
  

  return (
    <div className="flex flex-col">
      <section className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img src={blog.image} alt={blog.title} className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#003B7E]/90 to-[#003B7E]/80 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <h1>{blog.title}</h1>
        <PortableText
          value={blog.body}
          components={{
            list: {
              bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
              number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
            },
            block: {
              normal: ({ children }) => <p className="mb-4 text-gray-600">{children}</p>,
              h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
            },
          }}
        />
        <p>By {blog.author}</p>
        <p>{new Date(blog.publishedAt).toLocaleDateString()}</p>
      </section>
    </div>
  );
}
