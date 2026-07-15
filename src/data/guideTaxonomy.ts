import type { CollectionEntry } from "astro:content";

export const GUIDE_CATEGORIES = [
  {
    slug: "beginner-guides",
    label: "Beginner Guides",
    navLabel: "Beginner Guides",
    eyebrow: "Getting Started",
    description:
      "Build a useful foundation before choosing devices, accounts, or ecosystems.",
    leadSlug: "what-is-a-smart-home",
  },
  {
    slug: "security-privacy",
    label: "Security & Privacy",
    navLabel: "Security & Privacy",
    eyebrow: "Clear Boundaries",
    description:
      "Understand access, recording, privacy, and realistic security trade-offs without fear or hype.",
    leadSlug: "smart-locks-convenience-security-common-tradeoffs",
  },
  {
    slug: "maintenance-setup",
    label: "Maintenance & Setup",
    navLabel: "Maintenance & Setup",
    eyebrow: "Keep It Working",
    description:
      "Plan compatibility, upkeep, household access, and reliable responses before complexity grows.",
    leadSlug: "smart-home-setup-checklist-for-non-technical-homeowners",
  },
  {
    slug: "comfort-convenience",
    label: "Comfort & Convenience",
    navLabel: "Comfort & Convenience",
    eyebrow: "Useful Routines",
    description:
      "Choose modest upgrades that fit the way a real household moves, rests, and manages everyday tasks.",
    leadSlug: "smart-lighting-hallways-stairs-nighttime-routines",
  },
] as const;

export type GuideCategorySlug = (typeof GUIDE_CATEGORIES)[number]["slug"];

type GuideMeta = {
  category: GuideCategorySlug;
  purpose:
    | "Beginner Guide"
    | "Planning Guide"
    | "Explainer"
    | "Setup Guide"
    | "Decision Guide"
    | "Compatibility Guide"
    | "Privacy Guide"
    | "Comparison Guide"
    | "Security Guide"
    | "Routine Guide";
};

export const GUIDE_META: Record<string, GuideMeta> = {
  "what-is-a-smart-home": {
    category: "beginner-guides",
    purpose: "Beginner Guide",
  },
  "questions-before-buying-first-smart-home-device": {
    category: "beginner-guides",
    purpose: "Planning Guide",
  },
  "smart-home-terms-explained": {
    category: "beginner-guides",
    purpose: "Explainer",
  },
  "smart-home-devices-homeowners-often-regret-buying-first": {
    category: "beginner-guides",
    purpose: "Decision Guide",
  },
  "home-security-cameras-indoor-vs-outdoor-vs-doorbell": {
    category: "security-privacy",
    purpose: "Comparison Guide",
  },
  "video-doorbells-with-no-monthly-fee-what-to-look-for": {
    category: "security-privacy",
    purpose: "Privacy Guide",
  },
  "smart-locks-convenience-security-common-tradeoffs": {
    category: "security-privacy",
    purpose: "Security Guide",
  },
  "smart-home-setup-checklist-for-non-technical-homeowners": {
    category: "maintenance-setup",
    purpose: "Setup Guide",
  },
  "smart-thermostat-compatibility-what-to-check-before-you-buy": {
    category: "maintenance-setup",
    purpose: "Compatibility Guide",
  },
  "simple-smart-home-upgrades-for-older-homes": {
    category: "maintenance-setup",
    purpose: "Setup Guide",
  },
  "smart-sensors-explained-motion-contact-leak-temperature": {
    category: "maintenance-setup",
    purpose: "Explainer",
  },
  "do-you-really-need-a-smart-thermostat": {
    category: "comfort-convenience",
    purpose: "Decision Guide",
  },
  "smart-plugs-vs-smart-power-strips-what-homeowners-should-know": {
    category: "comfort-convenience",
    purpose: "Comparison Guide",
  },
  "smart-lighting-hallways-stairs-nighttime-routines": {
    category: "comfort-convenience",
    purpose: "Routine Guide",
  },
};

export const START_HERE_SLUGS = [
  "what-is-a-smart-home",
  "questions-before-buying-first-smart-home-device",
  "smart-home-terms-explained",
  "smart-home-setup-checklist-for-non-technical-homeowners",
] as const;

export function getGuideSlug(post: CollectionEntry<"posts">): string {
  return post.id.split("/").at(-1) ?? post.id;
}

export function getCategory(slug: GuideCategorySlug) {
  return GUIDE_CATEGORIES.find(category => category.slug === slug);
}

export function getGuideMeta(post: CollectionEntry<"posts">) {
  const slug = getGuideSlug(post);
  const meta = GUIDE_META[slug] ?? {
    category: "beginner-guides" as const,
    purpose: "Beginner Guide" as const,
  };
  return { slug, ...meta, categoryData: getCategory(meta.category) };
}

export function getPostsForCategory(
  posts: CollectionEntry<"posts">[],
  category: GuideCategorySlug
) {
  return posts.filter(post => getGuideMeta(post).category === category);
}

export function getRelatedPosts(
  current: CollectionEntry<"posts">,
  posts: CollectionEntry<"posts">[],
  limit = 3
) {
  const currentMeta = getGuideMeta(current);
  const currentTags = new Set(current.data.tags.map(tag => tag.toLowerCase()));

  return posts
    .filter(post => post.id !== current.id)
    .map(post => {
      const meta = getGuideMeta(post);
      const sharedTags = post.data.tags.filter(tag =>
        currentTags.has(tag.toLowerCase())
      ).length;
      const categoryScore = meta.category === currentMeta.category ? 10 : 0;
      const startHereScore = START_HERE_SLUGS.includes(
        meta.slug as (typeof START_HERE_SLUGS)[number]
      )
        ? 1
        : 0;
      return { post, score: categoryScore + sharedTags + startHereScore };
    })
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.post.data.pubDatetime.getTime() - a.post.data.pubDatetime.getTime()
    )
    .slice(0, limit)
    .map(({ post }) => post);
}
