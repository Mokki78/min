export default function GalleryCard() {

    return (
        <>
    <section className="galleryRow">
      <div className="galleryColumn">
        <div className="cards">
        <img src="../eline.jpg" className="galleryImg" />
        <h4 className="sub-headline">Basic pakke 1</h4>
         </div>
        <div className="cards">
        <img src="../onthebeach.jpg" className="galleryImg" />
        <h4 className="sub-headline">Premium pakke 2</h4>
     
        </div>
        <div className="cards">
        <img src="../kirsti.jpg" className="galleryImg" />
        <h4 className="sub-headline">Luksus pakke 3</h4>
       
        </div>
        
      </div>
      </section>
        
        </>
    )
}