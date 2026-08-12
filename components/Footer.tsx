import Link from "next/link";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

const hostelLinks = [
  { label: "About us", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
] as const;

const exploreLinks = [
  { label: "Services", href: "#services" },
  { label: "Guests", href: "#testimonials" },
  { label: "Location", href: "#local" },
] as const;

export default function Footer() {
  return (
    <footer className="relative bg-white text-white">
      <div className="rounded-t-[32px] bg-primary pt-16 sm:pt-20">
        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div data-reveal-stagger="items" className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
            <div className="lg:pr-10">
              <div className="flex items-center gap-3">
                <h2 className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-medium uppercase leading-none tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#fff]">
                  Hostel
                </h2>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition-opacity hover:opacity-60"
                  aria-label="Hostel Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>

              <nav className="mt-8 flex flex-col gap-2.5" aria-label="Hostel">
                {hostelLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-60 sm:text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <a
                href="mailto:Imperialgirlshostel@gmail.com"
                className="mt-8 block font-sans text-sm text-white/80 transition-opacity hover:opacity-60"
              >
                Imperialgirlshostel@gmail.com
              </a>
            </div>

            <div className="border-white/25 lg:border-l lg:px-10">
              <h2 className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-medium uppercase leading-none tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#fff]">
                Contacts
              </h2>

              <p className="mt-8 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white sm:text-sm">
                Address
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/80">
                254-D Block 6 PECHS, Karachi
              </p>

              <p className="mt-8 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white sm:text-sm">
                Telephone
              </p>
              <p className="mt-2 font-sans text-sm leading-relaxed text-white/80">
                <a href="tel:+923302085223" className="transition-opacity hover:opacity-60">
                  0330 208 5223
                </a>
              </p>
            </div>

            <div className="border-white/25 lg:border-l lg:pl-10">
              <div className="flex items-center gap-3">
                <h2 className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-medium uppercase leading-none tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#fff]">
                  Explore
                </h2>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition-opacity hover:opacity-60"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white transition-opacity hover:opacity-60"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>

              <nav className="mt-8 flex flex-col gap-2.5" aria-label="Explore">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-60 sm:text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <a
                href="mailto:Imperialgirlshostel@gmail.com"
                className="mt-8 block font-sans text-sm text-white/80 transition-opacity hover:opacity-60"
              >
                Imperialgirlshostel@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden sm:mt-14">
          <p
            data-reveal="scale"
            className="font-display pointer-events-none w-full select-none text-center text-[21vw] leading-[0.82] font-bold whitespace-nowrap text-[#0c4a48]"
            aria-hidden="true"
          >
            Imperial
          </p>
        </div>

        <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col gap-3 border-t border-white/25 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-6">
            <p className="font-sans text-[11px] font-medium tracking-[0.16em] text-white uppercase sm:text-xs">
              Copyright © 2026 Imperial Girls Hostel
            </p>
            <a
              href="mailto:Imperialgirlshostel@gmail.com"
              className="font-sans text-[11px] font-medium tracking-[0.16em] text-white uppercase underline underline-offset-4 transition-opacity hover:opacity-60 sm:text-xs"
            >
              Complaints book
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
