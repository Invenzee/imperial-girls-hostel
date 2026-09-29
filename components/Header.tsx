"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M4 7H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 12H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 17H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link
          href="/"
          className="block shrink-0"
          aria-label="Imperial Girls Hostel home"
        >
          <img
            src="/logo.png"
            alt="Imperial Girls Hostel"
            className="w-16 sm:w-20 lg:w-24"
          />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-5 rounded-full border border-primary px-7 py-3 xl:gap-11 xl:px-14 xl:py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-heading text-[15px] font-medium uppercase tracking-[0.08em] text-primary transition-opacity hover:opacity-70 lg:text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center text-primary lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`border-t border-primary/15 bg-white lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
        aria-label="Mobile"
      >
        <ul className="flex flex-col px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-heading flex items-center justify-between border-b border-primary/10 py-3.5 text-base font-medium uppercase tracking-[0.08em] text-primary last:border-b-0"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
