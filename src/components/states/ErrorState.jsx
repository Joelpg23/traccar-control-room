export default function ErrorState({ message, onRetry }) {
  return (
    <div
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-zinc-950
        text-zinc-100
        px-6
        text-center
      "
      role="alert"
      aria-live="assertive"
    >
      {/* Icon / indicator */}
      <div className="relative mb-6">
        <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold text-red-400">
        System connection failed
      </h1>

      {/* Message */}
      <p className="text-sm text-zinc-400 mt-3 max-w-md leading-relaxed">
        {message ||
          "We were unable to connect to the vehicle tracking system. This may be due to network issues or the server being temporarily unavailable."}
      </p>

      {/* Card hint (control-room style context) */}
      <div className="mt-6 px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-xs text-zinc-500">
        Control system offline — telemetry updates paused
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-8">
        <button
          onClick={onRetry}
          className="
            px-5
            py-2.5
            rounded-xl
            bg-red-500
            text-white
            text-sm
            font-medium
            hover:bg-red-400
            transition
          "
        >
          Retry connection
        </button>

        <button
          onClick={() => window.location.reload()}
          className="
            px-5
            py-2.5
            rounded-xl
            border
            border-zinc-700
            text-zinc-300
            text-sm
            hover:bg-zinc-900
            transition
          "
        >
          Reload system
        </button>
      </div>

      {/* subtle footer */}
      <p className="text-xs text-zinc-600 mt-10">
        If the issue persists, check Traccar demo server status
      </p>
    </div>
  );
}