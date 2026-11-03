export type Collection = {
  name: string;
  price: string;
  description: string;
  images: number;
  products: string[];
  recommended?: boolean;
};

export type PhotographyCategory = {
  id: string;
  title: string;
  intro: string;
  price: string;
  includes: string[];
  collections: Collection[];
};

export const pricingData: PhotographyCategory[] = [
  {
    id: "newborn",
    title: "Baby- og nyfødtfotografering",
    intro:
      "En rolig og personlig fotografering av den aller første tiden med den lille.",
    price: "2500 kr",
    includes: [
      "Personlig planlegging",
      "Fotografering i studio",
      "Bildevisningstime eller privat bildegalleri",
      "Mulighet for kjøp av digitale bildefiler og flotte fotoprodukter.",
    ],

    collections: [
      {
        name: "Essential",
        price: "4900 kr",
        description:
          "En vakker start på minnene. Inkluderer fotografering, ett eksklusivt print med eikestaffeli og tre høyoppløselige digitale bildefiler..",
        images: 3,
        products: ["3 digitale bilder", "1 Print", "Eikestaffeli"],
      },
      {
        name: "Signature",
        price: "7900 kr",
        description:
          "En komplett bildeopplevelse med fotografering, tre eksklusive print på premium fotopapir og 10 høyoppløselige digitale bilder levert på USB. Velg mellom flere størrelser og kombinasjoner.",
        images: 10,
        products: ["10 digitale bilder", "3 Print"],
        recommended: true,
      },
      {
        name: "Heirloom",
        price: "13 900 kr",
        description:
          "For minnene som fortjener å vare. Inkluderer 10 eksklusive print i bildeeske, et elegant Fine Art-album og 15 høyoppløselige digitale bildefiler.",
        images: 13,
        products: ["15 digitale bilder", "Image Box", "Album"],
      },
    ],
  },

  {
    id: "family",
    title: "Familiefotografering",
    intro: "Tidløse bilder som dokumenterer nærheten og de små øyeblikkene.",
    price: "1900 kr",
    includes: [
      "Planlegging før fotografering",
      "Fotografering i studio eller utendørs",
      "Bildevisningstime eller privat bildegalleri",
      "Mulighet for eksklusive bildeprodukter, digitale bildefiler og kjøp av kolleksjoner",
    ],

    collections: [
      {
        name: "Essential",
        price: "5 900 kr",
        description: "En fin samling av familiebildene.",
        images: 5,
        products: ["5 digitale bilder", "Images Box Collage"],
      },
      {
        name: "Signature",
        price: "10 900 kr",
        description: "En større samling av familiens minner.",
        images: 10,
        products: ["10 digitale bilder", "3 print", "Album"],
        recommended: true,
      },
      {
        name: "Heirloom",
        price: "16 900 kr",
        description: "En komplett samling til familien.",
        images: 30,
        products: ["30 digitale filer", "Wooden Box – 30 print"],
      },
    ],
  },

  {
    id: "signature",
    title: "Signatureportrett",
    intro:
      "Et kreativt portrettkonsept inspirert av mote- og magasinestetikk. Her skaper vi portretter med særpreg og karakter.",
    price: "2100 kr ",
    includes: [
      "Personlig konsept",
      "Stylingsveiledning",
      "Eksklusiv portrettfotografering",
      "Profesjonell bildebehandling",
      "Mulighet for flotte kvalitets fotoprodukter og digitale bildefiler",
    ],

    collections: [
      {
        name: "Essential",
        price: "3 900 kr",
        description: "En liten samling med personlige portretter.",
        images: 3,
        products: ["3 digitale bilder"],
      },
      {
        name: "Signature",
        price: "6 900 kr",
        description: "En større portrettsamling.",
        images: 8,
        products: ["8 digitale bilder", "Folio – 3 bilder"],
        recommended: true,
      },
      {
        name: "Heirloom",
        price: "10 900 kr",
        description: "En komplett samling av barnets portretter.",
        images: 30,
        products: ["30 digitale filer", "Wooden Box – 30 print"],
      },
    ],
  },
];
