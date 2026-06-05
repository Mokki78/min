import Header from "@/app/komponenter/Header"
import HeroPortrett from "@/app/komponenter/Hero_portrett"
import Banner from "@/app/komponenter/Banner"
import Footer from "@/app/komponenter/Footer"
import TextAreaPortrett from "@/app/komponenter/Text-img_portrett"
import Produkt1 from "@/app/komponenter/Produkt_1"
import GalleryPortrett from "@/app/komponenter/GalleryPortrett"
import SummerCampaign from "@/app/komponenter/SummerCampaign"

export default function Portrett() {

    return (

        <>
        <Header />
        <HeroPortrett />
        <Banner />
        <TextAreaPortrett />
        <GalleryPortrett />
        <SummerCampaign />
        <Produkt1 />
      
        
       
        <Footer />
      
        </>
    )
}