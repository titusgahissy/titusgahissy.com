import { getCollection } from "astro:content";
import { baseUrl } from "@/lib/config";

export async function GET() {
  const posts = await getCollection("posts");

  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.data.publishedAt).getTime() -
      new Date(a.data.publishedAt).getTime()
  );

  const itemsXml = sortedPosts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${baseUrl}/posts/${post.slug}</link>
      <description>${escapeXml(post.data.summary || "")}</description>
      <pubDate>${new Date(post.data.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Titus Gahissy</title>
    <link>${baseUrl}</link>
    <description>Thoughts, insights, and reflections on technology, entrepreneurship, design, and building products by Titus Gahissy.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed.trim(), {
    headers: { "Content-Type": "text/xml" },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
