import Link from 'next/link'
import { Card } from '../../components/card'

export const metadata = {
  title: 'Projects',
  description: 'Check out my latest projects and work.',
}

const projects = [
  {
    title: 'Optimized YOLOv11 for Document Layout Recognition',
    description: 'Fine-tuned on DocLayNet; accelerated inference with TensorRT, ONNX-Runtime, and OpenVINO.',
    technologies: ['YOLOv11', 'TensorRT', 'ONNX-Runtime', 'OpenVINO'],
    link: '#',
  },
  {
    title: 'Discrete Walk-Jump Sampling for Protein Discovery',
    description: 'Built energy-based models (EBMs) with Langevin MCMC for antibody sequence generation.',
    technologies: ['Energy-based Models', 'Langevin MCMC', 'Protein Sequence Generation'],
    link: '#',
  },
  {
    title: 'ColPali-Qwen2 OCR & Document Search',
    description: 'Combined vision-language encoders for multilingual text extraction and retrieval (CVPR \'24).',
    technologies: ['Vision-Language Models', 'OCR', 'Document Search', 'CVPR'],
    link: '#',
  },
  {
    title: 'Houdini Multi-Search RAG Agent',
    description: 'Streamlit-based RAG system indexing arXiv, Wikipedia, and custom PDF uploads via FAISS.',
    technologies: ['Streamlit', 'RAG', 'FAISS', 'arXiv', 'Wikipedia'],
    link: '#',
  },
  {
    title: 'Concrete Score Matching for Discrete Data',
    description: 'Implemented CSM with Metropolis-Hastings sampling to model discrete score functions.',
    technologies: ['Concrete Score Matching', 'Metropolis-Hastings', 'Discrete Data'],
    link: '#',
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Projects
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Here are some of the projects I've worked on. You can find more on my 
          <Link href="https://github.com/ayushb03" className="text-blue-500 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
            GitHub profile
          </Link>.
        </p>
      </div>
      
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
          >
            <h2 className="text-xl font-medium mb-2">{project.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              {project.description}
            </p>
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Link 
              href={project.link} 
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project ↗
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
} 