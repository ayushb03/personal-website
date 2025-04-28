export const metadata = {
  title: 'About',
  description: 'Learn more about me and my background.',
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About Me
      </h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Background</h2>
        <p className="mb-4">
          I'm a software developer with a passion for building clean, efficient, and user-friendly applications. 
          With expertise in React, TypeScript, and Next.js, I enjoy creating web experiences that prioritize 
          performance and accessibility.
        </p>
        <p className="mb-4">
          My journey in tech began during college where I studied Computer Science, and I've been continuously 
          learning and growing since then. I believe in writing clean, maintainable code and staying up-to-date 
          with the latest industry trends.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Skills</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Frontend: React, Next.js, TypeScript, HTML, CSS</li>
          <li>UI Frameworks: Tailwind CSS, Material UI</li>
          <li>Backend: Node.js, Express, PostgreSQL</li>
          <li>Tools: Git, Docker, VS Code</li>
        </ul>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Education</h2>
        <div className="mb-4">
          <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
          <p className="text-neutral-600 dark:text-neutral-400">University Name • 2018-2022</p>
        </div>
      </div>
    </section>
  )
} 