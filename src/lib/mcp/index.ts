import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import listSkills from "./tools/list-skills";
import listProjects from "./tools/list-projects";
import getProject from "./tools/get-project";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "armin-portfolio-mcp",
  title: "Armin Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools for Armin Aboutalebi's portfolio. Use `get_profile` and `get_contact` for identity/contact info, `list_skills` for technical skills, and `list_projects` / `get_project` to explore portfolio projects.",
  tools: [getProfile, listSkills, listProjects, getProject, getContact],
});
