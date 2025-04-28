import { Section } from "../../components/section";

export const metadata = {
  title: "About",
  description: "Learn more about me and my background.",
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Software developer passionate about building clean, efficient
          technology. My interests lie at the intersection of AI research
          (especially representation learning and generative models),
          algorithms, and music, particularly classical piano.
        </p>
      </div>

      <Section title="Small Wins">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2"></div>
            <div>
              <p className="font-medium">Meta Hacker Cup 2024</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Advanced to Round 2
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 mt-2"></div>
            <div>
              <p className="font-medium">CodeUncode 2024</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Top 3% (49/2000)
              </p>
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
    </div>
  );
}
