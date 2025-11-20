import Image from "next/image";

export default function TokenomicsSection() {
  return (
    <section
      id="tokenomics"  // ✅ 이 줄 꼭 확인!
      className="w-full bg-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8"></div>
      <div
        className="
          max-w-4xl mx-auto 
          flex flex-col md:flex-row 
          items-center md:items-center 
          justify-between px-6 
          gap-10 md:gap-6
        "
      >
        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center text-center md:text-left w-full">
          <h2
            className="
              text-[26px] md:text-[32px] 
              tracking-[0.2em] 
              font-extrabold 
              text-[#447B4A] 
              uppercase
            "
          >
            TOKENOMICS
          </h2>
        </div>

        {/* RIGHT CHART */}
        <div
          className="
            relative 
            w-[260px] h-[260px] 
            md:w-[320px] md:h-[320px]
          "
        >
          <Image
            src="/tokenomics.png"
            alt="HUMI Tokenomics"
            fill
            className="object-contain"
            sizes="320px"
          />
        </div>
      </div>
    </section>
  );
}



