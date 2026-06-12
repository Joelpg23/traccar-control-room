import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Truck } from "lucide-react";

export default function VehicleSelectorPremium({
  vehicles,
  selectedVehicle,
  onChange,
}) {
  return (
    <Select
      value={selectedVehicle ? String(selectedVehicle.id) : undefined}
      onValueChange={(value) => {
        const vehicle = vehicles.find((v) => v.id === Number(value));
        if (vehicle) onChange(vehicle);
      }}
    >
      {/* TRIGGER */}
      <SelectTrigger
        aria-label="Select vehicle"
        className="
          w-[380px]
          h-16
          px-6
          py-5
          rounded-3xl

          bg-background
          text-foreground
          border border-border

          hover:bg-accent

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-emerald-500
          focus-visible:ring-offset-2

          transition-all
        "
      >
        <SelectValue placeholder="Select a vehicle..." />
      </SelectTrigger>

      {/* CONTENT */}
      <SelectContent
        className="
          bg-popover
          text-popover-foreground
          border border-border
          p-2
          rounded-2xl
          shadow-xl
        "
      >
        {vehicles.map((vehicle) => (
          <SelectItem
            key={vehicle.id}
            value={String(vehicle.id)}
            className="
              py-4
              px-3
              rounded-lg

              focus-visible:outline-none

              data-[highlighted]:bg-accent
              data-[highlighted]:text-accent-foreground

              transition-colors
            "
          >
            <div className="flex flex-col gap-1">

              {/* TOP ROW */}
              <div className="flex items-center gap-2">

                <Truck size={14} className="text-muted-foreground" />

                <div
                  className={`
                    w-2 h-2 rounded-full
                    ${vehicle.online ? "bg-emerald-500" : "bg-red-500"}
                  `}
                />

                <span className="font-medium text-foreground">
                  {vehicle.name}
                </span>
              </div>

              {/* SPEED */}
              <span className="text-xs text-muted-foreground">
                {vehicle.speed} km/h
              </span>

            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}