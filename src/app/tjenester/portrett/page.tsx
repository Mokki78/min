import Header from "@/app/komponenter/Header";
import HeroPortrett from "@/app/komponenter/Hero_portrett";
import Footer from "@/app/komponenter/Footer";
import TextAreaPortrett from "@/app/komponenter/Text-img_portrett";
import Produkt1 from "@/app/komponenter/Produkt_1";
import GalleryPortrett from "@/app/komponenter/GalleryPortrett";
import SummerCampaign from "@/app/komponenter/SummerCampaign";
import Beautiful from "@/app/komponenter/Beautiful";
import Image from "next/image";

export default function Portrett() {
  return (
    <>
      <Header />
      <HeroPortrett />
      <Beautiful />
      <TextAreaPortrett />
      <GalleryPortrett />

      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-left px-5">
            <h3 className="sub-header">Hvorfor investere i bilder?</h3>
            <p>
              Hvorfor investere i bilder av deg selv? Er det egentlig nødvendig,
              eller bare et uttrykk for selvopptatthet? Det er et spørsmål mange
              stiller seg. Og ja, et altfor stort fokus på eget utseende er
              sjelden sunt. Men å ønske å bevare minner av seg selv for
              fremtiden er noe helt annet. Du er en viktig del av mange
              menneskers liv. Barna dine – eller kanskje fremtidige barn – vil
              en dag sette pris på å ha bilder av deg. Det samme vil foreldrene
              dine, partneren din, søsken og venner.
            </p>
            <br></br>
            <p>
              {" "}
              Bildene handler ikke bare om hvordan du så ut, men om hvem du var
              på et bestemt tidspunkt i livet. Og ikke minst: ditt fremtidige
              jeg vil takke deg. Om ti, tjue eller førti år kan disse bildene
              bli en verdifull påminnelse om en tid som ellers lett ville blitt
              glemt. De kan ta deg tilbake til følelsen av å være ung, til livet
              slik det var akkurat da, og til personen du var. Et portrett er
              derfor ikke bare en investering i deg selv – det er en gave til
              menneskene som er glad i deg, og til den personen du en dag kommer
              til å bli.{" "}
            </p>
            <br></br>
            <p>
              Mitt mål er å skape bilder som ikke bare dokumenterer hvordan
              livet ser ut akkurat nå, men som også vekker følelsene, minnene og
              kjærligheten til denne tiden i livet – både for deg og for
              kommende generasjoner.{" "}
            </p>
          </div>
        </div>
        {/* Image side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Image
              src="/onthebeach.jpg"
              alt="Fotograf på stranden"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <SummerCampaign />

      <Produkt1 />
      <Footer />
    </>
  );
}
