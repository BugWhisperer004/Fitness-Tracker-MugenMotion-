import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black py-8 text-center">
            <div className="container mx-auto">
                <p className="text-sm text-neon-green drop-shadow-[0_0_10px_rgba(57,255,20,0.7)]">
                    &copy; {new Date().getFullYear()} MugenMotion. All rights reserved.
                </p>
                <div className="mt-4 flex justify-center gap-10">
                    <a
                        href="#"
                        className="text-neon-pink hover:text-neon-green transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,110,199,0.7)]"
                    >
                        Twitter
                    </a>
                    <a
                        href="#"
                        className="text-neon-pink hover:text-neon-green transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,110,199,0.7)]"
                    >
                        Instagram
                    </a>
                    <a
                        href="#"
                        className="text-neon-pink hover:text-neon-green transition-colors duration-300 drop-shadow-[0_0_10px_rgba(255,110,199,0.7)]"
                    >
                        Discord
                    </a>
                </div>
            </div>
        </footer>
    );
}
