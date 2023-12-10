import Navbar from "./components/navbar"
import Content from "./components/content"
import Client from "./components/client"
import Headline from "./components/headline"
import ContactUsSection from "./components/contactUsSection"
import Testimonals from "./components/testimonals"

export default function Home() {
  return (
    <main className="bg-gray-100">
      <Navbar />
      <Headline  />
      <Content />
      <Client />
      <Testimonals />
      <ContactUsSection />
    </main>
  )
}
