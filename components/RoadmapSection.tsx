// components/RoadmapSection.tsx
import Image from "next/image";

const ROADMAP_ITEMS = [
  { src: "/roadmap/2025-3q.png", alt: "2025 3Q Roadmap" },
  { src: "/roadmap/2025-4q.png", alt: "2025 4Q Roadmap" },
  { src: "/roadmap/2026-1q.png", alt: "2026 1Q Roadmap" },
  { src: "/roadmap/2026-2q.png", alt: "2026 2Q Roadmap" },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="w-full bg-[#f7ecdf] py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-[26px] md:text-[32px] tracking-[0.3em] font-extrabold text-[#1c1c1c] uppercase mb-10">
          ROADMAP
        </h2>

        {/* Horizontal scroll */}
        <div className="overflow-x-auto no-scrollbar snap-x snap-mandatory">
          <div
            className="
              flex 
              gap-2 md:gap-3    /* 간격을 확실히 줄임 */
              items-stretch
            "
          >
            {ROADMAP_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="
                  snap-center 
                  flex-shrink-0 
                  w-[220px] md:w-[240px] lg:w-[250px]  /* 기존보다 약 75% 크기 */
                "
              >
                <div className="relative w-full h-[190px] md:h-[210px] lg:h-[220px]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
