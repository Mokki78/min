import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="second-line"></div>
        <div className="icon-container">
          <Link
            href="https://instagram.com/fotografmonikasaele"
            target="_blank"
            rel="noopener noferrer"
          >
            <img src="../Instagram.png" className="icons"></img>
          </Link>
          <Link
            href="https://facebook.com/fotografmonikasaele"
            target="_blank"
            rel="noopener noferrer"
          >
            <img src="../Facebook(3).png" className="icons"></img>
          </Link>
          <Link href="">
            <img src="../MapPin.png" className="icons"></img>
          </Link>
          <Link href="">
            <img src="../Mail.png" className="icons"></img>
          </Link>
          <Link href="">
            <img src="../Phone.png" className="icons"></img>
          </Link>
        </div>

        <div className="opening-hours-container">
          <ul>
            <h5>Åpningstider</h5>
            <li>Tirsdag 09:00 - 14:00</li>
            <li>Torsdag 16:00 - 21:00</li>
            <li>Fredag 10:00 - 18:00</li>
            <p className="open-hours-text">
              Det er også mulig å booke time utenom disse tidspunktene, både på
              hverdager og i helger. Ta gjerne kontakt for forespørsel om ledig
              tidspunkt. Vennligst merk at alle besøk må avtales på forhånd,
              også innenfor ordinære åpningstider.
            </p>
          </ul>
        </div>

        <div className="logo-footer">
          <div>
            <Link href="/">
              <img src="../logo1.png" className="logo" />
            </Link>
          </div>
          <div className="copyright">
            <p>©Fotograf Monika Sæle 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
