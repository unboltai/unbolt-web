import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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

interface CTASectionProps {
  title?: string
  subtitle?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  showLinkedInButton?: boolean
  showTwitterButton?: boolean
}

export default function CTASection({
  title = "Ready to Govern Your AI Future?",
  subtitle = "",
  description = "We're working with select enterprises to define the future of AI governance. Join the AI security revolution.",
  primaryButtonText = "Get Early Access",
  primaryButtonHref = "#",
  secondaryButtonText = "Connect on LinkedIn",
  secondaryButtonHref = "https://www.linkedin.com/company/unbolt-ai",
  showLinkedInButton = true,
  showTwitterButton = false
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-muted/50 to-card rounded-t-3xl py-20 px-6 lg:px-8 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          {title.includes("AI Future") ? (
            <>
              Ready to Govern Your <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10">AI Future?</span>
                <div className="absolute bottom-2 left-0 right-0 h-4 bg-accent/30 -rotate-1 rounded-lg" />
              </span>
            </>
          ) : title.includes("AI Security") ? (
            <>
              Ready to Secure Your <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10">AI Future?</span>
                <div className="absolute bottom-2 left-0 right-0 h-4 bg-accent/30 -rotate-1 rounded-lg" />
              </span>
            </>
          ) : (
            <>
              {title.split(" ").slice(0, -2).join(" ")} <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10">{title.split(" ").slice(-2).join(" ")}</span>
                <div className="absolute bottom-2 left-0 right-0 h-4 bg-accent/30 -rotate-1 rounded-lg" />
              </span>
            </>
          )}
        </h2>

        {subtitle && (
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-muted-foreground">
            {subtitle}
          </h3>
        )}

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {primaryButtonHref && primaryButtonHref !== "#" ? (
            <a href={primaryButtonHref} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8 py-3 text-lg font-medium group">
                {primaryButtonText}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          ) : (
            <Button size="lg" className="px-8 py-3 text-lg font-medium group">
              {primaryButtonText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          )}
          {showLinkedInButton && (
            <a href={secondaryButtonHref} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-medium group bg-background/80 backdrop-blur-sm"
              >
                {secondaryButtonText.includes("LinkedIn") && <LinkedInIcon className="mr-2 h-5 w-5" />}
                {secondaryButtonText}
              </Button>
            </a>
          )}
          {showTwitterButton && (
            <a href="https://x.com/unboltai" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-medium group bg-background/80 backdrop-blur-sm"
              >
                <TwitterIcon className="mr-2 h-5 w-5" />
                Follow on X
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
