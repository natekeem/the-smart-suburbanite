import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";

export async function GET() {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(posts);
  const siteRootUrl = new URL(config.site.url);
  const projectSiteUrl = new URL(import.meta.env.BASE_URL, siteRootUrl);

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: projectSiteUrl.toString(),
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: new URL(getPostUrl(id, filePath, config.site.lang), siteRootUrl)
        .toString(),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
