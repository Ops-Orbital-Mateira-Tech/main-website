import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import CaseStudies from './pages/CaseStudies'
import Projects from './pages/Projects'
import SoftwarePage from './pages/Software'
import AppDevPage from './pages/AppDev'
import EcommercePage from './pages/Ecommerce'
import MVPPage from './pages/MVP'
import AIAppPage from './pages/AIApp'
import TermsPage from './pages/Terms'
import PrivacyPage from './pages/Privacy'
import Header from './components/Header'
import Footer from './components/Footer'
import { scrollToTop } from './utils/scroll'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    const t = setTimeout(scrollToTop, 0)
    return () => clearTimeout(t)
  }, [pathname])
  return <div id="scroll-top" aria-hidden className="absolute top-0" />
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full relative">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<Projects />} />
          <Route path="/services/software" element={<SoftwarePage />} />
          <Route path="/services/app" element={<AppDevPage />} />
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/services/mvp" element={<MVPPage />} />
          <Route path="/services/ai" element={<AIAppPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

