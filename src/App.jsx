import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1A1A1A] via-[#2A9D8F] to-[#E63946] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold tracking-wide italic text-[#E63946]">
          MugenMotion
        </h1>
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="hover:text-[#6A4C93] cursor-pointer">Home</li>
          <li className="hover:text-[#6A4C93] cursor-pointer">Log Workout</li>
          <li className="hover:text-[#6A4C93] cursor-pointer">History</li>
          <li className="hover:text-[#6A4C93] cursor-pointer">Progress</li>
          <li className="hover:text-[#6A4C93] cursor-pointer">Exercises</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Forge Your Strength. Track Your Motion.
        </motion.h2>
        <p className="text-xl max-w-2xl mb-8 italic">
          Inspired by Demon Slayer, crafted for warriors like you.
        </p>
        <button className="bg-[#E63946] hover:bg-[#6A4C93] px-8 py-4 text-lg rounded-2xl shadow-lg">
          Start Tracking
        </button>
      </section>

      {/* Quote Section */}
      <section className="bg-[#1A1A1A] text-center py-16 px-8">
        <blockquote className="italic text-2xl max-w-3xl mx-auto">
          “Set your heart ablaze.” – Rengoku
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-6">
        <p>MugenMotion © 2025 | Powered by WGER API</p>
      </footer>
    </div>
  );
}

export default App;

