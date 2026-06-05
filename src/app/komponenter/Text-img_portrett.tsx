import Image from "next/image";


export default function TextAreaPortrett() {
  return (
    <>
       <div className="third-line"></div>
      <h3 className="sub-header">Hva er Signature portrett?</h3>

      <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
       

          {/* Image side */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Image
                src="/onthebeach.jpg"
                alt="Fotograf på stranden"
                width={1000}
                height={800}
                className="aspect-[4/5] object-cover"
              />
            </div>
          </div>
   

          {/* Text side */}
          <div className="flex justify-center">
            <div className="max-w-md text-center md:text-left">
          <p>
          Gjennom nøye
            planlagt lyssetting, posering og etterarbeid skaper vi bilder med et
            eksklusivt og tidløst uttrykk. Sammen planlegger vi antrekk, hår og
            eventuell makeup, slik at alt spiller på lag og fremhever akkurat
            deg. Målet er ikke bare vakre bilder, men en opplevelse som gir deg
            muligheten til å se deg selv på en ny måte – og portretter du vil
            være stolt av i mange år fremover.
{" "}
          </p>
        </div>
        </div>
      
      
      </section>
      <div className="third-line"></div>
    </>
  );
}
{" "}
        