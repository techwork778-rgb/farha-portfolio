import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Expertise } from "@/components/expertise"
import { PropertiesSlider } from "@/components/properties-slider"
import { Contact } from "@/components/contact"
import Footer  from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <About />
      <Expertise />
      {/* <PropertiesSlider /> */}
      <Contact />
      <Footer />
    </main>
  )
}
