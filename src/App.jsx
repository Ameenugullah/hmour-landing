import useReveal from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustRow from './components/TrustRow'
import FeaturedFragrances from './components/FeaturedFragrances'
import DreamPromo from './components/DreamPromo'
import Ticker from './components/Ticker'
import SafeForEarth from './components/SafeForEarth'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustRow />
        <FeaturedFragrances />
        <DreamPromo />
        <Ticker />
        <SafeForEarth />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
