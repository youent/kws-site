export type WorkItem = {
  id: string;
  title: string;
  category: "client" | "self" | "sample";
  summary: string;
  detail: string;
  metrics?: string;
};

export const works: WorkItem[] = [
  {
    id: "client-01",
    title: "企業法務系法律事務所サイト運用",
    category: "client",
    summary: "検索露出と問い合わせ導線の改善を目的に、月次運用で入口ページを再設計。",
    detail:
      "課題：検索に出てこない／何をしているのかわからない。施策：ページ構成改善、CTA徹底、title/description整備、内部リンク整理、計測。",
    metrics:
      "初月で月間流入が約2倍（前月比）規模、予約/問い合わせ導線クリック増。",
  },
  {
    id: "self-01",
    title: "自社プロジェクト：士業サイト導線検証",
    category: "self",
    summary: "ファーストビュー文言とCTA配置のAB検証を実施。",
    detail: "自社プロジェクト（検証・改善）。相談意図に合わせた導線パターンを比較。",
  },
  {
    id: "self-02",
    title: "自社プロジェクト：スマホUI最適化",
    category: "self",
    summary: "SP固定CTAと見出し構造の再設計で可読性を検証。",
    detail: "自社プロジェクト（検証・改善）。スクロール中の予約遷移率を観測。",
  },
  {
    id: "self-03",
    title: "自社プロジェクト：FAQ改善",
    category: "self",
    summary: "よくある質問の配置改善による離脱抑制を検証。",
    detail: "自社プロジェクト（検証・改善）。事前不安の解消に寄与する情報順序を整理。",
  },
  {
    id: "self-04",
    title: "自社プロジェクト：内部リンク設計",
    category: "self",
    summary: "Service / Works / Contact 間の回遊導線を最適化。",
    detail: "自社プロジェクト（検証・改善）。導線クリック計測を元に構造を調整。",
  },
  {
    id: "self-05",
    title: "自社プロジェクト：計測ダッシュボード試作",
    category: "self",
    summary: "GA4・Search Console・CTAクリックを月次で可視化。",
    detail: "自社プロジェクト（検証・改善）。改善提案の優先順位づけ精度を検証。",
  },
];