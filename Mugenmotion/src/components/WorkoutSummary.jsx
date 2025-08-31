import React from "react";

function WorkoutSummary({ workouts }) {
    const totalWorkouts = workouts.length;
    const totalWeight = workouts.reduce((sum, w) => sum + Number(w.weight || 0), 0);
    const avgWeight = totalWorkouts > 0 ? (totalWeight / totalWorkouts).toFixed(1) : 0;

    return (
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white mb-6">
            <h2 className="text-2xl font-bold mb-4 text-neonPink drop-shadow-[0_0_10px_#ff6ec7]">
                Workout Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
                    <p className="text-lg font-semibold text-gray-300">Total Workouts</p>
                    <p className="text-3xl font-bold text-neonPink drop-shadow-[0_0_8px_#ff6ec7]">
                        {totalWorkouts}
                    </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
                    <p className="text-lg font-semibold text-gray-300">Total Weight</p>
                    <p className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_8px_#00e5ff]">
                        {totalWeight} kg
                    </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
                    <p className="text-lg font-semibold text-gray-300">Avg. Weight</p>
                    <p className="text-3xl font-bold text-green-400 drop-shadow-[0_0_8px_#39ff14]">
                        {avgWeight} kg
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WorkoutSummary;

