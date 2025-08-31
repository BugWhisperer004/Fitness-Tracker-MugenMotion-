import React, { useState } from "react";

const ExerciseSearch = () => {
    const [query, setQuery] = useState("");
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchExercises = async (searchTerm) => {
        if (!searchTerm) return; // don't fetch empty queries

        setLoading(true);
        setError("");
        try {
            const response = await fetch(
                `https://wger.de/api/v2/exercise/?language=2&limit=20&search=${searchTerm}`
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

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Search for an exercise..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-grow p-2 border rounded-lg"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <ul className="space-y-2">
                {exercises.map((exercise) => (
                    <li
                        key={exercise.id}
                        className="p-3 border rounded-lg bg-gray-50 shadow-sm"
                    >
                        <h3 className="font-bold">{exercise.name}</h3>
                        <p className="text-sm text-gray-600">
                            {exercise.description
                                ? exercise.description.replace(/<[^>]+>/g, "")
                                : "No description available."}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExerciseSearch;
