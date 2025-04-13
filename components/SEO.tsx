import Head from 'next/head'
import { useRouter } from 'next/router'

interface StructuredData {
  "@context": string
  "@type": string
  [key: string]: any
}

interface SEOProps {
  title: string
  description: string
  url?: string
  image?: string
  type?: string
  structuredData?: StructuredData
}

export default function SEO({
  title = 'NeedGov | Find Government Services, Links & Laws in One Place',
  description="NeedGov.com is your trusted directory for quick access to all U.S. government websites, public services, legal resources, and official documents. Stay informed, empowered, and connected.",
  url="https://needgov.com",
  image = "#",
  type = "website",
  structuredData,
}: SEOProps) {
  const router = useRouter()
  const currentUrl = url || `https://needgov.com${router.asPath}`
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}