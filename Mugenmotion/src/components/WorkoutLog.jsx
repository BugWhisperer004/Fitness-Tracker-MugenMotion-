import React, { useState } from "react";
import ExerciseSearch from "./ExerciseSearch";

export default function WorkoutLog({ addWorkout }) {
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!exercise || exercise.trim().length < 2) {
            newErrors.exercise = "Please enter a valid exercise name.";
        }
        if (!sets || sets <= 0) {
            newErrors.sets = "Sets must be greater than 0.";
        }
        if (!reps || reps <= 0) {
            newErrors.reps = "Reps must be greater than 0.";
        }
        if (weight !== "" && weight < 0) {
            newErrors.weight = "Weight cannot be negative.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        addWorkout({ exercise, sets, reps, weight });
        setExercise("");
        setSets("");
        setReps("");
        setWeight("");
        setErrors({});
    };

    return (
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-md mx-auto mt-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Log Workout</h2>

            {/* 🔍 Exercise Search Component */}
            <ExerciseSearch onSelectExercise={(name) => setExercise(name)} />

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                    <label className="block mb-1">Exercise</label>
                    <input
                        type="text"
                        value={exercise}
                        onChange={(e) => setExercise(e.target.value)}
                        placeholder="e.g. Bench Press"
                        className="w-full p-2 rounded-lg text-black"
                    />
                    {errors.exercise && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.exercise}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block mb-1">Sets</label>
                    <input
                        type="number"
                        value={sets}
                        onChange={(e) => setSets(e.target.value)}
                        placeholder="e.g. 3"
                        className="w-full p-2 rounded-lg text-black"
                    />
                    {errors.sets && (
                        <p className="text-red-500 text-sm mt-1">{errors.sets}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1">Reps</label>
                    <input
                        type="number"
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        placeholder="e.g. 12"
                        className="w-full p-2 rounded-lg text-black"
                    />
                    {errors.reps && (
                        <p className="text-red-500 text-sm mt-1">{errors.reps}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1">Weight (kg)</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="e.g. 50"
                        className="w-full p-2 rounded-lg text-black"
                    />
                    {errors.weight && (
                        <p className="text-red-500 text-sm mt-1">{errors.weight}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    Add Workout
                </button>
            </form>
        </div>
    );
}


