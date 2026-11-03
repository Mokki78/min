"use client"


import  { useState } from "react";
import { AnimatePresence, motion, moveItem } from "framer-motion";

import { pricingData } from "../komponenter/Collection";
import CollectionCard from "../komponenter/CollectionCards";

export default function Trekkspill() {
    const [ openIndex, setIsOpenIndex] = useState<number | null>(null);

    return (
      <section className="mx-auto max-w-5xl px-5 py-20">
  
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl">
            PRISER OG KOLLEKSJONER
          </h2>
  
          <p className="mt-5 text-sm text-neutral-500">
          Hver fotografering er en personlig opplevelse.
          Utforsk de ulike fotograferingene og produktene og finn løsningen
          som passer for deg. 
          </p>
        </div>
  
        <div className="border-t border-neutral-300">
  
          {pricingData.map((category, index) => {
            const isOpen = openIndex === index;
  
            return (
              <div
                key={category.id}
                className="border-b border-neutral-300"
              >
                <button
                  type="button"
                  onClick={() =>
                    setIsOpenIndex(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-7 text-left"
                >
                  <span className="text-lg md:text-xl">
                    {category.title}
                  </span>
  
                  <span className="text-2xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
  
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10">
                    
  
                        <p className="mb-8 max-w-2xl text-sm leading-7 text-neutral-500">
                          {category.intro}
                        </p>
                        <p className="mb-8 max-w-2xl text-sm leading-7 text-neutral-500">
                          {category.price}
                        </p>

                        <ul className="space-y-3">
                        <p>Inkluderer :</p>
                          {category.includes.map((feature) => (
                           
                            <li
                            key={feature}
                            className="flex gap-3 tex-sm text-neautral-600"
                            >
                              <span aria-hidden="true">-</span>
                              {feature}

                            </li>
                          ))}
                        </ul>

                        <h3 className="mt-10">UTVALGTE KOLLEKSJONER :</h3>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                       
  
                          {category.collections.map((collection) => (
                            <CollectionCard
                              key={collection.name}
                             
                              collection={collection}
                            />
                          ))}
  
                        </div>
  
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
  