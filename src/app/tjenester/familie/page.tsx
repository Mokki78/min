

import Header from "@/app/komponenter/Header";
import HeroFamilie from "@/app/komponenter/Hero_familie";
import Footer from "@/app/komponenter/Footer";
import Produkt2 from "@/app/komponenter/Produkt_2";
import GalleryFamilie from "@/app/komponenter/GalleryFamilie";
import Banner from "@/app/komponenter/Banner";
import Image from "next/image";
import FooterImageFamilie from "@/app/komponenter/FooterImageFamilie";
import Link from "next/link";

export default function Familie() {
  return (
    <>
      <Header />
      <HeroFamilie />
      <div className="banner">
        <Banner />
      </div>

      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Image side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Image
              src="/familiefotograf_barnefotograf_familiebilder_1.jpg"
              alt="familie i lek utendørs"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-left px-5">
            <h3 className="sub-header">Hvorfor</h3>
            <p>
              Det sies at hvis huset brenner, er det – etter familien og de du
              er glad i – fotoalbumet man helst vil redde. Det sier noe om hva
              som virkelig betyr noe. Møbler, klær og andre eiendeler kan
              erstattes, men minnene våre kan ikke kjøpes på nytt. Heldigvis
              lagrer mange av oss bildene våre digitalt i dag, slik at de kan
              hentes frem igjen dersom uhellet skulle være ute. Likevel er det
              færre og færre som tar seg tid til å samle minnene sine i et
              fysisk album.{" "}
            </p>
            <br></br>
            <p>
              Et fotoalbum er så mye mer enn en mappe med filer på en skjerm.
              Det er en samling av små og store øyeblikk, historier og følelser
              som kan tas frem igjen og igjen. Et album som ligger på stuebordet
              eller i bokhyllen blir en del av familiens historie – noe som kan
              deles, og glede både barn, foreldre og kommende generasjoner.{" "}
            </p>
          </div>
        </div>
      </section>

      <div className="third-line"></div>

      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-left px-5">
            <h3 className="sub-header">Hvor og når</h3>
            <p>
              Du kan velge mellom fotografering i studio eller utendørs, alt
              etter hva som passer deg og familien din best. Den mest åpenbare
              forskjellen er selvfølgelig bakgrunnen, men utendørs har man også
              mer plass til å bevege seg på. Det kan være spesielt fint ved
              fotografering av barn og familier, hvor lek, utforsking og
              samspill ofte får større rom. Når barna får være seg selv, oppstår
              det gjerne små øyeblikk som ikke kan planlegges – et blikk, en
              klem eller en latter. Det er ofte disse ekte øyeblikkene som blir
              de mest verdifulle minnene.{" "}
            </p>
            <br></br>
            <p>
              Enten vi fotograferer i studio eller ute, er målet mitt å fange
              naturlige og genuine uttrykk. Jeg er ikke opptatt av å jage etter
              det perfekte smilet, men heller å skape en trygg og avslappet
              atmosfære hvor smilene kommer av seg selv. Og for noen, både barn
              og voksne, er det ikke naturlig å smile stort hele tiden – og det
              er helt greit. Et godt portrett handler ikke nødvendigvis om et
              smil, men om å fange et ekte uttrykk og et glimt av personligheten
              til den som står foran kameraet.{" "}
            </p>
          </div>
        </div>

        {/* Image side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Image
               src="/familiefotograf_barnefotograf_familiebilder_3.jpg"
               alt="1 åringen utendørs som utforsker verden"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <GalleryFamilie />

      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Image side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Image
          src="/ART_JOURNAL_2.jpg"
          alt="1 åringen utendørs som utforsker verden"
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-left px-5">
            <h3 className="sub-header">Priser og produkter</h3>
            <p>
              De viktigste bildene fortjener en vakker innpakning. Her kan du
              lese mer om mine nøye utvalgte produkter og se hvordan bildene
              dine kan bli til varige minner på veggen, i album eller som
              kunstverk til hjemmet. Du finner også full prisliste.{" "}
            </p>
            <p>Nå er den perfekte tiden for fotografering utendørs!</p>

            <Link href="/ute">
              Se min utendørskampanje for august og september her.
            </Link>
          </div>
        </div>
      </section>

      <Produkt2 />
      <div className="third-line"></div>
      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-left px-5">
            <h3 className="sub-header">Litt om fotografen</h3>
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
              alltid ville huske, blir gradvis mindre klare.{" "}
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
      <div className="third-line"></div>

      <Banner />
      <FooterImageFamilie />
      <Footer />
    </>
  );
}
