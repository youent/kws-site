import CTAButton from "@/components/CTAButton";

const timerexUrl = "https://timerex.net/s/kws-k_f5a1/322f59ff";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-300 bg-white/95 p-3 backdrop-blur md:hidden">
      <CTAButton
        href={timerexUrl}
        external
        className="w-full"
        ariaLabel="無料相談予約（TimeRex）"
      >
        無料相談予約
      </CTAButton>
    </div>
  );
}