import React from "react";

export default function WorkoutHistory({ workouts }) {
    return (
        <div className="bg-black text-white p-6 rounded-2xl shadow-lg max-w-2xl mx-auto mt-6">
            <h2 className="text-neonPink text-2xl font-bold mb-4">Workout History</h2>
            {workouts.length === 0 ? (
                <p className="text-gray-400">No workouts logged yet.</p>
            ) : (
                <ul className="space-y-3">
                    {workouts.map((workout) => (
                        <li
                            key={workout.id}
                            className="bg-gray-900 p-4 rounded-lg border border-gray-700"
                        >
                            <p className="font-semibold">{workout.exercise}</p>
                            <p>
                                {workout.sets} sets × {workout.reps} reps × {workout.weight} kg
                            </p>
                            <span className="text-sm text-gray-400">{workout.date}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
