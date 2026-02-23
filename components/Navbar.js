"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [showReportsDropdown, setShowReportsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Division One", href: "/division-one" },
    { name: "Super 4", href: "/super-4-div-one" },
    { name: "Premier League", href: "/premier-league" },
    { name: "Super Six", href: "/super-six" },
    { name: "Women's League", href: "/womens-league" },
    { name: "40 Overs", href: "/forty-overs" },
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setShowReportsDropdown(false);
    }
  };

  // Close mobile menu when navigating
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    setShowReportsDropdown(false);
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

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="w-full bg-gray-200 shadow-sm py-2 px-6 pl-8 flex items-center justify-between relative">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/ccc_logo.png"
          alt="CCC Logo"
          width={120}
          height={90}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 items-center">
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
            <div className="absolute top-full right-0 mt-0 bg-gray-100 shadow-lg rounded-lg border border-gray-200 py-2 min-w-[220px] z-50">
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

      {/* Mobile Hamburger Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-2 text-gray-700 hover:text-blue-500 transition z-50"
        aria-label="Toggle menu">
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Full-Screen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-200 z-40 flex justify-center items-center md:hidden">
          <div className="flex flex-col items-end space-y-8 px-8">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleMobileNavClick}
                  className={`text-xl font-medium transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-500"
                  }`}>
                  {link.name}
                </Link>
              );
            })}

            {/* Weekly Reports Section for Mobile */}
            <div className="flex flex-col items-end dropdown-container ">
              <button
                onClick={toggleDropdown}
                className={`text-xl font-medium transition flex items-center gap-2 ${
                  pathname.includes("/weekly-reports")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }`}>
                Weekly Reports
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    showReportsDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showReportsDropdown && (
                <div className="mt-4 flex flex-col items-end space-y-4">
                  {reportLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={handleMobileNavClick}
                        className={`text-lg font-medium transition ${
                          isActive
                            ? "text-blue-600"
                            : "text-gray-500 hover:text-blue-500"
                        }`}>
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
