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
            <p>
              Derfor er fotografier så mye mer enn bare bilder. De er en
              investering i minner, følelser og historier. De lar oss stoppe
              tiden et lite øyeblikk og ta vare på det som betyr mest. Med årene
              kan bildene av barna og familien din bli blant dine mest
              verdifulle eiendeler – ikke på grunn av hva de er verdt, men på
              grunn av alt de betyr. Mitt mål er å skape bilder som ikke bare
              dokumenterer hvordan livet ser ut akkurat nå, men som også vekker
              følelsene, minnene og kjærligheten til denne tiden i livet – både
              for deg og for kommende generasjoner.{" "}
            </p>
          </div>
        </div>
      </section>
      <div className="third-line"></div>
    </>
  );
}
