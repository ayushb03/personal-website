import Link from "next/link";

export const metadata = {
  title: "Projects",
  description: "Check out my latest projects and work.",
};

const projects = [
  {
    title: "Optimized YOLOv11 for Document Layout Recognition",
    description:
      "Fine-tuned on DocLayNet; accelerated inference with TensorRT, ONNX-Runtime, and OpenVINO.",
    technologies: ["YOLOv11", "TensorRT", "ONNX-Runtime", "OpenVINO"],
    link: "#",
  },
  {
    title: "Discrete Walk-Jump Sampling for Protein Discovery",
    description:
      "Built energy-based models (EBMs) with Langevin MCMC for antibody sequence generation.",
    technologies: [
      "Energy-based Models",
      "Langevin MCMC",
      "Protein Sequence Generation",
    ],
    link: "#",
  },
  {
    title: "Concrete Score Matching for Discrete Data",
    description:
      "Implemented CSM with Metropolis-Hastings sampling to model discrete score functions.",
    technologies: [
      "Concrete Score Matching",
      "Metropolis-Hastings",
      "Discrete Data",
    ],
    link: "#",
  },
  {
    title: "Expandable Subspace Ensemble for Class-Incremental Learning",
    description:
      "Implemented subspace expansion for incremental learning on CIFAR-10, retaining previous class knowledge without forgetting (CVPR '24).",
    technologies: ["PyTorch", "NumPy", "Class-Incremental Learning"],
    link: "#",
  },
  {
    title: "ColPali-Qwen2 OCR & Document Search",
    description:
      "Combined vision-language encoders for multilingual text extraction and retrieval (CVPR '24).",
    technologies: ["Vision-Language Models", "OCR", "Document Search", "CVPR"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Projects</h1>
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index}>
            <h2 className="text-lg font-medium mb-1">{project.title}</h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
              {project.description}
            </p>
            <div className="mb-2 flex flex-wrap gap-1.5">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-xs rounded-full text-neutral-600 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link !== "#" && (
              <Link
                href={project.link}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Link>
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-neutral-500 dark:text-neutral-500 mt-6 italic">
        ... and more (check out my{" "}
        <Link
          href="https://github.com/ayushb03"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub profile
        </Link>{" "}
        if you're interested!)
      </p>
    </div>
  );
}
