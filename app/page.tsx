import AboutLexmates from "@/components/home/AboutLexmates";
import FounderProfile from "@/components/home/FounderProfile";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutLexmates />
      <FounderProfile
        name="PARVEZ HASHEM"
        title="FOUNDING MEMBER"
        details={`PARVEZ HASHEM is a founder and partner of Lexlates. He completed his LL.B. and LL.M. from the Department of Law and Justice of Bangladesh University of Business and Technology. He did M.S.S. in Political Science from the University of Dhaka. He practices as an Advocate of the Hon’ble Supreme Court of Bangladesh. He is a registered member of Bangladesh Supreme Court Bar Association, Dhaka Bar Association and Dhaka Taxes Bar Association.He has participated in workshops and seminars on human rights and governance issues in the United States, United Kingdom and Thailand. He contributes articles on political issues, legal, governance and international affairs to leading newspapers.`}
        button={{
          label: "Call: +8801711943782",
          href: "tel:+8801711943782",
        }}
        image="/images/home/founder/trip-man.png"
        backgroundImage="/images/home/founder/bg.png"
      />

      <FounderProfile
        name="KAMRUL ISLAM ARIF"
        title="FOUNDING MEMBER"
        details={`KAMRUL ISLAM ARIF is a founder and partner of lexlates. He has completed Masters in Accounting from National University, Bangladesh and is a CA (CC). He completed his LL.B. from the department of Law and Justice of the Bangladesh University of Business and Technology. He has worked in reputed CA firm for more than half a decade. He is a Tax, VAT and Company consultant. He is register members of Dhaka bar Association and Dhaka Taxes Bar As`}
        button={{
          label: "Call: +8801727145247",
          href: "tel:+8801727145247",
        }}
        image="/images/home/founder/trip-man-2.png"
        backgroundImage="/images/home/founder/bg.png"
      />
    </>
  );
}
