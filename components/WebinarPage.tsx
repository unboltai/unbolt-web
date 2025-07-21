"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Header from "@/components/Header"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Zap,
  Gift,
  Timer,
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
      answer: "MS Teams - works on all devices, no software installation required."
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

            <div className="relative z-10 max-w-5xl mx-auto">
              {/* Urgency Badge */}
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
                <Timer className="h-4 w-4" />
                Limited Seats Available - Register Now!
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                AI Security Webinars
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed font-medium">
                Free expert insights on AI governance and security
              </p>

              {/* Value Props */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-full">
                  <Gift className="h-4 w-4" />
                  <span className="font-medium">100% Free</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3 py-2 rounded-full">
                  <Award className="h-4 w-4" />
                  <span className="font-medium">Expert-Led</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 px-3 py-2 rounded-full">
                  <Zap className="h-4 w-4" />
                  <span className="font-medium">Actionable Insights</span>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Webinar Section */}
          <section className="px-6 lg:px-8 pb-20">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="h-4 w-4" />
                  Next Live Session
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{data.current.title}</h2>

                {/* Clean Date/Time Display */}
                <div className="text-center mb-8">
                  <div className="text-3xl lg:text-4xl font-bold text-primary mb-3">
                    {data.current.date}
                  </div>
                  <div className="text-lg lg:text-xl text-muted-foreground font-medium">
                    {data.current.time.replace(/\n/g, ' | ')}
                  </div>
                </div>
              </div>

              {/* Featured Webinar Section */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-primary/10 to-primary/5 mb-12">
                <CardContent className="p-8 lg:p-12 text-center">
                  <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                    {data.current.description}
                  </p>
                </CardContent>
              </Card>

              {/* Enhanced Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - What You'll Learn */}
                <Card className="border border-green-100/60 shadow-lg bg-gradient-to-br from-green-50/40 to-green-100/20 hover:shadow-xl hover:border-green-200/80 transition-all duration-300 group">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <Zap className="h-7 w-7 text-green-600" />
                      </div>
                      <h4 className="text-2xl lg:text-3xl font-bold text-green-900">What You'll Learn</h4>
                    </div>
                    <ul className="space-y-5">
                      {data.current.learn_topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-4 group/item">
                          <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-sm">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-foreground font-medium leading-relaxed text-lg">{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 p-5 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl border border-green-200/60 shadow-sm">
                      <p className="text-sm text-green-800 font-medium leading-relaxed">
                        💡 <strong>Bonus:</strong> Get exclusive access to our AI Security Toolkit (worth $297)
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Right Column - Who Should Attend */}
                <Card className="border border-blue-100/60 shadow-lg bg-gradient-to-br from-blue-50/40 to-blue-100/20 hover:shadow-xl hover:border-blue-200/80 transition-all duration-300 group">
                  <CardContent className="p-8 lg:p-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                        <Users className="h-7 w-7 text-blue-600" />
                      </div>
                      <h4 className="text-2xl lg:text-3xl font-bold text-blue-900">Who Should Attend</h4>
                    </div>
                    <ul className="space-y-5">
                      {data.current.audience.map((item, index) => (
                        <li key={index} className="flex items-start gap-4 group/item">
                          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform shadow-sm">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-foreground font-medium leading-relaxed text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl border border-blue-200/60 shadow-sm">
                      <p className="text-sm text-blue-800 font-medium leading-relaxed">
                        🎯 <strong>Perfect for:</strong> Teams looking to implement AI governance frameworks
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Registration Section */}
          <section className="px-6 lg:px-8 pb-12">
            <div className="max-w-3xl mx-auto">
              <Card className="border border-primary/10 shadow-xl bg-gradient-to-br from-card via-primary/5 to-card hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center pb-6 pt-10">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-4">Register for Free</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Secure your spot and get the recording even if you can't attend live.
                  </p>
                </CardHeader>
                <CardContent className="pt-0 pb-10">
                  <a href="https://events.teams.microsoft.com/event/caba5858-6f7e-4344-adc2-3eb3df19d8dd@a6415f22-da63-4124-991c-0201818e9895" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full py-7 text-xl font-semibold group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-0 ring-2 ring-orange-400/20 hover:ring-orange-400/40">
                      Register for Webinar
                      <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <div className="text-center mt-6 space-y-2">
                    <p className="text-sm text-muted-foreground">
                      You'll be redirected to Microsoft Teams to complete your registration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Enhanced FAQ Section */}
          <section className="px-6 lg:px-8 pb-20">
            <div className="max-w-6xl mx-auto">
              <Card className="border border-muted/10 shadow-xl bg-gradient-to-br from-card via-muted/5 to-card hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="text-center pb-10 pt-10">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">Frequently Asked Questions</h3>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Everything you need to know about joining this exclusive AI security session
                  </p>
                </CardHeader>
                <CardContent className="space-y-8 pb-10">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-muted/15 pb-8 last:border-b-0 last:pb-0 group hover:bg-muted/5 rounded-lg p-4 -m-4 transition-colors duration-200">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/15 rounded-xl flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-primary/25 transition-colors">
                          <span className="text-primary text-sm font-bold">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg lg:text-xl mb-4 leading-tight text-foreground group-hover:text-primary transition-colors">
                            {faq.question}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
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
