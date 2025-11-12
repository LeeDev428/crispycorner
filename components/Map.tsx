'use client';

import { useEffect, useState } from 'react';

export default function Map() {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Dynamically import Leaflet only on client side
    const loadMap = async () => {
      const L = (await import('leaflet')).default;

      // Fix for default marker icon
      const icon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Initialize map
      const mapContainer = document.getElementById('map');
      if (!mapContainer || mapContainer.hasChildNodes()) return;

      const mapInstance = L.map('map').setView([14.1474, 121.3114], 17);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapInstance);

      L.marker([14.1474, 121.3114], { icon })
        .addTo(mapInstance)
        .bindPopup(`
          <div class="text-center">
            <strong class="text-red-600">Crispy Corner by LDRR</strong>
            <br />
            <span class="text-sm">Barangay Kanluran Hall</span>
            <br />
            <span class="text-xs text-gray-600">48W6+XF3, Masiit, Calauan, Laguna</span>
          </div>
        `);

      setMap(mapInstance);
    };

    loadMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div id="map" className="w-full h-full rounded-lg overflow-hidden" style={{ height: '100%', minHeight: '400px' }} />
  );
}
