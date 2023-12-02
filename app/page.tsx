import Navbar from "./components/navbar"
import Content from "./components/content"
import Client from "./components/client"
import ImageCarousel from "./components/imageCarousel"
import ContactUsSection from "./components/contactUsSection"

export default function Home() {
  const carouselItems = [
    { image: '/walmart logo.svg', alt: 'Slide 1' },
    { image: '/next.svg', alt: 'Slide 2' },
    { image: '/shoppers logo.svg', alt: 'Slide 3' },
  ];
  return (
    <main>
      <Navbar />
      <ImageCarousel items={carouselItems} />
      <Content />
      <Client />
      <ContactUsSection />
    </main>
  )
}
