import { useEffect, useRef, useState } from 'react'
import { Github, Star, GitBranch, MapPin, GraduationCap, ArrowDown, Play, Mail } from 'lucide-react'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
    }

    const particles: Particle[] = []
    const particleCount = 50
    const colors = ['#E50914', '#1DB954', '#ffffff']

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 150)})`
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { icon: Github, value: '1k+', label: 'Followers' },
    { icon: GitBranch, value: '45', label: 'Repositories' },
    { icon: Star, value: '89', label: 'Stars' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/50 to-[#0B0B0B]" />
      </div>

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Content */}
      <div className="relative z-10 section-padding w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Profile Image */}
            <div
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border-2 border-[#E50914]/30 animate-pulse-slow" />
                <div className="absolute inset-2 rounded-full border-2 border-[#1DB954]/30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
                
                {/* Profile placeholder */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-[#141414] to-[#1F1F1F] border-4 border-white/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-gradient-to-br from-[#E50914] to-[#1DB954] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">PK</span>
                      </div>
                      <p className="text-xs text-white/50">Add Your Photo</p>
                    </div>
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E50914]/20 to-[#1DB954]/20 blur-xl -z-10" />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div
                className={`transition-all duration-700 delay-100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-[#1DB954]" />
                  <span className="text-sm text-white/70">Nairobi, Kenya</span>
                  <span className="text-white/30">|</span>
                  <GraduationCap className="w-4 h-4 text-[#E50914]" />
                  <span className="text-sm text-white/70">Meru University</span>
                </div>
              </div>

              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <span className="gradient-text">Peter Kariuki</span>
              </h1>

              <p
                className={`text-xl sm:text-2xl text-white/80 font-medium mb-2 transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Cybersecurity Specialist
              </p>

              <p
                className={`text-lg text-[#1DB954] font-medium mb-6 transition-all duration-700 delay-400 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                & Ethical Hacker
              </p>

              <p
                className={`text-base sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 mb-8 transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Passionate about penetration testing, network security, and vulnerability research. 
                Continuously learning and practicing ethical hacking techniques through CTF challenges and labs.
              </p>

              {/* Stats */}
              <div
                className={`flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 mb-8 transition-all duration-700 delay-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <stat.icon className="w-5 h-5 text-[#E50914]" />
                    <div>
                      <span className="text-xl font-bold text-white">{stat.value}</span>
                      <span className="text-sm text-white/50 ml-1">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="btn-primary flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  <span>View Projects</span>
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}

export default Hero
