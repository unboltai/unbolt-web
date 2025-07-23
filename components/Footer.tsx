import { Mail, Linkedin } from "lucide-react"

// LinkedIn and Twitter/X SVG icons
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-muted/50 text-muted-foreground pt-16 pb-8 px-6 lg:px-8 border-t border-border">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/unbolt-logo.svg?v=2"
                alt="Unbolt Logo"
                width="200"
                height="50"
                className="transition-transform group-hover:scale-105"
              />
            </a>

            <p className="text-muted-foreground mb-6 max-w-md">
              Governing the future of AI agents with comprehensive security and policy enforcement.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-primary" />
                <span>
                  <a href="mailto:hello@unbolt.ai" className="hover:underline">
                    hello@unbolt.ai
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  MCP Firewall
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  A2A Collaboration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Policy Engine
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/webinar" className="hover:text-foreground transition-colors">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="mailto:hello@unbolt.ai" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="mb-4 sm:mb-0">© 2025 Unbolt.ai. Governing the future of AI agents.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/unbolt-ai/"
              className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/unboltai"
              className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg"
              aria-label="Twitter/X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
