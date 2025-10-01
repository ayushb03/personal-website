import { Metadata } from "next";
import AnalyticsWrapper from "@/components/AnalyticsWrapper";

export const metadata: Metadata = {
  title: 'Experience & Projects - Ayush',
  description: 'Detailed work experience and projects',
  openGraph: {
    title: 'Experience & Projects - Ayush',
    description: 'Detailed work experience and projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience & Projects - Ayush',
    description: 'Detailed work experience and projects',
  },
};

export default function DetailedView() {
  return (
    <AnalyticsWrapper>
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-16">
        
        {/* Work Experience */}
        <div className="space-y-6">
          <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
            Work Experience
          </h2>
          <div className="space-y-8">
            
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Founding AI Engineer
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">05/2025–present</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">QX Labs, London, UK</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Architected and built production-ready agentic knowledge graph system for private equity firms with intelligent agent-based query processing, multi-database (Graph, Vector, NoSQL), and streaming response capabilities.</li>
                <li>• Developed modular agent architecture with specialized AI agents (delegator, cypher, semantic search) that automatically route natural language queries, execute parallel processing, and generate optimized database queries.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Founding AI Engineer
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">01/2025–07/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Unsiloed AI, San Francisco, CA, USA</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Spearheaded development of AI, RAG pipelines and APIs for financial institutions.</li>
                <li>• Built document-chunking and extraction pipelines; trained and fine-tuned vision-language models tailored to financial applications as part of a unified platform.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Undergraduate Researcher
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">11/2024–02/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Massachusetts Institute of Technology (MIT), Cambridge, MA, USA</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Investigated delayed generalization phenomena through a Representation Hypothesis, exploring implications for representation learning.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research Collaborator
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">11/2024–01/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Tsinghua University, Beijing, China</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Conducted literature reviews in 3D reconstruction and generation; proposed architectural optimizations to improve spatial reasoning in multimodal LLMs.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Guest Researcher
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">09/2024–01/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">University of Amsterdam, Amsterdam, Netherlands</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Collaborated with the Parallel Computing Systems Lab, focusing on multi-modal model research.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Tech Lead
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">10/2024–07/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Covenants PharmaChem, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Leading development of an AI platform to optimize and automate end-to-end procurement processes and streamline workflows.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Teaching Assistant, Advanced Algorithms and Complexity
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">09/2024–12/2024</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Sardar Patel Institute of Technology, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Led problem-solving sessions and mentored 16 master&apos;s students, enhancing their grasp of advanced algorithms.</li>
                <li>• Designed problem sets based on research papers and lectures to promote critical thinking beyond the curriculum.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research Intern, Spin-Neuro-Quantum-AI Group
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">08/2024–02/2025</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">IIT Bombay, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Developed and implemented spiking neural networks for neuromorphic hardware, mimicking brain learning across modalities.</li>
                <li>• Tech stack: Python, snnTorch, PyTorch, NumPy, Pandas.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research Intern, Real-Time Early Fault Detection
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">08/2024–11/2024</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">IIT Bombay, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Built a real-time fault detection system predicting faults in electromagnetic machines via digital signal and magnetic flux analysis.</li>
                <li>• Tech stack: Python, PyTorch, Librosa, SciPy, Pandas, DSP.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Research Intern, Multi-Modal Sentiment Analysis
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">02/2024–11/2024</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Sardar Patel Institute of Technology, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Built a multi-modal sentiment analysis architecture for modality robustness and adaptability to diverse use cases.</li>
                <li>• Tech stack: PyTorch, OpenCV, Librosa, NLTK, Bash.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Developer Analyst Intern
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">06/2023–08/2023</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">Predoole Analytics, Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Developed an email-generation API for personalized outreach using prospect data, and built data-fetch APIs integrating Apollo.io.</li>
                <li>• Tech stack: Flask, LangChain, OpenAI API, Python.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                  Coordinator
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">11/2022–12/2023</span>
              </div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">IEEE CS Student Chapter, S.P.I.T., Mumbai, India</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Coordinated events, meetings, conferences, hackathons, and competitions to ensure smooth operations.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          <h2 className="text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-400 font-medium">
            Projects
          </h2>
          <div className="space-y-8">
            
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Optimized YOLOv11 for Document Layout Recognition and Inference
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, YOLO, TensorRT, onnxruntime, OpenVINO</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Fine-tuned YOLOv11 on DocLayNet for document layout analysis (captions, footnotes, formulas, etc.).</li>
                <li>• Accelerated inference via TensorRT, ONNXRUNTIME, and OpenVINO, achieving scalable batch processing with threaded execution.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Discrete Walk-Jump Sampling for Protein Discovery
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, Energy-Based Models, Langevin MCMC, Contrastive Divergence, Denoising Networks</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Implemented Discrete Walk-Jump Sampling for antibody sequence generation using EBMs trained via contrastive divergence.</li>
                <li>• Employed Langevin MCMC for exploration and one-step denoising for refinement, optimizing sampling efficiency and sequence quality.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Expandable Subspace Ensemble for Class-Incremental Learning
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, NumPy</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Implemented a subspace expansion technique to retain previous classes without forgetting, benchmarked on CIFAR-10 from scratch.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Concrete Score Matching: Generalized Score Matching for Discrete Data
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, NumPy, Concrete Score Matching, Metropolis–Hastings</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Implemented the CSM algorithm to learn score functions in discrete spaces.</li>
                <li>• Used Metropolis–Hastings sampling for data generation and visualized true vs. generated distributions.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                ColPali-Qwen2 Architecture: OCR & Document Search
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, colpali-engine, qwen-vl-utils</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Built an OCR and document retrieval system based on the &ldquo;ColPali&rdquo; vision-language model for multilingual text extraction.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Character-Level Auto-Regressive Models
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, Pandas</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Implemented character-level LMs (bigrams, MLP, CNN, RNN, LSTM, GRU, Transformer) architectures from-scratch to generate text tokens.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Houdini Multi-Search RAG Agent
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">LangChain, FAISS, Streamlit</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Built a RAG system enabling PDF uploads and retrieval of relevant arXiv, Wikipedia, and web sources for factual LLM responses.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Lung CT Scan Classifier
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">PyTorch, CNN, scikit-learn, Matplotlib</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Created a custom ConvNet achieving 88% accuracy; applied data augmentation and transfer learning (VGGNet, EfficientNet, RegNet, ViT).</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                AutoXCell
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">Python, Flask, Plotly, Docker</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Developed an exam cell automation system to streamline application and grade-card downloads, plus academic performance analysis using statistical techniques.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Credit Risk Analysis
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">Boosting Algorithms, Plotly, scikit-learn, Pandas</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Conducted detailed EDA to uncover feature importance and correlations; built and evaluated ML models for accurate credit risk prediction.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Mall Customer Analysis & Segmentation
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 italic">Pandas, Plotly, scikit-learn, NumPy</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2 pl-4">
                <li>• Performed customer segmentation using clustering on age, income, and spending score; derived insights to inform tailored marketing strategies.</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center">
            My heart&apos;s beating for now.
          </p>
        </div>
      </div>
    </AnalyticsWrapper>
  );
}
