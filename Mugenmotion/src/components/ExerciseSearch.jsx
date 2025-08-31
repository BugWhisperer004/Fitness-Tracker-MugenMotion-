import React, { useState } from "react";

const ExerciseSearch = ({ onSelectExercise }) => {
    const [query, setQuery] = useState("");
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // ✅ Read the API URL from your .env file
    const API_URL = import.meta.env.VITE_WGER_API;

    const fetchExercises = async (searchTerm) => {
        if (!searchTerm) return; // Don't fetch empty queries

        setLoading(true);
        setError("");
        try {
            const response = await fetch(
                `${API_URL}?language=2&limit=20&search=${searchTerm}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch exercises");
            }
            const data = await response.json();
            setExercises(data.results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchExercises(query);
    };

    // Helper to strip HTML and provide fallback text
    const formatDescription = (desc) => {
        if (!desc || desc.trim() === "") {
            return "Description not available for this exercise.";
        }
        return desc.replace(/<[^>]+>/g, ""); // Remove HTML tags
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-lg text-white">
            <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Search for an exercise..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-grow p-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-neonPink"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-neonPink text-black font-bold rounded-lg hover:brightness-110 transition"
                >
                    Search
                </button>
            </form>

            {loading && <p className="text-gray-400">Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <ul className="space-y-4">
                {exercises.map((exercise) => (
                    <li
                        key={exercise.id}
                        onClick={() =>
                            onSelectExercise && onSelectExercise(exercise.name)
                        }
                        className={`p-4 border border-gray-700 rounded-lg bg-gray-800 transition cursor-pointer ${onSelectExercise
                                ? "hover:shadow-[0_0_15px_#ff6ec7] hover:bg-gray-700"
                                : ""
                            }`}
                    >
                        <h3 className="font-bold text-neonPink text-lg">
                            {exercise.name}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">
                            {formatDescription(exercise.description)}
                        </p>
                        {onSelectExercise && (
                            <p className="text-xs text-gray-500 mt-2">
                                Click to select this exercise
                            </p>
                        )}
                    </li>
                ))}
            </ul>

            {exercises.length === 0 && !loading && !error && (
                <p className="text-gray-500 text-center mt-6">
                    Try searching for "Push-up", "Squat", or "Plank" to get started!
                </p>
            )}
        </div>
    );
};

export default ExerciseSearch;




