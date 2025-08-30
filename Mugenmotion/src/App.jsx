import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WorkoutLog from "./components/WorkoutLog";
import WorkoutHistory from "./components/WorkoutHistory";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    const workoutWithDate = {
      ...workout,
      date: new Date().toLocaleDateString(), // attach date when logged
    };
    setWorkouts((prev) => [workoutWithDate, ...prev]);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white px-4 py-6">
        <Home />
        <WorkoutLog onAddWorkout={addWorkout} />
        <WorkoutHistory workouts={workouts} />
      </main>
      <Footer />
    </>
  );
}

export default App;







