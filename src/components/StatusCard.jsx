import { Gauge, Clock3, MapPinned } from "lucide-react";

/* =========================
   TIME HELPER
========================= */
function timeAgo(dateString) {
  if (!dateString) return "Sin datos";

  const now = new Date();
  const past = new Date(dateString);
  const diffMs = now - past;

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (seconds < 10) return "hace unos segundos";
  if (seconds < 60) return `hace ${seconds} seg`;
  if (minutes < 60) return `hace ${minutes} min`;
  if (hours < 24) return `hace ${hours} h`;

  return past.toLocaleString("es-CO", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/* =========================
   STATUS COLORS (mini design system local)
========================= */
function getStatusStyles(isOnline) {
  return isOnline
    ? "text-emerald-500 bg-emerald-500/10"
    : "text-red-500 bg-red-500/10";
}

export default function StatusCard({ vehicle }) {
  const isOnline = vehicle?.online ?? true;
  const speed = vehicle?.speed ?? 0;

  return (
    <article
      className="
        bg-white dark:bg-zinc-900
        border border-zinc-200 dark:border-zinc-800

        hover:border-zinc-300 dark:hover:border-zinc-700
        hover:shadow-xl hover:-translate-y-1

        transition-all duration-300

        rounded-3xl
        p-6
        space-y-6
      "
      aria-live="polite"
    >

      {/* =========================
          HEADER
      ========================= */}
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Vehicle
        </p>

        <h2 className="text-2xl font-semibold">
          {vehicle?.name || "Sin vehículo"}
        </h2>

        {/* STATUS */}
        <div className="flex items-center gap-3 pt-1">
          <span className="relative flex h-3 w-3">
            <span
              className={`
                absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping
                ${isOnline ? "bg-emerald-400" : "bg-red-400"}
              `}
            />
            <span
              className={`
                relative inline-flex h-3 w-3 rounded-full
                ${isOnline ? "bg-emerald-500" : "bg-red-500"}
              `}
            />
          </span>

          <span
            className={`
              text-sm font-medium px-2 py-0.5 rounded-full
              ${getStatusStyles(isOnline)}
            `}
          >
            {isOnline ? "ONLINE" : "OFFLINE"}
          </span>
        </div>
      </header>

      {/* =========================
          SPEED
      ========================= */}
      <section>
        <dl>
          <dt className="flex items-center gap-2 text-zinc-500 text-sm mb-2">
            <Gauge size={16} />
            Speed
          </dt>

          <dd className="flex items-end gap-2">
            <span
              className={`
                text-6xl font-bold leading-none tracking-tight
                transition-colors duration-300
                ${speed > 80
                  ? "text-red-500"
                  : "text-zinc-900 dark:text-zinc-100"}
              `}
            >
              {speed}
            </span>

            <span className="text-zinc-500 mb-1">km/h</span>
          </dd>
        </dl>
      </section>

      {/* =========================
          LAST UPDATE
      ========================= */}
      <section
        className="
          bg-zinc-50 dark:bg-zinc-950
          border border-zinc-200 dark:border-zinc-800
          rounded-2xl p-4
        "
      >
        <dl>
          <dt className="flex items-center gap-2 text-zinc-500 text-sm mb-2">
            <Clock3 size={16} />
            Last Update
          </dt>

          <dd className="font-medium transition-all duration-300">
            {timeAgo(vehicle?.lastUpdate)}
          </dd>
        </dl>
      </section>

      {/* =========================
          COORDINATES
      ========================= */}
      <section
        className="
          bg-zinc-50 dark:bg-zinc-950
          border border-zinc-200 dark:border-zinc-800
          rounded-2xl p-4
        "
      >
        <dl>
          <dt className="flex items-center gap-2 text-zinc-500 text-sm mb-4">
            <MapPinned size={16} />
            Coordinates
          </dt>

          <div className="space-y-3">
            <div>
              <dt className="text-xs text-zinc-400 uppercase tracking-wide">
                Latitude
              </dt>
              <dd className="font-medium">
                {vehicle?.lat ?? "—"}
              </dd>
            </div>

            <div>
              <dt className="text-xs text-zinc-400 uppercase tracking-wide">
                Longitude
              </dt>
              <dd className="font-medium">
                {vehicle?.lng ?? "—"}
              </dd>
            </div>
          </div>
        </dl>
      </section>

    </article>
  );
}