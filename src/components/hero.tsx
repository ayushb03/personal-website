import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 py-8 md:py-12">
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ayush
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Human (maybe a Cyborg in the future)
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
        Hi I&apos;m Ayush, I mainly do AI research (Auto-regressive and other model paradigms, 
        RL, Multi-agent systems, and more), build products, and play piano. 
        Super open to collaborating, working together, or just shooting the breeze, 
        whether you&apos;re in China, anywhere in Asia, the US, or beyond, I&apos;m down to travel. 
        Drop me a line on <a href="https://twitter.com/ayushb03" target="_blank" rel="noopener noreferrer" className="inline-block align-middle mx-1"><FaXTwitter size={20}/></a> or <a href="mailto:ayushbodade@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-block align-middle mx-1"><MdEmail size={20}/></a>, let&apos;s make something awesome!
        </p>
      </div>
      <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full ring-2 ring-neutral-200 dark:ring-neutral-800">
        <Image
          src="/me.png"
          alt="Ayush Bodade profile picture"
          fill
          sizes="(max-width: 768px) 96px, 128px"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
