import Header from "@/app/komponenter/Header";
import Banner from  "@/app/komponenter/Banner";
import GalleryBaby from "@/app/komponenter/GalleryBaby";
import Image from "next/image";
import HeroBaby from "@/app/komponenter/Hero_baby";
import Produkt2 from "@/app/komponenter/Produkt_2";
import Footer from "@/app/komponenter/Footer";
import Quote from "@/app/komponenter/Quote";


export default function Baby() {
  return (
    <>
      <Header />
      <HeroBaby />
      
      <Banner />
      <GalleryBaby />
      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
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

        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-center md:text-left">
            <p>
              Du står fritt til å velge mellom våre à la carte-alternativer og
              kolleksjoner. Du trenger ikke å ta stilling til hvilke bilder
              eller produkter du ønsker før bildene er ferdig redigert og klare
              for visning. Da kan du velge det alternativet som passer best for
              deg og som du føler gjør bildene rettferdighet. Alle produkter er
              av høy kvalitet og nøye utvalgt for å møte høye krav til både
              utførelse og holdbarhet. Målet er å skape minner som kan pryde
              vegger og hyller i mange år fremover – og som kan gå i arv til
              kommende generasjoner. Ved kjøp av en kolleksjon har du også
              mulighet til å bestille tilleggsprodukter, som for eksempel et
              ekstra minialbum til besteforeldre eller mindre gavebilder til
              stolte tanter og onkler. Det er også mulig å kjøpe flere digitale
              bildefiler. Velger du produkter fra à la carte-menyen, tilbys
              gunstige rabatter ved større bestillinger under bildevisningen..{" "}
            </p>
          </div>
        </div>
      </section>
      <div className="third-line"></div>
      <Quote />

      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
      
        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-center md:text-left">
            <p>
              Det jeg elsker aller mest med jobben som fotograf, er å få være
              med på å bevare minner og små øyeblikk som kanskje virker helt
              hverdagslige der og da, men som med tiden blir uvurderlige. De små
              hendene som griper etter dine, smilet som mangler en fortann, den
              varme klemmen eller måten barnet ditt ser på deg akkurat nå –
              øyeblikk som stadig forandrer seg og aldri kommer tilbake på helt
              samme måte. Familien vår er noe av det mest verdifulle vi har, og
              barna vokser ofte langt raskere enn vi er forberedt på. Før vi vet
              ordet av det, er de små blitt store, og minnene vi trodde vi
              alltid ville huske, blir gradvis mindre klare. </p>
              <p>
              Derfor er fotografier så mye mer enn bare bilder. De er en investering i
              minner, følelser og historier. De lar oss stoppe tiden et lite
              øyeblikk og ta vare på det som betyr mest. Med årene kan bildene
              av barna og familien din bli blant dine mest verdifulle eiendeler
              – ikke på grunn av hva de er verdt, men på grunn av alt de betyr.
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
      <div className="third-line"></div>
      <Produkt2 />
      
      <Footer />
    </>
  );
}
