"use client";
import { IPhoto, IPhotoFields } from "@/types/generated/contentful";
import { useMemo, useState } from "react";
import { Photo } from "./Photo";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

interface Props {
  photos: IPhoto[];
}

type Filter = "all" | "people" | "places" | "things";

export const LargeGallery = ({ photos }: Props) => {
  const [filter, setFilter] = useState<Filter>("places");

  const filteredPhotos = photos.filter((photo) => {
    const fields: IPhotoFields = photo.fields as IPhotoFields;

    if (filter === "all") return !fields.tags?.includes("things");

    if (filter === "people") return fields.tags?.includes("people");
    if (filter === "places") return fields.tags?.includes("places");
    if (filter === "things") return fields.tags?.includes("things");

    return false;
  });

  const lightPhotos = useMemo(() => {
    return filteredPhotos.filter((photo) => {
      const fields: IPhotoFields = photo.fields as IPhotoFields;

      return fields.theme?.includes("light");
    });
  }, [filteredPhotos]);

  const darkPhotos = useMemo(() => {
    return filteredPhotos.filter((photo) => {
      const fields: IPhotoFields = photo.fields as IPhotoFields;

      return fields.theme?.includes("dark");
    });
  }, [filteredPhotos]);

  const Photos = () => {
    if (filteredPhotos.length === 0) {
      return (
        <div className="text-stone-400 font-switzer p-4">
          {"Looks like there's nothing here yet."}
        </div>
      );
    }

    return (
      <div className="w-full">
        <div className="relative">
          <div className="gap-2.5 space-y-2.5 columns-md dark:hidden">
            {(lightPhotos as IPhoto[])!.map((photo) => (
              <Photo key={photo.sys.id} photo={photo.fields as IPhotoFields} />
            ))}
          </div>
          <div className="gap-2.5 space-y-2.5 columns-md hidden dark:block">
            {(darkPhotos as IPhoto[])!.map((photo) => (
              <Photo key={photo.sys.id} photo={photo.fields as IPhotoFields} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-10 space-y-3">
      <ToggleGroup
        type="single"
        size={"lg"}
        className="font-switzer justify-start"
        defaultValue="places"
        onValueChange={(value: Filter) => {
          if (value) setFilter(value);
        }}
      >
        {/* <ToggleGroupItem value="all" className="">
          All
        </ToggleGroupItem> */}
        <ToggleGroupItem value="places">Places</ToggleGroupItem>
        <ToggleGroupItem value="people">People</ToggleGroupItem>
        <ToggleGroupItem value="things">Things</ToggleGroupItem>
      </ToggleGroup>
      <Photos />
    </div>
  );
};
