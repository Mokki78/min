import Image from "next/image";

export default function SummerCampaign() {

    return (
        <>
           <div className="third-line"></div>
    
          <section className="container py-16 px-6 grid md:grid-cols-2 items-center gap-12">
        
                   {/* Image side */}
                   <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <Image
                    src="/portrettfotograf_signature-portrett_vestfold_telemark_.jpg"
                    alt="Fotograf på stranden"
                    width={1000}
                    height={800}
                    className="aspect-[4/5] object-cover"
                  />
                </div>
              </div>
          
           
    
              {/* Text side */}
              <div className="flex justify-center">
                <div className="max-w-md text-left px-5 border-1">
                <h3 className="sub-header">Sommer kampanje</h3>
              <p>
              Som en del av introduksjon av denne portrett typen blir det i
              hele sommer mulig å få fotografering og et bilde levert som
              digital bildefil til kun <b>kr 2500,-</b>
              </p>
              <br></br>
              <p>
              
              Dette tilbudet inkluderer opplevelse som den er til fullpris, med full fotograferingstid,
              planlegging av seanse i forkant, og etterarbeid i photoshop. Book
              enkelt din fotografering her, eller kontakt meg for mer
              informasjon om opplevelsen.   {" "}
              </p>
            
              <br></br>
              <p>Om du er interessert i å se full prisliste på fotografering og produkter finner du det her.   {" "}
              </p>

             
            </div>
            </div>
      
          
          </section>
          <div className="third-line"></div>
        </>
      );
    }
    {" "}
