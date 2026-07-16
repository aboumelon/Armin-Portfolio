import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description: "List the portfolio owner's technical skills grouped by category (frontend, backend, tools) with a self-rated proficiency level (0-100).",
  inputSchema: {
    category: z
      .enum(["frontend", "backend", "tools", "all"])
      .optional()
      .describe("Filter to one category, or 'all' (default)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ category }) => {
    const { skills } = await import("@/content/profile");
    const data =
      !category || category === "all" ? skills : { [category]: skills[category] };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
