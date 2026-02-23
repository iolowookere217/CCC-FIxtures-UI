"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { superSixFixtures } from "../data/fixtures";

const SuperSixFixtures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const fixtures = superSixFixtures;

  const slides = [
    {
      title: "FEBRUARY 2026",
      color: "from-emerald-900 to-emerald-700",
      fixtures: fixtures.february,
    },
    {
      title: "MARCH 2026",
      color: "from-teal-900 to-teal-700",
      fixtures: fixtures.march,
    },
    {
      title: "APRIL 2026",
      color: "from-cyan-900 to-cyan-700",
      fixtures: fixtures.april,
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlideData = slides[currentSlide];
  const baseFixtures = currentSlideData.fixtures.filter(
    (f) => (f.match || "").toUpperCase() !== "RESERVE"
  );

  // filter state
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  // compute unique teams from current slide fixtures
  const uniqueTeams = Array.from(
    new Set(
      baseFixtures.flatMap((f) =>
        (f.match || "")
          .split(/vs/i)
          .map((s) => s.trim())
          .filter(Boolean)
      )
    )
  );

  const toggle = (list, setList, value) => {
    if (list.includes(value)) setList(list.filter((v) => v !== value));
    else setList([...list, value]);
  };

  const normTime = (t) => (t || "").toLowerCase().replace(/\s+/g, "");

  const displayedFixtures = baseFixtures.filter((f) => {
    if (selectedTimes.length > 0 && !selectedTimes.includes(normTime(f.time)))
      return false;
    if (
      selectedDays.length > 0 &&
      !selectedDays.some((day) => (f.day || "").toUpperCase() === day)
    )
      return false;
    if (selectedTeam && selectedTeam !== "ALL") {
      const teams = (f.match || "")
        .toUpperCase()
        .split("VS")
        .map((s) => s.trim());
      if (!teams.includes(selectedTeam.toUpperCase())) return false;
    }
    return true;
  });

  const totalGames = displayedFixtures.length;

  // Get unique days for filter
  const availableDays = Array.from(
    new Set(baseFixtures.map((f) => (f.day || "").toUpperCase()))
  );

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`w-full bg-gradient-to-br ${currentSlideData.color} rounded-lg p-4`}>
          {/* Top bar with title, nav and summary */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-start gap-4 w-full md:w-auto">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {currentSlideData.title}
                </h1>
                <div className="text-sm text-yellow-200">
                  • SUPER 6 PREMIER LEAGUE FIXTURES
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              {/* Summary */}
              <div className="flex items-center gap-2 flex-wrap">
                {selectedTimes.length > 0 ||
                selectedDays.length > 0 ||
                selectedTeam ? (
                  <div className="px-3 py-1 rounded-md font-semibold text-sm bg-white/20 text-white">
                    Filtered: {totalGames} {totalGames === 1 ? "game" : "games"}
                  </div>
                ) : (
                  <>
                    <div className="px-3 py-1 rounded-md font-semibold text-sm bg-blue-100 text-blue-800 border border-blue-200">
                      TBS: {baseFixtures.length}
                    </div>
                    <div className="px-3 py-1 rounded-md font-semibold text-sm bg-white/20 text-white">
                      Total: {baseFixtures.length}
                    </div>
                  </>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-colors focus:outline-none ${
                    currentSlide === 0
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-yellow-400 text-gray-900 hover:scale-105"
                  }`}>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-colors focus:outline-none ${
                    currentSlide === slides.length - 1
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-yellow-400 text-gray-900 hover:scale-105"
                  }`}>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter panel */}
          <div className="bg-white/5 rounded-md p-3 mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="text-sm font-semibold text-white/90">Filters</div>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedTimes.includes("10am")}
                    onChange={() =>
                      toggle(selectedTimes, setSelectedTimes, "10am")
                    }
                  />
                  <span className="ml-1">10am</span>
                </label>
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedTimes.includes("2pm")}
                    onChange={() =>
                      toggle(selectedTimes, setSelectedTimes, "2pm")
                    }
                  />
                  <span className="ml-1">2pm</span>
                </label>
              </div>

              <div className="flex items-center gap-2">
                {availableDays.map((day) => (
                  <label key={day} className="flex items-center gap-1 text-sm text-white">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={selectedDays.includes(day)}
                      onChange={() =>
                        toggle(selectedDays, setSelectedDays, day)
                      }
                    />
                    <span className="ml-1">{day}</span>
                  </label>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <label className="text-sm text-white">Team</label>
                <select
                  className="text-sm bg-white/90 text-gray-900 rounded px-2 py-1 border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  value={selectedTeam}
                  onChange={(e) => setSelectedTeam(e.target.value)}>
                  <option value="">All Teams</option>
                  {uniqueTeams.map((t) => (
                    <option
                      key={t}
                      value={t}
                      className="bg-white text-gray-900">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedTimes([]);
                  setSelectedDays([]);
                  setSelectedTeam("");
                }}
                className="text-sm px-3 py-1 rounded bg-white/20 text-white">
                Clear
              </button>
              <button
                onClick={() => {
                  setSelectedTimes([]);
                  setSelectedDays([]);
                  setSelectedTeam("");
                }}
                className={`text-sm px-3 py-1 rounded ${
                  selectedTimes.length === 0 &&
                  selectedDays.length === 0 &&
                  !selectedTeam
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-white/10 text-white"
                }`}>
                All
              </button>
            </div>
          </div>

          {/* Grid of fixtures */}
          <div className="bg-white rounded-md p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {displayedFixtures.map((fixture, index) => (
                <div
                  key={fixture.id || index}
                  onClick={() => {
                    const params = new URLSearchParams({
                      id: fixture.id,
                      match: fixture.match,
                      date: fixture.date,
                      venue: fixture.venue,
                      division: "Super Six",
                    });
                    router.push(`/results?${params.toString()}`);
                  }}
                  className="border rounded-md p-3 transition hover:shadow-md cursor-pointer bg-blue-50 border-blue-200 hover:bg-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold text-gray-600">
                      {fixture.day}
                    </div>
                    <div className="text-xs text-gray-500">{fixture.date}</div>
                  </div>
                  <div className="text-sm font-bold text-gray-800 text-center mb-2">
                    {fixture.match}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="inline-flex items-center gap-2">
                      <span className="bg-gray-100 px-2 py-0.5 rounded">
                        {fixture.time}
                      </span>
                    </div>
                    <div className="text-right">
                      📍 <span className="font-medium">{fixture.venue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 w-full bg-red-500 ">
            <img
              src="/brand1.png"
              alt="brands"
              className="w-full object-fill opacity-95"
            />
          </div>
          <div className="mt-4 text-sm text-yellow-200 font-semibold">
            CCC 2025/2026 Season — Super 6 Premier League
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-8 bg-yellow-400" : "w-3 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuperSixFixtures;
