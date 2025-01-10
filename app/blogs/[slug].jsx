import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';

export default function BlogPostPage({ blogData }) {
  return <BlogPost data={blogData} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogsDirectory = path.join(process.cwd(), 'public', 'blogs');
  const files = fs.readdirSync(blogsDirectory);

  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.json', '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'public', 'blogs', `${slug}.json`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const blogData = JSON.parse(fileContents);

    return { props: { blogData } };
  } catch (error) {
    return { notFound: true };
  }
};

