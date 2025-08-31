import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LogWorkout from "./pages/LogWorkout";
import History from "./pages/History";
import Progress from "./pages/Progress";

function App() {
  const [workouts, setWorkouts] = useState([]);

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
              element={<LogWorkout onAddWorkout={addWorkout} />}
            />
            <Route
              path="/history"
              element={<History workouts={workouts} />}
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











