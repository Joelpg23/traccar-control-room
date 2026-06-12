import { Moon, Sun, Truck } from "lucide-react";
import VehicleSelectorPremium from "./VehicleSelectorPremium";

export default function Header({
  vehicles,
  selectedVehicle,
  setSelectedVehicle,
  theme,
  toggleTheme,
  systemState,
}) {
  const isLive = systemState === "live";

  return (
    <header
      className="
        border-b border-border
        bg-background
        text-foreground
        px-8 py-4
        flex items-center justify-between
        transition-colors
      "
    >

      {/* LEFT SIDE */}
      <div className="flex items-center gap-5">

        {/* ICON */}
        <div
          className="
            w-10 h-10 rounded-xl
            bg-muted
            flex items-center justify-center
            text-foreground
          "
        >
          <Truck size={20} />
        </div>

        {/* TITLE BLOCK */}
        <div>

          <h1 className="text-lg font-semibold">
            Fleet Control Room
          </h1>

          <div className="flex items-center gap-3 mt-1">

            <p className="text-sm text-muted-foreground">
              Real-time vehicle monitoring
            </p>

            {/* SYSTEM STATUS */}
            <div className="flex items-center gap-2">

              <span
                className={`
                  w-2 h-2 rounded-full
                  ${isLive ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground"}
                `}
              />

              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                {systemState || "idle"}
              </span>

            </div>

          </div>

          {/* VEHICLE SELECTOR */}
          <div className="mt-4">
            <VehicleSelectorPremium
              vehicles={vehicles}
              selectedVehicle={selectedVehicle}
              onChange={setSelectedVehicle}
            />
          </div>

        </div>
      </div>

      {/* RIGHT SIDE CONTROLS */}
      <div className="flex items-center gap-3">

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="
            h-10 w-10 rounded-xl
            border border-border
            bg-muted
            text-foreground
            flex items-center justify-center
            hover:bg-accent
            transition-colors
          "
        >
          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

      </div>
    </header>
  );
}