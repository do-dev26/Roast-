import ScoreBadge from './ScoreBadge';

function renderValue(value) {
  if (Array.isArray(value)) {
    return (
      <ul className="space-y-1 list-disc list-inside font-body text-ink/90">
        {value.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  if (typeof value === 'number') {
    return <span className="font-mono font-bold text-2xl">{value}</span>;
  }
  if (typeof value === 'object' && value !== null) {
    return (
      <div className="flex flex-wrap gap-2">
        {Object.entries(value).map(([k, v]) => (
          <ScoreBadge key={k} label={k.replace(/_/g, ' ')} value={v} />
        ))}
      </div>
    );
  }
  return <p className="font-body text-ink/90 leading-relaxed">{value}</p>;
}

// Flattens a result object into shareable plain text for the Share button.
export function resultToShareText(result, fields) {
  return Object.entries(fields)
    .map(([key, label]) => {
      const val = result[key];
      if (val == null) return null;
      const text = Array.isArray(val) ? val.join(' | ') : typeof val === 'object' ? JSON.stringify(val) : val;
      return `${label}: ${text}`;
    })
    .filter(Boolean)
    .join('\n');
}

export default function ResultCard({ engine, result }) {
  return (
    <div className="bg-paper text-ink rounded-2xl p-6 space-y-5">
      {Object.entries(engine.fields).map(([key, label]) => {
        const value = result?.[key];
        if (value == null) return null;
        return (
          <div key={key}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink/50 mb-1">
              {label}
            </h4>
            {renderValue(value)}
          </div>
        );
      })}
    </div>
  );
}
