export default function VehicleSelector({
  vehicles,
  selectedVehicle,
  onChange,
}) {
  return (
    <select
      value={selectedVehicle.id}
      onChange={(e) =>
        onChange(
          vehicles.find(
            (vehicle) =>
              vehicle.id === Number(e.target.value)
          )
        )
      }
      className="
      bg-zinc-900
      border
      border-zinc-800

      rounded-xl

      px-4
      py-2

      text-sm

      text-zinc-100

      outline-none

      hover:border-zinc-700
      "
    >
      {vehicles.map((vehicle) => (
        <option
          key={vehicle.id}
          value={vehicle.id}
        >
          {vehicle.name}
        </option>
      ))}
    </select>
  );
}