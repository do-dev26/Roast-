export default function GenerateAgainButton({ onClick, loading }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="font-display tracking-wide text-xl bg-ink text-paper px-6 py-2 rounded-full disabled:opacity-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-marigold/50"
    >
      {loading ? 'Generating…' : 'Generate Again'}
    </button>
  );
}
