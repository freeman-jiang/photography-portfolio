import { fetchAllPhotos } from "@/contentful";
import { IPhoto, IPhotoFields } from "@/types/generated/contentful";
import { Photo } from "./Photo";

export const LargeGallery = async () => {
  const photos = await fetchAllPhotos();

  return (
    <div className="mt-24">
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
