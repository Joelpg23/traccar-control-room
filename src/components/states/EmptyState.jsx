export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-zinc-500">

      <div className="w-10 h-10 rounded-xl bg-zinc-800 mb-4" />

      <h2 className="text-lg font-semibold text-zinc-300">
        No vehicles available
      </h2>

      <p className="text-sm text-zinc-600 mt-2 text-center max-w-sm">
        There are currently no active devices in the fleet system.
      </p>

    </div>
  );
}