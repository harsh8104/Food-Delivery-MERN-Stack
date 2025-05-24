import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const TrackOrder = () => {
  const mapRef = useRef(null);
  const pathLineRef = useRef(null);
  const distanceLabelRef = useRef(null);
  const userLocationRef = useRef(null);

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

          if (userLocationRef.current) {
            userLocationRef.current.setLatLng([lat, long]);
          } else {
            userLocationRef.current = L.marker([lat, long], {
              icon: L.divIcon({
                className: "user-location-marker",
                html: `<div style="
                  background: #4285f4;
                  color: white;
                  padding: 6px 10px;
                  border-radius: 20px;
                  font-weight: 600;
                  font-size: 12px;
                  text-align: center;
                  border: 2px solid white;
                  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                  white-space: nowrap;
                ">You</div>`,
                iconSize: [40, 25],
                iconAnchor: [20, 12],
              }),
            }).addTo(mapRef.current);
          }

          if (pathLineRef.current)
            mapRef.current.removeLayer(pathLineRef.current);

          pathLineRef.current = L.polyline(
            [
              [providerLocation.lat, providerLocation.long],
              [lat, long],
            ],
            { color: "red", weight: 3 }
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
                background: white;
                padding: 8px 12px;
                font-weight: 600;
                font-size: 14px;
                line-height: 1.4;
                border-radius: 6px;
                border: 2px solid #red;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                text-align: center;
                color: #333;
              ">${dist} km</div>`,
              iconSize: [80, 30],
              iconAnchor: [40, 15],
            }),
          }).addTo(mapRef.current);

          mapRef.current.fitBounds(pathLineRef.current.getBounds(), {
            padding: [20, 20],
          });
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
