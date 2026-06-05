import Image from "next/image";

const images = [
  
  { src: "/nyfødtfotografering_babyfotografering_barnefotograf_familiebilder_vestfold_telemark_sandefjord_stokke_larvik_tønsberg_porsgrunn_4.jpg", alt: "Bildegalleri 1" },
  { src: "/nyfødtfotografering_babyfotografering_barnefotograf_familiebilder_vestfold_telemark_sandefjord_stokke_larvik_tønsberg_porsgrunn_3.jpg", alt: "Bildegalleri 2" },
  { src: "/nyfødtfotografering_babyfotografering_barnefotograf_familiebilder_vestfold_telemark_sandefjord_stokke_larvik_tønsberg_porsgrunn_7.jpg", alt: "Bildegalleri 3" },
  { src: "/nyfødtfotografering_babyfotografering_barnefotograf_familiebilder_vestfold_telemark_sandefjord_stokke_larvik_tønsberg_porsgrunn_5.jpg", alt: "Bildegalleri 4" },
  { src: "/home_galleri_9.jpg", alt: "Bildegalleri 5" },
  { src: "/nyfødtfotografering_babyfotografering_barnefotograf_familiebilder_vestfold_telemark_sandefjord_stokke_larvik_tønsberg_porsgrunn_16.jpg", alt: "Bildegalleri 6" },
];


export default function GalleryBaby() {
    
    return (

        <>
        <div className="grid grid-cols-2 gap-4 gallery">
          {images.map((img, index) => (
            <div key={index} className="relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw 30vw"
              />
            </div>
          ))}
        </div>
      </>
    )
}