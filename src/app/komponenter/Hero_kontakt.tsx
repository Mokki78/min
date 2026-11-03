import ContactForm from "./ContactForm";

export default function HeroKontakt() {
  return (
    <>
      <section className="hero-container">
        <div className="hero-text">
          <h1>Kontakt</h1>
          <h3>
            Har du spørsmål, eller ønsker du å booke en fotografering? Jeg hører
            gjerne fra deg! 
            <br></br>
            <br></br>
            Du kan ringe meg på 90 75 75 19 sende en e-post til
              post@fotograf-ms.com eller fylle ut kontaktskjemaet nedenfor.
            <br></br>
            <br></br> 
            Jeg gleder meg til å høre fra deg!
          </h3>
        </div>
        <ContactForm />
      
      </section>
      <section>
        <div className="contact-line"></div>
      </section>
    </>
  );
}
