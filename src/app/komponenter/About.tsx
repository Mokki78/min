import Image from "next/image";

export default function About() {
  return (
    <>
       <div className="third-line"></div>
      <h3 className="sub-header">Litt om fotografen</h3>

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
            Min filosofi som fotograf er at alle kan se bra ut på bilder, og jeg
            vil gjerne tilby såkalte vanlig damer en mulighet til å fantastiske
            bilder av seg selv de kan være stolte av. Det er dessverre altfor
            mange som unngår kamera, (Undertegnede er i den kategoris selv)
            fordi man Føler ikke at man kamera fremstiller en riktig. For å
            kunne gjøre noe med denne følelsen har Jeg brukt mye tid på å lære
            fra de beste foto- Grafer som Lara Jade, Sue Bryce og Lindsey Adler
            For å lære kunsten bak god posering for alle kropper, riktig
            lysetting, og hvordan å skape en avslappet og god stemning I studio.
            Signature portrett skal være et tilbud der du får En fotografering
            med det lille ekstra.{" "}
          </p>
        </div>
        </div>
      
      
      </section>
      <div className="third-line"></div>
    </>
  );
}
