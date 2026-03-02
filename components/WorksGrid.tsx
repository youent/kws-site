import { works, WorkItem } from "@/data/works";

type WorksGridProps = {
  items?: WorkItem[];
};

const categoryLabel: Record<WorkItem["category"], string> = {
  client: "クライアント実績",
  self: "自社プロジェクト（検証・改善）",
  sample: "サンプル",
};

export default function WorksGrid({ items = works }: WorksGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.id}
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
        >
          <p className="mb-2 text-xs font-semibold text-slate-500">{categoryLabel[item.category]}</p>
          <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-700">{item.summary}</p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{item.detail}</p>
          {item.metrics && (
            <p className="mt-2 rounded-md bg-slate-50 p-2 text-sm font-medium text-slate-800">
              結果（観測指標）：{item.metrics}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}