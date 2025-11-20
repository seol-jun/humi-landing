"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "HOME", targetId: "home" },
  { label: "ABOUT", targetId: "about" },
  { label: "TOKENOMICS", targetId: "tokenomics" },
  { label: "ROADMAP", targetId: "roadmap" },
  { label: "COMMUNITY", targetId: "community" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleNavClick = (targetId: string) => {
    setOpen(false);

    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(targetId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80; // 헤더 높이 보정
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 상단 네비게이션바 */}
      <header className="w-full bg-[#f6ebdf] border-b border-[#e0d3c5] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* 로고 */}
          <button
            className="text-[18px] font-semibold tracking-[0.3em] text-black"
            onClick={() => handleNavClick("home")}
          >
            HUMI
          </button>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.25em] font-semibold">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.targetId)}
                className="uppercase text-black/80 hover:text-black transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[4px] w-9 h-9 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            <span className="w-4 h-[2px] bg-black" />
            <span className="w-4 h-[2px] bg-black" />
          </button>
        </div>
      </header>

      {/* 모바일 오버레이 + 슬라이드 메뉴 */}
      {open && (
        <>
          {/* 반투명 배경 */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />

          {/* 오른쪽 슬라이드 패널 */}
          <aside className="fixed right-0 top-0 h-full w-64 bg-[#f6ebdf] shadow-2xl z-50 flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#e0d3c5]">
              <span className="text-[16px] font-semibold tracking-[0.25em]">
                HUMI
              </span>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full border border-black/15 bg-white/90"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
              >
                <span className="relative block w-3 h-3">
                  <span className="absolute inset-0 rotate-45 w-[2px] bg-black mx-auto" />
                  <span className="absolute inset-0 -rotate-45 w-[2px] bg-black mx-auto" />
                </span>
              </button>
            </div>

            <nav className="flex-1 px-6 py-6 flex flex-col gap-4 text-[13px] tracking-[0.2em] font-semibold uppercase">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.targetId)}
                  className="text-left py-2 border-b border-black/5 text-black/80 hover:text-black"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}
