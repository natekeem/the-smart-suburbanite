import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";

const distDir = path.resolve(process.cwd(), "dist");
const indexPath = path.join(distDir, "sitemap-index.xml");

function locations(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
}

const indexXml = await fs.readFile(indexPath, "utf8");
const sitemapFiles = locations(indexXml).map(url =>
  path.join(distDir, path.posix.basename(new URL(url).pathname))
);
const urls = new Set();

for (const sitemapFile of sitemapFiles) {
  const xml = await fs.readFile(sitemapFile, "utf8");
  for (const url of locations(xml)) urls.add(url);
}

if (urls.size === 0) {
  throw new Error("No canonical URLs were found in the generated XML sitemap.");
}

const output = `${[...urls].sort().join("\n")}\n`;
await fs.writeFile(path.join(distDir, "sitemap.txt"), output, "utf8");
