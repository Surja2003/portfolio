export function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.08] portfolio-grid-mask"
      />

      {/* Subtle wash (static) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/80" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(56,189,248,0.10),transparent_60%),radial-gradient(700px_circle_at_80%_30%,rgba(168,85,247,0.08),transparent_55%)]" />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay portfolio-noise" />
    </div>
  );
}
