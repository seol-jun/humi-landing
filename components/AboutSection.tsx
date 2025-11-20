// components/AboutSection.tsx

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#f7efe6] py-20 flex justify-center"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-[26px] md:text-3xl font-black tracking-[0.25em] mb-6">
          ABOUT
        </h2>

        <p className="text-sm font-semibold mb-3">What is HUMI?</p>

        <p className="text-[11px] md:text-xs leading-relaxed mb-3">
          HUMI is a social-based MemeFi project that tracks and verifies
          humanity in the Web3 era dominated by AI, FUD, and bots.
        </p>

        <p className="text-[11px] md:text-xs leading-relaxed">
          We prove our humanity through laughter, instinct, creativity, and
          humor — building a new form of &quot;Proof of Soul&quot; protocol
          that rewards and honors genuine human expression on-chain.
        </p>
      </div>
    </section>
  );
}
