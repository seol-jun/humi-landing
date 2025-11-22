// components/AboutSection.tsx

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#f7efe6] py-20 flex justify-center"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-[#2a2a2a]">
        {/* ABOUT: 모바일 32px, md 이상 60px */}
        <h2 className="text-[32px] md:text-h1 font-bold tracking-[0.25em] mb-6">
          ABOUT
        </h2>

        {/* What is HUMI?: 모바일 20px, md 이상 40px */}
        <p className="text-[20px] md:text-h2 font-bold mb-3">
          What is HUMI?
        </p>

        {/* 본문: 모바일 14px, md 이상 20px (About 쪽은 bold로 유지) */}
        <p className="text-[14px] md:text-body leading-relaxed font-bold mb-3">
          HUMI is a social-based MemeFi project that tracks and verifies
          humanity in the Web3 era dominated by AI, FUD, and bots.
        </p>

        <p className="text-[14px] md:text-body leading-relaxed font-bold">
          We prove our humanity through laughter, instinct, creativity, and
          humor — building a new form of "Proof of Soul" protocol
          that rewards and honors genuine human expression on-chain.
        </p>
      </div>
    </section>
  );
}
