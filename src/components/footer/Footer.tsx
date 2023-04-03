import Link from "next/link";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/kd_studios_",
  },
  {
    label: "Bookings",
    href: "https://cal.com/kd-coaching",
  },
];

export const Footer = () => {
  return (
    <footer className="mb-0 mt-12 flex h-14 w-full items-center p-10">
      <div className="mx-auto flex w-full flex-row items-center justify-between gap-4 text-neutral-900">
        <nav className="flex items-center justify-between gap-6 text-sm">
          {socials.map((social) => (
            <Link href={social.href} key={social.label} target="_blank">
              {social.label}
            </Link>
          ))}
        </nav>
        <span className="text-sm">{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
