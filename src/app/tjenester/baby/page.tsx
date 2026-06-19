import Header from "@/app/komponenter/Header";
import PanoImgBaby from "@/app/komponenter/PanoramaImageBaby";
import Image from "next/image";
import HeroBaby from "@/app/komponenter/Hero_baby";

import Footer from "@/app/komponenter/Footer";
import Quote from "@/app/komponenter/Quote";
import FooterImageBaby from "@/app/komponenter/FooterImageBaby";

export default function Baby() {
  return (
    <>
      <Header />
      <HeroBaby />
      <Quote />

      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Image side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Image
              src="/nyfødtfotografering_babyfotografering_barnefotograf_familiebilder_vestfold_telemark_sandefjord_stokke_larvik_tønsberg_porsgrunn_2.jpg"
              alt=""
              width={1000}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-left px-5">
            <h3 className="sub-header">Hva tilbyr jeg</h3>
            <p>
              Jeg elsker de nære, ekte øyeblikkene mellom baby og foreldre, og
              min stil er enkel, rolig og tidløs. Jeg foretrekker naturlige
              bilder med lite bruk av rekvisitter og enkle poseringer, gjerne
              mot en lys eller hvit bakgrunn der fokuset får være på babyen og
              relasjonen mellom dere. I studio har jeg noen få pledd og små
              rekvisitter tilgjengelig, men jeg spesialiserer meg ikke på
              omfattende styling med mange tepper, luer og avanserte poseringer
              av babyen alene.{" "}
            </p>
            <br></br>
            <p> Dersom du er på jakt etter denne typen
              nyfødtfotografering, finnes det andre fotografer som vil passe
              bedre for deg. Hvis du derimot ønsker rolige, følsomme og naturlige bilder med
              fokus på kjærligheten, nærheten og de første dagene sammen som
              familie, kan jeg være det rette valget for dere.{" "}
            </p>
            <br></br>
            <p>
             For meg handler nyfødtfotografering ikke om perfekte poseringer, men om å bevare
              følelsen av denne helt spesielle tiden – de små fingrene, de varme
              klemmene og den enorme kjærligheten som fyller rommet når et nytt
              familiemedlem har kommet til verden.{" "}
            </p>
          </div>
        </div>
      </section>

      <PanoImgBaby />

      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-left px-5">
            <h3 className="sub-header">Hvor og når</h3>
            <p>
              Fotograferingen kan gjennomføres enten i mitt studio eller hjemme
              hos dere, hvor vi kan skape vakre minner i trygge og kjente
              omgivelser.{" "}
               </p> 
               <br></br>
              <p>Den beste tiden for nyfødtfotografering er vanligvis
              innen de første 14 dagene etter fødsel dersom du ønsker bilder av
              en baby som sover mye. På dette tidspunktet sover de fleste babyer
              dypere og er ofte lettere å fotografere sovende.{" "}
              </p>
              <br></br>
              <p> Etter de første
              ukene blir mange babyer mer våkne og oppmerksomme på omgivelsene
              sine. Dette kan gi nydelige bilder med åpne øyne, uttrykk og mer
              kontakt med kamera og foreldre.{" "}
            </p>
          </div>
        </div>
        {/* Image side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Image
              src="/nyfødtfotografering_babyfotografering_barnefotograf_familiebilder_vestfold_telemark_sandefjord_stokke_larvik_tønsberg_porsgrunn_7.jpg"
              alt=""
              width={1200}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
           {/* Image side */}
           <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Image
              src="/nyfødtfotografering_babyfotografering_barnefotograf_familiebilder_vestfold_telemark_sandefjord_stokke_larvik_tønsberg_porsgrunn_7.jpg"
              alt=""
              width={1200}
              height={1000}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-left px-5">
          <h3 className="sub-header">Priser og produkter</h3>
            <div>
              <p>
                De viktigste bildene fortjener en vakker innpakning. Her kan du
                lese mer om mine nøye utvalgte produkter og se hvordan bildene
                dine kan bli til varige minner på veggen, i album eller som
                kunstverk til hjemmet. Du finner også full prisliste.
              </p>
            </div>
          </div>
        </div>
     
      </section>

      <FooterImageBaby />

      <Footer />
    </>
  );
}
