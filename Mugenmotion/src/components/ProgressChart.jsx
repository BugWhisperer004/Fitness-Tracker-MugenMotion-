import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

function ProgressChart({ workouts }) {
    // Transform workouts into a format better for charting
    const chartData = workouts.map((w) => ({
        date: w.date,
        weight: parseFloat(w.weight) || 0,
        sets: parseInt(w.sets) || 0,
        reps: parseInt(w.reps) || 0,
    }));

    return (
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4 text-neonPink drop-shadow-[0_0_10px_#ff6ec7]">
                📈 Progress Chart
            </h2>
            <ResponsiveContainer width="100%" height={350}>
                <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="date" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1f1f1f",
                            border: "1px solid #ff6ec7",
                        }}
                        labelStyle={{ color: "#ff6ec7" }}
                    />
                    <Legend />

                    {/* Track weight lifted */}
                    <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#ff6ec7"
                        strokeWidth={3}
                        dot={{ fill: "#ff6ec7", r: 4 }}
                        activeDot={{ r: 6 }}
                        name="Weight (kg)"
                    />

                    {/* Track total reps */}
                    <Line
                        type="monotone"
                        dataKey="reps"
                        stroke="#38bdf8"
                        strokeWidth={2}
                        dot={{ fill: "#38bdf8", r: 4 }}
                        name="Reps"
                    />

                    {/* Track sets */}
                    <Line
                        type="monotone"
                        dataKey="sets"
                        stroke="#22c55e"
                        strokeWidth={2}
                        dot={{ fill: "#22c55e", r: 4 }}
                        name="Sets"
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default ProgressChart;

