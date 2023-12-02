import Navbar from "./components/navbar"
import Content from "./components/content"
import Client from "./components/client"
import ImageCarousel from "./components/imageCarousel"
import Founders from "./components/founders"

export default function Home() {
  return (
    <main>
      <Navbar />
      <ImageCarousel />
      <Content />
      <Client />
      <Founders />
    </main>
  )
}
