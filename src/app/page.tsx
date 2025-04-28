import Link from 'next/link'

export default function Home() {
  return (
    <section>
      <div className="mb-8">
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Future and Beyond
        </p>
      </div>

      <div className="my-10 border-t border-neutral-200 dark:border-neutral-800"></div>
      
      <div id="about" className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tighter mb-4">
          About Me
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          I love computers and math. Also piano!
        </p>
      </div>

      <div id="experience" className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tighter mb-4">
          Experience
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium">Founding Team AI Engineer, Unsiloed AI</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-2">Jan 2025 – Apr 2025, San Francisco, CA</p>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Designed and deployed end-to-end AI pipelines for document chunking, extraction, and fine-tuned vision-language models tailored to financial-services use cases.</li>
              <li>Built scalable REST APIs consumed by enterprise clients.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Tech Lead, Covenants PharmaChem</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-2">Oct 2024 – Present, Mumbai, India</p>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Leading the AI platform team to automate procurement workflows using advanced ML and NLP.</li>
              <li>Reduced manual processing time by X% (metric if available).</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Undergraduate Researcher, MIT</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-2">Nov 2024 – Feb 2025, Cambridge, MA</p>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Investigated "delayed generalization" phenomena in representation learning and proposed new architectural insights.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Research Collaborator, Tsinghua University</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-2">Nov 2024 – Jan 2025, Beijing, China</p>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Conducted 3D reconstruction literature reviews and developed optimizations for spatial reasoning in multimodal LLMs.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Guest Researcher, University of Amsterdam</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-2">Sep 2024 – Jan 2025, Netherlands</p>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Worked with the Parallel Computing Systems Lab on multimodal deep-learning systems.</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Teaching Assistant, Advanced Algorithms & Complexity</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-2">Sep 2024 – Dec 2024, Mumbai, India</p>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
              <li>Mentored 16 master's students, led problem-solving sessions, and designed research-inspired problem sets.</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="education" className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tighter mb-4">
          Education & Certifications
        </h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium">B.Tech, Computer Engineering</h3>
          <p className="text-neutral-600 dark:text-neutral-400">University of Mumbai, 2021 – 2025</p>
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-medium">Time Series Analysis Program</h3>
          <p className="text-neutral-600 dark:text-neutral-400">EPAM Systems Innovation Center, 2024 – 2025</p>
        </div>
        
        <div>
          <h3 className="text-xl font-medium">Selected Certificates</h3>
          <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400">
            <li>Deep Learning Specialization (DeepLearning.AI)</li>
            <li>Machine Learning Specialization (Stanford University)</li>
            <li>Business Analytics & Text Mining (IIT Roorkee)</li>
            <li>Numerical Methods for Engineers (IIT Madras)</li>
          </ul>
        </div>
      </div>

      <div id="skills" className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tighter mb-4">
          Metadata
        </h2>
        
        <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
          <li><strong>Languages & Frameworks:</strong> Python, PyTorch, snnTorch, LangChain, Flask, OpenCV, Librosa</li>
          <li><strong>AI & ML:</strong> Vision-Language Models, Spiking Neural Networks, Energy-Based Models, RAG, MCMC</li>
          <li><strong>DevOps & Tools:</strong> Docker, TensorRT, ONNX-Runtime, FAISS, Git, CI/CD</li>
        </ul>
      </div>

      <div id="achievements" className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tighter mb-4">
          Achievements & Interests
        </h2>
        
        <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
          <li><strong>Meta Hacker Cup 2024:</strong> Advanced to Round 2</li>
          <li><strong>CodeUncode 2024:</strong> Top 3% (49/2000)</li>
          <li>
            <strong>Piano & Keyboard:</strong>
            <ul className="list-disc pl-5">
              <li>1st Place, District Classical Music Concert</li>
              <li>Lead Pianist, School Choir (Grades 5–12)</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}
