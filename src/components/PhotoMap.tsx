"use client";
import { IPhoto } from "@/types/generated/contentful";
import "mapbox-gl/dist/mapbox-gl.css";

import Map from "react-map-gl";
import { PhotoMarker } from "./PhotoMarker";

interface Props {
  accessToken: string;
  photos: IPhoto[];
}

export const PhotoMap = ({ accessToken, photos }: Props) => {
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
        {photos.map((photo) => (
          <PhotoMarker key={photo.sys.id} photo={photo} />
        ))}
      </Map>
    </div>
  );
};
