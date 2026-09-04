"use client"

import Link from "next/link";
import { useState } from "react";
import ContactForm from "@/app/komponenter/ContactForm";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<
    "map" | "contact" | "phone" | null
  >(null);

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <>
      <section className="footer-container">
        <div className="second-line"></div>

        <div className="icon-container">
          {/* INSTAGRAM */}
          <Link
            href="https://instagram.com/fotografmonikasaele"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Instagram.svg"
              className="icon"
              alt="Instagram"
            />
          </Link>

          {/* FACEBOOK */}
          <Link
            href="https://facebook.com/fotografmonikasaele"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Facebook(3).svg"
              className="icon"
              alt="Facebook"
            />
          </Link>

          {/* KART */}
          <button
            type="button"
            className="mobile-contact-button"
            onClick={() => setActiveModal("map")}
            aria-label="Finn studioet"
          >
            <img
              src="/MapPin.svg"
              className="icon"
              alt=""
            />
          </button>

          {/* E-POST */}
          <button
            type="button"
            className="mobile-contact-button"
            onClick={() => setActiveModal("contact")}
            aria-label="Kontakt meg"
          >
            <img
              src="/Mail.svg"
              className="icon"
              alt=""
            />
          </button>

          {/* TELEFON */}
          <button
            type="button"
            className="mobile-contact-button"
            onClick={() => setActiveModal("phone")}
            aria-label="Ring meg"
          >
            <img
              src="/Phone(3).svg"
              className="icon"
              alt=""
            />
          </button>
        </div>

        {/* LOGO */}
        <div className="logo-footer">
     

          <div>
            <p className="copyright">
              ©Fotograf Monika Sæle 2026
            </p>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* KART-MODAL */}
      {/* ===================== */}

      {activeModal === "map" && (
        <div className="mobile-modal-overlay" onClick={closeModal}>
          <div
            className="mobile-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Lukk"
            >
              ×
            </button>

            <h2>Finn meg</h2>

            <p>
              Trollsåsveien 934, 3270 Larvik.
            </p>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-button"
            >
              Åpne i Google Maps
            </a>
          </div>
        </div>
      )}

      {/* ===================== */}
      {/* KONTAKT-MODAL */}
      {/* ===================== */}

      {activeModal === "contact" && (
        <div className="mobile-modal-overlay" onClick={closeModal}>
          <div
            className="mobile-modal mobile-contact-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Lukk"
            >
              ×
            </button>

            <h2>Ta kontakt</h2>

            <ContactForm />
          </div>
        </div>
      )}

      {/* ===================== */}
      {/* TELEFON-MODAL */}
      {/* ===================== */}

      {activeModal === "phone" && (
        <div className="mobile-modal-overlay" onClick={closeModal}>
          <div
            className="mobile-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Lukk"
            >
              ×
            </button>

            <h2>Ring meg</h2>

            <p className="phone-number">
             
            </p>

            <a
              href="tel:+4790757519"
              className="modal-button"
            >
              Ring 90 75 75 19
            </a>
          </div>
        </div>
      )}
    </>
  );
}