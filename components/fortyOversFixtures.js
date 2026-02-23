"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { fortyOversFixtures } from "../data/fixtures";

const FortyOversFixtures = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const fixtures = fortyOversFixtures;

  const groupStageFixtures = [
    ...fixtures.groupA,
    ...fixtures.groupB,
    ...fixtures.groupC,
    ...fixtures.groupD,
  ];

  const knockoutFixtures = [...fixtures.semiFinals, ...fixtures.finals];

  const slides = [
    {
      title: "GROUP STAGE",
      color: "from-indigo-900 to-indigo-700",
      fixtures: groupStageFixtures,
      hasGroups: true,
    },
    {
      title: "SEMI FINALS & FINAL",
      color: "from-violet-900 to-violet-700",
      fixtures: knockoutFixtures,
      hasGroups: false,
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlideData = slides[currentSlide];

  // filter state
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedVenues, setSelectedVenues] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  const toggle = (list, setList, value) => {
    if (list.includes(value)) setList(list.filter((v) => v !== value));
    else setList([...list, value]);
  };

  const baseFixtures = currentSlideData.fixtures;

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

  const displayedFixtures = baseFixtures.filter((f) => {
    if (
      selectedGroups.length > 0 &&
      currentSlideData.hasGroups &&
      !selectedGroups.includes(f.group)
    )
      return false;
    if (
      selectedVenues.length > 0 &&
      !selectedVenues.includes((f.venue || "").toUpperCase())
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

  // Venue counts
  const unilagCount = baseFixtures.filter(
    (f) => (f.venue || "").toUpperCase() === "UNILAG"
  ).length;
  const tbsCount = baseFixtures.filter(
    (f) => (f.venue || "").toUpperCase() === "TBS"
  ).length;

  const groupColors = {
    A: "bg-green-100 text-green-800 border-green-200",
    B: "bg-purple-100 text-purple-800 border-purple-200",
    C: "bg-orange-100 text-orange-800 border-orange-200",
    D: "bg-rose-100 text-rose-800 border-rose-200",
  };

  const cardColors = {
    UNILAG: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100",
    TBS: "bg-blue-50 border-blue-200 hover:bg-blue-100",
  };

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
                  • 40 OVERS LEAGUE
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              {/* Summary */}
              <div className="flex items-center gap-2 flex-wrap">
                {selectedGroups.length > 0 ||
                selectedVenues.length > 0 ||
                selectedTeam ? (
                  <div className="px-3 py-1 rounded-md font-semibold text-sm bg-white/20 text-white">
                    Filtered: {totalGames} {totalGames === 1 ? "game" : "games"}
                  </div>
                ) : (
                  <>
                    {unilagCount > 0 && (
                      <div className="px-3 py-1 rounded-md font-semibold text-sm bg-yellow-100 text-yellow-800 border border-yellow-200">
                        UNILAG: {unilagCount}
                      </div>
                    )}
                    {tbsCount > 0 && (
                      <div className="px-3 py-1 rounded-md font-semibold text-sm bg-blue-100 text-blue-800 border border-blue-200">
                        TBS: {tbsCount}
                      </div>
                    )}
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

              {/* Group filters (only for group stage) */}
              {currentSlideData.hasGroups && (
                <div className="flex items-center gap-2">
                  {["A", "B", "C", "D"].map((group) => (
                    <label
                      key={group}
                      className="flex items-center gap-1 text-sm text-white">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={selectedGroups.includes(group)}
                        onChange={() =>
                          toggle(selectedGroups, setSelectedGroups, group)
                        }
                      />
                      <span className="ml-1">Grp {group}</span>
                    </label>
                  ))}
                </div>
              )}

              {/* Venue filters */}
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
                  setSelectedGroups([]);
                  setSelectedVenues([]);
                  setSelectedTeam("");
                }}
                className="text-sm px-3 py-1 rounded bg-white/20 text-white">
                Clear
              </button>
              <button
                onClick={() => {
                  setSelectedGroups([]);
                  setSelectedVenues([]);
                  setSelectedTeam("");
                }}
                className={`text-sm px-3 py-1 rounded ${
                  selectedGroups.length === 0 &&
                  selectedVenues.length === 0 &&
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
              {displayedFixtures.map((fixture, index) => {
                const venueKey = (fixture.venue || "").toUpperCase();
                const cardColor =
                  cardColors[venueKey] ||
                  "bg-white border-gray-200 hover:bg-gray-50";

                return (
                  <div
                    key={fixture.id || index}
                    onClick={() => {
                      const params = new URLSearchParams({
                        id: fixture.id,
                        match: fixture.match,
                        date: fixture.date,
                        venue: fixture.venue,
                        division: "40 Overs League",
                      });
                      router.push(`/results?${params.toString()}`);
                    }}
                    className={`border rounded-md p-3 transition hover:shadow-md cursor-pointer ${cardColor}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-semibold text-gray-600">
                        {fixture.day}
                      </div>
                      <div className="text-xs text-gray-500">
                        {fixture.date}
                      </div>
                    </div>
                    <div className="text-sm flex flex-col font-bold text-gray-800 text-center mb-2">
                      {fixture.match}
                      {fixture.group && (
                        <span
                          className={`text-xs font-semibold mt-1 inline-block mx-auto px-2 py-0.5 rounded border ${
                            groupColors[fixture.group] ||
                            "bg-gray-100 text-gray-700"
                          }`}>
                          Group {fixture.group}
                        </span>
                      )}
                      {fixture.stage && (
                        <span className="text-xs font-semibold text-violet-700 mt-1">
                          {fixture.stage}
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
                        📍{" "}
                        <span className="font-medium">{fixture.venue}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
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
            Club Cricket Committee — 40 Overs League 2025/2026
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

export default FortyOversFixtures;
