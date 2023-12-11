import Navbar from "./components/navbar"
import Content from "./components/content"
import Client from "./components/client"
import Hero from "./components/hero"
import ContactUsSection from "./components/contactUsSection"
import Testimonals from "./components/testimonals"

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <Hero />
      <Content />
      <Client />
      <Testimonals />
      <ContactUsSection />
    </main>
  )
}
