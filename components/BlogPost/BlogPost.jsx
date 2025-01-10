import React from "react";

const BlogPost = ({ data }) => {
  const { metadata, content } = data;

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{metadata.title}</h1>
      <p className="text-gray-600 mb-2">{metadata.publishDate}</p>
      <div className="space-y-4">
        {content.sections.map((section, index) => {
          if (section.type === "heading") {
            return (
              <h2 key={index} className="text-2xl font-semibold">
                {section.text}
              </h2>
            );
          }
          if (section.type === "paragraph") {
            return (
              <p key={index} className="text-base">
                {section.text}
              </p>
            );
          }
          if (section.type === "bulletList") {
            return (
              <ul key={index} className="list-disc pl-5">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item.text}</li>
                ))}
              </ul>
            );
          }
          return null; // Handle other types as needed
        })}
      </div>
    </div>
  );
};

export default BlogPost;
