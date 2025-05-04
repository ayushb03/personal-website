export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // Chinese crawlers
      {
        userAgent: "Baiduspider",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Sogou web spider",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "360Spider",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "YisouSpider",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      // US and European crawlers
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "bingbot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "Yandex",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "facebookexternalhit",
        allow: ["/"],
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
