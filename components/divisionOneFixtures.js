"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DivisionOneFixtures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const fixtures = {
    november: [
      {
        date: "22/11/2025",
        day: "Sat",
        time: "10am",
        venue: "UNILAG",
        match: "ILCC2 vs LCC",
        group: "A",
      },
      {
        date: "22/11/2025",
        day: "sat",
        time: "2pm",
        venue: "UNILAG",
        match: "IMCC vs LCCC",
        group: "B",
      },
      {
        date: "23/11/2025",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "TACC vs LACC",
        group: "B",
      },
      {
        date: "23/11/2025",
        day: "Sun",
        time: "2pm",
        venue: "UNILAG",
        match: "RBCC vs LCC",
        group: "A",
      },
      {
        date: "23/11/2025",
        day: "Sun",
        time: "10am",
        venue: "CMS",
        match: "LTSK vs ILCC2",
        group: "A",
      },
      {
        date: "23/11/2025",
        day: "Sun",
        time: "2pm",
        venue: "CMS",
        match: "TCC vs HPCC",
        group: "B",
      },
      {
        date: "29/11/2025",
        day: "Sat",
        time: "10am",
        venue: "UNILAG",
        match: "GCU vs SGCC",
        group: "A",
      },
      {
        date: "30/11/2025",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "LRCC vs LTSK",
        group: "A",
      },
      {
        date: "30/11/2025",
        day: "Sun",
        time: "2pm",
        venue: "UNILAG",
        match: "IMCC vs SECC2",
        group: "B",
      },
      {
        date: "30/11/2025",
        day: "Sun",
        time: "10am",
        venue: "CMS",
        match: "TACC vs HPCC",
        group: "B",
      },
      {
        date: "30/11/2025",
        day: "Sun",
        time: "2pm",
        venue: "CMS",
        match: "LACC vs LCCC",
        group: "B",
      },
    ],
    december: [
      {
        date: "07/12/2025",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "SGCC vs RBCC",
        group: "A",
      },
      {
        date: "07/12/2025",
        day: "Sun",
        time: "2pm",
        venue: "UNILAG",
        match: "LRCC vs ILCC2",
        group: "A",
      },
      {
        date: "07/12/2025",
        day: "Sun",
        time: "10am",
        venue: "CMS",
        match: "TCC vs LACC",
        group: "B",
      },
      {
        date: "07/12/2025",
        day: "Sun",
        time: "2pm",
        venue: "CMS",
        match: "TACC vs SECC2",
        group: "B",
      },
      {
        date: "13/12/2025",
        day: "Sat",
        time: "10am",
        venue: "UNILAG",
        match: "IMCC vs HPCC",
        group: "B",
      },
      {
        date: "14/12/2025",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "SECC2 vs LACC",
        group: "B",
      },
      {
        date: "14/12/2025",
        day: "Sun",
        time: "10am",
        venue: "CMS",
        match: "TACC vs LCCC",
        group: "B",
      },
      {
        date: "14/12/2025",
        day: "Sun",
        time: "2pm",
        venue: "CMS",
        match: "LCC vs SGCC",
        group: "A",
      },
      {
        date: "21/12/2025",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "LTSK vs RBCC",
        group: "A",
      },
      {
        date: "21/12/2025",
        day: "Sun",
        time: "10am",
        venue: "CMS",
        match: "LRCC vs SGCC",
        group: "A",
      },
      {
        date: "21/12/2025",
        day: "Sun",
        time: "2pm",
        venue: "CMS",
        match: "IMCC vs LACC",
        group: "B",
      },
    ],
    january: [
      {
        date: "04/01/2026",
        day: "Sun",
        time: "2pm",
        venue: "UNILAG",
        match: "SGCC vs LTSK",
        group: "A",
      },
      {
        date: "10/01/2026",
        day: "Sat",
        time: "10am",
        venue: "UNILAG",
        match: "GCU vs ILCC2",
        group: "A",
      },
      {
        date: "11/01/2026",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "IMCC vs TCC",
        group: "B",
      },
      {
        date: "11/01/2026",
        day: "Sun",
        time: "2pm",
        venue: "UNILAG",
        match: "GCU vs LRCC",
        group: "A",
      },
      {
        date: "11/01/2026",
        day: "Sun",
        time: "2pm",
        venue: "CMS",
        match: "SECC2 vs HPCC",
        group: "B",
      },
      {
        date: "18/01/2026",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "LCCC vs TCC",
        group: "B",
      },
      {
        date: "18/01/2026",
        day: "Sun",
        time: "2pm",
        venue: "UNILAG",
        match: "IMCC vs TACC",
        group: "B",
      },
      {
        date: "18/01/2026",
        day: "Sun",
        time: "10am",
        venue: "CMS",
        match: "RBCC vs ILCC2",
        group: "A",
      },
      {
        date: "18/01/2026",
        day: "Sun",
        time: "2pm",
        venue: "CMS",
        match: "LCC vs LTSK",
        group: "A",
      },
      {
        date: "24/01/2026",
        day: "Sat",
        time: "10am",
        venue: "UNILAG",
        match: "GCU vs LCC",
        group: "A",
      },
      {
        date: "24/01/2026",
        day: "sat",
        time: "2pm",
        venue: "UNILAG",
        match: "HPCC vs LCCC",
        group: "B",
      },
      {
        date: "25/01/2026",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "HPCC vs LACC",
        group: "B",
      },
      {
        date: "25/01/2026",
        day: "Sun",
        time: "2pm",
        venue: "UNILAG",
        match: "TACC vs TCC",
        group: "B",
      },
      {
        date: "25/01/2026",
        day: "Sun",
        time: "10am",
        venue: "CMS",
        match: "LCCC vs SECC2",
        group: "B",
      },
      {
        date: "25/01/2026",
        day: "Sun",
        time: "2pm",
        venue: "CMS",
        match: "RBCC vs LRCC",
        group: "A",
      },
      {
        date: "31/01/2026",
        day: "Sat",
        time: "10am",
        venue: "UNILAG",
        match: "ILCC2 vs SGCC",
        group: "A",
      },
      {
        date: "01/02/2026",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "GCU vs LTSK",
        group: "A",
      },
    ],
    february: [
      {
        date: "08/02/2026",
        day: "Sun",
        time: "10am",
        venue: "UNILAG",
        match: "TCC vs SECC2",
        group: "B",
      },
      {
        date: "08/02/2026",
        day: "Sun",
        time: "10am",
        venue: "CMS",
        match: "GCU vs RBCC",
        group: "A",
      },
      {
        date: "08/02/2026",
        day: "Sun",
        time: "2pm",
        venue: "CMS",
        match: "LRCC vs LCC",
        group: "A",
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
      title: "NOVEMBER 2025",
      color: "from-cyan-800 to-cyan-600",
      fixtures: fixtures.november,
    },
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
  const [selectedGroups, setSelectedGroups] = useState([]);

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
      !selectedDays.some((day) => (f.day || "").toUpperCase() === day)
    )
      return false;

    if (
      selectedGroups.length > 0 &&
      !selectedGroups.includes((f.group || "").toUpperCase())
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
                  • DIVISION ONE FIXTURES
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              {/* Summary: show per-venue chips when no filters; otherwise show filtered total only */}
              <div className="flex items-center gap-2 flex-wrap">
                {selectedTimes.length > 0 ||
                selectedVenues.length > 0 ||
                selectedDays.length > 0 ||
                selectedGroups.length > 0 ||
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
                            : venue === "CMS"
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
                    checked={selectedVenues.includes("CMS")}
                    onChange={() =>
                      toggle(selectedVenues, setSelectedVenues, "CMS")
                    }
                  />
                  <span className="ml-1">CMS</span>
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
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedGroups.includes("A")}
                    onChange={() =>
                      toggle(selectedGroups, setSelectedGroups, "A")
                    }
                  />
                  <span className="ml-1">Group A</span>
                </label>
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedGroups.includes("B")}
                    onChange={() =>
                      toggle(selectedGroups, setSelectedGroups, "B")
                    }
                  />
                  <span className="ml-1">Group B</span>
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
                  setSelectedGroups([]);
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
                  setSelectedGroups([]);
                  setSelectedTeam("");
                }}
                className={`text-sm px-3 py-1 rounded ${
                  selectedTimes.length === 0 &&
                  selectedVenues.length === 0 &&
                  selectedDays.length === 0 &&
                  selectedGroups.length === 0 &&
                  !selectedTeam
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
                      : fixture.venue === "CMS"
                      ? "bg-blue-50 border-blue-200"
                      : "bg-white"
                  }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold text-gray-600">
                      {fixture.day}
                    </div>
                    <div className="text-xs text-gray-500">{fixture.date}</div>
                  </div>
                  <div className="text-sm flex flex-col font-bold text-gray-800 text-center mb-2">
                    {fixture.match}
                    {fixture.group && (
                      <span
                        className={`rounded font-semibold text-xs ${
                          fixture.group.toUpperCase() === "A"
                            ? " text-green-700"
                            : " text-purple-700"
                        }`}>
                        Group {fixture.group}
                      </span>
                    )}
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
            Season 2025/2026 • Super 4 to begin 14th February 2026
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

export default DivisionOneFixtures;
