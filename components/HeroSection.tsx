// components/HeroSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#447B4A] text-white overflow-hidden">

      {/* ===== 배경 그래픽들 ===== */}

      {/* 왼쪽 아래 물결 */}
      <div className="pointer-events-none select-none absolute left-0 bottom-0 w-[140px] md:w-[180px] z-0">
        <Image
          src="/wave.png"
          alt="Left wave"
          width={180}
          height={140}
          className="object-contain"
        />
      </div>

      {/* 오른쪽 아래 물결 */}
      <div className="pointer-events-none select-none absolute right-0 bottom-0 w-[140px] md:w-[180px] z-0">
        <Image
          src="/wave2.png"
          alt="Right wave"
          width={180}
          height={140}
          className="object-contain"
        />
      </div>

      {/* 손전등 */}
      <div className="pointer-events-none select-none absolute -left-4 bottom-0 w-[150px] md:w-[190px] z-10">
        <Image
          src="/handlight.png"
          alt="Hand light"
          width={190}
          height={150}
          className="object-contain"
        />
      </div>

      {/* 발자국 */}
      <div className="pointer-events-none select-none absolute left-24 top-10 w-16 h-16 md:w-20 md:h-20 z-20">
        <Image
          src="/footstep-1.png"
          alt="Footstep 1"
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>
      <div className="pointer-events-none select-none absolute left-32 top-24 w-20 h-10 md:w-24 md:h-12 z-20">
        <Image
          src="/footstep-2.png"
          alt="Footstep 2"
          fill
          sizes="96px"
          className="object-contain"
        />
      </div>

      {/* 돋보기 */}
      <div className="pointer-events-none select-none absolute right-0 top-16 w-[180px] h-[180px] md:w-[230px] md:h-[230px] z-20 translate-x-1/4">
        <Image
          src="/magnifier.png"
          alt="Magnifier"
          fill
          sizes="230px"
          className="object-contain"
        />
      </div>

      {/* ===== 중앙 카피 ===== */}
      <div className="relative z-30 max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 flex justify-center">
        <div className="flex flex-col items-center gap-4">

          <h1 className="text-3xl md:text-[40px] leading-snug font-black text-center text-[#222222]">
            Trace your Soul.
            <br />
            Be a HUMI
          </h1>

          <p className="text-[20px] md:text-xs leading-relaxed text-center max-w-sm mb-4 text-[#f7f7f7]/90">
            “One meme. One feeling. That's all it takes to prove you're human”
          </p>

          {/* ===== Hover 커짐 효과 추가됨 ===== */}
          <Link
            href="/worldview"
            className="
              inline-flex items-center justify-center
              px-9 py-3 rounded-full bg-white text-[#222222]
              text-[11px] font-semibold tracking-[0.3em] uppercase
              hover:scale-110 transition duration-200
            "
          >
            OUR WORLD
          </Link>
        </div>
      </div>
    </section>
  );
}
