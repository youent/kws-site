import { faqs } from "@/data/faqs";

export default function FAQ() {
  return (
    <div className="space-y-3">
      {faqs.map((item) => (
        <details
          key={item.question}
          className="rounded-lg border border-slate-200 bg-white p-4 open:shadow-sm"
        >
          <summary className="cursor-pointer list-none font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-7 text-slate-700">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}