import React from "react";
import Link from "next/link";

const BlogPostCard = ({ post }) => {
  return (
    <Link href={`/blog/${post.metadata.slug}`}>
      <a className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-bold mb-2">{post.metadata.title}</h3>
        <p className="text-gray-700 text-base">
          {post.metadata.metaDescription}
        </p>
      </a>
    </Link>
  );
};

export default BlogPostCard;
