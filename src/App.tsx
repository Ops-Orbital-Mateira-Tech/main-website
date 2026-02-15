import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import CaseStudies from './pages/CaseStudies'
import Projects from './pages/Projects'
import ServicesLanding from './pages/ServicesLanding'
import SoftwarePage from './pages/Software'
import AppDevPage from './pages/AppDev'
import EcommercePage from './pages/Ecommerce'
import MVPPage from './pages/MVP'
import AIAppPage from './pages/AIApp'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/case-studies" element={<Projects />} />
          <Route path="/services" element={<ServicesLanding />} />
          <Route path="/services/software" element={<SoftwarePage />} />
          <Route path="/services/app" element={<AppDevPage />} />
          <Route path="/services/ecommerce" element={<EcommercePage />} />
          <Route path="/services/mvp" element={<MVPPage />} />
          <Route path="/services/ai" element={<AIAppPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

