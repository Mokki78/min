import Header from "../komponenter/Header";

export default function Priser() {
  return (
    <>
      <Header />
      <section className="hero-container">
        <div className="hero-text">
          <h1>Priser</h1>
        </div>
        <div>
          <div>
            {" "}
            <img src="../produkt_4.jpg" className="hero-img" />
          </div>
          <div>
            <h3>
              Som en del av introduksjon av denne portrett tjenesten blir det i
              hele sommer mulig å få fotografering og et bilde levert som
              digital bilde-fil til kun kr 2500,- Dette tilbudet inkluderer
              opplevelse som den er til fullpris, men full fotograferings tid,
              planlegging av seanse i forkant, og etterarbeid i photoshop. Book
              enkelt din fotografering her, eller kontakt meg for mer
              informasjon om opplevelsen..{" "}
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
