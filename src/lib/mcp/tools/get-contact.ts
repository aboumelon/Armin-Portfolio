import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Return public ways to contact the portfolio owner (email and social links).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const { profile } = await import("@/content/profile");
    const data = {
      email: profile.email,
      github: profile.github,
      linkedin: profile.linkedin,
      telegram: profile.telegram,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
