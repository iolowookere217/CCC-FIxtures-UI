"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [showReportsDropdown, setShowReportsDropdown] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Division One", href: "/division-one" },
    { name: "Premier League", href: "/premier-league" },
  ];

  const reportLinks = [
    {
      name: "Premier League Reports",
      href: "/weekly-reports/premier-league",
    },
    { name: "Division One Reports", href: "/weekly-reports/division-one" },
  ];

  // Toggle dropdown for mobile/touch devices
  const toggleDropdown = () => {
    setShowReportsDropdown(!showReportsDropdown);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showReportsDropdown && !event.target.closest(".dropdown-container")) {
        setShowReportsDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showReportsDropdown]);

  return (
    <nav className="w-full bg-white shadow-sm py-4 px-6 flex items-center">
      <div className="flex space-x-6 items-center">
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

        {/* Weekly Reports Dropdown */}
        <div
          className="relative dropdown-container"
          onMouseEnter={() => setShowReportsDropdown(true)}
          onMouseLeave={() => setShowReportsDropdown(false)}>
          <button
            onClick={toggleDropdown}
            className={`text-base font-medium transition flex items-center gap-1 ${
              pathname.includes("/weekly-reports")
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-500"
            } pb-1`}>
            Weekly Reports
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                showReportsDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {showReportsDropdown && (
            <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg border border-gray-200 py-2 min-w-[220px] z-50">
              {reportLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setShowReportsDropdown(false)}
                    className={`block px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
