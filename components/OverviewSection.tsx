// components/OverviewSection.tsx

export default function OverviewSection() {
  return (
    <section className="max-w-4xl mx-auto text-[#2a2a2a]">
      {/* OVERVIEW: 모바일 32px, md 이상 60px */}
      <h2 className="text-[32px] md:text-h1 tracking-[0.18em] font-bold text-[#3d7547] mb-8 md:mb-10">
        OVERVIEW
      </h2>

      {/* 본문: 모바일 14px, md 이상 20px / 기본 medium, strong 부분만 bold */}
      <div className="space-y-3 text-[14px] md:text-body leading-relaxed font-medium">
        <p>
          HUMI is a digital detective bureau in the Web3 era.
          We don’t operate in a metaverse fantasy or some virtual playground.
        </p>
        <p>
          Instead, HUMI confronts the harsh <strong>reality of a Web3 world overtaken by AI, FUD, and bots.</strong>
        </p>
        <p>
          In an age where memes, humor, and emotions can be auto-generated, and where distinguishing real humans from
          synthetic identities grows harder by the day,
        </p>
        <p>
          <strong>HUMI exists to trace genuine humanity.</strong>
        </p>
        <p>
          Our mission is clear:<br />
          <strong>Laughter. Emotion. Creativity…</strong>
        </p>
        <p>
          Traces only humans can leave — and <strong>machines can never truly fake.</strong><br />
          We collect them as clues, use them as proof,<br />
          and work toward a Web3 where being human is not just verified, but valued.
        </p>
      </div>
    </section>
  );
}
