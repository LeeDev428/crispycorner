'use client';

import { useEffect, useRef } from 'react';

export default function Map() {
  const mapRef = useRef<any>(null);
  const mapInitialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || mapInitialized.current) return;

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
      const mapContainer = document.getElementById('map-container');
      if (!mapContainer || mapInitialized.current) return;

      mapInitialized.current = true;

      // Coordinates for 48W6+XF3, Masiit, Calauan, Laguna
      const mapInstance = L.map('map-container', {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true
      }).setView([14.1474, 121.3114], 17);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(mapInstance);

      L.marker([14.1474, 121.3114], { icon })
        .addTo(mapInstance)
        .bindPopup(`
          <div style="text-align: center; padding: 8px;">
            <strong style="color: #f13b43; font-size: 14px;">Crispy Corner by LDRR</strong>
            <br />
            <span style="font-size: 12px;">Barangay Kanluran Hall</span>
            <br />
            <span style="font-size: 11px; color: #666;">48W6+XF3, Masiit, Calauan, Laguna</span>
          </div>
        `)
        .openPopup();

      mapRef.current = mapInstance;

      // Ensure map renders correctly
      setTimeout(() => {
        mapInstance.invalidateSize();
      }, 100);
    };

    loadMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        mapInitialized.current = false;
      }
    };
  }, []);

  return (
    <div 
      id="map-container" 
      className="w-full rounded-lg overflow-hidden relative" 
      style={{ height: '450px', maxHeight: '450px', zIndex: 1 }} 
    />
  );
}
