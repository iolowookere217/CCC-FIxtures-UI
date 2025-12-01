"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Division One", href: "/division-one" },
    { name: "Premier League", href: "/premier-league" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex items-center">
      <div className="flex space-x-6">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition ${
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-700 hover:text-blue-500"
              } pb-1`}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
