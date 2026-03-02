import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "ホーム",
  description:
    "企業法務の問い合わせ導線に強い、弁護士事務所向けWeb運用。ページ構成×CTA×計測で毎月改善します。",
  openGraph: {
    title: "ホーム | REGAL WEB SERVICE",
    description:
      "企業法務の問い合わせ導線に強い、弁護士事務所向けWeb運用。ページ構成×CTA×計測で毎月改善。",
    images: ["/og.png"],
  },
};

export default function HomePage() {
  const timerexUrl = "https://timerex.net/s/kws-k_f5a1/322f59ff";

  return (
    <>
      <section className="bg-slate-50 py-14 md:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
          <p className="mb-4 text-sm font-semibold text-slate-600">
            REGAL WEB SERVICE
          </p>

          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
            企業法務の問い合わせ導線に強い。弁護士事務所向けWeb運用（月額）
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 md:text-lg">
            検索で見つからない／何をしている事務所か分からない／問い合わせが増えない、を「ページ構成×CTA×計測」で毎月改善。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href={timerexUrl}
              external
              ariaLabel="15分無料相談を予約（TimeRex）"
            >
              15分無料相談を予約（TimeRex）
            </CTAButton>

            <CTAButton href="/works" variant="secondary">
              実績を見る
            </CTAButton>
          </div>
        </div>
      </section>

      <Section
        title="企業法務サイトの“入口テンプレ”"
        description="押し売りではなく、相談しやすい入口設計を先に整えることで、顧問導入を含む検討の土台を作ります。"
      >
        <ul className="grid gap-3 md:grid-cols-3">
          {[
            "契約書レビュー／作成",
            "労務・コンプラの初動相談",
            "顧問導入（外部法務部）",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium text-slate-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="月次運用の進め方"
        description="小さく改善→計測→積み上げを基本に、今月やることを明確にして進めます。"
        className="bg-slate-50"
      >
        <ol className="space-y-3 text-sm leading-7 text-slate-700">
          <li>1. 現状診断（入口設計/導線/CTA/検索表示）</li>
          <li>2. 月次レポート（GA4 / Search Console / 導線クリック）</li>
          <li>3. 優先順位つき改善提案（今月やること1〜3点）</li>
          <li>4. 改善実装（CTA配置、文章、構成、内部リンク、速度、スマホUI）</li>
        </ol>
      </Section>

      <Section title="よくあるご質問">
        <FAQ />
      </Section>
    </>
  );
}