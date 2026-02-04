"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/thumbs";

/* ===================== CONFIG CŒURS ===================== */
const HEARTS = [
  { left: "10%", duration: "14s" },
  { left: "25%", duration: "18s" },
  { left: "40%", duration: "16s" },
  { left: "55%", duration: "20s" },
  { left: "65%", duration: "15s" },
  { left: "75%", duration: "19s" },
  { left: "85%", duration: "17s" },
  { left: "95%", duration: "21s" },
];

const memories = [
  {
    src: "/photos/01-first.jpg",
    title: "Le commencement",
    subtitle: "Sans vraiment le savoir…",
    description:
      "Ce jour-là mon bb 😊, tu étais en train de détacher tes cheveux pour les tresser. Tu étais si belle 😍 que j’ai voulu prendre une photo. Timide, tu te cachais derrière moi… et sans le vouloir, on a pris une très belle photo.😉",
    text: "À ce moment-là, je ne savais pas encore que j’étais amoureux.",
    love: "Avec le temps, j’ai compris que c’est ce jour-là que j’ai commencé à te regarder autrement.",
  },
  {
    src: "/photos/02-smile.jpg",
    title: "Ton sourire",
    subtitle: "Un refuge",
    description:
      "Ce jour-là, notre sortie avait mal commencé 😕. L’ambiance était un peu tendue et ça gâchait le moment, alors que je voulais simplement passer une belle journée avec toi 💭. Puis, lors de la dernière activité, au restaurant 🍽️, j’ai décidé de te donner toute mon attention. Je t’ai écoutée, je t’ai flattée, je me suis vraiment concentré sur toi 💛… et tout a changé ✨. La soirée est passée de 4/10 à 11/10 🔥. C’était magnifique. Ce jour-là, j’ai compris que peu importe l’endroit où je suis ou ce que je fais, si je suis avec toi et que je suis pleinement présent pour toi, tout devient beau 🌍💖. Tu fais ressortir la meilleure version de moi 🌟.",
  },
  {
    src: "/photos/03-us.jpg",
    title: "Nous",
    subtitle: "Une évidence",
    description:
      "Notre récente sortie en groupe, alors qu’au fond, tout ce que je voulais, c’était passer du temps juste avec toi 💭. J’aime cette photo plus que je ne peux l’expliquer, surement a cause de la façon dont tu te tiens à mes côtés, on sent directemet qu'il ya un truc de fort entre nous 💛. Et puis ces petites manières que tu fais avec ton visage 😌, c’est tellement mignon. Mon bb, j’ai hâte de pouvoir tout faire avec toi 💖.",
  },
  {
    src: "/photos/04-symbol.jpg",
    title: "Une belle journée 🥰",
    subtitle: "Mon bb d'amour...",
    description:
      "Que dire de plus… tu es juste trop belle 😌. Et on dirait même que tu as un peu de muscle 😂💪. Quand j’étais en train de me changer, tu es venue me voir, sans hésiter. Si j’avais su qu’Étoile était concentrée sur son téléphone… mince 😅. Bref j’ai fait comme toi tu le fais souvent : j’ai surveillé les alentours 👀 sans savoir que toi, tu l’avais déjà fait pour nous deux 🤍.",
  },
];

export default function Memoires() {
  const router = useRouter();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeMemory = memories[activeIndex];

  return (
    <main className="h-screen w-full bg-black text-white grid grid-cols-1 md:grid-cols-2 overflow-hidden">
      {/* ===================== GAUCHE : TEXTE ===================== */}
      <section
        key={`left-${activeIndex}`}
        className="
    relative flex flex-col justify-center px-14
    bg-gradient-to-r
    from-[#1F1F1F]/40
    via-[#2A2A2A]/25
    to-transparent
    backdrop-blur-sm
  "
      >
        <span className="uppercase tracking-widest text-sm opacity-60 mb-4 typewriter">
          Memories {activeIndex + 1}/{memories.length}
        </span>

        <h1 className="text-5xl font-serif leading-tight mb-4 heartbeat typewriter">
          {activeMemory.title}
        </h1>

        <h2 className="text-xl italic text-[#D4AF37] mb-6 typewriter">
          {activeMemory.subtitle}
        </h2>

        <p className="max-w-lg text-lg font-serif italic leading-relaxed text-white/80 typewriter">
          {activeMemory.description}
        </p>

        <p className="mt-8 text-sm italic text-[#D4AF37]/80 typewriter">
          {activeMemory.love}
        </p>

        {/* 💖 BOUTON FINAL — ALLER AU CŒUR */}
        {activeIndex === memories.length - 1 && (
          <button
            onClick={() => router.push("/coeur")}
            className="
      mt-10 self-start
      px-8 py-4 rounded-full
      bg-gradient-to-r from-pink-500 to-red-600
      text-white font-serif text-lg
      shadow-xl
      hover:scale-105 active:scale-95
      transition-all duration-300
      animate-pulse
    "
          >
            Ouvrir mon cœur ❤️
          </button>
        )}
      </section>

      {/* ===================== DROITE : SLIDER ===================== */}
      <section className="relative h-full overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full w-32
                        bg-gradient-to-r from-black/40 to-transparent
                        z-20 pointer-events-none"
        />

        <Swiper
          modules={[EffectCoverflow, Thumbs]}
          effect="coverflow"
          centeredSlides
          slidesPerView={1}
          grabCursor
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 1,
            slideShadows: false,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="h-full"
        >
          {memories.map((memory, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full bg-black overflow-hidden">
                <Image
                  src={memory.src}
                  alt=""
                  fill
                  className="object-cover blur-3xl scale-110 opacity-50"
                />

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div
                    className="relative w-[75%] max-h-[85vh] aspect-[3/4]
                                  before:absolute before:inset-0
                                  before:rounded-xl
                                  before:bg-pink-300/10
                                  before:blur-3xl
                                  before:content-['']"
                  >
                    <Image
                      src={memory.src}
                      alt="Souvenir"
                      fill
                      priority={index === 0}
                      className={`
                        object-contain rounded-xl shadow-2xl
                        transition-transform duration-[12000ms] ease-out
                        ${activeIndex === index ? "scale-105" : "scale-100"}
                      `}
                    />
                  </div>
                </div>

                <div className="absolute bottom-28 left-0 w-full px-6 z-20">
                  <p
                    className="max-w-xl mx-auto text-center text-lg font-serif italic
                                bg-black/40 backdrop-blur-sm rounded-xl px-6 py-4"
                  >
                    {memory.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-6 left-0 w-full px-6 z-30">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            spaceBetween={16}
            watchSlidesProgress
            className="max-w-3xl mx-auto"
          >
            {memories.map((memory, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative h-24 bg-black rounded-xl overflow-hidden
                                cursor-pointer opacity-70 hover:opacity-100 transition"
                >
                  <Image
                    src={memory.src}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ===================== CŒURS FLOTTANTS ===================== */}
      {HEARTS.map((heart, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: heart.left,
            animationDuration: heart.duration,
            opacity: 0.25,
            fontSize: "18px",
          }}
        >
          ❤️
        </span>
      ))}
    </main>
  );
}
