import Header from "../komponenter/Header";
import HeroPriser from "../komponenter/Hero_priser";

export default function Priser() {
  return (
    <>
      <Header />
     <HeroPriser />
     <section className="quote-section">
            <div>
              <h2>De små øyeblikkene du aldri har lyst til å glemme, </h2>
              <h2>samlet i en album eller som din egen kunst på veggen.  </h2>
                
            </div>
        </section>
    </>
  );
}
