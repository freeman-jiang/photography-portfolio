"use client";
import { IPhoto, IPhotoFields } from "@/types/generated/contentful";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

import Map, { Marker } from "react-map-gl";

interface Props {
  accessToken: string;
  photos: IPhoto[];
}

export const PhotoMap = ({ accessToken, photos }: Props) => {
  console.log(photos);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const openPopup = (index: number) => {
    setPopupIndex(index);
  };

  const closePopup = () => {
    setPopupIndex(null);
  };

  const CustomMarker = ({ index, item }: { index: number; item: IPhoto }) => {
    const fields = item.fields as IPhotoFields;

    return (
      <Marker
        longitude={fields.coordinates.lon}
        latitude={fields.coordinates.lat}
      >
        {/* <div className="marker" onClick={() => openPopup(index)}>
          <div className="text-xl font-bold text-emerald-500">HELLO WORLD</div>
        </div> */}
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
        {photos.map((item, index) => (
          <CustomMarker key={index} index={index} item={item} />
        ))}
      </Map>
    </div>
  );
};
