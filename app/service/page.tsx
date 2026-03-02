import type { Metadata } from "next";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";

const timerexUrl = "https://timerex.net/s/kws-k_f5a1/322f59ff";

export const metadata: Metadata = {
  title: "Service",
  description:
    "弁護士事務所向け月額Web運用。現状診断、月次レポート、改善提案、改善実装を一気通貫で提供。",
  openGraph: {
    title: "Service | REGAL WEB SERVICE",
    description:
      "現状診断から改善実装まで、企業法務に強いWeb運用を月額で提供します。",
    images: ["/og.png"],
  },
};

export default function ServicePage() {
  return (
    <>
      <section className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">サービス内容</h1>
          <p className="mt-4 text-base leading-8 text-slate-700">
            月額のWeb保守運用を主軸に、問い合わせ導線の改善を継続支援します。
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "現状診断（入口設計/導線/CTA/検索表示）",
            "月次レポート（GA4 / Search Console / 導線クリック）",
            "改善提案（優先順位つき：今月やること1〜3点）",
            "改善実装（CTA配置、文章、構成、内部リンク、速度、スマホUI）",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="オプション（要件に応じて）"
        description="下記はご希望と体制に応じて対応します。必要に応じて提携先との連携も行います。"
        className="bg-slate-50"
      >
        <ul className="list-disc space-y-2 pl-6 text-sm leading-7 text-slate-700">
          <li>LP新規制作</li>
          <li>記事導線の設計・改善</li>
          <li>API/自動化（FastAPI等、要件に応じて・提携含む）</li>
        </ul>
      </Section>

      <Section title="ご相談の流れ" description="まずは15分の無料相談で現状を確認します。">
        <div className="rounded-lg border border-slate-200 bg-white p-6">
          <p className="text-sm leading-7 text-slate-700">
            事務所サイトURLと、相談目的・困りごとを共有いただければ、初回打ち合わせで改善の方向性を整理します。
            成果保証ではなく、観測可能な指標をベースに改善施策をご提案します。
          </p>
          <div className="mt-5">
            <CTAButton href={timerexUrl} external>
              15分無料相談を予約（TimeRex）
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}