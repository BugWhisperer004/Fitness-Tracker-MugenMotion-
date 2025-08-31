import React from "react";
import WorkoutSummary from "../components/WorkoutSummary";
import ProgressChart from "../components/ProgressChart";

export default function Progress({ workouts }) {
    return (
        <div>
            <WorkoutSummary workouts={workouts} />
            <ProgressChart workouts={workouts} />
        </div>
    );
}
