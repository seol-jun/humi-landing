// app/worldview/page.tsx
import Link from "next/link";
import OverviewSection from "@/components/OverviewSection";
import CharactersSection from "@/components/CharactersSection";

export default function WorldviewPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 상단 바 */}
      <header className="w-full bg-[#f7efe5] border-b border-[#f0e3d5]">
        <div className="max-w-5xl mx-auto px-6 py-4 relative">
          <Link
            href="/"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-sm flex items-center gap-1"
          >
            <span className="text-xl leading-none">←</span>
          </Link>

          <h1 className="text-center text-xs md:text-sm tracking-[0.25em] font-semibold">
            WORLDVIEW
          </h1>
        </div>
      </header>

      {/* 본문을 전체 중앙에 */}
      <main className="w-full px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <OverviewSection />
          <div className="mt-20 md:mt-24">
            <CharactersSection />
          </div>
        </div>
      </main>
    </div>
  );
}

