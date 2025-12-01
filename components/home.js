"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Calendar,
  Users,
  Trophy,
  MapPin,
} from "lucide-react";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images - replace with actual image URLs
  const heroSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1200&h=600&fit=crop",
      title: "Club Cricket Committee Lagos League",
      subtitle: "2025/2026 Season - Powered by Sterling Bank",
    },
    {
      image:
        "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1200&h=600&fit=crop",
      title: "Premier Cricket in Nigeria",
      subtitle: "Nurturing Excellence Since 1904",
    },
    {
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=1200&h=600&fit=crop",
      title: "Join the Championship",
      subtitle: "9 Premier Teams | 14 Division One Teams",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const stats = [
    { icon: Users, label: "Registered Players", value: "500+" },
    { icon: Trophy, label: "Active Teams", value: "22" },
    { icon: Calendar, label: "Matches Per Season", value: "99+" },
    { icon: MapPin, label: "Venues", value: "3" },
  ];

  const venues = [
    { name: "Tafawa Balewa Square", short: "TBS", location: "Lagos Island" },
    { name: "UNILAG Cricket Oval", short: "UNILAG", location: "Akoka, Lagos" },
    { name: "CMS Grammar School", short: "CMS", location: "Lagos" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Slider Section */}
      <div className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-yellow-400 font-semibold">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-yellow-400" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Instagram Link Overlay */}
        <a
          href="https://www.instagram.com/thecccleague/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-lg transition-all transform hover:scale-105">
          <Instagram className="w-5 h-5" />
          Follow Us
        </a>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
                <Icon className="w-8 h-8 mx-auto text-blue-600 mb-3" />
                <div className="text-3xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About Club Cricket Committee
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Club Cricket Committee (CCC) is the premier cricket organization
            in Lagos, Nigeria. Since 1904, we have been nurturing cricket talent
            and organizing competitive leagues that showcase the best of
            Nigerian cricket.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              2025/2026 Season Highlights
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>Season runs from November 2025 to March 2026</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>9 Premier Division teams competing for glory</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>14 Division One teams split into Group A & B</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>99 T20 matches scheduled across 5 months</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <span>Super 6 Fixtures begin March 14, 2026</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Our Mission
              </h4>
              <p className="text-gray-600">
                To develop and promote cricket in Nigeria through competitive
                leagues, youth development programs, and community engagement,
                while maintaining the highest standards of sportsmanship.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Our Vision
              </h4>
              <p className="text-gray-600">
                To establish Nigeria as one of the world's strongest cricketing
                nations within the next decade, nurturing talent from grassroots
                to international level.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Venues Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Venues
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Matches are played across three premier cricket facilities in
              Lagos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
                  <div className="text-3xl font-bold mb-2">{venue.short}</div>
                  <div className="text-lg font-semibold">{venue.name}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{venue.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsor Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Proudly Sponsored By</h2>
          <div className="text-5xl font-bold mb-4">STERLING BANK</div>
          <p className="text-xl max-w-2xl mx-auto">
            Our official sponsor for the 2025/2026 CCC Lagos League season,
            committed to developing youth and strengthening Nigerian cricket.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Action?</h2>
          <p className="text-xl mb-8">
            Follow us on Instagram for fixtures, results, and behind-the-scenes
            content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/thecccleague/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg">
              <Instagram className="w-6 h-6" />
              Follow @thecccleague
            </a>
            <a href="/division-one">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                View Fixtures
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Club Cricket Committee
              </h3>
              <p className="text-gray-400">
                Established since 1987, promoting cricket excellence in Lagos,
                Nigeria.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/division-one"
                    className="hover:text-yellow-400 transition-colors">
                    Fixtures
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-yellow-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/thecccleague/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Club Cricket Committee Lagos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
