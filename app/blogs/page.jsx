import fs from "fs";
import path from "path";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogsIndex = async () => {
  const blogsDirectory = path.join(process.cwd(), "public", "blogs");
  const files = fs.readdirSync(blogsDirectory);

  const blogPosts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(blogsDirectory, file);
      const data = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(data);
    }),
  );

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Our Blogs</h1>
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Card key={post.metadata.slug} className="shadow-lg">
            <CardHeader>
              <CardTitle>{post.metadata.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.metadata.metaDescription}</p>
              <Link href={`/blog/${post.metadata.slug}`}>
                <Button>Read More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogsIndex;
