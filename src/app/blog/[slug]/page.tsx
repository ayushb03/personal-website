import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

// This would typically come from a CMS or API
const posts = [
  {
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2023-10-15",
    content: `
      <h2>Introduction to Next.js</h2>
      <p>Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.</p>
      
      <h2>Why Next.js?</h2>
      <p>Next.js provides a great developer experience with features like:</p>
      <ul>
        <li>File-system based routing</li>
        <li>API routes</li>
        <li>Built-in CSS support</li>
        <li>Code-splitting and bundling</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Next.js app, run:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
    `,
  },
  {
    title: "The Power of TypeScript",
    slug: "power-of-typescript",
    date: "2023-11-02",
    content: `
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.</p>
      
      <h2>Benefits of TypeScript</h2>
      <p>TypeScript offers several advantages:</p>
      <ul>
        <li>Static type-checking</li>
        <li>IDE support with code completion</li>
        <li>Safer refactoring</li>
        <li>Improved readability and documentation</li>
      </ul>
      
      <h2>Getting Started with TypeScript</h2>
      <p>To add TypeScript to your project:</p>
      <pre><code>npm install --save-dev typescript @types/react</code></pre>
    `,
  },
  {
    title: "Building with Tailwind CSS",
    slug: "building-with-tailwind",
    date: "2023-12-10",
    content: `
      <h2>Introduction to Tailwind CSS</h2>
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.</p>
      
      <h2>Why Tailwind?</h2>
      <p>Tailwind provides several benefits:</p>
      <ul>
        <li>Rapid UI development</li>
        <li>Consistent design system</li>
        <li>Responsive design made easy</li>
        <li>Custom design without custom CSS</li>
      </ul>
      
      <h2>Getting Started with Tailwind</h2>
      <p>To add Tailwind to your Next.js project:</p>
      <pre><code>npm install -D tailwindcss postcss autoprefixer</code></pre>
    `,
  },
];

export async function generateMetadata({ params }: Params) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `Read about ${post.title}`,
  };
}

export default function BlogPost({ params }: Params) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter">
        {post.title}
      </h1>
      <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        Published on {post.date}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
