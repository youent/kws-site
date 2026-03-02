import Link from "next/link";
import CTAButton from "@/components/CTAButton";

const timerexUrl = "https://timerex.net/s/kws-k_f5a1/322f59ff";

const navItems = [
  { href: "/service", label: "Service" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="text-sm font-bold tracking-wide text-slate-900">
          REGAL WEB SERVICE
        </Link>
        <nav aria-label="グローバルナビゲーション" className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
            >
              {item.label}
            </Link>
          ))}
          <CTAButton href={timerexUrl} external ariaLabel="15分無料相談を予約（TimeRex）">
            15分無料相談を予約
          </CTAButton>
        </nav>
      </div>
    </header>
  );
}