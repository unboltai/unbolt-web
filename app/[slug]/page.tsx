import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import WebinarPage from '@/components/WebinarPage'

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

async function getWebinarData(slug: string): Promise<WebinarData | null> {
  try {
    const filePath = path.join(process.cwd(), 'data', `${slug}.yml`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = yaml.load(fileContents) as WebinarData
    
    return data
  } catch (error) {
    console.error('Error loading YAML file:', error)
    return null
  }
}

export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'data')
  
  if (!fs.existsSync(dataDir)) {
    return []
  }
  
  const files = fs.readdirSync(dataDir)
  const yamlFiles = files.filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
  
  return yamlFiles.map(file => ({
    slug: file.replace(/\.(yml|yaml)$/, '')
  }))
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = await getWebinarData(slug)

  if (!data) {
    notFound()
  }

  return <WebinarPage data={data} />
}
