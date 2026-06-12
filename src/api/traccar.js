const BASE_URL = import.meta.env.VITE_TRACCAR_URL;

/* =========================
   AUTH SESSION
========================= */
export async function login() {
  const res = await fetch(`${BASE_URL}/api/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email: import.meta.env.VITE_TRACCAR_USER,
      password: import.meta.env.VITE_TRACCAR_PASS,
    }),
  });

  if (!res.ok) {
    throw new Error(`Authentication failed (${res.status})`);
  }

  return res.json();
}

/* =========================
   DEVICES
========================= */
export async function getDevices() {
  const res = await fetch(`${BASE_URL}/api/devices`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error(`Error fetching devices (${res.status})`);
  }

  return res.json();
}

/* =========================
   POSITIONS
========================= */
export async function getPositions() {
  const res = await fetch(`${BASE_URL}/api/positions`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error(`Error fetching positions (${res.status})`);
  }

  return res.json();
}