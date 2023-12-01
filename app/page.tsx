import Navbar from "./components/navbar"
import Content from "./components/content"
import Client from "./components/client"
import ImageCarousel from "./components/imageCarousel"
import ContactModal from "./components/contactModal"
export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageCarousel />
      <Content />
      <Client />
    </main>
  )
}
