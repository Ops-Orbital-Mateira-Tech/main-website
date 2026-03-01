import React from 'react'
import ServiceSoftware from '../components/ServiceSoftware'
import TechStack from '../components/TechStack'

export default function SoftwarePage() {
  return (
    <>
      <ServiceSoftware />
      <TechStack subtitle="Popular technologies we use to deliver robust software — from backends and APIs to scalable cloud systems." />
    </>
  )
}

