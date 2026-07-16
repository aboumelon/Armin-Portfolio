import { createFileRoute, useRouter, Link } from "@tanstack/react-router";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { GitBranch, GitCommit, ExternalLink, RefreshCw, CheckCircle2, AlertTriangle, Clock, ArrowLeft } from "lucide-react";
import { getGithubSync, type RepoSync } from "@/lib/github.functions";

const syncQuery = queryOptions({
  queryKey: ["github-sync"],
  queryFn: () => getGithubSync(),
  staleTime: 60_000,
});

export const Route = createFileRoute("/admin/sync")({
  head: () => ({
    meta: [
      { title: "Sync Status — Admin" },
      { name: "description", content: "GitHub sync status panel." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(syncQuery),
  component: SyncPage,
  errorComponent: ({ error }) => (
    <div className="container-x pt-32 pb-20 text-red-400">Failed to load sync status: {error.message}</div>
  ),
});

function timeAgo(iso: string): string {
  if (!iso) return "—";
  const diff = Date.now() - new Date(iso).getTime();
  const s = Math.floor(diff / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  return `${d}d ago`;
}

function freshnessTone(iso: string): { label: string; className: string; Icon: typeof CheckCircle2 } {
  if (!iso) return { label: "unknown", className: "text-muted-foreground border-border", Icon: AlertTriangle };
  const hours = (Date.now() - new Date(iso).getTime()) / 36e5;
  if (hours < 24) return { label: "fresh", className: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10", Icon: CheckCircle2 };
  if (hours < 24 * 14) return { label: "recent", className: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10", Icon: Clock };
  return { label: "stale", className: "text-amber-400 border-amber-500/30 bg-amber-500/10", Icon: AlertTriangle };
}

function SyncPage() {
  const router = useRouter();
  const { data } = useSuspenseQuery(syncQuery);

  return (
    <main className="container-x pt-28 pb-20 max-w-5xl">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 mb-6">
        <ArrowLeft className="size-4" /> Back to portfolio
      </Link>

      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            GitHub Sync Status
          </h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Latest commit on the default branch of each tracked repository. Data pulled live from the GitHub API.
          </p>
          <p className="text-xs text-muted-foreground mt-1 font-mono">
            Checked {timeAgo(data.fetchedAt)}
          </p>
        </div>
        <button
          onClick={() => router.invalidate()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-accent hover:opacity-80 text-sm font-medium"
        >
          <RefreshCw className="size-4" /> Refresh
        </button>
      </div>

      <div className="grid gap-4">
        {data.repos.map((r) => (
          <RepoCard key={r.repo} r={r} />
        ))}
      </div>
    </main>
  );
}

function RepoCard({ r }: { r: RepoSync }) {
  const tone = freshnessTone(r.committedAt);
  return (
    <div className="rounded-2xl border border-border bg-background/50 backdrop-blur-xl p-5 hover:border-cyan-500/40 transition-colors">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <a
            href={r.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-cyan-400"
          >
            {r.repo}
            <ExternalLink className="size-3.5 opacity-60" />
          </a>
          {r.defaultBranch && (
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
              <GitBranch className="size-3" /> {r.defaultBranch}
            </div>
          )}
        </div>
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${tone.className}`}>
          <tone.Icon className="size-3.5" />
          {r.error ? "error" : tone.label}
        </span>
      </div>

      {r.error ? (
        <p className="mt-4 text-sm text-red-400">{r.error}</p>
      ) : (
        <div className="mt-4 flex items-start gap-3">
          <GitCommit className="size-4 mt-1 text-cyan-400 shrink-0" />
          <div className="min-w-0 flex-1">
            <a
              href={r.htmlUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-foreground truncate hover:text-cyan-400"
              title={r.message}
            >
              {r.message}
            </a>
            <p className="mt-1 text-xs text-muted-foreground font-mono">
              <span className="text-cyan-400">{r.shortSha}</span> · {r.author} · {timeAgo(r.committedAt)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
