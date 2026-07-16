import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_project",
  title: "Get project",
  description: "Return details for a single portfolio project by its slug (e.g. 'alpr', 'portfolio', 'shop-redux', 'todo-firebase').",
  inputSchema: {
    slug: z.string().min(1).describe("The project slug."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ slug }) => {
    const { projects } = await import("@/content/profile");
    const project = projects.find((p) => p.slug === slug);
    if (!project) {
      return {
        content: [{ type: "text", text: `No project found with slug '${slug}'.` }],
        isError: true,
      };
    }
    const data = {
      slug: project.slug,
      tags: project.tags,
      featured: project.featured,
      href: project.href,
      github: project.github,
      demo: project.demo,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
