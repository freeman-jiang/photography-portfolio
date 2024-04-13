import { fetchAllPhotos } from "@/contentful";
import { IPhoto, IPhotoFields } from "@/types/generated/contentful";
import { Photo } from "./Photo";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export const LargeGallery = async () => {
  const photos = await fetchAllPhotos();

  return (
    <div className="mt-24 space-y-3">
      <ToggleGroup
        type="single"
        size={"lg"}
        className="font-switzer justify-start"
        defaultValue="all"
      >
        <ToggleGroupItem value="all">All</ToggleGroupItem>
        <ToggleGroupItem value="a">People</ToggleGroupItem>
        <ToggleGroupItem value="b">Places</ToggleGroupItem>
        <ToggleGroupItem value="c">Things</ToggleGroupItem>
      </ToggleGroup>
      <div className="w-full">
        <div className="relative">
          <div className="gap-2.5 space-y-2.5 columns-md">
            {(photos as IPhoto[])!.map((photo) => (
              <Photo key={photo.sys.id} photo={photo.fields as IPhotoFields} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
