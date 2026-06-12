import { useEffect, useRef, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";

import vehicleMarkerLight from "../assets/vehicleMarker-light.svg";
import vehicleMarkerDark from "../assets/vehicleMarker-dark.svg";

/* =========================
   UTILS
   ========================= */
const lerp = (start, end, t) => start + (end - start) * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const getDistance = (a, b) => {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.sqrt(dx * dx + dy * dy);
};

/* =========================
   MAP CONTROLLER
   ========================= */
function MapController({ position, prevPosition }) {
  const map = useMap();

  useEffect(() => {
    if (!position || !prevPosition?.current) return;

    const distance = getDistance(position, prevPosition.current);

    const THRESHOLD = 0.0015;
    if (distance < THRESHOLD) return;

    map.panTo(position, {
      animate: true,
      duration: 0.6,
    });
  }, [position, map, prevPosition]);

  return null;
}

/* =========================
   ICON FACTORY (CLAVE)
   ========================= */
function createIcon(isDark) {
  return new L.Icon({
    iconUrl: isDark ? vehicleMarkerDark : vehicleMarkerLight,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
}

/* =========================
   TILE LAYER
   ========================= */
function MapTiles({ isDark }) {
  return (
    <TileLayer
      key={isDark ? "dark" : "light"} // fuerza reload inmediato
      attribution="&copy; OpenStreetMap"
      url={
        isDark
          ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      }
    />
  );
}

/* =========================
   MAIN MAP
   ========================= */
export default function MapView({ vehicle }) {
  const [position, setPosition] = useState([
    vehicle?.lat || 0,
    vehicle?.lng || 0,
  ]);

  const animationRef = useRef(null);
  const prevPosition = useRef(position);

  /* 🌗 detect dark mode reactivo */
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  /* 🚀 animación posición */
  useEffect(() => {
    if (!vehicle) return;

    const start = prevPosition.current;
    const end = [vehicle.lat, vehicle.lng];

    let startTime;
    const duration = 900;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progressRaw = (timestamp - startTime) / duration;
      const progress = easeOutCubic(Math.min(progressRaw, 1));

      const lat = lerp(start[0], end[0], progress);
      const lng = lerp(start[1], end[1], progress);

      setPosition([lat, lng]);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        prevPosition.current = end;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [vehicle?.lat, vehicle?.lng]);

  if (!vehicle) return null;

  /* 🔥 icon dinámico */
  const icon = createIcon(isDark);

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
      fadeAnimation={false}
      zoomAnimation={false}
    >
      <MapController position={position} prevPosition={prevPosition} />
      <MapTiles isDark={isDark} />

      <Marker position={position} icon={icon}>
        <Popup>
          <div className="space-y-1">
            <p className="font-semibold">{vehicle.name}</p>
            <p>Speed: {vehicle.speed} km/h</p>
            <p>Status: Online</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}