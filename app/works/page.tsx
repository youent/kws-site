import type { Metadata } from "next";
import Section from "@/components/Section";
import WorksGrid from "@/components/WorksGrid";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Works",
  description:
    "クライアント実績1件と自社プロジェクト5件を掲載。観測指標を中心に、改善プロセスを開示しています。",
  openGraph: {
    title: "Works | REGAL WEB SERVICE",
    description: "企業法務向けWeb運用の実績と検証プロジェクトを紹介。",
    images: ["/og.png"],
  },
};

export default function WorksPage() {
  const client = works.filter((item) => item.category === "client");
  const self = works.filter((item) => item.category === "self");

  return (
    <>
      <section className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">実績・検証プロジェクト</h1>
          <p className="mt-4 text-base leading-8 text-slate-700">
            売上等の断定ではなく、流入・導線クリックなど観測可能な指標を中心に改善内容を開示します。
          </p>
        </div>
      </section>

      <Section title="クライアント実績（1件）">
        <WorksGrid items={client} />
      </Section>

      <Section title="自社プロジェクト（5件）" className="bg-slate-50">
        <WorksGrid items={self} />
      </Section>
    </>
  );
}