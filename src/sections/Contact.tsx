import { useEffect, useRef, useState } from 'react'
import { 
  Mail, MessageCircle, Linkedin, Twitter, 
  Send, MapPin, Shield, CheckCircle, ExternalLink 
} from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'peterkariukiwanj@gmail.com',
      href: 'mailto:peterkariukiwanj@gmail.com',
      color: '#E50914',
      description: 'Send me an email anytime',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+254 703 953 905',
      href: 'https://wa.me/+254703953905',
      color: '#1DB954',
      description: 'Text only, available 24/7',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Peter Kariuki',
      href: 'https://linkedin.com/in/peter-kariuki-0b78693b0',
      color: '#0A66C2',
      description: 'Connect professionally',
    },
    {
      icon: Twitter,
      label: 'Twitter/X',
      value: '@BdMutant',
      href: 'https://twitter.com/BdMutant',
      color: '#1DA1F2',
      description: 'Follow my updates',
    },
  ]

  const platforms = [
    { name: 'TryHackMe', username: 'peterkariukiwanj', url: 'https://tryhackme.com/p/peterkariukiwanj' },
    { name: 'HackTheBox', username: 'HTB Profile', url: 'https://profile.hackthebox.com/profile/019cb2a4-d8da-71dc-8b34-cce14f740dfb' },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setShowDialog(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-[#141414] to-[#0B0B0B]" />

      <div className="section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#1DB954] bg-[#1DB954]/10 rounded-full border border-[#1DB954]/20">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E50914] to-[#1DB954] mx-auto rounded-full mb-4" />
            <p className="text-white/60 max-w-2xl mx-auto">
              Open to collaboration on security research, tool development, and learning resources. 
              Reach out and let's build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Methods */}
            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-6">Contact Methods</h3>
              
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-[#141414] rounded-xl border border-white/5 hover:border-white/20 transition-all duration-300"
                  style={{ transitionDelay: `${(index + 1) * 50}ms` }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <method.icon className="w-6 h-6" style={{ color: method.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{method.label}</span>
                      <ExternalLink className="w-3 h-3 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-sm text-white/60">{method.value}</span>
                  </div>
                </a>
              ))}

              {/* Security Platforms */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#E50914]" />
                  Security Platforms
                </h4>
                <div className="space-y-3">
                  {platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-[#1F1F1F] rounded-lg hover:bg-[#2a2a2a] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-white">{platform.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white/50">{platform.username}</span>
                        <ExternalLink className="w-3 h-3 text-white/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mt-6 p-4 bg-gradient-to-r from-[#E50914]/10 to-[#1DB954]/10 rounded-xl border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#1DB954]" />
                  </div>
                  <div>
                    <span className="text-sm text-white/50">Based in</span>
                    <p className="font-medium text-white">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="bg-[#141414] rounded-2xl p-6 sm:p-8 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1F1F1F] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1F1F1F] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1F1F1F] border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#E50914] transition-colors resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-[#141414] border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <CheckCircle className="w-6 h-6 text-[#1DB954]" />
              Message Sent!
            </DialogTitle>
            <DialogDescription className="text-white/60">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <button
              onClick={() => setShowDialog(false)}
              className="w-full btn-secondary"
            >
              Got it!
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Contact
