import { createServerFn } from "@tanstack/react-start";

export type RepoSync = {
  repo: string;
  url: string;
  defaultBranch: string;
  sha: string;
  shortSha: string;
  message: string;
  author: string;
  committedAt: string;
  htmlUrl: string;
  error?: string;
};

const REPOS = [
  "Armin1831/Armin-Portfolio",
  "Armin1831/shop-redux",
  "Armin1831/todo-firebase",
];

async function fetchRepoSync(fullName: string): Promise<RepoSync> {
  const base: RepoSync = {
    repo: fullName,
    url: `https://github.com/${fullName}`,
    defaultBranch: "",
    sha: "",
    shortSha: "",
    message: "",
    author: "",
    committedAt: "",
    htmlUrl: `https://github.com/${fullName}`,
  };
  try {
    const repoRes = await fetch(`https://api.github.com/repos/${fullName}`, {
      headers: { Accept: "application/vnd.github+json", "User-Agent": "lovable-portfolio" },
    });
    if (!repoRes.ok) return { ...base, error: `GitHub ${repoRes.status}` };
    const repoData: { default_branch: string } = await repoRes.json();

    const commitRes = await fetch(
      `https://api.github.com/repos/${fullName}/commits/${repoData.default_branch}`,
      { headers: { Accept: "application/vnd.github+json", "User-Agent": "lovable-portfolio" } },
    );
    if (!commitRes.ok) return { ...base, defaultBranch: repoData.default_branch, error: `GitHub ${commitRes.status}` };
    const c: {
      sha: string;
      html_url: string;
      commit: { message: string; author: { name: string; date: string } };
    } = await commitRes.json();

    return {
      ...base,
      defaultBranch: repoData.default_branch,
      sha: c.sha,
      shortSha: c.sha.slice(0, 7),
      message: c.commit.message.split("\n")[0],
      author: c.commit.author.name,
      committedAt: c.commit.author.date,
      htmlUrl: c.html_url,
    };
  } catch (e) {
    return { ...base, error: e instanceof Error ? e.message : "Unknown error" };
  }
}

export const getGithubSync = createServerFn({ method: "GET" }).handler(async () => {
  const results = await Promise.all(REPOS.map(fetchRepoSync));
  return { fetchedAt: new Date().toISOString(), repos: results };
});
