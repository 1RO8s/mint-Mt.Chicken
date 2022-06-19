import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from "next/router";
//import GoogleAnalytics from '../components/GoogleAnalytics'
import Script from 'next/script'
import { useEffect } from 'react'
import { existsGaId, pageview, GA_TRACKING_ID } from '../utils/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  console.log('# process.env')
  Object.keys(process.env).sort().forEach(key => {
    console.log(`process.env.${key}: ${process.env[key]}`)
  });

  console.log("NEXT_PUBLIC_VERCEL_ENV:",process.env.NEXT_PUBLIC_VERCEL_ENV)
  console.log("NODE_ENV:",process.env.NODE_ENV)
  console.log("VERCEL_ENV:",process.env.VERCEL_ENV)
  console.log("GA_TRACKING_ID:",process.env.GA_TRACKING_ID)
  console.log("NEXT_GA_TRACKING_ID:",process.env.NEXT_GA_TRACKING_ID)
  console.log("NEXT_PUBLIC_GA_TRACKING_ID:",process.env.NEXT_PUBLIC_GA_TRACKING_ID)
  console.log("NEXT_PUBLIC_VERCEL_GA_TRACKING_ID:",process.env.NEXT_PUBLIC_VERCEL_GA_TRACKING_ID)

  useEffect(() => {
    if (!existsGaId) return

    const handleRouteChange = (url : String) => {
      pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <title>Mt.Chicken</title>
        <link rel="icon" href="/mt-chicken.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lily+Script+One&family=M+PLUS+1:wght@400;500;700&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta property="ga-id" content={GA_TRACKING_ID} />
        {existsGaId && (
        <>
          <Script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga" defer strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${GA_TRACKING_ID}');
          `}
          </Script>
        </>
      )}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
