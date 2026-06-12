import { useEffect, useState } from "react";
import MapView from "./MapView";

/* =========================
   TIME FAKE FEEDBACK (UX)
========================= */
function cycleTime(prev) {
  if (prev === "Just now") return "5 seconds ago";
  if (prev === "5 seconds ago") return "12 seconds ago";
  return "Just now";
}

export default function MapContainerCard({ vehicle }) {
  const [lastUpdateText, setLastUpdateText] = useState("Just now");

  useEffect(() => {
    if (!vehicle) return;

    const interval = setInterval(() => {
      setLastUpdateText(cycleTime);
    }, 5000);

    return () => clearInterval(interval);
  }, [vehicle]);

  /* =========================
     EMPTY STATE
  ========================= */
  if (!vehicle) {
    return (
      <div className="
        bg-white dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800
        rounded-3xl p-6
        text-zinc-500
      ">
        No vehicle selected
      </div>
    );
  }

  const isLive = true;

  return (
    <article
      className="
        bg-white dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800

        rounded-3xl
        overflow-hidden

        flex flex-col
        w-full

        transition-all duration-300
        hover:shadow-xl hover:-translate-y-1
      "
      aria-live="polite"
    >

      {/* =========================
          HEADER (CONTROL ROOM STYLE)
      ========================= */}
      <header
        className="
          px-6 py-4
          border-b border-zinc-200 dark:border-zinc-800
          shrink-0
        "
      >
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Vehicle Position
        </p>

        <h3 className="text-lg font-semibold mt-1">
          {vehicle.name}
        </h3>

        {/* STATUS ROW */}
        <div className="flex items-center justify-between mt-3">

          <p className="text-sm text-zinc-500">
            Updated{" "}
            <span className="text-zinc-700 dark:text-zinc-300">
              {lastUpdateText}
            </span>
          </p>

          {/* LIVE INDICATOR */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  animate-ping absolute inline-flex h-full w-full
                  rounded-full bg-emerald-400 opacity-75
                "
              />
              <span
                className="
                  relative inline-flex rounded-full h-2.5 w-2.5
                  bg-emerald-500
                "
              />
            </span>

            <span className="text-xs font-medium text-emerald-500 tracking-wide">
              LIVE
            </span>
          </div>

        </div>
      </header>

      {/* =========================
          MAP AREA
      ========================= */}
      <section
        className="
          relative
          w-full

          h-[320px]
          sm:h-[420px]
          lg:h-[560px]

          bg-zinc-100 dark:bg-zinc-950
        "
      >
        <MapView vehicle={vehicle} />
      </section>

    </article>
  );
}