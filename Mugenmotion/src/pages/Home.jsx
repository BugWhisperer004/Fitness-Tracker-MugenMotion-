import React from "react";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
            <h1 className="text-5xl font-bold mb-6 text-neonPink">
                MugenMotion
            </h1>
            <p className="text-lg mb-8 text-white/80 text-center max-w-xl">
                Track your workouts, monitor progress, and stay motivated.
            </p>
            <button className="bg-neonPink text-black px-6 py-3 rounded-full font-semibold hover:bg-pink-500 transition">
                Start Tracking
            </button>
        </div>
    );
}
