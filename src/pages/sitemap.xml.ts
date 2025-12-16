import { getCollection } from "astro:content";
import { baseUrl } from "@/lib/config";

export async function GET() {
  const pages = ["", "/posts", "/travel", "/ventures", "/library", "/about", "/contact"];
  const posts = await getCollection("posts");

  const staticPages = pages.map(
    (url) => `
    <url>
      <loc>${baseUrl}${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${url === "" ? "1" : "0.8"}</priority>
    </url>`
  );

  const postPages = posts.map(
    (post) => `
    <url>
      <loc>${baseUrl}/posts/${post.slug}</loc>
      <lastmod>${new Date(post.data.publishedAt).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.join("\n")}
  ${postPages.join("\n")}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
    },
  });
}
