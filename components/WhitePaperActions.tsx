"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Share2, Download, Copy, Check } from 'lucide-react'

interface WhitePaperActionsProps {
  title: string
  excerpt?: string
}

export default function WhitePaperActions({ title, excerpt }: WhitePaperActionsProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: excerpt || '',
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
        // Fallback to copy
        handleCopyLink()
      }
    } else {
      // Fallback: copy to clipboard
      handleCopyLink()
    }
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)

      // Show a temporary notification
      const notification = document.createElement('div')
      notification.textContent = 'Link copied to clipboard!'
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideIn 0.3s ease-out;
      `

      // Add animation keyframes
      if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style')
        style.id = 'toast-styles'
        style.textContent = `
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
          }
        `
        document.head.appendChild(style)
      }

      document.body.appendChild(notification)

      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in'
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification)
          }
        }, 300)
      }, 2000)

    } catch (err) {
      console.log('Error copying to clipboard:', err)
    }
  }

  const handleDownload = () => {
    // Create a print-friendly version
    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${title}</title>
          <style>
            body { 
              font-family: 'Georgia', 'Times New Roman', serif; 
              line-height: 1.6; 
              margin: 40px; 
              color: #333;
              max-width: 800px;
            }
            h1, h2, h3 { color: #1a1a1a; margin-top: 2em; }
            h1 { 
              border-bottom: 3px solid #3b82f6; 
              padding-bottom: 10px; 
              font-size: 2.5em;
              margin-bottom: 1em;
            }
            h2 { 
              border-bottom: 1px solid #666; 
              padding-bottom: 5px; 
              font-size: 1.8em;
              margin-bottom: 0.8em;
            }
            h3 {
              font-size: 1.4em;
              color: #2563eb;
              margin-bottom: 0.6em;
            }
            h4 {
              font-size: 1.2em;
              color: #7c3aed;
              margin-bottom: 0.5em;
            }
            p { 
              margin-bottom: 1em; 
              text-align: justify;
            }
            blockquote { 
              border-left: 4px solid #3b82f6; 
              padding-left: 20px; 
              margin: 20px 0; 
              background: #f8fafc; 
              padding: 15px; 
              font-style: italic;
              border-radius: 0 5px 5px 0;
            }
            code { 
              background: #f1f5f9; 
              padding: 2px 6px; 
              border-radius: 3px; 
              font-family: 'Courier New', monospace;
              font-size: 0.9em;
            }
            pre { 
              background: #1e293b; 
              color: white; 
              padding: 15px; 
              border-radius: 5px; 
              overflow-x: auto;
              font-family: 'Courier New', monospace;
              line-height: 1.4;
            }
            table { 
              border-collapse: collapse; 
              width: 100%; 
              margin: 20px 0; 
            }
            th, td { 
              border: 1px solid #ddd; 
              padding: 12px; 
              text-align: left; 
            }
            th { 
              background-color: #f8fafc; 
              font-weight: bold;
            }
            ul, ol {
              margin: 1em 0;
              padding-left: 2em;
            }
            li {
              margin-bottom: 0.5em;
            }
            strong {
              font-weight: bold;
              color: #1a1a1a;
            }
            em {
              font-style: italic;
            }
            a {
              color: #3b82f6;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
            .header {
              text-align: center;
              margin-bottom: 3em;
              padding-bottom: 2em;
              border-bottom: 2px solid #e5e7eb;
            }
            .meta {
              color: #666;
              font-size: 0.9em;
              margin-bottom: 1em;
            }
            @media print {
              body { margin: 0; font-size: 12pt; }
              .no-print { display: none; }
              h1 { page-break-before: avoid; }
              h2, h3 { page-break-after: avoid; }
              blockquote, pre { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>${title}</h1>
            <div class="meta">Generated from Unbolt.ai</div>
          </div>
          ${document.querySelector('.prose')?.innerHTML || ''}
        </body>
        </html>
      `)
      printWindow.document.close()
      
      // Small delay to ensure content is loaded before printing
      setTimeout(() => {
        printWindow.print()
      }, 500)
    }
  }

  return (
    <div className="flex gap-3">
      <Button 
        variant="outline" 
        size="sm" 
        className="bg-white/80 hover:bg-white border-gray-200 hover:border-blue-300 transition-all duration-200"
        onClick={handleShare}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 mr-2 text-green-600" />
            Copied!
          </>
        ) : (
          <>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </>
        )}
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        className="bg-white/80 hover:bg-white border-gray-200 hover:border-purple-300 transition-all duration-200"
        onClick={handleDownload}
      >
        <Download className="h-4 w-4 mr-2" />
        Download PDF
      </Button>
    </div>
  )
}
