"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Header from "@/components/Header"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import {
  ArrowRight,
  Shield,
  Scale,
  Eye,
  Bot,
  Activity,
  Network,
  FileCheck,
  Calendar,
  Clock,
  CheckCircle,
  User,
} from "lucide-react"

interface WebinarData {
  current: {
    title: string
    date: string
    time: string
    description: string
    learn_topics: string[]
    audience: string[]
  }
  past_webinars?: Array<{
    title: string
    date: string
    duration: string
    icon: string
    description: string
    topics: string[]
    link: string
  }>
}

interface WebinarPageProps {
  data: WebinarData
}

export default function WebinarPage({ data }: WebinarPageProps) {
  const faqs = [
    {
      question: "Is this webinar really free?",
      answer: "Yes, completely free with no hidden costs or sales pitches."
    },
    {
      question: "Will I get the recording if I can't attend live?",
      answer: "Yes, all registrants will receive the recording and materials after the event."
    },
    {
      question: "What if I'm new to AI Security?",
      answer: "Perfect! We'll start with fundamental basics during the educational challenges."
    },
    {
      question: "How technical will the content be?",
      answer: "Balanced for mixed audiences - technical enough for developers, accessible for business leaders."
    },
    {
      question: "What platform will you use?",
      answer: "We'll send Zoom or MS Teams, or whatever platform required."
    }
  ]

  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="max-w-screen-xl mx-auto">
        <Header />

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
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-7">
                AI Security Webinars
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
                Free expert insights on AI governance and security.
              </p>
            </div>
          </section>

          {/* Latest Webinar Section */}
          <section className="px-6 lg:px-8 pb-20">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-muted-foreground mb-4">Latest Webinar</h2>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{data.current.title}</h3>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>{data.current.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      <span className="whitespace-pre-line">{data.current.time}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Column - Webinar Info */}
                  <div className="space-y-8">
                    <Card className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5 group hover:shadow-xl transition-all duration-300">
                      <CardHeader className="p-8 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">{data.current.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {data.current.description}
                        </p>
                      </CardHeader>
                    </Card>

                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        What You'll Learn:
                      </h4>
                      <ul className="space-y-3">
                        {data.current.learn_topics.map((topic, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-blue-600" />
                        Who Should Attend:
                      </h4>
                      <ul className="space-y-3">
                        {data.current.audience.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Registration */}
                  <div className="space-y-8">
                    <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/50">
                      <CardHeader className="text-center pb-4">
                        <h3 className="text-2xl font-bold">Register for Free</h3>
                        <p className="text-muted-foreground">Secure your spot and get the recording even if you can't attend live.</p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <a href="https://events.teams.microsoft.com/event/caba5858-6f7e-4344-adc2-3eb3df19d8dd@a6415f22-da63-4124-991c-0201818e9895" target="_blank" rel="noopener noreferrer">
                          <Button size="lg" className="w-full py-6 text-lg font-medium group">
                            Register for Webinar
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </a>
                        <p className="text-center text-sm text-muted-foreground mt-4">
                          We'll send you the Zoom link and calendar invitation.
                        </p>
                      </CardContent>
                    </Card>

                    {/* FAQ Section */}
                    <Card className="border-0 shadow-xl bg-gradient-to-br from-card to-card/50">
                      <CardHeader>
                        <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {faqs.map((faq, index) => (
                          <div key={index}>
                            <h4 className="font-semibold mb-2">{faq.question}</h4>
                            <p className="text-muted-foreground text-sm">{faq.answer}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

        </main>

        <CTASection
          title="Ready to Secure Your AI Future?"
          description="Join industry experts and learn how to implement comprehensive AI governance and security in your organization."
          primaryButtonText="Register for Webinar"
          primaryButtonHref="https://events.teams.microsoft.com/event/caba5858-6f7e-4344-adc2-3eb3df19d8dd@a6415f22-da63-4124-991c-0201818e9895"
          secondaryButtonText="Back to Home"
          secondaryButtonHref="/"
          showLinkedInButton={false}
        />
        <Footer />
      </div>
    </div>
  )
}
