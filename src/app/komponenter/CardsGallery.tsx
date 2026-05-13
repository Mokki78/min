import Link from "next/link";

export default function GalleryCard() {

    return (
        <>
    <section className="galleryRow">
      <div className="galleryColumn">
        <div className="cards">
        <img src="../eline.jpg" className="galleryImg" />
        <h4 className="sub-headline">Baby & Nyfødt</h4>
        <Link href="/tjenester/baby">
        <button className="second-button">Lær mer</button>
        </Link>
        </div>
        <div className="cards">
        <img src="../onthebeach.jpg" className="galleryImg" />
        <h4 className="sub-headline">Familie</h4>
        <Link href="/tjenester/familie">
        <button className="second-button">Lær mer</button>
        </Link>
        </div>
        <div className="cards">
        <img src="../kirsti.jpg" className="galleryImg" />
        <h4 className="sub-headline"> Portrett</h4>
        <Link href="/tjenester/portrett">
        <button className="second-button">Lær mer</button>
        </Link>
        </div>
        
      </div>
      </section>
        
        </>
    )
}