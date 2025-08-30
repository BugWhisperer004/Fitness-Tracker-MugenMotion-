import React, { useState } from "react";

export default function WorkoutLog({ onAddWorkout }) {
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!exercise || !sets || !reps || !weight) {
            alert("Please fill in all fields");
            return;
        }

        const newWorkout = {
            id: Date.now(),
            exercise,
            sets: parseInt(sets),
            reps: parseInt(reps),
            weight: parseFloat(weight),
            date: new Date().toLocaleString(),
        };

        onAddWorkout(newWorkout);

        // Reset form
        setExercise("");
        setSets("");
        setReps("");
        setWeight("");
    };

    return (
        <div className="bg-black text-white p-6 rounded-2xl shadow-lg max-w-md mx-auto">
            <h2 className="text-neonPink text-2xl font-bold mb-4">Log Workout</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Exercise"
                    value={exercise}
                    onChange={(e) => setExercise(e.target.value)}
                    className="p-2 rounded bg-gray-900 text-white border border-gray-700"
                />
                <input
                    type="number"
                    placeholder="Sets"
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                    className="p-2 rounded bg-gray-900 text-white border border-gray-700"
                />
                <input
                    type="number"
                    placeholder="Reps"
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                    className="p-2 rounded bg-gray-900 text-white border border-gray-700"
                />
                <input
                    type="number"
                    placeholder="Weight (kg)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="p-2 rounded bg-gray-900 text-white border border-gray-700"
                />
                <button
                    type="submit"
                    className="bg-neonPink text-black py-2 rounded-full font-semibold hover:bg-pink-500 transition"
                >
                    Add Workout
                </button>
            </form>
        </div>
    );
}
