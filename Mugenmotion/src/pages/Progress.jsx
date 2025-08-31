import React from "react";
import WorkoutSummary from "../components/WorkoutSummary";
import ProgressChart from "../components/ProgressChart";

export default function Progress({ workouts }) {
    return (
        <div className="p-6 bg-gray-950 min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-6 text-center text-neonPink drop-shadow-[0_0_10px_#ff6ec7]">
                Progress Dashboard
            </h1>

            {/* Workout Summary Section */}
            <div className="mb-8">
                <WorkoutSummary workouts={workouts} />
            </div>

            {/* Progress Chart Section */}
            <div>
                <ProgressChart workouts={workouts} />
            </div>
        </div>
    );
}

