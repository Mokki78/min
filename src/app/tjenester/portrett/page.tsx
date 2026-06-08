import Header from "@/app/komponenter/Header"
import HeroPortrett from "@/app/komponenter/Hero_portrett"
import Footer from "@/app/komponenter/Footer"
import TextAreaPortrett from "@/app/komponenter/Text-img_portrett"
import Produkt1 from "@/app/komponenter/Produkt_1"
import GalleryPortrett from "@/app/komponenter/GalleryPortrett"
import SummerCampaign from "@/app/komponenter/SummerCampaign"
import Beautiful from "@/app/komponenter/Beautiful"

export default function Portrett() {

    return (

        <>
        <Header />
        <HeroPortrett />
        <Beautiful />
        <TextAreaPortrett />
        <GalleryPortrett />
        <SummerCampaign />
        <Produkt1 />
      
        
       
        <Footer />
      
        </>
    )
}