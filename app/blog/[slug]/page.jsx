import fs from "fs";
import path from "path";
import { notFound } from "next/navigation"; // Use for Next.js 13 and above
import BlogPost from "@/components/BlogPost/BlogPost"; // Ensure the path is correct

const BlogPostPage = async ({ params }) => {
  const { slug } = await params; // Extract slug from the URL

  // Path to the blogs directory
  const filePath = path.join(process.cwd(), "public", "blogs", `${slug}.json`);

  try {
    // Read blog data from the corresponding JSON file
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const blogData = JSON.parse(fileContents);

    return <BlogPost data={blogData} />;
  } catch (error) {
    // Handle the case where the blog post is not found
    notFound(); // Redirect to a 404 page
  }
};

export default BlogPostPage;
