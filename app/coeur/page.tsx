"use client";

import { useRouter } from "next/navigation";
import type React from "react";

type Block = {
  type: "video" | "audio";
  src: string;
  text: string;
};

const blocks: Block[] = [
  {
    type: "video",
    src: "/video/coeur-1.mp4",
    text: "Il y a des moments où je te regarde… et je me dis que j’ai tellement de chance de t’avoir dans ma vie. Mais facon tu es tétu noor , cest Dieu seul qui sait 😂😂",
  },
  {
    type: "video",
    src: "/video/coeur-2.mp4",
    text: "Même quand je ne dis rien, mon cœur parle pour moi. ash!!! La St Valentin ci cest la guerre 😎",
  },
  {
    type: "video",
    src: "/video/coeur-3.mp4",
    text: "Avec toi, je me sens à ma place. Calme. Heureux. Mais on peut bouder comme ca? 😂 einh bb ?? Tu boudes parce que je regarde le menu ou parce que jai choisi ce que tu voulais manger?😏 Jusqu'a elle tend la bouche devant 😂 ",
  },
  {
    type: "video",
    src: "/video/coeur-4.mp4",
    text: "Boudeuse comme ca 😂😂😁 Toi norr !! tu as remarqué que tu fais ca dans toutes nos sorties ?😅 Je vais t'embrasser un jour en route, faut continuer 🙊",
  },
  {
    type: "audio",
    src: "/audio/coeur-final.mp3",
    text: "Que ooh je ne connais pas chanter, tsuipp !!! tu t'amuses je remets ma version, celle dans laquelle je chantais 😭. L derniere phrase pour tout tout gater:  'Je suis né prématurement parceque j'étais pressé de te rencontrer !  ouiiiiiii l'inspiration 😂😂😂' ",
  },
];

export default function Coeur() {
  const router = useRouter();

  // ▶️ Coupe musique de fond + autres médias
  const handlePlay = (event: React.SyntheticEvent<HTMLMediaElement>) => {
    const current = event.currentTarget;

    const bgMusic = document.getElementById(
      "global-music",
    ) as HTMLAudioElement | null;

    if (bgMusic && !bgMusic.paused) {
      bgMusic.pause();
    }

    document.querySelectorAll("video, audio").forEach((el) => {
      const media = el as HTMLMediaElement;
      if (media !== current && !media.paused) {
        media.pause();
      }
    });
  };

  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#1a0f16]
        via-[#2b1622]
        to-[#12080f]
        text-white
        px-8 py-28
      "
    >
      {/* 💖 TITRE */}
      <h1 className="text-center text-4xl md:text-5xl font-serif text-[#F5C2D6] mb-24">
        Je taime tellement bb… 💞
      </h1>

      {/* 💌 GRID LARGE & AÉRÉ */}
      <div className="max-w-[1600px] mx-auto grid gap-20 grid-cols-1 xl:grid-cols-2">
        {blocks.map((block, index) => {
          const isLast = index === blocks.length - 1;

          return (
            <section
              key={index}
              className={`
                relative
                flex flex-col items-center gap-10
                rounded-[2.5rem]
                px-10 py-12
                bg-white/10
                backdrop-blur-2xl
                shadow-[0_30px_90px_rgba(0,0,0,0.5)]
                border border-white/10
                transition-transform duration-500
                hover:-translate-y-1
                ${isLast ? "xl:col-span-2 max-w-[1100px] mx-auto" : ""}
              `}
            >
              {/* 🌸 HALO ROMANTIQUE */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-pink-400/20 blur-[120px] -z-10" />

              {/* 🎥 / 🎧 MEDIA */}
              {block.type === "video" ? (
                <video
                  src={block.src}
                  controls
                  playsInline
                  onPlay={(e) => handlePlay(e)}
                  className="
                    w-full
                    max-h-[760px]
                    rounded-3xl
                    shadow-2xl
                    bg-black
                  "
                />
              ) : (
                <audio
                  src={block.src}
                  controls
                  onPlay={(e) => handlePlay(e)}
                  className="w-full max-w-3xl"
                />
              )}

              {/* ✍️ TEXTE */}
              <p className="text-center font-serif italic text-white/90 leading-relaxed max-w-2xl text-xl">
                {block.text}
              </p>
            </section>
          );
        })}
      </div>

      {/* 💖 BOUTON FINAL */}
      <div className="flex justify-center mt-32">
        <button
          onClick={() => router.push("/")}
          className="
            px-14 py-6
            rounded-full
            bg-gradient-to-r from-pink-500 via-rose-500 to-red-500
            font-serif text-2xl
            shadow-[0_25px_70px_rgba(255,105,180,0.45)]
            hover:scale-105
            active:scale-95
            transition
          "
        >
          Rejouer notre histoire 💞
        </button>
      </div>
    </main>
  );
}
