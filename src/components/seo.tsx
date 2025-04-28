import { Metadata } from 'next';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  path?: string;
};

export function generatePageMetadata({
  title = "Ayush Bodade | AI Engineer and Researcher",
  description = "Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning",
  image = "/images/og-image.jpg",
  article = false,
  path = "",
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: article ? "article" : "website",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}${image}`],
    },
    alternates: {
      canonical: url,
    },
  };
} 