const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN!;

// Error if not set
if (!MAPBOX_ACCESS_TOKEN) {
  throw new Error("NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN is not set");
}

export { MAPBOX_ACCESS_TOKEN };
