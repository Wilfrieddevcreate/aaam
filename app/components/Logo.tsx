import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const dimensions = {
  sm: { h: "h-13 sm:h-14", w: 260 },
  md: { h: "h-14 sm:h-16", w: 280 },
  lg: { h: "h-18 sm:h-22", w: 380 },
  xl: { h: "h-24 sm:h-32 md:h-36", w: 500 },
};

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const d = dimensions[size];

  return (
    <Image
      src="/images/logo-aaam-cropped.jpeg"
      alt="AAAM — African Alliance of Artist Managers"
      width={d.w}
      height={Math.round(d.w * 0.36)}
      className={`${d.h} w-auto rounded-xl ${className}`}
      priority
    />
  );
}
