import Image from "next/image";

const services = [
  {
    title: "Free WiFi",
    image: "/wifi.jpg",
    description:
      "Fast, reliable internet throughout the hostel for work, study or staying in touch.",
  },
  {
    title: "Breakfast",
    image: "/breakfast.jpg",
    description:
      "Start the day with tea, coffee, fruit, breads and local flavours.",
  },
  {
    title: "Laundry",
    image: "/laundary.jpg",
    description:
      "On-site washers and dryers, so you can travel light and keep your clothes fresh.",
  },
  {
    title: "Air Conditioning",
    image: "/ac.jpg",
    description:
      "Cool, comfortable rooms all year, perfect for hot Karachi afternoons.",
  },
  {
    title: "24h Reception",
    image: "/reception.jpg",
    description:
      "Friendly staff around the clock for check-in, local tips and anything you need.",
  },
  {
    title: "Luggage Storage",
    image: "/storage.jpg",
    description:
      "Secure storage for your bags before check-in or after check-out.",
  },
] as const;

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-white pb-24 pt-20 text-primary sm:pb-32 sm:pt-28"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div data-reveal="up" className="mb-12 max-w-2xl sm:mb-16">
          <h2 className="font-heading text-[clamp(2.5rem,8vw,5.5rem)] font-medium uppercase leading-[0.9] tracking-[0.02em] text-transparent [-webkit-text-stroke:1.5px_#093a39] sm:[-webkit-text-stroke:2px_#093a39]">
            Services
            <span className="mt-3 block text-xl font-semibold leading-tight tracking-[0.04em] text-primary [-webkit-text-stroke:0] sm:mt-4 sm:text-2xl lg:text-3xl">
              at our hostel
            </span>
          </h2>
          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-primary/55 sm:mt-6 sm:text-[15px] sm:leading-[1.7]">
            Everything you need for a comfortable stay, from daily essentials
            to shared spaces where you can meet other girls.
          </p>
        </div>

          <div data-reveal-stagger="items" className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
                  className="object-cover object-center"
                />
              </div>

              <h3 className="font-heading mt-4 text-lg font-semibold uppercase tracking-[0.04em] text-primary sm:mt-5 sm:text-xl">
                {service.title}
              </h3>

              <p className="mt-2 font-sans text-xs leading-relaxed text-primary/55 sm:mt-3 sm:text-sm sm:leading-[1.7]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
