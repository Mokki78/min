import Header from "../../komponenter/Header"

export default function Ute() {

    return (

        <>
        <Header />
        <section className="hero-container">
        <div className="hero-text">
          <h1>Utendørsfotografering</h1>
        </div>
        <div>
          <div>
            {" "}
            <img src="../kirsti.jpg" className="hero-img" />
          </div>
           <div>
            <h3>
              Har dere en liten på vei, eller har dere en smårolling i hus
              allerede som dere gjerne skulle fått foreviget før han vokser enda
              mer.{" "}
            </h3>
          </div>
        </div>
      </section>



        </>
    )
}