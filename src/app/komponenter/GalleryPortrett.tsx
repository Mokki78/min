import Image from "next/image";

const images = [
  
  { src: "/portrettfotograf_singnature-portrett_vestfold_telemark_sandefjord_tønsberg_porsgrunn_larvik_8.jpg", alt: "Bildegalleri 1" },
  { src: "/portrettfotograf_singnature-portrett_vestfold_telemark_sandefjord_tønsberg_porsgrunn_larvik_5.jpg", alt: "Bildegalleri 2" },
  { src: "/portrettfotograf_singnature-portrett_vestfold_telemark_sandefjord_tønsberg_porsgrunn_larvik_6.jpg", alt: "Bildegalleri 3" },
  { src: "/portrettfotograf_singnature-portrett_vestfold_telemark_sandefjord_tønsberg_porsgrunn_larvik_4.jpg", alt: "Bildegalleri 4" },
  { src: "/portrettfotograf_singnature-portrett_vestfold_telemark_sandefjord_tønsberg_porsgrunn_larvik_3.jpg", alt: "Bildegalleri 5" },
  { src: "/portrettfotograf_singnature-portrett_vestfold_telemark_sandefjord_tønsberg_porsgrunn_larvik_2.jpg", alt: "Bildegalleri 6" },
];


export default function GalleryPortrett() {
    
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