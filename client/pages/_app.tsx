import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from "next/router";
import GoogleAnalytics from '../components/GoogleAnalytics'
import { useEffect } from 'react'
import { existsGaId, pageview } from '../utils/gtag'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

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
        <GoogleAnalytics/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
