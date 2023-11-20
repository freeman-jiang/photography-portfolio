"use client";
import { IPhoto } from "@/types/generated/contentful";
import "mapbox-gl/dist/mapbox-gl.css";

import { FillExtrusionLayer } from "mapbox-gl";
import Map, { Layer } from "react-map-gl";
import { PhotoMarker } from "./PhotoMarker";

interface Props {
  accessToken: string;
  photos: IPhoto[];
}

const minZoom = 7;

const buildingLayer: FillExtrusionLayer = {
  id: "add-3d-buildings",
  source: "composite",
  "source-layer": "building",
  filter: ["==", "extrude", "true"],
  type: "fill-extrusion",
  minzoom: minZoom,
  paint: {
    "fill-extrusion-color": "#aaa",

    // Use an 'interpolate' expression to
    // add a smooth transition effect to
    // the buildings as the user zooms in.
    "fill-extrusion-height": [
      "interpolate",
      ["linear"],
      ["zoom"],
      minZoom,
      0,
      minZoom + 1.5,
      ["get", "height"],
    ],
    "fill-extrusion-base": [
      "interpolate",
      ["linear"],
      ["zoom"],
      minZoom,
      0,
      minZoom + 1.5,
      ["get", "min_height"],
    ],
    "fill-extrusion-opacity": 0.6,
  },
};

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
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        projection={{
          name: "globe",
        }}
      >
        {photos.map((photo) => (
          <PhotoMarker key={photo.sys.id} photo={photo} />
        ))}
        <Layer {...buildingLayer} />
      </Map>
    </div>
  );
};
