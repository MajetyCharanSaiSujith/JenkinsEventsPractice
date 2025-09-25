import React from "react";

function Home() {
  return (
    <div className="home bg-orange-50 min-h-screen flex flex-col">
      {/* ✅ Hero Section */}
      <section className="hero flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16">
        {/* Text Content */}
        <div className="hero-text max-w-xl mb-10 md:mb-0">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">
            Welcome to EventExpress 🎉
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Your smart platform to manage, organize, and explore amazing events.
          </p>

          <div className="flex space-x-4">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-700 transition">
              View Events
            </button>
            <button className="bg-white text-orange-600 border-2 border-orange-600 px-6 py-3 rounded-lg shadow-md hover:bg-orange-100 transition">
              Add Event
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
            alt="Event Illustration"
            className="w-72 md:w-96"
          />
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="features grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 py-12">
        <div className="feature-card bg-white shadow-md rounded-lg p-6 text-center border-t-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">📅 Event Scheduling</h3>
          <p className="text-gray-600">
            Easily create and manage event schedules with start and end dates.
          </p>
        </div>

        <div className="feature-card bg-white shadow-md rounded-lg p-6 text-center border-t-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">📍 Venue Management</h3>
          <p className="text-gray-600">
            Keep all your venues organized and linked with events.
          </p>
        </div>

        <div className="feature-card bg-white shadow-md rounded-lg p-6 text-center border-t-4 border-orange-500">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">📊 Insights</h3>
          <p className="text-gray-600">
            Track your events and analyze participation trends effectively.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
