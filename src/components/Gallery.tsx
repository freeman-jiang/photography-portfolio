import { client } from "@/contentful";
import { IPhoto, IPhotoFields } from "@/types/generated/contentful";
import { Photo } from "./Photo";

export const Gallery = async () => {
  const {
    fields: { photos },
  } = await client.getEntry("4okYBRVkNOHqOYg6e6vOOK");

  return (
    <div className="mt-8 lg:px-10 sm:px-6">
      <div className="w-full">
        <div className="relative">
          <div className="xl:columns-sm columns-md gap-8 space-y-8">
            {(photos as IPhoto[])!.map((photo) => (
              <Photo key={photo.sys.id} photo={photo.fields as IPhotoFields} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
