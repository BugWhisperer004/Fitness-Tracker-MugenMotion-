import React from "react";

function WorkoutSummary({ workouts }) {
    if (workouts.length === 0) {
        return (
            <div className="bg-gray-900 text-gray-400 p-4 rounded-xl mb-6">
                No workouts yet. Log your first one to see your stats!
            </div>
        );
    }

    // Total workouts
    const totalWorkouts = workouts.length;

    // Group by date
    const workoutsByDate = workouts.reduce((acc, workout) => {
        const date = workout.date || new Date().toLocaleDateString();
        acc[date] = (acc[date] || 0) + 1;
        return acc;
    }, {});

    // Most recent date
    const mostRecentDate = workouts[0]?.date || "N/A";

    return (
        <div className="bg-gray-900 text-white p-4 rounded-xl shadow mb-6">
            <h2 className="text-lg font-semibold mb-3">📊 Workout Summary</h2>
            <ul className="space-y-2 text-gray-300">
                <li>Total Workouts: <span className="text-white">{totalWorkouts}</span></li>
                <li>
                    Workouts Logged On {Object.keys(workoutsByDate).length} Day(s)
                </li>
                <li>Most Recent Workout: <span className="text-white">{mostRecentDate}</span></li>
            </ul>
        </div>
    );
}

export default WorkoutSummary;
