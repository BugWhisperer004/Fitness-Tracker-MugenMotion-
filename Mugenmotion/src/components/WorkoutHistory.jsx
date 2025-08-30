import { useState } from "react";

export default function WorkoutHistory({ workouts }) {
    const [openDates, setOpenDates] = useState({});

    if (workouts.length === 0) {
        return <p className="text-gray-400">No workouts logged yet.</p>;
    }

    // Group workouts by date
    const grouped = workouts.reduce((acc, workout) => {
        acc[workout.date] = acc[workout.date] || [];
        acc[workout.date].push(workout);
        return acc;
    }, {});

    const toggleDate = (date) => {
        setOpenDates((prev) => ({
            ...prev,
            [date]: !prev[date],
        }));
    };

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Workout History</h2>
            <div className="space-y-4">
                {Object.keys(grouped).map((date) => (
                    <div
                        key={date}
                        className="bg-gray-800 rounded-xl p-4 shadow-md"
                    >
                        <button
                            onClick={() => toggleDate(date)}
                            className="w-full text-left flex justify-between items-center font-semibold text-lg"
                        >
                            <span>{date}</span>
                            <span>{openDates[date] ? "▲" : "▼"}</span>
                        </button>

                        {openDates[date] && (
                            <ul className="mt-3 space-y-2">
                                {grouped[date].map((workout, i) => (
                                    <li
                                        key={i}
                                        className="bg-gray-700 p-2 rounded-md text-sm"
                                    >
                                        {workout.type} - {workout.duration} mins
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

