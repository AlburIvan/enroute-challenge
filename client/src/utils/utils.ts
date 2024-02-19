export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function getServiceUrl() {
  return `${import.meta.env.VITE_BACKEND_SERVICE_BASE_URL}:${import.meta.env.VITE_BACKEND_SERVICE_PORT}`;
}
