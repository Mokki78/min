import Header from "./komponenter/Header";
import Hero from "./komponenter/Hero";
import GalleryCard from "./komponenter/CardsGallery";
import Quote from "./komponenter/Quote";

import PhotoGallery from "./komponenter/Photogallery";
import About from "./komponenter/About";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GalleryCard />
      <Quote />
      <PhotoGallery />
      <About />
      
    </>
  );
}
