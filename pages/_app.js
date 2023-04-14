import '@/styles/globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }) {
  return <><Header /><div className="min-h-[61vh] "><Component {...pageProps} /></div><Footer /></>
}
