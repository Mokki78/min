import Header from "./komponenter/Header";
import Hero from "./komponenter/Hero";
import GalleryCard from "./komponenter/CardsGallery";
import Quote from "./komponenter/Quote";
import PhotoGallery from "./komponenter/Photogallery";
import About from "./komponenter/About";
import Footer from "./komponenter/Footer";
import Produkt3 from "./komponenter/Produkt_3";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GalleryCard />
      <Quote />
      <PhotoGallery />
      <About />
      <Produkt3 />
      <Footer />
    </>
  );
}
