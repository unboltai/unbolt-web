import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhitePaperReader from '@/components/WhitePaperReader'
import WhitePaperActions from '@/components/WhitePaperActions'
import { ArrowLeft, Calendar, Clock, FileText } from 'lucide-react'
import './whitepaper.css'

interface WhitePaperData {
  title: string
  content: string
  date?: string
  readTime?: string
  category?: string
  tags?: string[]
  author?: string
  excerpt?: string
}

async function getWhitePaper(slug: string): Promise<WhitePaperData | null> {
  try {
    const filePath = path.join(process.cwd(), 'whitepapers', `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    
    // Process markdown to HTML with GitHub Flavored Markdown support
    // Allow dangerous HTML to preserve anchor tags for references
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { allowDangerousHtml: true })
      .process(content)
    let contentHtml = processedContent.toString()

    // Post-process HTML to add anchor IDs to reference paragraphs
    // This ensures the anchor targets exist for reference links
    contentHtml = contentHtml.replace(
      /<p>\[(\d+)\]\s/g,
      '<p id="ref$1">[<span class="reference-number">$1</span>] '
    )
    
    return {
      title: data.title || content.split('\n')[0].replace(/^#\s*/, ''),
      content: contentHtml,
      date: data.date || 'Recent',
      readTime: data.readTime || '10 min read',
      category: data.category || 'Security',
      tags: data.tags || ['AI Security', 'Enterprise'],
      author: data.author || 'Unbolt Team',
      excerpt: data.excerpt || content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.substring(0, 200)
    }
  } catch (error) {
    console.error('Error loading white paper:', error)
    return null
  }
}

export async function generateStaticParams() {
  const whitepaperDir = path.join(process.cwd(), 'whitepapers')
  
  if (!fs.existsSync(whitepaperDir)) {
    return []
  }
  
  const files = fs.readdirSync(whitepaperDir)
  const markdownFiles = files.filter(file => file.endsWith('.md'))
  
  return markdownFiles.map(file => ({
    slug: file.replace('.md', '')
  }))
}

export default async function WhitePaperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const whitepaper = await getWhitePaper(slug)

  if (!whitepaper) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/10">
      <div className="max-w-screen-xl mx-auto">
        <Header />

        <main className="px-6 lg:px-8 py-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/whitepapers">
              <Button variant="ghost" className="group hover:bg-accent/50 transition-all duration-200">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to White Papers
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <article className="max-w-4xl mx-auto bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
            {/* Header Section with Enhanced Styling */}
            <div className="bg-gradient-to-r from-accent/30 via-accent/20 to-primary/10 px-8 lg:px-12 pt-12 pb-8">
              <header className="mb-0">
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {whitepaper.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {whitepaper.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {whitepaper.readTime}
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {whitepaper.title}
                </h1>

                {whitepaper.excerpt && (
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
                    {whitepaper.excerpt}
                  </p>
                )}

                <div className="flex items-center justify-between border-t border-border pt-6 mt-8">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{whitepaper.author}</p>
                      <p className="text-sm text-muted-foreground">Author</p>
                    </div>
                  </div>

                  <WhitePaperActions
                    title={whitepaper.title}
                    excerpt={whitepaper.excerpt}
                  />
                </div>

                {whitepaper.tags && whitepaper.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {whitepaper.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background/50 hover:bg-background transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </header>
            </div>

            {/* Content Section */}
            <div className="px-8 lg:px-12 py-12">
              {/* Article Content with Enhanced Reading Experience */}
              <div className="relative">
                {/* Enhanced Content Styling with Proper Spacing */}
                <div
                  className="whitepaper-content prose prose-xl max-w-none
                    prose-headings:text-foreground prose-headings:tracking-tight prose-headings:scroll-mt-24
                    prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-em:text-muted-foreground
                    prose-li:text-muted-foreground prose-li:marker:text-primary
                    prose-blockquote:border-primary prose-blockquote:bg-gradient-to-r prose-blockquote:from-accent/30 prose-blockquote:to-primary/10 prose-blockquote:text-foreground
                    prose-code:bg-muted prose-code:text-muted-foreground prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-foreground prose-pre:text-background
                    prose-table:border-border prose-thead:bg-muted prose-th:text-foreground prose-td:text-muted-foreground
                    prose-hr:border-border"
                  dangerouslySetInnerHTML={{ __html: whitepaper.content }}
                />

                {/* Enhanced Reading Experience Components */}
                <WhitePaperReader content={whitepaper.content} />
              </div>
            </div>
          </article>

          {/* Related Content / CTA */}
          <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-border">
            <div className="bg-gradient-to-r from-accent/20 to-primary/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Interested in Learning More?
              </h2>
              <p className="text-muted-foreground mb-6">
                Discover how Unbolt can help secure your AI infrastructure with enterprise-grade governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/whitepapers">
                  <Button variant="outline">
                    More White Papers
                  </Button>
                </Link>
                <Button>
                  Get Early Access
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
