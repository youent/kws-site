import type { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "運営：KWS（川﨑悠矢）。法律・士業領域の理解を活かし、導線設計・軽微改修・計測・月次レポートを提供。",
  openGraph: {
    title: "About | REGAL WEB SERVICE",
    description: "運営者情報と、法律領域におけるWeb運用スタンスを紹介。",
    images: ["/og.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">運営者について</h1>
          <p className="mt-4 text-base leading-8 text-slate-700">
            運営：KWS（川﨑悠矢）。法律・士業領域の文脈を踏まえ、過度な表現を避けた実務的なWeb運用を行います。
          </p>
        </div>
      </section>

      <Section title="スタンス" className="bg-slate-50">
        <p className="text-sm leading-7 text-slate-700">小さく改善→計測→積み上げ。観測可能な指標をもとに継続的な改善を進めます。</p>
      </Section>

      <Section title="できること（断言）">
        <ul className="list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700">
          <li>導線設計</li>
          <li>軽微改修</li>
          <li>計測</li>
          <li>月次レポート</li>
        </ul>
      </Section>

      <Section title="要件次第で対応（提携含む）" className="bg-slate-50">
        <p className="text-sm leading-7 text-slate-700">API連携/自動化は、要件と運用体制に応じて提携パートナーと連携して進めます。</p>
      </Section>
    </>
  );
}