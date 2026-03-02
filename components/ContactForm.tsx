"use client";

import { FormEvent, useState } from "react";

type FormState = {
  siteUrl: string;
  purpose: string;
  issue: string;
  budget: string;
};

const initialState: FormState = {
  siteUrl: "",
  purpose: "",
  issue: "",
  budget: "",
};

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border border-slate-200 bg-white p-5">
      <div>
        <label htmlFor="siteUrl" className="mb-1 block text-sm font-medium text-slate-800">
          事務所サイトURL
        </label>
        <input
          id="siteUrl"
          type="url"
          required
          value={formState.siteUrl}
          onChange={(e) => setFormState({ ...formState, siteUrl: e.target.value })}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
          placeholder="https://example-lawfirm.jp"
        />
      </div>

      <div>
        <label htmlFor="purpose" className="mb-1 block text-sm font-medium text-slate-800">
          相談目的
        </label>
        <input
          id="purpose"
          type="text"
          required
          value={formState.purpose}
          onChange={(e) => setFormState({ ...formState, purpose: e.target.value })}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
          placeholder="問い合わせ導線を改善したい"
        />
      </div>

      <div>
        <label htmlFor="issue" className="mb-1 block text-sm font-medium text-slate-800">
          困りごと
        </label>
        <textarea
          id="issue"
          required
          rows={4}
          value={formState.issue}
          onChange={(e) => setFormState({ ...formState, issue: e.target.value })}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
          placeholder="検索流入が少ない、何を頼めるか伝わらない など"
        />
      </div>

      <div>
        <label htmlFor="budget" className="mb-1 block text-sm font-medium text-slate-800">
          予算感/開始希望（任意）
        </label>
        <input
          id="budget"
          type="text"
          value={formState.budget}
          onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
          placeholder="例：月額10万円前後、来月開始希望"
        />
      </div>

      <button
        type="submit"
        className="rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
      >
        事前ヒアリングを送信（ダミー）
      </button>

      {sent && (
        <p className="rounded-md bg-emerald-50 p-3 text-sm text-emerald-800" role="status" aria-live="polite">
          送信ありがとうございました。内容を確認し、当日のヒアリングで活用します。（このフォーム送信はダミーです）
        </p>
      )}
    </form>
  );
}