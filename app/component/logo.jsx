import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo-link flex items-center gap-3 shrink-0">
      <span className="logo-mark relative block h-11 w-11 overflow-hidden rounded-full ring-2 ring-primary/60">
        <Image
          src="/images/hanumanji.jpg"
          alt="Sneha logo — Hanumanji"
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </span>

      <span className="logo-word gradient-text text-xl font-bold sm:text-2xl">
        Sneha
      </span>
    </Link>
  );
}
