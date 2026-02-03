"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { womensLeagueFixtures } from "../data/fixtures";

const WomensLeagueFixtures = () => {
  const router = useRouter();

  const fixtures = womensLeagueFixtures;

  const allFixtures = [
    ...fixtures.round1,
    ...fixtures.round2,
    ...fixtures.round3,
  ];

  // Filter state
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [selectedRounds, setSelectedRounds] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  // Compute unique teams
  const uniqueTeams = Array.from(
    new Set(
      allFixtures.flatMap((f) =>
        (f.match || "")
          .split(/vs/i)
          .map((s) => s.trim())
          .filter(Boolean)
      )
    )
  ).sort();

  const toggle = (list, setList, value) => {
    if (list.includes(value)) setList(list.filter((v) => v !== value));
    else setList([...list, value]);
  };

  const normTime = (t) => (t || "").toLowerCase().replace(/\s+/g, "");

  const displayedFixtures = allFixtures.filter((f) => {
    if (selectedTimes.length > 0 && !selectedTimes.includes(normTime(f.time)))
      return false;
    if (selectedRounds.length > 0 && !selectedRounds.includes(f.round))
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
  const hasFilters =
    selectedTimes.length > 0 || selectedRounds.length > 0 || selectedTeam;

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full bg-gradient-to-br from-pink-600 to-pink-900 rounded-lg p-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4">
            <div className="flex items-start gap-4 w-full md:w-auto">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                  FEBRUARY 2026
                </h1>
                <div className="text-sm text-yellow-200">
                  • WOMEN&apos;S LEAGUE FIXTURES
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2 flex-wrap">
                {hasFilters ? (
                  <div className="px-3 py-1 rounded-md font-semibold text-sm bg-white/20 text-white">
                    Filtered: {totalGames} {totalGames === 1 ? "game" : "games"}
                  </div>
                ) : (
                  <>
                    <div className="px-3 py-1 rounded-md font-semibold text-sm bg-yellow-100 text-yellow-800 border border-yellow-200">
                      UNILAG: {allFixtures.length}
                    </div>
                    <div className="px-3 py-1 rounded-md font-semibold text-sm bg-white/20 text-white">
                      Total: {allFixtures.length}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* League Info Banner */}
          <div className="bg-white/10 rounded-md p-3 mb-4">
            <div className="text-white text-sm">
              <span className="font-semibold">League Structure:</span> 4 teams •
              Each team plays 3 matches (once against every other team) • 6
              total matches • Top two teams advance to the final
            </div>
          </div>

          {/* Filter panel */}
          <div className="bg-white/5 rounded-md p-3 mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="text-sm font-semibold text-white/90">Filters</div>

              {/* Time filters */}
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

              {/* Round filters */}
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedRounds.includes(1)}
                    onChange={() =>
                      toggle(selectedRounds, setSelectedRounds, 1)
                    }
                  />
                  <span className="ml-1">Round 1</span>
                </label>
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedRounds.includes(2)}
                    onChange={() =>
                      toggle(selectedRounds, setSelectedRounds, 2)
                    }
                  />
                  <span className="ml-1">Round 2</span>
                </label>
                <label className="flex items-center gap-1 text-sm text-white">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedRounds.includes(3)}
                    onChange={() =>
                      toggle(selectedRounds, setSelectedRounds, 3)
                    }
                  />
                  <span className="ml-1">Round 3</span>
                </label>
              </div>

              {/* Team filter */}
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
                  setSelectedRounds([]);
                  setSelectedTeam("");
                }}
                className="text-sm px-3 py-1 rounded bg-white/20 text-white">
                Clear
              </button>
              <button
                onClick={() => {
                  setSelectedTimes([]);
                  setSelectedRounds([]);
                  setSelectedTeam("");
                }}
                className={`text-sm px-3 py-1 rounded ${
                  !hasFilters
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-white/10 text-white"
                }`}>
                All
              </button>
            </div>
          </div>

          {/* Grid of fixtures */}
          <div className="bg-white rounded-md p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {displayedFixtures.map((fixture, index) => (
                <div
                  key={fixture.id || index}
                  onClick={() => {
                    const params = new URLSearchParams({
                      id: fixture.id,
                      match: fixture.match,
                      date: fixture.date,
                      venue: fixture.venue,
                      division: "Women's League",
                    });
                    router.push(`/results?${params.toString()}`);
                  }}
                  className="border rounded-md p-4 transition hover:shadow-md cursor-pointer bg-yellow-100 border-yellow-200 hover:bg-yellow-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold text-gray-600">
                      {fixture.day}
                    </div>
                    <div className="text-xs text-gray-500">{fixture.date}</div>
                  </div>
                  <div className="text-sm flex flex-col font-bold text-gray-800 text-center mb-2">
                    {fixture.match}
                    <span className="rounded font-semibold text-xs text-pink-700">
                      Round {fixture.round}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="inline-flex items-center gap-2">
                      <span className="bg-gray-200 px-2 py-0.5 rounded">
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

          <div className="mt-3 w-full bg-red-500">
            <img
              src="/brand1.png"
              alt="brands"
              className="w-full object-fill opacity-95"
            />
          </div>
          <div className="mt-4 text-sm text-white/85">
            Season 2025/2026 • Women&apos;s League • Top two teams advance to
            the final
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensLeagueFixtures;
