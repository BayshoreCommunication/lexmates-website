import AboutSection from '@/components/about/AboutSection'
import ExpertsSection from '@/components/about/ExpertsSection'
import StatsSection from '@/components/about/StatsSection'
import TestimonialSection from '@/components/about/TestimonialSection'
import Breadcrumb from '@/components/shared/Breadcrumb'
import React from 'react'

const page = () => {
  return (
    <div >
      <Breadcrumb
              title="About"
              breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "About" }, // no href = active page
              ]}
            />
            <AboutSection />
            <StatsSection />
            <ExpertsSection />
            <TestimonialSection />
    </div>
  )
}

export default page