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
        <DialogContent className="flex justify-center items-center max-w-none border-none rounded-none p-4">
          <Image
            src={src}
            alt={photo.title}
            width={width}
            height={height}
            className="relative -z-10 object-contain max-h-[96vh] max-w-98vw md:max-w-[90vw]"
          ></Image>
          <div className="translate-x-[-50%] absolute top-0 left-[50%] text-white p-3 pt-1 pb-2 font-mono mt-4 bg-black/40">
            <div className="text-xs">{photo.location}</div>
          </div>
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
