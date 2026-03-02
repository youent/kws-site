import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

const timerexUrl = "https://timerex.net/s/kws-k_f5a1/322f59ff";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "TimeRex予約を最優先にしたお問い合わせページ。対面相談案内と事前ヒアリングフォームを用意しています。",
  openGraph: {
    title: "Contact | REGAL WEB SERVICE",
    description: "15分無料相談の予約と事前ヒアリングはこちら。",
    images: ["/og.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-50 py-14 md:py-16">
        <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">お問い合わせ</h1>
          <p className="mt-4 text-base leading-8 text-slate-700">
            まずはTimeRexで15分無料相談をご予約ください。現状を確認し、対応範囲を整理します。
          </p>
          <div className="mt-6">
            <CTAButton href={timerexUrl} external className="w-full sm:w-auto">
              15分無料相談を予約（TimeRex）
            </CTAButton>
          </div>
        </div>
      </section>

      <Section title="対面をご希望の場合">
        <p className="text-sm leading-7 text-slate-700">
          対面打ち合わせは東京都内（平日 10:00〜18:00）を基本に調整しています。場所や条件は予約時メモ欄にご記入ください。
          ※エリア・日程によりオンラインをご案内する場合があります。
        </p>
      </Section>

      <Section title="簡易フォーム（事前ヒアリング）" className="bg-slate-50">
        <ContactForm />
      </Section>
    </>
  );
}