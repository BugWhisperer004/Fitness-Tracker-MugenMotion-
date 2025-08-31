import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-black p-4 flex justify-between items-center">
            <h2 className="text-neonPink font-bold text-2xl">MugenMotion</h2>
            <ul className="flex gap-8 text-white list-none">
                <li>
                    <Link to="/" className="hover:text-neonPink">Home</Link>
                </li>
                <li>
                    <Link to="/log" className="hover:text-neonPink">Log Workout</Link>
                </li>
                <li>
                    <Link to="/history" className="hover:text-neonPink">History</Link>
                </li>
                <li>
                    <Link to="/progress" className="hover:text-neonPink">Progress</Link>
                </li>
            </ul>
        </nav>
    );
}

