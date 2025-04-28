export function PersonStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ayush Bodade",
    "url": process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000",
    "jobTitle": "AI Engineer and Researcher",
    "sameAs": [
      "https://www.linkedin.com/in/ayushbodade/",
      "https://github.com/ayushb03",
      "https://twitter.com/ayushb03"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Unsiloed AI"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Reinforcement Learning",
      "Multi-agent Systems",
      "Software Development"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : "http://localhost:3000",
    "name": "Ayush Bodade | AI Engineer and Researcher",
    "description": "Ayush Bodade - AI Engineer and Researcher specializing in multi-agent systems, machine learning, and reinforcement learning.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000"}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 