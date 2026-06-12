import { useState, useEffect } from "react";

import Header from "./components/Header";
import StatusCard from "./components/StatusCard";
import MapContainerCard from "./components/MapContainerCard";

import LoadingState from "./components/states/LoadingState";
import ErrorState from "./components/states/ErrorState";
import EmptyState from "./components/states/EmptyState";

/* =========================
   MOCK DATA
========================= */

const MOCK_VEHICLES = [
  {
    id: 1,
    name: "Vehicle Alpha",
    online: true,
    speed: 42,
    lat: 4.711,
    lng: -74.072,
    course: 120,
    lastUpdate: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Vehicle Beta",
    online: false,
    speed: 0,
    lat: 4.72,
    lng: -74.08,
    course: 0,
    lastUpdate: new Date().toISOString(),
  },
];

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [systemState, setSystemState] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  /* =========================
     THEME
  ========================= */
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  /* =========================
     INIT MOCK
  ========================= */
  useEffect(() => {
    setSystemState("loading");

    const timer = setTimeout(() => {
      setVehicles(MOCK_VEHICLES);
      setSelectedVehicle(MOCK_VEHICLES[0]);
      setSystemState("live");
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  /* =========================
     DEBUG
  ========================= */
  const setState = (state) => {
    if (state === "error") {
      setErrorMessage("Error simulado de conexión");
    }

    if (state === "empty") {
      setVehicles([]);
      setSelectedVehicle(null);
    }

    if (state === "live") {
      setVehicles(MOCK_VEHICLES);
      setSelectedVehicle(MOCK_VEHICLES[0]);
    }

    if (state === "loading") {
      setVehicles([]);
      setSelectedVehicle(null);
    }

    setSystemState(state);
  };

  /* =========================
     STATES
  ========================= */

  if (systemState === "loading") return <LoadingState />;

  if (systemState === "error") {
    return (
      <ErrorState
        message={errorMessage}
        onRetry={() => setState("live")}
      />
    );
  }

  if (systemState === "empty") return <EmptyState />;

  /* =========================
     UI
  ========================= */

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      
      <Header
        vehicles={vehicles}
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
        systemState={systemState}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="p-4 lg:p-8">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-4
            lg:gap-6
          "
        >
          
          {/* 🗺️ MAPA (prioridad mobile) */}
          <section
  className="
    order-2
    lg:order-2
    col-span-1
    lg:col-span-8
    w-full

    h-[380px]
    sm:h-[450px]
    lg:h-[600px]

    rounded-2xl
    overflow-hidden
    flex flex-col
  "
>
  {/* HEADER + MAPA SE MANTIENE INTACTO */}
  <MapContainerCard vehicle={selectedVehicle} />
</section>

          {/* 📊 STATUS CARD */}
          <aside
            className="
              order-2
              lg:order-1
              col-span-1
              lg:col-span-4
            "
          >
            <StatusCard vehicle={selectedVehicle} />
          </aside>

        </div>
      </main>

      {/* =========================
          DEBUG PANEL
      ========================= */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <button
          onClick={() => setState("loading")}
          className="px-3 py-2 text-xs rounded bg-zinc-800 text-white hover:bg-zinc-700 transition"
        >
          Loading
        </button>

        <button
          onClick={() => setState("live")}
          className="px-3 py-2 text-xs rounded bg-emerald-600 text-white hover:bg-emerald-500 transition"
        >
          Live
        </button>

        <button
          onClick={() => setState("error")}
          className="px-3 py-2 text-xs rounded bg-red-600 text-white hover:bg-red-500 transition"
        >
          Error
        </button>

        <button
          onClick={() => setState("empty")}
          className="px-3 py-2 text-xs rounded bg-zinc-700 text-white hover:bg-zinc-600 transition"
        >
          Empty
        </button>

        <button
          onClick={() => window.location.reload()}
          className="px-3 py-2 text-xs rounded bg-blue-600 text-white hover:bg-blue-500 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;