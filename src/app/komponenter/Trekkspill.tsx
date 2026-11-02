"use client"


import  { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type PricingItem = {
    title: string;
    price: string;
    description: string;
    includes: string[];
};

const pricingItems : PricingItem[] = [
    {
        title: "Nyfødt- og babyfotografering",
        price: "Fra 2500,-",
        description:
        "En rolig og personlig fotografering av den aller første tiden med den lille.Vi tar oss god tid og tilpasser fotograferingen etter babyens behov.",
        includes: [
            "Personlig planlegging",
            "Fotografering i studio",
            "Bildevisningstime eller privat bildegalleri",
            "Mulighet for kjøp av digitale bildefiler og flotte fotoprodukter."
        ],

    },
    {
        title: "Familiefotografering",
        price: "Fra 1900,-",
        description: "Tidløse bilder som dokumenterer nærheten, personligheten og de små øyeblikkene som betyr mest",
         includes: [
             "Planlegging før fotografering",
             "Fotografering i studio eller utendørs",
             "Bildevisningstime eller privat bildegalleri",
             "Mulighet for eksklusive bildeprodukter, digitale bildefiler og kjøp av kolleksjoner"
         ],
   
    },
    {
        title: "Signatureportrett",
        price: "Fra 2100,-",
        description: "Et kreativt portrettkonsept inspirert av mote- og magasinestetikk. Her skaper vi portretter med særpreg og karakter.",
        includes: [
            "Personlig konsept",
            "Stylingsveiledning",
            "Eksklusiv portrettfotografering",
            "Profesjonell bildebehandling",
            "Flotte kvalitets fotoprodukter og digitale bildefiler"

        ],

    },
]

export default function Trekkspill() {
    const [ openIndex, setIsOpenIndex] = useState<number | null>(null);

    return (

   
        
        <section className="mx-auto w-full max-w-4xl px-5 py-20">

            <div className="mb-12 text-center">
                <h2 className="mb-3  uppercase tracking-[0.25em">
                    Priser og kolleksjoner</h2>
            </div>
            <div>
            
            <p className="mx-auto mt-5 max-w-xl  leading-7 text-neutral-500">
            Hver fotografering er en personlig opplevelse.
          Utforsk de ulike fotograferingene og produktene og finn løsningen
          som passer for deg.
            </p>
            </div>
            <div className="border-t border-neutral-300">

                {pricingItems.map((item, index ) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                        key={item.title}
                        className="border-b border-neutral-300"
                        >
                            <button
                            type="button"
                            onClick={() =>
                            setIsOpenIndex(isOpen ? null : index)
                        }
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-6 py-7text-left"
                            >
                                <div>
                                    <h3>{item.title}</h3>
                                    <p className="mt-2 text-sm text-neutral-500" >{item.price}</p>
                                </div>

                                <motion.span
                                animate={{ rotate: isOpen ? 45 : 0}}
                                transition={{duration: 0.25}}
                                className="text-2xl font-light"
                                aria-hidden="true"
                                >
                                    +
                                    </motion.span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                            initial={{ height: 0, opacity: 0}}
                                            animate={{ height: "auto", opacity: 1}}
                                            exit={{ height: 0, opacity: 0}}
                                            transition={{ duration: 0.3}}
                                            className="overflow-hidden"
                                            >
                                              <div className="max-w-2xl pb-8 pr-6">
                                              <p className="text-sm leading-7 text-neutral-600">
                                           {item.description}
                                              </p>

                                              <h4 className="mb-4 mt-7 text-sm font-semibold">
                        Dette inkluderer
                      </h4>

                      <ul className="space-y-3">
                        {item.includes.map((feature) => (
                          <li
                            key={feature}
                            className="flex gap-3 text-sm text-neutral-600"
                          >
                            <span aria-hidden="true">—</span>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/kontakt"
                        className="mt-8 inline-block border-b border-neutral-800 pb-1 text-sm transition-opacity hover:opacity-50"
                      >
                        Ta kontakt for booking →
                      </a>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

      </div>
    </section>
  );
}