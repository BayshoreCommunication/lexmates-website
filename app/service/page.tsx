import ServicesSection from "@/components/home/ServicesSection";
import Breadcrumb from "@/components/shared/Breadcrumb";
import React from "react";

const page = () => {
  return (
    <div className="text-black">
      <Breadcrumb
        title="Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" }, // no href = active page
        ]}
      />
      <ServicesSection />
    </div>
  );
};

export default page;
