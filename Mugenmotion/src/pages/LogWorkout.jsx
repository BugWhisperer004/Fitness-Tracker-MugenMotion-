import React from "react";
import ExerciseSearch from "../components/ExerciseSearch";

export default function LogWorkout() {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-neonPink mb-6">Log Your Workout</h1>
            <p className="text-white mb-4">
                Search for exercises and add them to your workout log.
            </p>
            <ExerciseSearch />
        </div>
    );
}


