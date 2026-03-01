import React from 'react'
import ServiceMVP from '../components/ServiceMVP'
import TechStack from '../components/TechStack'

export default function MVPPage() {
  return (
    <>
      <ServiceMVP />
      <TechStack subtitle="Lean stacks and rapid tools we use to ship production-ready MVPs quickly." />
    </>
  )
}

