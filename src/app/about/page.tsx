import { Section } from '../../components/section'
import { Card } from '../../components/card'

export const metadata = {
  title: 'About',
  description: 'Learn more about me and my background.',
}

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          About Me
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Software developer with a passion for building clean, efficient, and accessible technology.
        </p>
      </div>
      
      <Section title="Background">
        <div className="prose text-neutral-600 dark:text-neutral-400">
          <p>
            I'm a software developer with a passion for building clean, efficient, and user-friendly applications. 
            With expertise in React, TypeScript, and Next.js, I enjoy creating web experiences that prioritize 
            performance and accessibility.
          </p>
          <p>
            My journey in tech began during college where I studied Computer Science, and I've been continuously 
            learning and growing since then. I believe in writing clean, maintainable code and staying up-to-date 
            with the latest industry trends.
          </p>
        </div>
      </Section>
      
      <Section title="Interests">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900">
            <h3 className="font-medium mb-2">AI Research</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Exploring representation learning, generative models, and computer vision.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900">
            <h3 className="font-medium mb-2">Piano & Music</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Classical piano performance and music theory.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-neutral-50 dark:bg-neutral-900">
            <h3 className="font-medium mb-2">Algorithms</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Competitive programming and algorithm optimization.
            </p>
          </div>
        </div>
      </Section>
      
      <Section title="Skills">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-medium mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'GraphQL'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Tools & Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Git', 'Docker', 'VS Code', 'Python', 'JavaScript', 'TypeScript'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PyTorch', 'snnTorch', 'LangChain', 'Flask', 'OpenCV', 'Librosa'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">AI & ML</h3>
            <div className="flex flex-wrap gap-2">
              {['Vision-Language Models', 'Spiking Neural Networks', 'Energy-Based Models', 'RAG', 'MCMC'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['Docker', 'TensorRT', 'ONNX-Runtime', 'FAISS', 'Git', 'CI/CD'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
      
      <Section title="Education">
        <div className="space-y-4">
          <Card
            title="B.Tech, Computer Engineering"
            subtitle="University of Mumbai, 2021 – 2025"
          >
            <p>Core coursework in algorithms, machine learning, and computing systems.</p>
          </Card>
          
          <Card
            title="Time Series Analysis Program"
            subtitle="EPAM Systems Innovation Center, 2024 – 2025"
          >
            <p>Advanced techniques for analyzing time-series data with applications to financial modeling.</p>
          </Card>
        </div>
      </Section>
    </div>
  )
} 