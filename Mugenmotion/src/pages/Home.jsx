import React from "react";
import ExerciseSearch from "../components/ExerciseSearch";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
            {/* Hero Section */}
            <h1 className="text-5xl font-bold mb-6 text-neonPink drop-shadow-[0_0_10px_#ff6ec7]">
                MugenMotion
            </h1>
            <p className="text-lg mb-8 text-white/80 text-center max-w-xl">
                Track your workouts, monitor progress, and stay motivated.
            </p>
            <button className="bg-neonPink text-black px-6 py-3 rounded-full font-semibold hover:bg-pink-500 transition drop-shadow-[0_0_10px_#ff6ec7]">
                Start Tracking
            </button>

            {/* Divider */}
            <div className="w-full h-px bg-white/20 my-12"></div>

            {/* Exercise Search */}
            <div className="w-full max-w-3xl">
                <h2 className="text-2xl font-semibold mb-4 text-neonPink">
                    🔎 Search Exercises
                </h2>
                <ExerciseSearch />
            </div>
        </div>
    );
}
