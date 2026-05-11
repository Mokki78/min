"use client";

import Link from "next/link";
import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <button onClick={() => setOpen(!open)}>Tjenester</button>

      {open && (
        <div>
          
          <Link href="/tjenester/baby">Baby og Nyfødt</Link>
          <Link href="/tjenester/familie">Familie</Link>
          <Link href="/tjenester/portrett">Signature Portrett</Link>
        </div>
      )}
    </nav>
  );
}
