import React from "react";
import BlogPostCard from "./BlogPostCard"; // Ensure this component file is created

const FinancialTips = ({ blogPosts }) => {
  return (
    <section>
      <h2>Financial Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/*blogPosts.map((post) => (
          <BlogPostCard key={post.metadata.slug} post={post} />
        ))*/}
      </div>
    </section>
  );
};

export default FinancialTips;
