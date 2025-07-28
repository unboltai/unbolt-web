'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

interface TableOfContentsItem {
  id: string
  text: string
  level: number
}

interface WhitePaperReaderProps {
  content: string
}

export default function WhitePaperReader({ content }: WhitePaperReaderProps) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [tableOfContents, setTableOfContents] = useState<TableOfContentsItem[]>([])
  const [activeHeading, setActiveHeading] = useState<string>('')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    // Generate table of contents from content
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = content
    const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6')
    
    const toc: TableOfContentsItem[] = []
    headings.forEach((heading, index) => {
      const id = `heading-${index}`
      const level = parseInt(heading.tagName.charAt(1))
      const text = heading.textContent || ''
      
      // Add ID to heading for navigation
      heading.id = id
      
      toc.push({ id, text, level })
    })
    
    setTableOfContents(toc)
    
    // Update the actual content with IDs
    const contentElement = document.querySelector('.whitepaper-content')
    if (contentElement) {
      contentElement.innerHTML = tempDiv.innerHTML
    }
  }, [content])

  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(100, Math.max(0, progress)))
      
      // Show scroll to top button
      setShowScrollTop(scrollTop > 500)
      
      // Update active heading
      const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]')
      let current = ''
      
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        if (rect.top <= 100) {
          current = heading.id
        }
      })
      
      setActiveHeading(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-100">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Table of Contents - Desktop */}
      {tableOfContents.length > 0 && (
        <div className="hidden xl:block fixed right-8 top-1/2 transform -translate-y-1/2 w-64 z-40">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg backdrop-blur-sm bg-white/95">
            <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
              Table of Contents
            </h4>
            <nav className="space-y-1 max-h-96 overflow-y-auto">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToHeading(item.id)}
                  className={`block w-full text-left text-sm py-1 px-2 rounded transition-colors ${
                    activeHeading === item.id
                      ? 'bg-blue-100 text-blue-700 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
                >
                  {item.text}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}

      {/* Mobile Table of Contents Toggle */}
      {tableOfContents.length > 0 && (
        <div className="xl:hidden fixed bottom-20 right-4 z-40">
          <details className="group">
            <summary className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg cursor-pointer list-none">
              <div className="flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">Contents</span>
              </div>
            </summary>
            <div className="absolute bottom-full right-0 mb-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl max-h-80 overflow-y-auto">
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Table of Contents</h4>
                <nav className="space-y-1">
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToHeading(item.id)}
                      className={`block w-full text-left text-sm py-2 px-2 rounded transition-colors ${
                        activeHeading === item.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                      style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
                    >
                      {item.text}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </details>
        </div>
      )}
    </>
  )
}
