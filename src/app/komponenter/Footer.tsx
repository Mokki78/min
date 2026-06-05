import Link from "next/link";

export default function Footer() {
  return (
    <>
      <section>
        <div className="second-line"></div>
        <div className="flex flex-row">
        <img src="../Instagram.png" className="icons"></img>
        <img src="../Facebook(3).png" className="icons"></img>
        <img src="../MapPin.png" className="icons"></img>
        <img src="Mail.png" className="icons"></img>
        <img src="../Phone.png" className="icons"></img>
        </div>

        <div className="logo-footer">
          <div>
           <Link href="/">
          <img
            src="../logo1.png"
            className="logo"
          />
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
