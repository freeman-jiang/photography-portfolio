import { client, extractContentfulFileUrl } from "@/contentful";
import { IPhoto, IPhotoFields } from "@/types/generated/contentful";
import { AssetDetails } from "contentful";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Photo = ({ photo }: { photo: IPhotoFields }) => {
  console.log(photo.image.fields.file);

  const file = photo.image.fields.file!;
  const width = (file.details as AssetDetails).image!.width;
  const height = (file.details as AssetDetails).image!.height;
  const src = extractContentfulFileUrl(file.url as string);

  return (
    <Dialog>
      <div className="w-full relative">
        <Image
          src={src}
          alt={photo.title}
          width={width}
          height={height}
          className="-z-10 object-cover"
        />
        <DialogTrigger asChild>
          <div className="cursor-pointer bg-white/10 w-full h-full absolute top-0 left-0 p-4 opacity-0 hover:opacity-100 transition-all ease-linear"></div>
        </DialogTrigger>
        <DialogContent className="max-w-screen-xl bg-black border-none">
          <div className="bg-red-50 w-full">
            <Image
              src={src}
              alt={photo.title}
              width={width}
              height={height}
              className="-z-10 object-cover aspect-video"
            />
          </div>
          {/* <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription> */}
        </DialogContent>
      </div>
    </Dialog>
  );
};

export const Gallery = async () => {
  const {
    fields: { photos },
  } = await client.getEntry("4okYBRVkNOHqOYg6e6vOOK");

  return (
    <div className="mt-8">
      <div className="w-full">
        <div className="relative">
          <div className="columns-md gap-8 space-y-8">
            {(photos as IPhoto[])!.map((photo) => (
              <Photo key={photo.sys.id} photo={photo.fields as IPhotoFields} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
