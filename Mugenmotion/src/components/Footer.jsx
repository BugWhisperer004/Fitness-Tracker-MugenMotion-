import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-neon-green py-6 text-center">
            <div className="container mx-auto">
                <p className="text-sm">&copy; {new Date().getFullYear()} MugenMotion. All rights reserved.</p>
                <div className="mt-2 flex justify-center gap-4">
                    <a href="#" className="hover:text-neon-pink transition-colors">Twitter</a>
                    <a href="#" className="hover:text-neon-pink transition-colors">Instagram</a>
                    <a href="#" className="hover:text-neon-pink transition-colors">Discord</a>
                </div>
            </div>
        </footer>
    );
}
