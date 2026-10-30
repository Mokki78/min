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
                <div className="max-w-md text-left px-5

                 border-1">
                <h5 className="sub-header">Introduksjonskampanje</h5>
              <p>
              Som en del av introduksjonen av denne portrettopplevelsen tilbyr jeg fotografering inkludert ett ferdig redigert digitalt bilde til kun <b>kr 2500,-</b> 
              </p>
              <br></br>
              <p>
              
              Du får den samme gjennomarbeidede fotograferingsopplevelsen som ved ordinær pris, med full fotograferingstid, personlig planlegging i forkant og nøye etterarbeid i Photoshop. Book din fotografering enkelt her, eller ta kontakt dersom du ønsker mer informasjon om opplevelsen. Introduksjonstilbudet gjelder frem til 01.03.2027.{" "}
              </p>
            
              <br></br>
              <p>Om du er interessert i å se full prisliste på fotografering og produkter finner du den her.{" "}
              </p>

             
            </div>
            </div>
      
          
          </section>
          <div className="third-line"></div>
        </>
      );
    }
    {" "}
