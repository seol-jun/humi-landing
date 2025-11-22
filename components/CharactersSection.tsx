// components/CharactersSection.tsx
import Image from "next/image";

const characters = [
  {
    id: "ice",
    name: "ICE",
    emoji: "🧊",
    imageSrc: "/characters/ice.png",
    description:
      "Silent, sharp, and always in control. ICE leads HUMI with cool-headed strategy and unwavering focus on uncovering human truth.",
  },
  {
    id: "slmo",
    name: "SLMO",
    emoji: "🐢",
    imageSrc: "/characters/slmo.png",
    description:
      "Slow but wise, SLMO speaks in facts and files. With a shell full of secrets, he solves what others overlook.",
  },
  {
    id: "bubu",
    name: "BUBU",
    emoji: "🐾",
    imageSrc: "/characters/bubu.png",
    description:
      "Loud, loyal, and a little wild. BUBU sniffs out memes, chaos, and bots—ICE’s most trusted scout and Memen’s favorite.",
  },
];

export default function CharactersSection() {
  return (
    <section
      aria-labelledby="character-title"
      className="max-w-4xl mx-auto text-[#2a2a2a]"   // ← ★ 전체 텍스트 색 지정
    >
      {/* 섹션 헤더 */}
      <h2
        id="character-title"
        className="text-[28px] md:text-[32px] tracking-[0.18em] font-extrabold text-[#3d7547] mb-10 md:mb-12"
      >
        CHARACTER
      </h2>

      <div className="space-y-16 md:space-y-20">
        {characters.map((c, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <div
              key={c.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end"
            >
              {/* 이미지 */}
              <div className={imageFirst ? "" : "md:order-2"}>
                <div className="relative w-full max-w-xs md:max-w-sm mx-auto aspect-[4/5]">
                  <Image
                    src={c.imageSrc}
                    alt={c.name}
                    fill
                    className="object-cover rounded-[28px]"
                  />
                </div>
              </div>

              {/* 텍스트 */}
              <div
                className={`${
                  imageFirst ? "" : "md:order-1"
                } flex flex-col justify-end h-full`}
              >
                {/* 캐릭터 이름 */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base md:text-lg">{c.emoji}</span>
                  <span className="text-[16px] md:text-[18px] font-bold tracking-[0.18em]">
                    {c.name}
                  </span>
                </div>

                {/* 설명 */}
                <p className="text-[12px] md:text-[13px] leading-relaxed max-w-sm">
                  {c.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
