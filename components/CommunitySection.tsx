// components/CommunitySection.tsx
import Image from "next/image";

export default function CommunitySection() {
  return (
    <section id="community" className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-[#2a2a2a]">
        
        {/* 제목 – 중앙 → 왼쪽 정렬 */}
        <h2 className="text-[26px] md:text-[32px] tracking-[0.3em] font-extrabold mb-12 text-left">
          COMMUNITY
        </h2>

        {/* 아이콘 3개 */}
        <div className="flex justify-center items-center gap-10 md:gap-16">

          {/* 1) Memex */}
          <a
            href="https://app.memex.xyz/profile/HUMI/6878bf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-28 aspect-square rounded-full border border-gray-200 flex items-center justify-center hover:scale-110 transition shrink-0"
          >
            <Image
              src="/community/memex.png"
              alt="Memex"
              width={70}
              height={70}
              className="object-contain"
            />
          </a>

          {/* 2) X + HUMI 배지 */}
          <a
            href="https://x.com/HUMI_MemeX"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-28 aspect-square rounded-full border border-gray-200 flex items-center justify-center hover:scale-110 transition shrink-0"
          >
            <Image
              src="/community/twitter.png"
              alt="X (Twitter)"
              width={70}
              height={70}
              className="object-contain"
            />

            {/* HUMI 배지 */}
            <div className="absolute bottom-0 right-0 translate-x-2 translate-y-2 w-14 aspect-square bg-[#f5f5f5] rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#44734e] font-bold text-xs">HUMI</span>
            </div>
          </a>

          {/* 3) X + 프로필 아바타 */}
          <a
            href="https://x.com/Trust_mit"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-28 aspect-square rounded-full border border-gray-200 flex items-center justify-center hover:scale-110 transition shrink-0"
          >
            <Image
              src="/community/twitter.png"
              alt="Profile X"
              width={70}
              height={70}
              className="object-contain"
            />

            {/* 프로필 아바타 */}
            <div className="absolute bottom-0 right-0 translate-x-2 translate-y-2 w-14 aspect-square rounded-full overflow-hidden shadow-md">
              <Image
                src="/community/profile.png"
                alt="Profile"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
