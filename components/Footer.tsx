"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="border-t border-slate-200 bg-slate-50 pb-20 md:pb-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-700 md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} REGAL WEB SERVICE / 運営：KWS</p>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hover:text-slate-900">
            お問い合わせ
          </Link>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls="privacy-note"
            className="cursor-pointer hover:text-slate-900"
          >
            プライバシーについて
          </button>
        </div>
      </div>
      {open && (
        <div id="privacy-note" className="mx-auto w-full max-w-6xl px-4 pb-8 text-sm leading-7 text-slate-700 md:px-6">
          <p>
            取得した情報はお問い合わせ対応・日程調整・サービス改善の目的で利用します。ご本人の同意なく第三者提供は行いません。
            詳細条件はご契約時に個別提示します。
          </p>
        </div>
      )}
    </footer>
  );
}