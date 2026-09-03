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
            <img src="../Instagram.png" className="icon "></img>
          </Link>
          <Link
            href="https://facebook.com/fotografmonikasaele"
            target="_blank"
            rel="noopener noferrer"
          >
            <img src="../Facebook(3).png" className="icon "></img>
          </Link>
          <Link href="">
            <img src="../MapPin.png" className="icon "></img>
          </Link>
          <Link href="">
            <img src="../Mail.png" className="icon "></img>
          </Link>
          <Link href="">
            <img src="../Phone.png" className="icon"></img>
          </Link>
        </div>

  

        <div className="logo-footer">
          <div>
            <Link href="/">
              <img src="../logo_black.png" className="logo-footer-logo" />
            </Link>
          </div>
          <div>
            <p className="copyright">©Fotograf Monika Sæle 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
