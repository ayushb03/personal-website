import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Image from 'next/image';

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
          I love computers and math. Also piano! Building AI systems that push
          boundaries and solve real-world problems.
        </p>
        <div className="flex gap-4 pt-2">
          {/* Buttons removed */}
        </div>
      </div>
      <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full ring-2 ring-neutral-200 dark:ring-neutral-800">
        <Image 
          src="/profile.jpg"
          alt="Ayush Bodade profile picture"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
    </div>
  );
}

