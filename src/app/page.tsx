import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const metadata: Metadata = {
  title: 'Ayush Bodade - AI Engineer & Researcher',
  description: 'Ayush Bodade: AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning with experience at [REDACTED], Unsiloed AI, MIT, and IIT Bombay.',
  openGraph: {
    title: 'Ayush Bodade - AI Engineer & Researcher',
    description: 'Ayush Bodade: AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning with experience at [REDACTED], Unsiloed AI, MIT, and IIT Bombay.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush Bodade - AI Engineer & Researcher',
    description: 'Ayush Bodade: AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning with experience at [REDACTED], Unsiloed AI, MIT, and IIT Bombay.',
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
      {/* Hero Section */}
      <Card className="border-0 shadow-none">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            <Avatar className="w-24 h-24 md:w-32 md:h-32">
              <AvatarImage 
                src="https://raw.githubusercontent.com/ayushb03/assets/main/idk_what_is_this.png" 
                alt="Ayush Bodade" 
                className="object-cover"
              />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold">Ayush Bodade</CardTitle>
          <CardDescription className="text-xl text-muted-foreground">
            AI Engineer & Researcher
          </CardDescription>
          <div className="flex justify-center gap-2 mt-4">
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:ayush@shinkahq.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://x.com/ayushb03" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="mr-2 h-4 w-4" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/ayushb03" target="_blank" rel="noopener noreferrer">
                <FaGithub className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/ayushbodade/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://shinkahq.com" target="_blank" rel="noopener noreferrer">
                <span className="mr-2 h-4 w-4 text-xs font-bold">S</span>
                ShinkaHQ
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Hi I&apos;m Ayush, I build products, do AI research (Auto-regressive and other model paradigms, 
            RL, Multi-agent systems, and more), and play piano. Check out{" "}
            <a 
              href="https://shinkahq.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline font-medium"
            >
              Shinka
            </a>
            ! 
            Just shoot me a mail, or DM me on X and we can build something worthwhile!
          </p>
        </CardContent>
      </Card>

      <Separator />

      {/* Work Experience */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Work Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Founder & CEO</h3>
                <p className="text-muted-foreground">
                  <a 
                    href="https://shinkahq.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    ShinkaHQ
                  </a>
                </p>
                <p className="text-sm text-muted-foreground">Remote</p>
              </div>
              <Badge variant="secondary">2024 - Present</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Founded and leading ShinkaHQ, an AI-powered startup focused on building innovative solutions for modern businesses.</li>
              <li>Developing cutting-edge AI technologies and products that solve real-world problems across various industries.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Founding AI Engineer</h3>
                <p className="text-muted-foreground">[REDACTED]</p>
                <p className="text-sm text-muted-foreground">London, UK</p>
              </div>
              <Badge variant="secondary">05/2025 - Present</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Architected and built production-ready agentic knowledge graph system for private equity firms with intelligent agent-based query processing, multi-database (Graph, Vector, NoSQL), and streaming response capabilities.</li>
              <li>Developed modular agent architecture with specialized AI agents (delegator, cypher, semantic search) that automatically route natural language queries, execute parallel processing, and generate optimized database queries.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Founding AI Engineer</h3>
                <p className="text-muted-foreground">Unsiloed AI</p>
                <p className="text-sm text-muted-foreground">San Francisco, CA, USA</p>
              </div>
              <Badge variant="secondary">01/2025 - 07/2025</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Spearheaded development of AI, RAG pipelines and APIs for financial institutions.</li>
              <li>Built document-chunking and extraction pipelines; trained and fine-tuned vision-language models tailored to financial applications as part of a unified platform.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Undergraduate Researcher</h3>
                <p className="text-muted-foreground">Massachusetts Institute of Technology (MIT)</p>
                <p className="text-sm text-muted-foreground">Cambridge, MA, USA</p>
              </div>
              <Badge variant="secondary">11/2024 - 02/2025</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Investigated delayed generalization phenomena through a Representation Hypothesis, exploring implications for representation learning.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Research Collaborator</h3>
                <p className="text-muted-foreground">Tsinghua University</p>
                <p className="text-sm text-muted-foreground">Beijing, China</p>
              </div>
              <Badge variant="secondary">11/2024 - 01/2025</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Conducted literature reviews in 3D reconstruction and generation; proposed architectural optimizations to improve spatial reasoning in multimodal LLMs.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Guest Researcher</h3>
                <p className="text-muted-foreground">University of Amsterdam</p>
                <p className="text-sm text-muted-foreground">Amsterdam, Netherlands</p>
              </div>
              <Badge variant="secondary">09/2024 - 01/2025</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Collaborated with the Parallel Computing Systems Lab, focusing on multi-modal model research.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Tech Lead</h3>
                <p className="text-muted-foreground">Covenants PharmaChem</p>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
              </div>
              <Badge variant="secondary">10/2024 - 07/2025</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Leading development of an AI platform to optimize and automate end-to-end procurement processes and streamline workflows.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Teaching Assistant, Advanced Algorithms and Complexity</h3>
                <p className="text-muted-foreground">Sardar Patel Institute of Technology</p>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
              </div>
              <Badge variant="secondary">09/2024 - 12/2024</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Led problem-solving sessions and mentored 16 master&apos;s students, enhancing their grasp of advanced algorithms.</li>
              <li>Designed problem sets based on research papers and lectures to promote critical thinking beyond the curriculum.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Research Intern, Spin-Neuro-Quantum-AI Group</h3>
                <p className="text-muted-foreground">IIT Bombay</p>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
              </div>
              <Badge variant="secondary">08/2024 - 02/2025</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Developed and implemented spiking neural networks for neuromorphic hardware, mimicking brain learning across modalities.</li>
              <li>Tech stack: Python, snnTorch, PyTorch, NumPy, Pandas.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Research Intern, Real-Time Early Fault Detection in Electromagnetic Machines</h3>
                <p className="text-muted-foreground">IIT Bombay</p>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
              </div>
              <Badge variant="secondary">08/2024 - 11/2024</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Built a real-time fault detection system predicting faults in electromagnetic machines via digital signal and magnetic flux analysis.</li>
              <li>Tech stack: Python, PyTorch, Librosa, SciPy, Pandas, DSP.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Research Intern, Multi-Modal Sentiment Analysis</h3>
                <p className="text-muted-foreground">Sardar Patel Institute of Technology</p>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
              </div>
              <Badge variant="secondary">02/2024 - 11/2024</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Built a multi-modal sentiment analysis architecture for modality robustness and adaptability to diverse use cases.</li>
              <li>Tech stack: PyTorch, OpenCV, Librosa, NLTK, Bash.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Developer Analyst Intern</h3>
                <p className="text-muted-foreground">Predoole Analytics</p>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
              </div>
              <Badge variant="secondary">06/2023 - 08/2023</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Developed an email-generation API for personalized outreach using prospect data, and built data-fetch APIs integrating Apollo.io.</li>
              <li>Tech stack: Flask, LangChain, OpenAI API, Python.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Coordinator</h3>
                <p className="text-muted-foreground">IEEE CS Student Chapter, S.P.I.T.</p>
                <p className="text-sm text-muted-foreground">Mumbai, India</p>
              </div>
              <Badge variant="secondary">11/2022 - 12/2023</Badge>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Coordinated events, meetings, conferences, hackathons, and competitions to ensure smooth operations.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Optimized YOLOv11 for Document Layout Recognition and Inference</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">YOLO</Badge>
                <Badge variant="outline">TensorRT</Badge>
                <Badge variant="outline">onnxruntime</Badge>
                <Badge variant="outline">OpenVINO</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Fine-tuned YOLOv11 on DocLayNet for document layout analysis (captions, footnotes, formulas, etc.).</li>
              <li>Accelerated inference via TensorRT, ONNXRUNTIME, and OpenVINO, achieving scalable batch processing with threaded execution.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Discrete Walk-Jump Sampling for Protein Discovery</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">Energy-Based Models</Badge>
                <Badge variant="outline">Langevin MCMC</Badge>
                <Badge variant="outline">Contrastive Divergence</Badge>
                <Badge variant="outline">Denoising Networks</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Implemented Discrete Walk-Jump Sampling for antibody sequence generation using EBMs trained via contrastive divergence.</li>
              <li>Employed Langevin MCMC for exploration and one-step denoising for refinement, optimizing sampling efficiency and sequence quality.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Expandable Subspace Ensemble for Class-Incremental Learning</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">NumPy</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Implemented a subspace expansion technique to retain previous classes without forgetting, benchmarked on CIFAR-10 from scratch.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Concrete Score Matching: Generalized Score Matching for Discrete Data</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">NumPy</Badge>
                <Badge variant="outline">Concrete Score Matching</Badge>
                <Badge variant="outline">Metropolis–Hastings</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Implemented the CSM algorithm to learn score functions in discrete spaces.</li>
              <li>Used Metropolis–Hastings sampling for data generation and visualized true vs. generated distributions.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">ColPali-Qwen2 Architecture: OCR & Document Search</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">colpali-engine</Badge>
                <Badge variant="outline">qwen-vl-utils</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Built an OCR and document retrieval system based on the &quot;ColPali&quot; vision-language model for multilingual text extraction.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Character-Level Auto-Regressive Models</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">Pandas</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Implemented character-level LMs (bigrams, MLP, CNN, RNN, LSTM, GRU, Transformer) architectures from-scratch to generate text tokens.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Houdini Multi-Search RAG Agent</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">LangChain</Badge>
                <Badge variant="outline">FAISS</Badge>
                <Badge variant="outline">Streamlit</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Built a RAG system enabling PDF uploads and retrieval of relevant arXiv, Wikipedia, and web sources for factual LLM responses.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Lung CT Scan Classifier</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">CNN</Badge>
                <Badge variant="outline">scikit-learn</Badge>
                <Badge variant="outline">Matplotlib</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Created a custom ConvNet achieving 88% accuracy; applied data augmentation and transfer learning (VGGNet, EfficientNet, RegNet, ViT).</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">AutoXCell</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">Flask</Badge>
                <Badge variant="outline">Plotly</Badge>
                <Badge variant="outline">Docker</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Developed an exam cell automation system to streamline application and grade-card downloads, plus academic performance analysis using statistical techniques.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Credit Risk Analysis</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">Boosting Algorithms</Badge>
                <Badge variant="outline">Plotly</Badge>
                <Badge variant="outline">scikit-learn</Badge>
                <Badge variant="outline">Pandas</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Conducted detailed EDA to uncover feature importance and correlations; built and evaluated ML models for accurate credit risk prediction.</li>
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Mall Customer Analysis & Segmentation</h3>
              <div className="flex flex-wrap gap-1 mt-2">
                <Badge variant="outline">Pandas</Badge>
                <Badge variant="outline">Plotly</Badge>
                <Badge variant="outline">scikit-learn</Badge>
                <Badge variant="outline">NumPy</Badge>
              </div>
            </div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Performed customer segmentation using clustering on age, income, and spending score; derived insights to inform tailored marketing strategies.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Tsinghua University HTGR Summer School 2025</h3>
                <p className="text-muted-foreground">Tsinghua University, Beijing, China</p>
              </div>
              <Badge variant="secondary">05/2025 - 06/2025</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Selected for an intensive program by INET Tsinghua University on Generation IV high temperature gas cooled reactor technology, from China&apos;s leading experts with hands‑on facility tours (HTR‑10 & HTR‑PM), reactor design and safety workshops, and insights into industrial applications (hydrogen production, process heat).
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">Time Series Analysis</h3>
                <p className="text-muted-foreground">EPAM Systems Inc. Innovation Center (Fortune 500)</p>
              </div>
              <Badge variant="secondary">2024 - 2025</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Selected for a one-year Time Series Analysis program focusing on ML, Data Science, and System Architecture.
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">B.Tech in Computer Engineering</h3>
                <p className="text-muted-foreground">University of Mumbai, Mumbai, India</p>
              </div>
              <Badge variant="secondary">2021 - 2025</Badge>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">12th Grade</h3>
                <p className="text-muted-foreground">Ramsheth Thakur Public School, Mumbai, India</p>
              </div>
              <Badge variant="secondary">2019 - 2021</Badge>
            </div>
            <p className="text-sm text-muted-foreground">92.2%</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-lg">10th Grade</h3>
                <p className="text-muted-foreground">Vikas The Concept School, Hyderabad, India</p>
              </div>
              <Badge variant="secondary">2017 - 2019</Badge>
            </div>
            <p className="text-sm text-muted-foreground">92.8%</p>
          </div>
        </CardContent>
      </Card>

      {/* Honors & Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Honors & Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li><strong>CSC Scholarship:</strong> Awarded a CSC Scholarship to attend the HTGR Summer School 2025.</li>
            <li><strong>Meta Hacker Cup 2024 (Round 2):</strong> A global ACM-ICPC-style algorithmic competition organized by Meta.</li>
            <li><strong>CodeUncode 2024:</strong> Secured 49th position out of 2000 participants in an ACM-ICPC-style algorithmic contest.</li>
            <li><strong>Selected for Tsinghua University HTGR Summer School</strong></li>
            <li><strong>Selected for 2025 Tsinghua Summer School for International Construction</strong></li>
            <li><strong>Selected for &quot;Design Futures·Shared Vision&quot; 2025 International Summer Program</strong>, Academy of Arts & Design, Tsinghua University</li>
            <li><strong>Selected for 2025 Tsinghua-Princeton-CI Summer School on Combustion</strong></li>
            <li><strong>Selected for 2025 Tsinghua University IEDA Summer School - Industrial Engineering and Data Analytics</strong></li>
            <li><strong>Selected for Tsinghua University Brain and Intelligence Laboratory “Music Brain Science Summer Training Camp”</strong></li>
          </ul>
        </CardContent>
      </Card>

      {/* Certificates */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
            <li><strong>Business Analytics & Text Mining Modelling Using Python</strong>, IIT Roorkee</li>
            <li><strong>Machine Learning Specialization</strong>, Stanford University</li>
            <li><strong>Deep Learning Specialization</strong>, DeepLearning.AI</li>
            <li><strong>Numerical Methods for Engineers</strong>, IIT Madras</li>
          </ul>
        </CardContent>
      </Card>

      {/* Courses */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">AIML</Badge>
            <Badge variant="outline">Linear Algebra</Badge>
            <Badge variant="outline">Probability and Statistics</Badge>
            <Badge variant="outline">Discrete Mathematics</Badge>
            <Badge variant="outline">Calculus</Badge>
            <Badge variant="outline">Differential Equations</Badge>
            <Badge variant="outline">Algorithms</Badge>
            <Badge variant="outline">Automata Theory</Badge>
            <Badge variant="outline">Cloud Computing</Badge>
            <Badge variant="outline">DBMS</Badge>
            <Badge variant="outline">OOP</Badge>
            <Badge variant="outline">Signal Processing</Badge>
            <Badge variant="outline">CAD</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Interests */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Piano & Keyboard</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground mt-2">
                <li><strong>1st Place, District Classical Music Concert:</strong> Led as the pianist in a winning group performance, showcasing technical skill and expressive interpretation.</li>
                <li><strong>Lead Pianist, School Choir (Grades 5-12):</strong> Directed and performed all musical arrangements, demonstrating leadership and collaboration.</li>
                <li><strong>Farewell Ceremony Pianist:</strong> Selected to perform for the senior students&apos; farewell, creating a memorable musical experience.</li>
                <li><strong>1st Runner-up, Greek Play Competition:</strong> Awarded for live background music, enriching the theatrical atmosphere with dynamic soundscapes.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
