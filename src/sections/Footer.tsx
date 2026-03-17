import { Github, Linkedin, Twitter, MessageCircle, Mail, ArrowUp, Heart, Shield } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Bd-Mutant7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/peter-kariuki-0b78693b0', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/BdMutant', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://wa.me/+254703953905', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:peterkariukiwanj@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stats', href: '#stats' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-[#0B0B0B] border-t border-white/5">
      {/* Main Footer */}
      <div className="section-padding py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#home" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E50914] to-[#1DB954] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">Peter Kariuki</span>
              </a>
              <p className="text-sm text-white/60 mb-6 max-w-xs">
                Cybersecurity specialist and ethical hacker passionate about 
                penetration testing and network security.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-[#141414] border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-[#E50914]/50 hover:bg-[#E50914]/10 transition-all duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(link.href)
                      }}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:peterkariukiwanj@gmail.com"
                    className="text-sm text-white/60 hover:text-[#E50914] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    peterkariukiwanj@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+254703953905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-[#1DB954] transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    +254 703 953 905
                  </a>
                </li>
                <li className="text-sm text-white/60 flex items-center gap-2">
                  <span className="w-4 h-4 flex items-center justify-center">📍</span>
                  Nairobi, Kenya
                </li>
              </ul>
            </div>

            {/* Platforms */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Platforms
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://tryhackme.com/p/peterkariukiwanj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-[#1DB954] transition-colors"
                  >
                    TryHackMe
                  </a>
                </li>
                <li>
                  <a
                    href="https://profile.hackthebox.com/profile/019cb2a4-d8da-71dc-8b34-cce14f740dfb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-[#9FEF00] transition-colors"
                  >
                    HackTheBox
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Bd-Mutant7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="section-padding py-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40 flex items-center gap-1">
              © {currentYear} Peter Kariuki. Made with
              <Heart className="w-4 h-4 text-[#E50914] fill-[#E50914]" />
              and lots of coffee.
            </p>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <div className="w-8 h-8 rounded-lg bg-[#141414] border border-white/5 flex items-center justify-center group-hover:border-[#1DB954]/50 group-hover:bg-[#1DB954]/10 transition-all">
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
