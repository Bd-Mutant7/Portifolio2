import { useEffect, useRef, useState } from 'react'
import { Target, BookOpen, Trophy, Users, Code, Terminal, Shield, Lock } from 'lucide-react'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const learningGoals = [
    { icon: Target, text: 'Network Penetration Testing' },
    { icon: Lock, text: 'Web Application Security' },
    { icon: Code, text: 'Python Automation for Security' },
    { icon: Terminal, text: 'Linux System Administration' },
  ]

  const currentWork = [
    { icon: Trophy, text: 'CTF Challenge Solutions' },
    { icon: Shield, text: 'Security Tool Development' },
    { icon: Code, text: 'Lab Environment Setup' },
  ]

  const goals2026 = [
    { icon: BookOpen, text: 'Complete TryHackMe Learning Paths' },
    { icon: Target, text: 'Participate in Bug Bounty Programs' },
    { icon: Users, text: 'Build Portfolio Projects' },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32"
    >
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1DB954] bg-[#1DB954]/10 rounded-full border border-[#1DB954]/20">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Who Am I?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E50914] to-[#1DB954] mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Bio */}
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-[#141414] rounded-2xl p-6 sm:p-8 border border-white/5">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-[#E50914]" />
                  My Story
                </h3>
                
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    I'm a <span className="text-white font-medium">cybersecurity student</span> at Meru University of Science and Technology, 
                    deeply passionate about <span className="text-[#1DB954]">penetration testing</span>, network security, and vulnerability research.
                  </p>
                  <p>
                    My journey in cybersecurity started with a curiosity about how systems work and how they can be protected. 
                    Today, I'm continuously learning and practicing ethical hacking techniques through 
                    <span className="text-[#E50914]"> CTF challenges</span> and hands-on labs.
                  </p>
                  <p>
                    I believe in building a strong foundation in cybersecurity principles and practical offensive/defensive skills. 
                    I'm always open to collaboration on security research, tool development, and learning resources.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-[#E50914]/10 to-[#1DB954]/10 rounded-xl border border-white/5">
                  <p className="text-white/80 italic text-center">
                    "Exploring systems to understand how to defend them."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Goals & Focus */}
            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Currently Learning */}
              <div className="bg-[#141414] rounded-2xl p-6 border border-white/5">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-[#1DB954]" />
                  Currently Learning
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {learningGoals.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-[#1F1F1F] rounded-lg hover:bg-[#2a2a2a] transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-[#1DB954]" />
                      <span className="text-sm text-white/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working On */}
              <div className="bg-[#141414] rounded-2xl p-6 border border-white/5">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-[#E50914]" />
                  Working On
                </h4>
                <div className="space-y-3">
                  {currentWork.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-[#1F1F1F] rounded-lg hover:bg-[#2a2a2a] transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-[#E50914]" />
                      <span className="text-sm text-white/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2026 Goals */}
              <div className="bg-[#141414] rounded-2xl p-6 border border-white/5">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#E50914]" />
                  Goals for 2026
                </h4>
                <div className="space-y-3">
                  {goals2026.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-[#1F1F1F] rounded-lg hover:bg-[#2a2a2a] transition-colors"
                    >
                      <item.icon className="w-4 h-4 text-[#E50914]" />
                      <span className="text-sm text-white/80">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
