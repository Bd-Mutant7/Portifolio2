import { useEffect, useRef, useState } from 'react'
import { Star, Github, ExternalLink } from 'lucide-react'

interface Project {
  id: number
  name: string
  description: string
  image: string
  stars: number
  forks?: number
  language: string
  languageColor: string
  category: string
  githubUrl: string
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')

  const projects: Project[] = [
    {
      id: 1,
      name: 'Password Analyzer',
      description: 'A modern web tool to analyze password strength with real-time feedback and security recommendations.',
      image: '/project-password-analyzer.jpg',
      stars: 18,
      language: 'HTML',
      languageColor: '#E34F26',
      category: 'Security Tools',
      githubUrl: 'https://github.com/Bd-Mutant7/Password-Analyzer',
    },
    {
      id: 2,
      name: 'Cybersecurity Threats Guide',
      description: 'Comprehensive educational resource with detection scripts and prevention strategies for cyber threats.',
      image: '/project-threats-guide.jpg',
      stars: 12,
      forks: 1,
      language: 'Python',
      languageColor: '#3776AB',
      category: 'Security Tools',
      githubUrl: 'https://github.com/Bd-Mutant7/Cybersecurity-Threats-Guide',
    },
    {
      id: 3,
      name: 'Payloads All The Things',
      description: 'A curated collection of useful payloads and bypass techniques for web application security testing.',
      image: '/project-payloads.jpg',
      stars: 11,
      forks: 1,
      language: 'Python',
      languageColor: '#3776AB',
      category: 'Security Tools',
      githubUrl: 'https://github.com/Bd-Mutant7/PayloadsAllTheThings',
    },
    {
      id: 4,
      name: 'Awesome Privacy',
      description: 'A curated list of privacy and security-focused software and services for digital protection.',
      image: '/project-privacy.jpg',
      stars: 11,
      forks: 1,
      language: 'Astro',
      languageColor: '#FF5D01',
      category: 'Web Applications',
      githubUrl: 'https://github.com/Bd-Mutant7/awesome-privacy',
    },
    {
      id: 5,
      name: 'Recipe Book App',
      description: 'A modern TypeScript application for managing culinary creations with an intuitive interface.',
      image: '/project-recipe-app.jpg',
      stars: 10,
      forks: 1,
      language: 'TypeScript',
      languageColor: '#3178C6',
      category: 'Web Applications',
      githubUrl: 'https://github.com/Bd-Mutant7/recipe-book-app',
    },
    {
      id: 6,
      name: 'ClimaPy',
      description: 'Django-based CLI weather application providing real-time weather data for cities worldwide.',
      image: '/project-clima.jpg',
      stars: 6,
      language: 'Python',
      languageColor: '#3776AB',
      category: 'Web Applications',
      githubUrl: 'https://github.com/Bd-Mutant7/ClimaPy',
    },
    {
      id: 7,
      name: 'Network Packet Sniffer',
      description: 'Real-time network traffic analyzer with GUI for detecting suspicious activities.',
      image: '/project-packet-sniffer.jpg',
      stars: 6,
      language: 'Python',
      languageColor: '#3776AB',
      category: 'Security Tools',
      githubUrl: 'https://github.com/Bd-Mutant7/Network-Packet-Sniffer-Traffic-Analyse-GUI',
    },
    {
      id: 8,
      name: 'Habit Tracker',
      description: 'TypeScript-based habit tracking application with streak counters and progress visualization.',
      image: '/project-habit-tracker.jpg',
      stars: 6,
      language: 'TypeScript',
      languageColor: '#3178C6',
      category: 'Web Applications',
      githubUrl: 'https://github.com/Bd-Mutant7/Habit-Tracker-App',
    },
  ]

  const categories = ['All', 'Security Tools', 'Web Applications']

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32"
    >
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1DB954] bg-[#1DB954]/10 rounded-full border border-[#1DB954]/20">
                Featured Work
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                My Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E50914] to-[#1DB954] rounded-full" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-[#E50914] text-white'
                      : 'bg-[#141414] text-white/70 hover:bg-[#1F1F1F] hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group netflix-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E50914] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1DB954] transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Language Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-md flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                    />
                    <span className="text-xs font-medium text-white">{project.language}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E50914] transition-colors line-clamp-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-white/60 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-[#FFD700]" />
                      <span className="text-sm font-medium text-white">{project.stars}</span>
                    </div>
                    {project.forks && (
                      <div className="flex items-center gap-1.5">
                        <svg
                          className="w-4 h-4 text-white/50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="18" r="3" />
                          <circle cx="6" cy="6" r="3" />
                          <circle cx="18" cy="6" r="3" />
                          <path d="M6 9v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9" />
                          <path d="M12 15V9" />
                        </svg>
                        <span className="text-sm text-white/60">{project.forks}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div
            className={`mt-12 text-center transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="https://github.com/Bd-Mutant7?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
