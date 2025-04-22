
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const DEFAULT_LOCATION = { lng: 77.5946, lat: 12.9716 }; // Bangalore (approx clinic location)

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState<string>("");
  const [tokenInput, setTokenInput] = useState<string>("");

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current) return;

    mapboxgl.accessToken = mapboxToken;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [DEFAULT_LOCATION.lng, DEFAULT_LOCATION.lat],
      zoom: 15
    });

    new mapboxgl.Marker({ color: "#23617C" })
      .setLngLat([DEFAULT_LOCATION.lng, DEFAULT_LOCATION.lat])
      .addTo(map);

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    return () => {
      map.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="w-full h-72 rounded-xl overflow-hidden relative bg-gray-100 mt-8 shadow">
      {!mapboxToken && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/80">
          <label className="mb-2 text-sm text-gray-700 font-medium">
            Enter your Mapbox public token to enable the map:
          </label>
          <input
            type="password"
            className="border px-3 py-2 rounded w-[300px] mb-2"
            value={tokenInput}
            onChange={e => setTokenInput(e.target.value)}
            placeholder="Mapbox Public Token"
            autoComplete="off"
          />
          <button
            className="bg-medical-600 text-white rounded px-4 py-2"
            onClick={() => setMapboxToken(tokenInput)}
          >
            Load Map
          </button>
          <div className="mt-1 text-xs text-gray-500 text-center max-w-xs">
            You can find your public token at{" "}
            <a href="https://account.mapbox.com/access-tokens/" className="underline" target="_blank" rel="noopener noreferrer">
              mapbox.com
            </a>. Token is never saved.
          </div>
        </div>
      )}
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
