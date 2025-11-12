'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

export default function Map() {
  // Coordinates for 48W6+XF3, Masiit, Calauan, Laguna
  const position: [number, number] = [14.1474, 121.3114];

  useEffect(() => {
    // Clean up on unmount
    return () => {
      const containers = document.querySelectorAll('.leaflet-container');
      containers.forEach((container) => {
        (container as any)._leaflet_id = null;
      });
    };
  }, []);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <MapContainer
        center={position}
        zoom={17}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            <div className="text-center">
              <strong className="text-primary">Crispy Corner by LDRR</strong>
              <br />
              <span className="text-sm">Barangay Kanluran Hall</span>
              <br />
              <span className="text-xs text-gray-600">48W6+XF3, Masiit, Calauan, Laguna</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
