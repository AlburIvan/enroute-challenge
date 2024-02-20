export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function getServiceUrl() {
  return `${import.meta.env.VITE_BACKEND_SERVICE_BASE_URL}:${import.meta.env.VITE_BACKEND_SERVICE_PORT}`;
}

export function formatResistance(resistance: number) {
  if (resistance < 1000) {
    return `${resistance}Ω`;
  }

  if (resistance < 1000000) {
    return `${resistance / 1000}kΩ`;
  }

  return `${resistance / 1000000}MΩ`;
}
