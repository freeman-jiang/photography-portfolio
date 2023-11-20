"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

import Map, { Marker } from "react-map-gl";

interface Props {
  accessToken: string;
}

// Generate 50 random lat longs
const latlongs = [...Array(50)].map(() => {
  return [Math.random() * 90, Math.random() * 180];
});
console.log(latlongs);

export const PhotoMap = ({ accessToken }: Props) => {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const openPopup = (index: number) => {
    setPopupIndex(index);
  };

  const closePopup = () => {
    setPopupIndex(null);
  };

  const CustomMarker = ({ index, item }) => {
    console.log(index, item);
    return (
      <Marker longitude={item.longitude} latitude={item.latitude}>
        <div className="marker" onClick={() => openPopup(index)}>
          <div className="text-xl font-bold text-emerald-500">HELLO WORLD</div>
        </div>
      </Marker>
    );
  };

  return (
    <div className="flex justify-center">
      <Map
        mapboxAccessToken={accessToken}
        initialViewState={{
          latitude: 40.557729,
          longitude: -90.214155,
          zoom: 3,
        }}
        style={{ width: "80vw", height: "80vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        projection={{
          name: "globe",
        }}
      >
        {/* {latlongs.map((latlong, index) => (
          <Marker key={index} longitude={latlong[1]} latitude={latlong[0]} />
        ))} */}
        {latlongs.map((latlong, index) => (
          <CustomMarker
            key={index}
            index={index}
            item={{ latitude: latlong[0], longitude: latlong[1] }}
          />
        ))}
      </Map>
    </div>
  );
};
