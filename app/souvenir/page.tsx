"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Souvenir() {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const SECRET_DATE = "2024-04-30"; // à personnaliser

  const handleSubmit = () => {
    if (date === SECRET_DATE) {
      router.push("/memoires");
    } else {
      setError("Cette nuit-là mérite d’être rappelée avec précision…");
    }
  };

  /* 🌸 Génération des cœurs et flocons */
  useEffect(() => {
    const interval = setInterval(() => {
      const el = document.createElement("div");
      const isHeart = Math.random() > 0.5;

      el.className = isHeart ? "heart" : "flake";
      el.innerText = isHeart ? "❤️" : "❄️";
      el.style.left = Math.random() * 100 + "vw";
      el.style.animationDuration = 4 + Math.random() * 4 + "s";

      document.body.appendChild(el);

      setTimeout(() => el.remove(), 8000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-4
                     bg-linear-to-b from-[#1B2B4A] via-[#3A4F7A] to-[#6B8FBF]"
    >
      {/* 🌫️ Nuages doux */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />

      {/* 💌 CONTENU */}
      <div
        className="
    relative z-10 max-w-2xl text-center
    bg-white/20 backdrop-blur-lg
    rounded-3xl px-8 py-10
    shadow-2xl space-y-6
  "
      >
        <h1
          className="
      text-3xl md:text-4xl font-serif text-[#7A1F2B]
      mx-auto typewriter
    "
        >
          Il y a des dates que le cœur n’oublie jamais…
        </h1>

        {/* TEXTE PRINCIPAL */}
        <p className="text-base md:text-lg text-[#3A1F2B] italic leading-relaxed">
          Cette nuit-là, nous étions simplement en train de discuter. Tu as
          trouvé le courage de me dire que tu m’aimais, dans une langue que je
          ne comprenais pas encore. Alors j’ai cherché à comprendre, mot après
          mot, jusqu’à réaliser ce que tu étais en train de me dire. Et quand
          j’ai levé les yeux vers toi, je t’ai répondu simplement :{" "}
          <strong>je t’aime</strong>. Ce soir-là, quelque chose a commencé entre
          nous. Ce soir-là, nous sommes devenus un “nous”.
          <br />
          <br />
          {/* QUESTION FINALE (OPTIONNELLEMENT ANIMÉE AUSSI) */}
          <span className="opacity-80 inline-block">
            C’était quand, bb&nbsp;?
          </span>
        </p>

        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setError("");
          }}
          className="w-full max-w-xs mx-auto px-5 py-3 rounded-full
                     bg-white/40 border border-[#7A1F2B]/30
                     text-center text-lg
                     focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        />

        <button
          onClick={handleSubmit}
          className="px-8 py-3 rounded-full bg-[#7A1F2B] text-white text-lg
                     hover:scale-105 transition shadow-md"
        >
          Se souvenir 💖
        </button>

        {error && <p className="text-sm text-[#7A1F2B] italic">{error}</p>}
      </div>
    </main>
  );
}
