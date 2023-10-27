import { client, extractContentfulFileUrl } from "@/contentful";
import { IPhoto, IPhotoFields } from "@/types/generated/contentful";
import { AssetDetails } from "contentful";
import Image from "next/image";
import { Spinner } from "./Spinner";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Photo = ({ photo }: { photo: IPhotoFields }) => {
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
          quality={40}
        />
        <DialogTrigger asChild>
          <div className="cursor-pointer bg-white/10 w-full h-full absolute top-0 left-0 p-4 opacity-0 hover:opacity-100 transition-all ease-linear"></div>
        </DialogTrigger>
        <DialogContent className="border-none max-w-none p-0">
          <div className="flex justify-center items-center h-[90vh] lg:mx-8 mx-2">
            <div className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div className="flex justify-center items-center">
                <Spinner className="mr-2" />
                <div>Loading highest resolution image...</div>
              </div>
            </div>
            <Image
              src={src}
              alt={photo.title}
              width={width}
              height={height}
              className="relative object-contain h-full"
              quality={100}
            ></Image>
          </div>
          {/* <div className="translate-x-[-50%] absolute top-0 left-[50%] text-white p-3 pt-1 pb-2 font-mono mt-4 bg-black/40">
            <div className="text-xs">{photo.location}</div>
          </div> */}
          {/* <div className="bg-red-500 w-full h-4 absolute top-0 mt-4 "></div> */}
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
