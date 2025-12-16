"use client";
import React, { useState } from "react";
import {
  Calendar,
  Play,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const WeeklyReports = ({ division }) => {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mock data for weekly reports - in production, this would come from a database
  const weeklyReports = {
    "Premier League": [
      {
        id: 1,
        week: "Week 1",
        date: "06-07 Dec 2025",
        videoUrl: "/report.mp4",
        thumbnail: "/weekly-report-2.jpeg",
      },
      {
        id: 2,
        week: "Week 2",
        date: "13-14 Dec 2025",
        videoUrl: "/report.mp4",
        thumbnail: "/weekly-report-2.jpeg",
      },
      {
        id: 3,
        week: "Week 3",
        date: "20-21 Dec 2025",
        videoUrl: "/report.mp4",
        thumbnail: "/weekly-report-2.jpeg",
      },
      {
        id: 4,
        week: "Week 4",
        date: "28 Dec 2025",
        videoUrl: "/report.mp4",
        thumbnail: "/weekly-report-2.jpeg",
      },
    ],
    "Division One": [
      {
        id: 1,
        week: "Week 1",
        date: "22-23 Nov 2025",
        videoUrl: "/report.mp4",
        thumbnail: "/weekly-report-2.jpeg",
      },
      {
        id: 2,
        week: "Week 2",
        date: "29-30 Nov 2025",
        videoUrl: "/report.mp4",
        thumbnail: "/weekly-report-2.jpeg",
      },
      {
        id: 3,
        week: "Week 3",
        date: "07 Dec 2025",
        videoUrl: "/report.mp4",
        thumbnail: "/weekly-report-2.jpeg",
      },
      {
        id: 4,
        week: "Week 4",
        date: "13-14 Dec 2025",
        videoUrl: "/report.mp4",
        thumbnail: "/weekly-report-2.jpeg",
      },
    ],
  };

  const reports = weeklyReports[division] || [];

  // Slider configuration - show 3 cards on desktop, 2 on tablet, 1 on mobile
  const cardsPerView = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, reports.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-0">
                <h1 className="sm:text-4xl text-2xl font-bold text-white mb-2">
                  Weekly Reports
                </h1>
                <p className="text-blue-100 text-lg">{division}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-5 h-5" />
              <span className="text-sm">Season 2025/2026</span>
            </div>
          </div>
        </div>

        {/* Video Player Section */}
        {selectedWeek && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8 border-4 border-purple-400">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    {selectedWeek.week} - {selectedWeek.date}
                  </h2>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-purple-100 text-sm">{division}</p>
                <a
                  href={selectedWeek.videoUrl}
                  download
                  className="flex items-center gap-2 bg-white text-purple-600 px-2 py-1 rounded-lg hover:bg-purple-50 transition">
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="relative   bg-black rounded-lg overflow-hidden">
                <video
                  controls
                  className="w-full h-full"
                  poster={selectedWeek.thumbnail}>
                  <source src={selectedWeek.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Weekly Reports Slider */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-purple-600" />
              Available Reports
            </h2>
            {/* Navigation Controls */}
            {reports.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-colors focus:outline-none ${
                    currentSlide === 0
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === reports.length - 1}
                  className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-colors focus:outline-none ${
                    currentSlide === reports.length - 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {reports.length > 0 ? (
            <>
              {/* Slider Container */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out gap-6"
                  style={{
                    transform: `translateX(-${currentSlide * (100 / 3)}%)`,
                  }}>
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                      <div
                        onClick={() => setSelectedWeek(report)}
                        className={`border-2 rounded-xl p-6 cursor-pointer transition transform hover:scale-105 h-full ${
                          selectedWeek?.id === report.id
                            ? "border-purple-500 bg-purple-50 shadow-lg"
                            : "border-gray-200 bg-white hover:border-purple-300 hover:shadow-md"
                        }`}>
                        <div className="relative mb-4">
                          <img
                            src={report.thumbnail}
                            alt={report.week}
                            className="w-full h-40 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg hover:bg-black/40 transition">
                            <div className="bg-white rounded-full p-3 shadow-lg">
                              <Play className="w-8 h-8 text-purple-600" />
                            </div>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {report.week}
                        </h3>
                        <p className="text-gray-600 text-sm flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {report.date}
                        </p>
                        <div className="mt-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                              selectedWeek?.id === report.id
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-600"
                            }`}>
                            {selectedWeek?.id === report.id
                              ? "Now Playing"
                              : "Watch"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center justify-center gap-2 mt-6">
                {reports.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index
                        ? "w-8 bg-purple-600"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📹</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Reports Available Yet
              </h3>
              <p className="text-gray-500">
                Weekly reports will be added as the season progresses.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Powered by Cricket Champions Cup • All videos are property of CCC
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReports;
