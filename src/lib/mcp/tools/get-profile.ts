import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description: "Return basic profile info (name, handle, location, and public social links) for the portfolio owner.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const { profile } = await import("@/content/profile");
    const { name, handle, email, github, linkedin, telegram, location } = profile;
    const data = { name, handle, email, github, linkedin, telegram, location };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
