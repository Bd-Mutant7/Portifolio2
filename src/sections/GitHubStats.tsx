import { useEffect, useRef, useState } from 'react'
import { Github, GitCommit, GitBranch, Star, Users, Calendar, Flame } from 'lucide-react'

const GitHubStats = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    commits: 0,
    repos: 0,
    stars: 0,
    followers: 0,
  })

  const stats = [
    { icon: GitCommit, label: 'Total Commits', value: 10711, key: 'commits', color: '#E50914' },
    { icon: GitBranch, label: 'Repositories', value: 45, key: 'repos', color: '#1DB954' },
    { icon: Star, label: 'Total Stars', value: 89, key: 'stars', color: '#FFD700' },
    { icon: Users, label: 'Followers', value: 1000, key: 'followers', color: '#E50914' },
  ]

  const topLanguages = [
    { name: 'Python', percentage: 35, color: '#3776AB' },
    { name: 'JavaScript', percentage: 25, color: '#F7DF1E' },
    { name: 'TypeScript', percentage: 20, color: '#3178C6' },
    { name: 'HTML', percentage: 12, color: '#E34F26' },
    { name: 'Other', percentage: 8, color: '#9CA3AF' },
  ]

  const contributions = [
    { day: 'Mon', count: 12 },
    { day: 'Tue', count: 18 },
    { day: 'Wed', count: 15 },
    { day: 'Thu', count: 22 },
    { day: 'Fri', count: 20 },
    { day: 'Sat', count: 8 },
    { day: 'Sun', count: 5 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animate counters
  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeOut = 1 - Math.pow(1 - progress, 3)

        setCounts({
          commits: Math.floor(10711 * easeOut),
          repos: Math.floor(45 * easeOut),
          stars: Math.floor(89 * easeOut),
          followers: Math.floor(1000 * easeOut),
        })

        if (step >= steps) {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32 bg-[#0B0B0B]"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E50914]/5 to-transparent" />

      <div className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#E50914] bg-[#E50914]/10 rounded-full border border-[#E50914]/20">
              GitHub Activity
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              GitHub Stats
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E50914] to-[#1DB954] mx-auto rounded-full mb-4" />
            <p className="text-white/60 max-w-2xl mx-auto">
              A snapshot of my coding journey and contributions to the open-source community.
            </p>
          </div>

          {/* Main Stats Grid */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.key}
                className="bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-[#E50914]/30 transition-all duration-300 group"
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {formatNumber(counts[stat.key as keyof typeof counts])}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Detailed Stats */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Language Distribution */}
            <div
              className={`bg-[#141414] rounded-2xl p-6 border border-white/5 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Github className="w-5 h-5 text-[#1DB954]" />
                Language Distribution
              </h3>
              
              <div className="space-y-4">
                {topLanguages.map((lang, index) => (
                  <div key={lang.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        />
                        <span className="text-sm text-white/80">{lang.name}</span>
                      </div>
                      <span className="text-sm font-medium text-white">{lang.percentage}%</span>
                    </div>
                    <div className="h-2 bg-[#1F1F1F] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${lang.percentage}%` : '0%',
                          backgroundColor: lang.color,
                          transitionDelay: `${(index + 1) * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Activity */}
            <div
              className={`bg-[#141414] rounded-2xl p-6 border border-white/5 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#E50914]" />
                Weekly Activity
              </h3>
              
              <div className="flex items-end justify-between gap-2 h-40">
                {contributions.map((day, index) => (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-gradient-to-t from-[#E50914] to-[#1DB954] rounded-t-md transition-all duration-700"
                      style={{
                        height: isVisible ? `${(day.count / 25) * 100}%` : '0%',
                        transitionDelay: `${(index + 1) * 100}ms`,
                        opacity: 0.3 + (day.count / 25) * 0.7,
                      }}
                    />
                    <span className="text-xs text-white/50">{day.day}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-white/50">Total this week</span>
                <span className="text-white font-medium">100 contributions</span>
              </div>
            </div>
          </div>

          {/* GitHub Streak */}
          <div
            className={`mt-6 bg-gradient-to-r from-[#E50914]/10 via-[#1DB954]/10 to-[#E50914]/10 rounded-2xl p-6 border border-white/5 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E50914] to-[#1DB954] flex items-center justify-center">
                  <Flame className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">GitHub Streak</h4>
                  <p className="text-sm text-white/60">Consistent coding activity</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E50914]">365+</div>
                  <div className="text-xs text-white/50">Days Active</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#1DB954]">17k+</div>
                  <div className="text-xs text-white/50">Contributions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GitHubStats
