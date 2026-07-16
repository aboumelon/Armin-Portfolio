import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description: "List portfolio projects with slug, tags, GitHub / demo links, and whether they are featured.",
  inputSchema: {
    featuredOnly: z.boolean().optional().describe("If true, only return featured projects."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ featuredOnly }) => {
    const { projects } = await import("@/content/profile");
    const items = (featuredOnly ? projects.filter((p) => p.featured) : projects).map((p) => ({
      slug: p.slug,
      tags: p.tags,
      featured: p.featured,
      href: p.href,
      github: p.github,
      demo: p.demo,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
