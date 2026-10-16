"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between">
        <Logo />

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <li>
            <Link href="/about" className="nav-link text-sm font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link text-sm font-medium">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/team" className="nav-link text-sm font-medium">
              Team
            </Link>
          </li>
          <li>
            <Link href="/blog/hello" className="nav-link text-sm font-medium">
              Blog
            </Link>
          </li>
        </ul>

        <p className="text-sm text-muted">
          &copy; {year} Sneha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
