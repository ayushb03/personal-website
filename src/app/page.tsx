import Hero from '../components/hero'
import { Section } from '../components/section'
import { ExperienceCard } from '../components/experience-card'
import { Card } from '../components/card'

export default function Home() {
  return (
    <>
      <Hero />
      
      <Section title="Background" id="background">
        <div className="space-y-2">
          <ExperienceCard 
            title="Founding Team AI Engineer" 
            company="Unsiloed AI"
            period="Jan 2025 – Apr 2025"
            location="San Francisco, CA"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>Designed and deployed end-to-end AI pipelines for document chunking, extraction, and fine-tuned vision-language models tailored to financial-services use cases.</li>
              <li>Built scalable REST APIs consumed by enterprise clients.</li>
            </ul>
          </ExperienceCard>
          
          <ExperienceCard 
            title="Tech Lead" 
            company="Covenants PharmaChem"
            period="Oct 2024 – Present"
            location="Mumbai, India"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>Leading the AI platform team to automate procurement workflows using advanced ML and NLP.</li>
              <li>Reduced manual processing time by X% (metric if available).</li>
            </ul>
          </ExperienceCard>
          
          <ExperienceCard 
            title="Undergraduate Researcher" 
            company="MIT"
            period="Nov 2024 – Feb 2025"
            location="Cambridge, MA"
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>Investigated "delayed generalization" phenomena in representation learning and proposed new architectural insights.</li>
            </ul>
          </ExperienceCard>
        </div>
      </Section>
      
      <Section title="Achievements" id="achievements">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2"></div>
            <div>
              <p className="font-medium">Meta Hacker Cup 2024</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Advanced to Round 2</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2"></div>
            <div>
              <p className="font-medium">CodeUncode 2024</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Top 3% (49/2000)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2"></div>
            <div>
              <p className="font-medium">Piano & Keyboard</p>
              <ul className="text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
                <li>1st Place, District Classical Music Concert</li>
                <li>Lead Pianist, School Choir (Grades 5–12)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
