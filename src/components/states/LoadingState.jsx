export default function LoadingState() {
  return (
    <div
      className="min-h-screen bg-background text-foreground p-4 sm:p-6 lg:p-8"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >

      {/* =========================
          HEADER SKELETON
      ========================= */}
      <div className="flex items-center justify-between mb-8">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <div className="h-10 w-10 rounded-xl bg-muted animate-pulse" />

          <div className="space-y-2">
            <div className="h-4 w-40 bg-muted rounded animate-pulse" />
            <div className="h-3 w-64 bg-muted rounded animate-pulse" />
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <div className="h-10 w-[260px] rounded-2xl bg-muted animate-pulse" />
          <div className="h-10 w-10 rounded-xl bg-muted animate-pulse" />

        </div>

      </div>

      {/* =========================
          MAIN GRID
      ========================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* =========================
            STATUS CARD SKELETON
        ========================= */}
        <aside className="lg:col-span-4 space-y-5">

          {/* title block */}
          <div className="space-y-2">
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            <div className="h-6 w-40 bg-muted rounded animate-pulse" />
          </div>

          {/* status indicator */}
          <div className="h-20 rounded-3xl bg-muted animate-pulse" />

          {/* speed */}
          <div className="h-28 rounded-2xl bg-muted animate-pulse" />

          {/* last update */}
          <div className="h-24 rounded-2xl bg-muted animate-pulse" />

          {/* coordinates */}
          <div className="h-28 rounded-2xl bg-muted animate-pulse" />

        </aside>

        {/* =========================
            MAP SKELETON
        ========================= */}
        <section className="lg:col-span-8">

          <div className="relative h-[60vh] lg:h-[75vh] rounded-3xl bg-muted overflow-hidden">

            {/* shimmer layer */}
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent" />

          </div>

        </section>

      </div>

      {/* FOOTER TEXT */}
      <div className="mt-6 text-xs text-muted-foreground text-center">
        Initializing real-time fleet telemetry…
      </div>

      {/* SHIMMER ANIMATION */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-shimmer {
          animation: shimmer 1.6s infinite;
        }
      `}</style>

    </div>
  );
}