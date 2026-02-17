import ContactSection from '@/components/contact/ContactSection'
import Map from '@/components/contact/Map'
import Breadcrumb from '@/components/shared/Breadcrumb'
import React from 'react'

const page = () => {
  return (
    <div>
      <Breadcrumb
        title="Contact  "
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" }, // no href = active page
        ]}
      />
      <ContactSection />
      <Map />
    </div>
  )
}

export default page