import Hero from "../components/hero";
import { Section } from "../components/section";
import { ExperienceCard } from "../components/experience-card";
import { Metadata } from "next";
import { generatePageMetadata } from "../components/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Ayush",
  description: "Ayush Bodade is an AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning with experience at Unsiloed AI, MIT, and IIT Bombay.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />

      <Section title="Background" id="background">
        <div className="space-y-2">
          <ExperienceCard
            title="Founding Team AI Engineer"
            company="Unsiloed AI"
            period="Jan 2025 – Present"
            location="San Francisco, CA"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Designed and deployed end-to-end AI pipelines for document
                chunking, extraction, RAG, and fine-tuning VLMs
                tailored to finance use cases.
              </li>
              <li>Built scalable APIs and services consumed by enterprise clients.</li>
            </ul>
          </ExperienceCard>

          <ExperienceCard
            title="Tech Lead"
            company="Covenants PharmaChem"
            period="Oct 2024 – Present"
            location="Mumbai, India"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Leading the AI platform team to automate procurement workflows.
              </li>
            </ul>
          </ExperienceCard>

          <ExperienceCard
            title="Undergraduate Researcher"
            company="MIT"
            period="Nov 2024 – Jan 2025"
            location="Cambridge, MA"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Investigate delayed generalization phenomena through Canonical
                Representation Hypothesis in representation learning.
              </li>
            </ul>
          </ExperienceCard>

          <ExperienceCard
            title="Research Intern - Spin-Neuro-Quantum-AI-group"
            company="IIT Bombay"
            period="Aug 2024 – Feb 2025"
            location="Mumbai, India"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Developing and implementing spiking neural networks for neuromorphic hardware to mimic how brain learn using different modalities.
              </li>
              <li>
                Tech Stack: Python, snnTorch, Pytorch, Numpy, Pandas, SNNs
              </li>
            </ul>
          </ExperienceCard>

          <ExperienceCard
            title="Research Intern - Realtime Early Fault Detection in Electromagnetic Machines"
            company="IIT Bombay"
            period="Aug 2024 – Nov 2024"
            location="Mumbai, India"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Developed a realtime early fault detection system aimed at predicting potential faults in electromagnetic machines using digital signals and shifts in magnetic flux.
              </li>
               <li>
                Tech Stack: Python, PyTorch, Librosa, SciPy, Pandas, DSP
               </li>
            </ul>
          </ExperienceCard>

          <p className="text-center text-sm text-muted-foreground mt-4 italic">
            ... and more
          </p>
        </div>
      </Section>
    </>
  );
}
