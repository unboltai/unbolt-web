"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Play,
  Shield,
  Users,
  Scale,
  Eye,
  Lock,
  BarChart3,
  Zap,
  Bot,
  Building2,
  Mail,
  Linkedin,
  Twitter,
  Activity,
  Network,
  FileCheck,
} from "lucide-react"

export default function UnboltLandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const stats = [
    { value: "89%", label: "of enterprises cite AI agent security as their biggest concern" },
    { value: "67%", label: "plan to deploy AI agents in 2025" },
    { value: "0", label: "comprehensive AI governance platforms exist today" },
  ]

  const coreFeatures = [
    {
      icon: Shield,
      title: "MCP Firewall",
      description:
        "The first dedicated security layer for AI agent tool access. Protects your enterprise systems from autonomous AI threats with policy-driven access control.",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Users,
      title: "A2A Collaboration",
      description:
        "Secure agent-to-agent communication and orchestration. Enable intelligent collaboration while maintaining governance and audit trails.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Scale,
      title: "Policy Engine",
      description:
        "Real-time policy evaluation using OPA. Define business rules as code and enforce them across all agent interactions automatically.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ]

  const benefits = [
    {
      icon: Eye,
      title: "Complete Visibility",
      description:
        "See exactly what every agent is doing in real-time. Monitor tool access, agent collaboration, and data interactions with comprehensive audit trails.",
    },
    {
      icon: Lock,
      title: "Policy Enforcement",
      description:
        "Define business rules as code and enforce them automatically. Control access based on trust levels, capabilities, and business context.",
    },
    {
      icon: BarChart3,
      title: "Compliance Ready",
      description:
        "Generate audit reports for any time period. Prove compliance with HIPAA, SOX, GDPR, and other regulatory requirements automatically.",
    },
    {
      icon: Zap,
      title: "Zero Configuration",
      description:
        "Deploy in minutes with auto-discovery of existing agent-tool connections. No code changes required for your current agents.",
    },
    {
      icon: Bot,
      title: "Agent Collaboration",
      description:
        "Enable secure agent-to-agent communication with built-in governance. Orchestrate complex workflows while maintaining security controls.",
    },
    {
      icon: Building2,
      title: "Enterprise Ready",
      description:
        "Integrate with your existing identity management, SIEM, and monitoring systems. Scale to thousands of agents with enterprise-grade reliability.",
    },
  ]

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
          <nav className="py-4 px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-10">
                <a href="#" className="flex items-center gap-3 group">
                  <img
                    src="/unbolt-logo.svg?v=2"
                    alt="Unbolt Logo"
                    width="160"
                    height="50"
                    className="transition-transform group-hover:scale-105"
                  />
                </a>

              </div>

              <div className="flex items-center gap-4">
                <a href="#" className="hidden sm:block font-medium text-base hover:text-primary transition-colors">
                  Sign In
                </a>
                <Button size="default" className="font-medium">
                  Get Early Access
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-border">
                <ul className="space-y-4 pt-4">
                  <li>
                    <a href="#" className="block py-2 hover:text-primary transition-colors">
                      Platform
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 hover:text-primary transition-colors">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 hover:text-primary transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 hover:text-primary transition-colors">
                      Sign In
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative py-20 px-6 lg:px-8 text-center overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />

            {/* Floating Security Elements */}
            <div className="absolute top-1/4 left-16 hidden lg:block animate-float">
              <div className="relative group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-100 to-red-200 backdrop-blur-sm border border-red-200 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div className="absolute -right-5 bottom-0 bg-background p-1 rounded-full shadow-lg border border-border">
                  <ArrowRight className="w-4 h-4 text-red-600" />
                </div>
              </div>
            </div>

            <div className="absolute top-20 right-20 hidden lg:block animate-float-delayed">
              <div className="relative group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-sm border border-blue-200 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -left-5 bottom-0 bg-background p-1 rounded-full shadow-lg border border-border">
                  <Network className="w-4 h-4 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-28 left-40 hidden lg:block animate-float">
              <div className="relative group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-sm border border-green-200 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-green-600" />
                </div>
                <div className="absolute -right-5 top-0 bg-background p-1 rounded-full shadow-lg border border-border">
                  <FileCheck className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-32 hidden lg:block animate-float-delayed">
              <div className="relative group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-sm border border-purple-200 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute -left-5 top-0 bg-background p-1 rounded-full shadow-lg border border-border">
                  <Activity className="w-4 h-4 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
                <span className="text-primary mr-2">🛡️</span>
                Secure Agents
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Complete AI <br className="hidden sm:block" />
                <span className="relative inline-block">
                  <span className="relative z-10">Governance</span>
                  <div className="absolute bottom-2 left-0 right-0 h-4 bg-accent/30 -rotate-1 rounded-lg" />
                </span>{" "}
                Platform
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                The first comprehensive platform that secures agent-to-agent collaboration, tool access, and policy
                enforcement for enterprise AI systems.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" className="px-8 py-3 text-lg font-medium group">
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-medium group bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="px-6 lg:px-8 pb-20">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="pt-8 md:pt-0 group" style={{ animationDelay: `${index * 0.2}s` }}>
                      <p className="text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                        {stat.value}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Core Features Section */}
          <section className="py-20 px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <span className="text-primary mr-2">⚡</span>
                CORE PLATFORM
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Complete AI Governance Platform</h2>
              <p className="text-lg text-muted-foreground">
                Three foundational pillars that secure your AI agent ecosystem from the ground up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/50 group hover:shadow-2xl transition-all duration-300"
                >
                  <CardHeader className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Crisis Section */}
          <section className="py-20 px-6 lg:px-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-12 border border-red-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />

              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <Badge variant="outline" className="mb-6 px-4 py-2 bg-red-100 text-red-700 border-red-200">
                  ⚠️ CRITICAL ALERT
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-red-900">
                  The AI Governance Crisis
                </h2>
                <p className="text-lg text-red-800 leading-relaxed">
                  Your AI agents are accessing sensitive systems with unprecedented autonomy. Traditional security tools
                  don't understand agent behavior, leaving you exposed to new threats.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4 px-4 py-2">
                <span className="text-primary mr-2">🚀</span>
                WHAT WE DELIVER
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">What Secure Agents Delivers</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive AI governance capabilities designed for enterprise-scale deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <Card
                  key={benefit.title}
                  className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-card to-card/50 group hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Dashboard Preview Section */}
          <section className="py-20 px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="secondary" className="mb-4 px-4 py-2">
                  <span className="text-primary mr-2">📊</span>
                  REAL-TIME MONITORING
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Complete Visibility Into Agent Behavior</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Monitor every agent interaction, tool access, and collaboration event in real-time. Get the insights
                  you need to maintain security and compliance.
                </p>
                <Button className="w-fit">
                  Explore Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <Card className="overflow-hidden border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-semibold flex items-center gap-2">
                      Agent Activity Dashboard
                      <Activity className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-muted-foreground">Live</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">Policy Check Passed</span>
                      </div>
                      <span className="text-xs text-green-600">Agent-001</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium">A2A Collaboration</span>
                      </div>
                      <span className="text-xs text-blue-600">Agent-002 → Agent-003</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-3">
                        <Eye className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-medium">Tool Access Request</span>
                      </div>
                      <span className="text-xs text-yellow-600">Pending Review</span>
                    </div>
                  </div>

                  <div className="relative h-32 bg-muted/30 rounded-lg p-4">
                    <div className="flex items-end gap-2 h-full">
                      {[65, 45, 85, 30, 75, 40, 55, 90].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${height}%`,
                            backgroundColor: i % 3 === 0 ? "var(--primary)" : i % 3 === 1 ? "#3b82f6" : "#10b981",
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="bg-gradient-to-br from-muted/50 to-card rounded-t-3xl py-20 px-6 lg:px-8 border-t border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Ready to Govern Your <br className="hidden sm:block" />
                <span className="relative inline-block">
                  <span className="relative z-10">AI Future?</span>
                  <div className="absolute bottom-2 left-0 right-0 h-4 bg-accent/30 -rotate-1 rounded-lg" />
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're working with select enterprises to define the future of AI governance. Join the AI security
                revolution.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="lg" className="px-8 py-3 text-lg font-medium group">
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <a href="https://www.linkedin.com/company/unbolt-ai" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-3 text-lg font-medium group bg-background/80 backdrop-blur-sm"
                  >
                    <Linkedin className="mr-2 h-5 w-5" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-muted/50 text-muted-foreground pt-16 pb-8 px-6 lg:px-8 border-t border-border">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-2">
                <a href="#" className="flex items-center gap-3 mb-6 group">
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
                    <span>hello@unbolt.ai</span>
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
                    <a href="#" className="hover:text-foreground transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center text-sm">
              <p className="mb-4 sm:mb-0">© 2025 Unbolt.ai. Governing the future of AI agents.</p>
              <div className="flex items-center gap-5">
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
                  href="#"
                  className="hover:text-foreground transition-colors p-2 hover:bg-accent rounded-lg"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
