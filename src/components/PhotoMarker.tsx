import { extractPhotoDetails } from "@/lib/contentful";
import { IPhoto, IPhotoFields } from "@/types/generated/contentful";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import { Button } from "./ui/button";

interface Props {
  photo: IPhoto;
}

interface CustomPopupProps {
  photo: IPhoto;
  toggle: () => void;
}

const CustomPopup = ({ photo, toggle }: CustomPopupProps) => {
  const fields = photo.fields as IPhotoFields;
  const { height, src, width } = extractPhotoDetails(fields);

  return (
    <Popup
      longitude={fields.coordinates.lon}
      latitude={fields.coordinates.lat}
      closeButton={false}
      closeOnClick={false}
    >
      <div className="">
        <div className="flex justify-between items-center">
          <div className="mr-3 font-sans text-sm">{fields.location}</div>
          <Button onClick={toggle} className="p-0 h-5 w-5">
            <X className="h-2.5 w-2.5" />
          </Button>
        </div>
        <Image
          className="mt-3 rounded-md"
          src={src}
          alt={fields.title}
          width={width}
          height={height}
          quality={30}
        />
      </div>
    </Popup>
  );
};

export const PhotoMarker = ({ photo }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const fields = photo.fields as IPhotoFields;

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <Marker
      longitude={fields.coordinates.lon}
      latitude={fields.coordinates.lat}
      onClick={() => {
        toggle();
      }}
    >
      {isOpen && <CustomPopup photo={photo} toggle={toggle} />}
    </Marker>
  );
};
