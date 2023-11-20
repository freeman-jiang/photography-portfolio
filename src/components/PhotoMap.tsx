"use client";
import { IPhoto, IPhotoFields } from "@/types/generated/contentful";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { Marker, Popup } from "react-map-gl";

import Map from "react-map-gl";

interface Props {
  accessToken: string;
  photos: IPhoto[];
}

interface MarkerProps {
  index: number;
  photo: IPhoto;
}

interface PopupProps {
  index: number;
  photo: IPhoto;
}

export const PhotoMap = ({ accessToken, photos }: Props) => {
  const photosById = Object.fromEntries(
    photos.map((photo) => [photo.sys.id, photo])
  );

  const [openPopups, setOpenPopups] = useState<{ [key: string]: boolean }>({}); // photo id -> boolean

  const CustomMarker = ({ index, photo }: MarkerProps) => {
    const fields = photo.fields as IPhotoFields;
    const photoId = photo.sys.id;

    return (
      <Marker
        longitude={fields.coordinates.lon}
        latitude={fields.coordinates.lat}
        onClick={() => {
          setOpenPopups((prev) => ({ ...prev, [photoId]: true }));
        }}
      >
        {/* <div className="marker" onClick={() => openPopup(index)}>
          <div className="text-xl font-bold text-emerald-500">HELLO WORLD</div>
        </div> */}
      </Marker>
    );
  };

  const CustomPopup = ({ index, photo }: PopupProps) => {
    const photoId = photo.sys.id;
    if (!openPopups[photoId]) return null;

    const fields = photo.fields as IPhotoFields;

    return (
      <Popup
        longitude={fields.coordinates.lon}
        latitude={fields.coordinates.lat}
        closeButton={true}
        onClose={() => {
          setOpenPopups((prev) => ({ ...prev, [photoId]: false }));
        }}
        closeOnClick={false}
      >
        You are here
      </Popup>
    );
  };

  const markers = Object.entries(photosById).map(([id, photo], index) => (
    <div key={id}>
      <CustomMarker index={index} photo={photo} />
      <CustomPopup index={index} photo={photo} />
    </div>
  ));

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
        {markers}
      </Map>
    </div>
  );
};
