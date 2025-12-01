"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PremierLeagueFixtures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fixtures = {
    december: [
      {
        date: "06/12/2025",
        day: "SAT",
        time: "10am",
        venue: "UNILAG",
        match: "FCC vs RCC",
      },
      {
        date: "06/12/2025",
        day: "SAT",
        time: "2pm",
        venue: "UNILAG",
        match: "FGC vs ILCC",
      },
      {
        date: "07/12/2025",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "ITCC vs SECC",
      },
      {
        date: "07/12/2025",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "MRI vs RSCC",
      },
      {
        date: "13/12/2025",
        day: "SAT",
        time: "10am",
        venue: "TBS",
        match: "FGC vs RCC",
      },

      {
        date: "14/12/2025",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "RCC vs ITCC",
      },
      {
        date: "14/12/2025",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "ILCC vs RSCC",
      },
      {
        date: "20/12/2025",
        day: "SAT",
        time: "10am",
        venue: "UNILAG",
        match: "FCC vs FGC",
      },
      {
        date: "20/12/2025",
        day: "SAT",
        time: "2pm",
        venue: "UNILAG",
        match: "GCI vs RCC",
      },
      {
        date: "21/12/2025",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "FCC vs MRI",
      },
      {
        date: "21/12/2025",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "FGC vs ITCC",
      },
      {
        date: "21/12/2025",
        day: "SUN",
        time: "2pm",
        venue: "UNILAG",
        match: "RSCC vs SECC",
      },

      {
        date: "28/12/2025",
        day: "SUN",
        time: "10am",
        venue: "UNILAG",
        match: "SECC vs MRI",
      },
      {
        date: "28/12/2025",
        day: "SUN",
        time: "2pm",
        venue: "UNILAG",
        match: "ITCC vs RSCC",
      },
    ],
    january: [
      {
        date: "03/01/2026",
        day: "SAT",
        time: "10am",
        venue: "TBS",
        match: "GCI vs ILCC",
      },
      {
        date: "04/01/2026",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "ITCC vs MRI",
      },
      {
        date: "04/01/2026",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "RCC vs RSCC",
      },
      {
        date: "10/01/2026",
        day: "SAT",
        time: "10am",
        venue: "TBS",
        match: "ILCC vs RCC",
      },
      {
        date: "11/01/2026",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "GCI vs MRI",
      },
      {
        date: "11/01/2026",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "FGC vs RSCC",
      },
      {
        date: "17/01/2026",
        day: "SAT",
        time: "10am",
        venue: "TBS",
        match: "FGC vs GCI",
      },
      {
        date: "18/01/2026",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "ILCC vs ITCC",
      },
      {
        date: "18/01/2026",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "FCC vs SECC",
      },
      {
        date: "31/01/2026",
        day: "SAT",
        time: "10am",
        venue: "TBS",
        match: "FCC vs ILCC",
      },
    ],
    february: [
      {
        date: "01/02/2026",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "ILCC vs MRI",
      },
      {
        date: "01/02/2026",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "GCI vs RSCC",
      },
      {
        date: "01/02/2026",
        day: "SUN",
        time: "2pm",
        venue: "UNILAG",
        match: "FCC vs ITCC",
      },
      {
        date: "07/02/2026",
        day: "SAT",
        time: "10am",
        venue: "TBS",
        match: "FCC vs GCI",
      },
      {
        date: "07/02/2026",
        day: "SAT",
        time: "2pm",
        venue: "TBS",
        match: "ILCC vs SECC",
      },
      {
        date: "08/02/2026",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "GCI vs SECC",
      },
      {
        date: "08/02/2026",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "FCC vs RSCC",
      },
      {
        date: "08/02/2026",
        day: "SUN",
        time: "10am",
        venue: "UNILAG",
        match: "RCC vs MRI",
      },

      {
        date: "15/02/2026",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "GCI vs ITCC",
      },
      {
        date: "15/02/2026",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "FGC vs SECC",
      },

      {
        date: "22/02/2026",
        day: "SUN",
        time: "10am",
        venue: "TBS",
        match: "FGC vs MRI",
      },
      {
        date: "22/02/2026",
        day: "SUN",
        time: "2pm",
        venue: "TBS",
        match: "RCC vs SECC",
      },
    ],
  };

  const getVenueSummary = (fixturesList) => {
    const venueCounts = {};
    fixturesList.forEach((fixture) => {
      const venue = (fixture.venue || "").toUpperCase();
      venueCounts[venue] = (venueCounts[venue] || 0) + 1;
    });
    return venueCounts;
  };

  const slides = [
    {
      title: "DECEMBER 2025",
      color: "from-blue-900 to-blue-700",
      fixtures: fixtures.december,
    },
    {
      title: "JANUARY 2026",
      color: "from-purple-900 to-purple-700",
      fixtures: fixtures.january,
    },
    {
      title: "FEBRUARY 2026",
      color: "from-red-900 to-red-700",
      fixtures: fixtures.february,
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevslide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlideData = slides[currentSlide];
  // remove RESERVE entries first
  const baseFixtures = currentSlideData.fixtures.filter(
    (f) => (f.match || "").toUpperCase() !== "RESERVE"
  );

  // filter state (arrays for simplicity)
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  // compute unique teams from current slide fixtures (exclude RESERVE)
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
      selectedVenues.length > 0 &&
      !selectedVenues.includes((f.venue || "").toUpperCase())
    )
      return false;
    if (
      selectedDays.length > 0 &&
      !selectedDays.includes((f.day || "").toUpperCase())
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

  const venueSummary = getVenueSummary(baseFixtures);
  const totalGames = displayedFixtures.length;

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`w-full bg-gradient-to-br ${currentSlideData.color} rounded-lg p-4`}>
          {/* Top bar with title, nav and summary */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-start gap-4 w-full md:w-auto">
              <img
                src="/ccc_logo.png"
                alt="brands"
                className="sm:w-[10rem] sm:h-[5rem] w-[4rem] h-[3rem]"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  {currentSlideData.title}
                </h1>
                <div className="text-sm text-yellow-200">
                  CLUB CRICKET COMMITTEE • PREMIER LEAGUE FIXTURES
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              {/* Summary: show per-venue chips when no filters; otherwise show filtered total only */}
              <div className="flex items-center gap-2 flex-wrap">
                {selectedTimes.length > 0 ||
                selectedVenues.length > 0 ||
                selectedDays.length > 0 ||
                selectedTeam ? (
                  <div className="px-3 py-1 rounded-md font-semibold text-sm bg-white/20 text-white">
                    Filtered: {totalGames} {totalGames === 1 ? "game" : "games"}
                  </div>
                ) : (
                  <>
                    {Object.entries(venueSummary).map(([venue, count]) => (
                      <div
                        key={venue}
                        className={`px-3 py-1 rounded-md font-semibold text-sm ${
                          venue === "UNILAG"
                            ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                            : venue === "TBS"
                            ? "bg-blue-100 text-blue-800 border border-blue-200"
                            : "bg-white text-gray-800"
                        }`}>
                        {venue}: {count}
                      </div>
                    ))}
                    <div className="px-3 py-1 rounded-md font-semibold text-sm bg-white/20 text-white">
                      Total: {baseFixtures.length}
                    </div>
                  </>
                )}
              </div>

              {/* Navigation moved to top bar to avoid scroll overlap */}
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button
                  onClick={prevslide}
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
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedVenues.includes("UNILAG")}
                    onChange={() =>
                      toggle(selectedVenues, setSelectedVenues, "UNILAG")
                    }
                  />
                  <span className="ml-1">UNILAG</span>
                </label>
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedVenues.includes("TBS")}
                    onChange={() =>
                      toggle(selectedVenues, setSelectedVenues, "TBS")
                    }
                  />
                  <span className="ml-1">TBS</span>
                </label>
              </div>

              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedDays.includes("SAT")}
                    onChange={() =>
                      toggle(selectedDays, setSelectedDays, "SAT")
                    }
                  />
                  <span className="ml-1">SAT</span>
                </label>
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedDays.includes("SUN")}
                    onChange={() =>
                      toggle(selectedDays, setSelectedDays, "SUN")
                    }
                  />
                  <span className="ml-1">SUN</span>
                </label>
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
                  setSelectedVenues([]);
                  setSelectedDays([]);
                  setSelectedTeam("");
                }}
                className="text-sm px-3 py-1 rounded bg-white/20 text-white">
                Clear
              </button>
              <button
                onClick={() => {
                  setSelectedTimes([]);
                  setSelectedVenues([]);
                  setSelectedDays([]);
                  setSelectedTeam("");
                }}
                className={`text-sm px-3 py-1 rounded ${
                  selectedTimes.length === 0 &&
                  selectedVenues.length === 0 &&
                  selectedDays.length === 0
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-white/10 text-white"
                }`}>
                All
              </button>
            </div>
          </div>

          {/* Grid of fixtures - denser layout */}
          <div className="bg-white rounded-md p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {displayedFixtures.map((fixture, index) => (
                <div
                  key={index}
                  className={`border rounded-md p-3 transition hover:shadow-md ${
                    fixture.venue === "UNILAG"
                      ? "bg-yellow-50 border-yellow-200"
                      : fixture.venue === "TBS"
                      ? "bg-blue-50 border-blue-200"
                      : "bg-white"
                  }`}>
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
          <div className="mt-4 text-sm text-white/90">
            Season 2025/2026 • Super 6 Fixtures Begin 14th March 2026
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

export default PremierLeagueFixtures;
