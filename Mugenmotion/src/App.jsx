import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogWorkout from "./pages/LogWorkout";
import WorkoutHistory from "./pages/WorkoutHistory";
import Progress from "./pages/Progress";

function App() {
  const [workouts, setWorkouts] = useState([]);

  // Load workouts from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("workouts");
    if (stored) {
      setWorkouts(JSON.parse(stored));
    }
  }, []);

  // Save workouts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts((prev) => [workout, ...prev]); // add new workout to top
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1 px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/log"
              element={
                <div className="space-y-6">
                  <LogWorkout onAddWorkout={addWorkout} />
                  <WorkoutHistory workouts={workouts} />
                </div>
              }
            />
            <Route
              path="/progress"
              element={<Progress workouts={workouts} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;













