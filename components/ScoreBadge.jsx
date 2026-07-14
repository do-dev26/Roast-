export default function ScoreBadge({ label, value }) {
  return (
    <div className="inline-flex items-center gap-2 bg-ink/5 rounded-full px-3 py-1">
      <span className="font-mono text-xs uppercase tracking-wide text-ink/60">{label}</span>
      <span className="font-mono font-bold text-ink">{value}</span>
    </div>
  );
}
