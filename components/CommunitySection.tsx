// components/CommunitySection.tsx
import Image from "next/image";

export default function CommunitySection() {
  return (
    <section id="community" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* 제목 한 번만 */}
        <h2 className="text-[26px] md:text-[32px] tracking-[0.3em] font-extrabold mb-12">
          COMMUNITY
        </h2>

        {/* 아이콘 3개 줄 */}
        <div className="flex justify-center items-center gap-10 md:gap-16">
          {/* 1) Memex */}
          <button
            type="button"
            className="relative w-28 h-28 rounded-full border border-gray-200 flex items-center justify-center hover:scale-110 transition"
          >
            <Image
              src="/community/memex.png"
              alt="Memex"
              width={70}
              height={70}
            />
          </button>

          {/* 2) X + HUMI 배지 */}
          <button
            type="button"
            className="relative w-28 h-28 rounded-full border border-gray-200 flex items-center justify-center hover:scale-110 transition"
          >
            <Image
              src="/community/twitter.png"
              alt="X (Twitter)"
              width={70}   // 기존보다 살짝 줄임
              height={70}
            />

            {/* HUMI 배지 */}
            <div className="absolute bottom-0 right-0 translate-x-2 translate-y-2 w-14 h-14 bg-[#f5f5f5] rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#44734e] font-bold text-xs">HUMI</span>
            </div>
          </button>

          {/* 3) X + 프로필 아바타 */}
          <button
            type="button"
            className="relative w-28 h-28 rounded-full border border-gray-200 flex items-center justify-center hover:scale-110 transition"
          >
            {/* 바탕 X 로고 */}
            <Image
              src="/community/twitter.png"
              alt="X (Twitter)"
              width={70}
              height={70}
            />

            {/* 프로필 아바타 (작게 겹치기) */}
            <div className="absolute bottom-0 right-0 translate-x-2 translate-y-2 w-14 h-14 rounded-full overflow-hidden shadow-md">
              <Image
                src="/community/profile.png"
                alt="Profile"
                width={56}
                height={56}
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
