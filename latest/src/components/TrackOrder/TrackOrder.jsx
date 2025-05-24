import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const TrackOrder = () => {
  const mapRef = useRef(null);
  const pathLineRef = useRef(null);
  const distanceLabelRef = useRef(null);
  const customerMarkerRef = useRef(null);

  const providerLocation = { lat: 22.19, long: 71.6667 };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  useEffect(() => {
    mapRef.current = L.map("map").setView(
      [providerLocation.lat, providerLocation.long],
      10
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© Harsh Jivani",
    }).addTo(mapRef.current);

    L.marker([providerLocation.lat, providerLocation.long])
      .addTo(mapRef.current)
      .bindTooltip("Quick Byte", { permanent: true, direction: "top" });

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;

          if (customerMarkerRef.current) {
            customerMarkerRef.current.setLatLng([lat, long]);
          } else {
            customerMarkerRef.current = L.marker([lat, long])
              .addTo(mapRef.current)
              .bindTooltip("You", { permanent: true, direction: "top" });
          }

          if (pathLineRef.current)
            mapRef.current.removeLayer(pathLineRef.current);

          pathLineRef.current = L.polyline(
            [
              [providerLocation.lat, providerLocation.long],
              [lat, long],
            ],
            { color: "red" }
          ).addTo(mapRef.current);

          if (distanceLabelRef.current)
            mapRef.current.removeLayer(distanceLabelRef.current);

          const dist = getDistance(
            providerLocation.lat,
            providerLocation.long,
            lat,
            long
          ).toFixed(2);

          const midLat = (providerLocation.lat + lat) / 2;
          const midLong = (providerLocation.long + long) / 2;

          distanceLabelRef.current = L.marker([midLat, midLong], {
            icon: L.divIcon({
              className: "distance-label",
              html: `<div style="
  
  padding: 8px 12px;
  font-weight: 600;

  
 
  font-size: 14px;
  line-height: 1.4;
">
  ${dist} km
</div>`,
            }),
          }).addTo(mapRef.current);

          mapRef.current.fitBounds(pathLineRef.current.getBounds());
        },
        (error) => {
          console.error("Geolocation error:", error);
        },
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );
    }

    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }} />;
};

export default TrackOrder;
