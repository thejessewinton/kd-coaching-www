"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Booking",
    href: "https://cal.com/kd-coaching",
  },
];

export const Nav = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-10 mb-20 flex w-full items-center justify-between p-10">
      <h1 className="font-serif">KD Coaching</h1>

      <nav className="flex gap-8">
        {items.map((item) => {
          const isExternal = item.href.startsWith("https");
          return (
            <Link
              href={item.href}
              key={item.href}
              target={isExternal ? "_blank" : "_self"}
              className={pathname === item.href ? "font-bold" : ""}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};