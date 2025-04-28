import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

export default function Hero() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10 py-8 md:py-12">
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ayush Bodade
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Future and Beyond
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-md">
          I love computers and math. Also piano! Building AI systems that push boundaries and solve real-world problems.
        </p>
        <div className="flex gap-4 pt-2">
          <Link
            href="/projects"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium transition-all hover:opacity-90"
          >
            View Projects <FaArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 font-medium transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            About Me
          </Link>
        </div>
      </div>
      <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full ring-2 ring-neutral-200 dark:ring-neutral-800">
        {/* Replace with your own image */}
        <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-xl font-bold">
          AB
        </div>
      </div>
    </div>
  )
} 