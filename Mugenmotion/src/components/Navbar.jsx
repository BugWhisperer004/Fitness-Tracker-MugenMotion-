import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-black p-4 flex justify-between items-center">
            <h2 className="text-neonPink font-bold text-2xl">MugenMotion</h2>
            <ul className="flex space-x-6 text-white">
                <li className="hover:text-neonPink cursor-pointer">Home</li>
                <li className="hover:text-neonPink cursor-pointer">Log Workout</li>
                <li className="hover:text-neonPink cursor-pointer">History</li>
                <li className="hover:text-neonPink cursor-pointer">Progress</li>
            </ul>
        </nav>
    );
}
