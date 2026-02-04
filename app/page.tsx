"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const SECRET_NAME = "TeamJT"; // à personnaliser

  const handleSubmit = () => {
    if (name.trim().toLowerCase() === SECRET_NAME.toLowerCase()) {
      router.push("/souvenir");
    } else {
      setError("Ce n’est pas celui que je murmure quand je pense à toi…");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 🎥 VIDEO BACKGROUND — totalement visible */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/bg-love.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 💖 CONTENU — carte centrale */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div
          className="
            bg-white/30 backdrop-blur-md
            rounded-2xl shadow-xl
            px-8 py-10
            text-center space-y-7
            max-w-md w-full
          "
        >
          <h1 className="text-3xl md:text-4xl font-serif text-[#7A1F2B] leading-snug">
            Il existe un nom que toi et moi partageons, un mot qui nous unit.
            Souviens-toi : nous sommes une équipe, aujourd’hui et toujours.{" "}
            <br />
            Quel est notre nom? 😉
          </h1>

          <input
            type="text"
            placeholder="Entre le nom secret"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            className="
              w-full px-5 py-3 rounded-full
              border border-[#7A1F2B]/30
              bg-white/40 text-center text-lg
              placeholder:text-[#7A1F2B]/40
              focus:outline-none focus:ring-2 focus:ring-[#D4AF37]
            "
          />

          <button
            onClick={handleSubmit}
            className="
              px-8 py-3 rounded-full
              bg-[#7A1F2B] text-white text-lg
              hover:scale-105 active:scale-95
              transition-all duration-300 shadow-md
            "
          >
            Ouvrir 💖
          </button>

          {error && <p className="text-sm text-[#7A1F2B] italic">{error}</p>}

          <p
            className="
  text-base md:text-lg
  text-[#7A1F2B]
  italic
  opacity-80
"
          >
            Seulement si tu es celle que j’attends…
          </p>
        </div>
      </div>
    </main>
  );
}
