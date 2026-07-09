import { useState, useEffect } from 'react'

interface GitHubActivityProps {
  username: string
}

interface GitHubEvent {
  id: string
  type: string
  repo: { name: string }
  created_at: string
  payload: {
    commits?: { message: string }[]
    size?: number
    ref_type?: string
    action?: string
  }
}

// Ubah tipe event GitHub jadi teks yang gampang dibaca manusia
function describeEvent(event: GitHubEvent): string {
  const repo = event.repo.name.split('/')[1] || event.repo.name

  switch (event.type) {
    case 'PushEvent': {
      // 'size' = total commit yang di-push, lebih akurat dibanding commits.length
      // (GitHub kadang nggak isi penuh array commits di payload)
      const count = Math.max(event.payload.size ?? 0, event.payload.commits?.length ?? 0)
      const msg = event.payload.commits?.[0]?.message?.split('\n')[0]

      if (count === 0) {
        return `updated ${repo}`
      }
      return `pushed ${count} commit${count !== 1 ? 's' : ''} to ${repo}${msg ? `: "${msg}"` : ''}`
    }
    case 'CreateEvent':
      return `created ${event.payload.ref_type ?? 'repo'} in ${repo}`
    case 'PublicEvent':
      return `made ${repo} public`
    case 'WatchEvent':
      return `starred ${repo}`
    case 'ForkEvent':
      return `forked ${repo}`
    case 'PullRequestEvent':
      return `${event.payload.action ?? 'updated'} a pull request in ${repo}`
    case 'IssuesEvent':
      return `${event.payload.action ?? 'updated'} an issue in ${repo}`
    case 'IssueCommentEvent':
      return `commented on an issue in ${repo}`
    default:
      return `activity on ${repo}`
  }
}

function timeAgo(dateStr: string): string {
  const diffMs = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diffMs / 60000)
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

export default function GitHubActivity({ username }: GitHubActivityProps) {
  const [events, setEvents] = useState<GitHubEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/events/public?per_page=8`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then((data: GitHubEvent[]) => {
        setEvents(data.slice(0, 6))
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [username])

  return (
    <div className="w-full min-w-[320px] max-w-[560px] rounded-xl bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-left">
      {/* Title bar, gaya sama seperti terminal sebelumnya */}
      <div className="bg-slate-900/80 border-b border-white/5 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-x-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="text-xs text-gray-400 font-medium">github.com/{username}</span>
        <span className="text-[10px] text-gray-500 uppercase tracking-wider">Live</span>
      </div>

      <div className="p-4 flex flex-col gap-y-4">
        {/* Contribution graph */}
        <div className="rounded-lg bg-slate-900/60 border border-white/5 p-3 overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/2563eb/${username}`}
            alt={`Contribution graph GitHub ${username}`}
            className="w-full min-w-[480px]"
          />
        </div>

        {/* Recent activity */}
        <div className="border-t border-white/5 pt-3">
          <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase block mb-2">
            Recent Activity
          </span>

          <div className="h-[150px] overflow-y-auto text-[11px] leading-relaxed pr-1 select-none pointer-events-none scrollbar-thin scrollbar-thumb-white/10 flex flex-col gap-y-2.5">
            {loading && (
              <div className="text-slate-600 italic">Fetching activity...</div>
            )}

            {error && (
              <div className="text-slate-600 italic">
                Couldn't load activity. Visit{' '}
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline pointer-events-auto"
                >
                  github.com/{username}
                </a>{' '}
                directly.
              </div>
            )}

            {!loading && !error && events.length === 0 && (
              <div className="text-slate-600 italic">No recent public activity.</div>
            )}

            {!loading &&
              !error &&
              events.map((event) => (
                <div key={event.id} className="flex items-start gap-x-2">
                  <span className="text-emerald-400 shrink-0">▸</span>
                  <span className="text-slate-300">
                    {describeEvent(event)}
                    <span className="text-slate-600"> · {timeAgo(event.created_at)}</span>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}