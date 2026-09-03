import Image from "next/image";

const images = [
  
  { src: "/home_galleri_2.jpg", alt: "Bildegalleri 1" },
  { src: "/home_galleri_3.jpg", alt: "Bildegalleri 2" },
  { src: "/fotograf_monika_saele_familiebilder_familiefotograf_vestfold_telemark_13.jpg", alt: "Bildegalleri 3" },
  { src: "/fotograf_monika_saele_familiebilder_familiefotograf_vestfold_telemark_4.jpg", alt: "Bildegalleri 4" },
  { src: "/fotograf_monika_saele_familiebilder_familiefotograf_vestfold_telemark_12.jpg", alt: "Bildegalleri 5" },
  { src: "/fotograf_monika_saele_familiebilder_familiefotograf_vestfold_telemark_1.jpg", alt: "Bildegalleri 6" },
  
];


export default function GalleryFamilie() {
    
    return (

        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gallery">
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