import Image from "next/image";

export default function TextAreaPortrett() {
  return (
    <>
      <div className="third-line"></div>

      <section className="container py-20 px-6 grid md:grid-cols-2 items-center gap-5">
        {/* Image side */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Image
              src="/portrettfotograf_singnature-portrett_vestfold_telemark_sandefjord_tønsberg_porsgrunn_larvik_9.jpg"
              alt="Bilde av dame fotografert i studio"
              width={1000}
              height={800}
              className="aspect-[4/5] object-cover"
            />
          </div>
        </div>

        {/* Text side */}
        <div className="flex justify-center">
          <div className="max-w-md text-left px-5">
            <h3 className="sub-header">Hva er Signature portrett?</h3>
            <p>
              Gjennom nøye planlagt lyssetting, posering og etterarbeid skaper
              vi bilder med et eksklusivt og tidløst uttrykk. Sammen planlegger
              vi antrekk, hår og eventuell makeup, slik at alt spiller på lag og
              fremhever akkurat deg. Målet er ikke bare vakre bilder, men en
              opplevelse som gir deg muligheten til å se deg selv på en ny måte
              – og portretter du vil være stolt av i mange år fremover.{" "}
            </p>
            <br></br>
            <p>
              Du kan velge mellom fotografering i studio eller utendørs – alt
              etter hva som passer deg best. Jeg kjenner til mange flotte
              fotograferingssteder og hjelper gjerne med forslag til lokasjoner.
              Har du et sted som betyr noe spesielt for deg, er jeg selvfølgelig
              også åpen for dine egne idéer. I studio har jeg flere ulike
              bakgrunner å velge mellom. Hvilken som passer best, avtaler vi i
              forkant av fotograferingen. Valget av bakgrunn avhenger blant
              annet av dine farger, din stil og hvilken stemning vi ønsker å
              skape i bildene.{" "}
            </p>
          </div>
        </div>
      </section>
      <div className="third-line"></div>
    </>
  );
}
{
  (" ");
}
