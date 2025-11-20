// app/page.tsx
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TokenomicsSection from "../components/TokenomicsSection";
import RoadmapSection from "../components/RoadmapSection";
import CommunitySection from "../components/CommunitySection";

export default function Home() {
  return (
    <main className="w-full">
      {/* 상단 네비게이션 */}
      <Header />

      {/* 히어로는 딱 한 번만 */}
      <HeroSection />

      {/* 아래 섹션들 */}
      <AboutSection />
      <TokenomicsSection />
      <RoadmapSection />
      <CommunitySection />
    </main>
  );
}
