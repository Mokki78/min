import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="hero-container_main">
        <div className="hero-text_main">
          <h1>Portrett fotograf med studio</h1>
          <h1>på Hedrum i Larvik</h1>
          <h3>Nyfødt, baby, familie og signature portrett</h3>
          <div className="button-container">
            <Link 
            href="https://fotografmonikasaele15.pixieset.com/booking/"
            target="_blank"
            rel="noopener noferrer"
            >
              <button className="booking-button">Booking</button>
            </Link>
          </div>
        </div>

        <img
          src="../portrettfotograf_sandefjord_larvik_porsgrunn_skien_tønsberg_drammen_1.jpg"
          className="hero-img_main"
        />
      </section>
      <section>
        <div className="second-line"></div>
        <div className="second-line"></div>
      </section>
    </>
  );
}
