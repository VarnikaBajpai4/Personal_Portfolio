export const GA_MEASUREMENT_ID = "G-68XNG9XZD6";

export function trackPage(path) {
  // Pageview for SPAs
  window.gtag?.("config", GA_MEASUREMENT_ID, { page_path: path });
}

export function track(eventName, params = {}) {
  // Custom events
  window.gtag?.("event", eventName, params);
}
