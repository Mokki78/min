"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="header-top">
        <img src="../logo1.png" className="logo" />
        <div className="line"></div>
      </div>

      <nav>
        <Link href="/" className="nav-item">
          Home
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={() => setOpen(!open)}
        >
          <button className="cursor-pointer nav-item">Tjenester</button>

          <AnimatePresence>
            {open && (
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
      
      
    </>
  );
}
