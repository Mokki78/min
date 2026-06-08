"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomHamburger from "./HamburgerMenu";



export default function Header() {
 
  const [ servicesOpen, setServicesOpen] = useState(false);
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const [ mobileServicesOpen, setMobileServicesOpen ] = useState(false);



  return (
    <>
      <div className="header-top">
        <Link href="/">
        <img src="../logo1.png" className="logo"/>
        </Link>
        <div className="line"></div>
     
      </div>

      <nav>
        <Link href="/" className="nav-item">
          Home
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          <button className="cursor-pointer nav-item">Tjenester</button>

          <AnimatePresence>
            {servicesOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2"
              >
                <Link href="/tjenester/baby" className="nav-sub-item">
                  Baby og Nyfødt
                </Link>
                <Link href="/tjenester/familie" className="nav-sub-item">
                  Familie
                </Link>
                <Link href="/tjenester/portrett" className="nav-sub-item">
                  Signature Portrett
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/priser" className="nav-item">
          Priser
        </Link>
        <Link href="/kontakt" className="nav-item">
          Kontakt
        </Link>
      </nav>
      <div className="fixed top-6 right-6 md:hidden z-[9999]">
        <CustomHamburger isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
      </div>

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full z-[9999] md:hidden flex flex-col items-center gap-6 py-10 bg-white hamburger-menu">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <button
           onClick={() => 
            setMobileServicesOpen(!mobileServicesOpen)}
          >
          Tjenester
         </button>
         {mobileServicesOpen && (
           <div className="flex flex-col pl-6 hamburger-sub">
             <Link href="/tjenester/baby">
               Baby & Nyfødt
             </Link>
             <Link href="/tjenester/familie">
               Familie
             </Link>
             <Link href="/tjenester/portrett">
              Portrett
             </Link>
             </div>
         )}
          <Link href="/priser" onClick={() => setMobileMenuOpen(false)}>
            Priser
          </Link>
          <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
            Kontakt
          </Link>
        </div>
     )}
    </>
  );
}
