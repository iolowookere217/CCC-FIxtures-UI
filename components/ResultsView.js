"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getFixtureById } from "../data/fixtures";

const ResultsView = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const matchId = searchParams.get("id") || "";
  const match = searchParams.get("match") || "TBD vs TBD";
  const date = searchParams.get("date") || "";
  const venue = searchParams.get("venue") || "";
  const division = searchParams.get("division") || "";

  // Get fixture data from centralized data
  const fixture = matchId ? getFixtureById(matchId) : null;
  const result = fixture?.result || null;

  // Parse match to get teams
  const teams = match.split(" vs ").map((t) => t.trim());
  const team1 = teams[0] || "Team 1";
  const team2 = teams[1] || "Team 2";

  // Determine winner/loser for score colors
  const hasScores = result?.team1Score && result?.team2Score;
  const team1IsWinner = result?.winner === team1;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 p-6">
      <div className="mx-auto max-w-5xl">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6 transition">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Fixtures</span>
        </button>

        {/* Results Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-400">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Match Result</h1>
                <p className="text-green-100">
                  {division} • {date} • {venue}
                </p>
              </div>
              {matchId && (
                <div className="text-xs text-green-200 bg-green-800/30 px-2 py-1 rounded">
                  {matchId}
                </div>
              )}
            </div>
          </div>

          {/* Match Details */}
          <div className="p-8">
            {/* Match Info Card */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{match}</h2>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-gray-600 font-semibold">{team1}</p>
                  <p
                    className={`text-2xl font-bold ${
                      hasScores
                        ? team1IsWinner
                          ? "text-green-600"
                          : "text-red-600"
                        : "text-gray-800"
                    }`}>
                    {result?.team1Score || "--"}
                  </p>
                </div>
                <div className="text-gray-400 text-2xl font-bold">vs</div>
                <div className="text-center">
                  <p className="text-gray-600 font-semibold">{team2}</p>
                  <p
                    className={`text-2xl font-bold ${
                      hasScores
                        ? team1IsWinner
                          ? "text-red-600"
                          : "text-green-600"
                        : "text-gray-800"
                    }`}>
                    {result?.team2Score || "--"}
                  </p>
                </div>
              </div>
            </div>

            {/* Winner Banner */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-6 mb-8 text-center shadow-lg">
              <h2 className="text-3xl font-bold mb-2">
                {result?.winner || "--"}
              </h2>
              <p className="text-xl">
                {result?.winMargin ? `Wins by ${result.winMargin}` : "--"}
              </p>
              {hasScores && result?.winner && (
                <p className="text-green-100 text-sm mt-2">
                  {team1IsWinner
                    ? `Defended their total of ${result.team1Score}, restricting ${team2} to ${result.team2Score}.`
                    : `Chased down ${team1}'s total of ${result.team1Score}, finishing at ${result.team2Score}.`}
                </p>
              )}
            </div>

            {/* Player of the Match */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-purple-900 mb-1 flex items-center gap-2">
                    <span className="text-2xl">⭐</span>
                    Player of the Match
                  </h3>
                  <p className="text-3xl font-bold text-purple-700 mt-2">
                    {result?.playerOfTheMatch?.name || "--"}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {result?.playerOfTheMatch?.team || "--"}
                  </p>
                </div>
                <div className="text-4xl">🏆</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-gray-700 font-semibold text-center">
                  {result?.playerOfTheMatch?.performance || "--"}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Top Scorer */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-blue-900 mb-1">
                      Top Scorer
                    </h3>
                    <p className="text-2xl font-bold text-blue-700">
                      {result?.topScorer?.name || "--"}
                    </p>
                  </div>
                  <div className="text-4xl">🏏</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 font-semibold">
                    Anchored the innings
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    {result?.topScorer?.runs !== undefined
                      ? `${result.topScorer.runs} runs`
                      : "--"}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {result?.topScorer?.balls !== undefined
                      ? `from ${result.topScorer.balls} balls`
                      : "--"}
                  </p>
                </div>
              </div>

              {/* Wicket Taker */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-orange-900 mb-1">
                      Wicket Taker
                    </h3>
                    <p className="text-2xl font-bold text-orange-700">
                      {result?.wicketTaker?.name || "--"}
                    </p>
                  </div>
                  <div className="text-4xl">🎯</div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-700 font-semibold">
                    Dismantled the opposition
                  </p>
                  <p className="text-3xl font-bold text-orange-600">
                    {result?.wicketTaker?.wickets !== undefined
                      ? `${result.wicketTaker.wickets} wickets`
                      : "--"}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {result?.wicketTaker?.runs !== undefined
                      ? `for only ${result.wicketTaker.runs} runs`
                      : "--"}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">Powered by Sterling Bank</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
