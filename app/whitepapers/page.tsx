import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FileText, Calendar, Clock, ArrowRight } from 'lucide-react'

interface WhitePaper {
  slug: string
  title: string
  excerpt: string
  date?: string
  readTime?: string
  category?: string
  tags?: string[]
}

async function getWhitePapers(): Promise<WhitePaper[]> {
  const whitepaperDir = path.join(process.cwd(), 'whitepapers')
  
  if (!fs.existsSync(whitepaperDir)) {
    return []
  }

  const files = fs.readdirSync(whitepaperDir)
  const markdownFiles = files.filter(file => file.endsWith('.md'))

  const whitepapers = markdownFiles.map(file => {
    const filePath = path.join(whitepaperDir, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Extract first paragraph as excerpt
    const excerpt = content
      .split('\n')
      .find(line => line.trim() && !line.startsWith('#'))
      ?.substring(0, 200) + '...' || ''

    return {
      slug: file.replace('.md', ''),
      title: data.title || content.split('\n')[0].replace(/^#\s*/, ''),
      excerpt,
      date: data.date || 'Recent',
      readTime: data.readTime || '10 min read',
      category: data.category || 'Security',
      tags: data.tags || ['AI Security', 'Enterprise']
    }
  })

  return whitepapers
}

export default async function WhitePapersPage() {
  const whitepapers = await getWhitePapers()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-screen-xl mx-auto">
        <Header />

        <main className="px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            White Papers & Research
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            In-Depth Research & Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive white papers covering the latest trends, challenges, 
            and solutions in AI security, governance, and enterprise implementation.
          </p>
        </div>

        {/* White Papers List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {whitepapers.map((paper, index) => (
            <article key={paper.slug} className="group">
              <div className="bg-card rounded-xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        {paper.category}
                      </Badge>
                      {index === 0 && (
                        <Badge className="bg-accent text-accent-foreground border-accent">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {paper.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {paper.readTime}
                      </div>
                    </div>
                  </div>

                  <Link href={`/whitepapers/${paper.slug}`} className="block">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                      {paper.title}
                    </h2>
                  </Link>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {paper.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {paper.tags?.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/whitepapers/${paper.slug}`}>
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {whitepapers.length === 0 && (
          <div className="text-center py-16">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No White Papers Available</h3>
            <p className="text-gray-600">Check back soon for our latest research and analysis.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated with Our Latest Research
            </h2>
            <p className="text-muted-foreground mb-6">
              Get notified when we publish new white papers and research insights.
            </p>
            <Button size="lg" className="px-8">
              Subscribe to Updates
            </Button>
          </div>
        </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
