const MAP_QUERY = "254-D Block 6 PECHS Karachi";
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=16&output=embed`;

export default function MapSection() {
  return (
    <section id="local" className="relative bg-white pb-16 pt-4 sm:pb-20 sm:pt-6">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div
          data-reveal="clip"
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px] sm:aspect-[2/1] lg:h-[480px] lg:aspect-auto"
        >
          <iframe
            title="Imperial Girls Hostel — 254-D Block 6 PECHS, Karachi"
            src={MAP_SRC}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
