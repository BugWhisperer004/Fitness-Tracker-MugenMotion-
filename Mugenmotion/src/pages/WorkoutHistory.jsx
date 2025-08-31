import React from "react";

export default function WorkoutHistory({ workouts }) {
    return (
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4 text-neonPink drop-shadow-[0_0_10px_#ff6ec7]">
                Workout History
            </h2>

            {workouts.length === 0 ? (
                <p className="text-gray-400">No workouts logged yet.</p>
            ) : (
                <ul className="space-y-4">
                    {workouts.map((workout, index) => (
                        <li
                            key={index}
                            className="p-4 border border-gray-700 rounded-lg bg-gray-800"
                        >
                            <p className="font-semibold text-lg">
                                {workout.exercise}
                            </p>
                            <p className="text-sm text-gray-400">
                                {workout.sets} sets × {workout.reps} reps × {workout.weight} kg
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                {new Date(workout.date).toLocaleString()}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
