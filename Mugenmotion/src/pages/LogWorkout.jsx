import React, { useState } from "react";
import ExerciseSearch from "../components/ExerciseSearch";

export default function LogWorkout({ onAddWorkout }) {
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!exercise.trim()) {
            setError("Please select or enter an exercise.");
            return;
        }
        if (!sets || sets <= 0) {
            setError("Please enter a valid number of sets.");
            return;
        }
        if (!reps || reps <= 0) {
            setError("Please enter a valid number of reps.");
            return;
        }

        const newWorkout = {
            exercise,
            sets: Number(sets),
            reps: Number(reps),
            weight: weight ? Number(weight) : 0,
            date: new Date().toISOString(),
        };

        onAddWorkout(newWorkout);

        // reset form
        setExercise("");
        setSets("");
        setReps("");
        setWeight("");
        setError("");
    };

    return (
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-md mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-neonPink">
                Log Workout
            </h2>

            {/* 🔍 Exercise Search Component */}
            <ExerciseSearch onSelectExercise={(name) => setExercise(name)} />

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                {error && (
                    <p className="text-red-400 font-medium text-sm">{error}</p>
                )}

                <div>
                    <label className="block mb-1">Exercise</label>
                    <input
                        type="text"
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}
                        placeholder="e.g. Bench Press"
                        className="w-full p-2 rounded-lg text-black"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Sets</label>
                    <input
                        type="number"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                        placeholder="e.g. 3"
                        className="w-full p-2 rounded-lg text-black"
                        required
                        min="1"
                    />
                </div>

                <div>
                    <label className="block mb-1">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        placeholder="e.g. 12"
                        className="w-full p-2 rounded-lg text-black"
                        required
                        min="1"
                    />
                </div>

                <div>
                    <label className="block mb-1">Weight (kg)</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="e.g. 50"
                        className="w-full p-2 rounded-lg text-black"
                        min="0"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-neonPink text-black font-bold py-2 px-4 rounded-lg hover:brightness-110 transition"
                >
                    Add Workout
                </button>
            </form>
        </div>
    );
}



