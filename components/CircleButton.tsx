import Link from "next/link";

type CircleButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline-light" | "outline-dark";
  className?: string;
};

const variants = {
  solid:
    "border-primary bg-primary text-white [--btn-circle:#fff] [--btn-text-hover:#000]",
  "outline-light":
    "border-white bg-transparent text-white [--btn-circle:#fff] [--btn-text-hover:#000]",
  "outline-dark":
    "border-primary bg-transparent text-primary [--btn-circle:#fff] [--btn-text-hover:#000]",
} as const;

export default function CircleButton({
  href,
  children,
  variant = "solid",
  className = "",
}: CircleButtonProps) {
  return (
    <Link
      href={href}
      className={`btn-circle-hover inline-flex items-center justify-center rounded-full border px-6 py-3 font-sans text-[11px] font-medium tracking-[0.16em] uppercase sm:px-10 sm:py-4 sm:text-sm sm:tracking-[0.2em] ${variants[variant]} ${className}`}
    >
      <span className="btn-circle-hover__label">{children}</span>
    </Link>
  );
}
