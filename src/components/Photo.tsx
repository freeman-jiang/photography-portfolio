"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { extractContentfulFileUrl } from "@/lib/contentful";
import { IPhotoFields } from "@/types/generated/contentful";
import { AssetDetails } from "contentful";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Spinner } from "./Spinner";

export const Photo = ({ photo }: { photo: IPhotoFields }) => {
  const [open, setOpen] = useState(false);
  const file = photo.image.fields.file!;
  const width = (file.details as AssetDetails).image!.width;
  const height = (file.details as AssetDetails).image!.height;
  const src = extractContentfulFileUrl(file.url as string);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.6 + Math.random() * 2,
        }}
        className="w-full relative"
      >
        <Image
          src={src}
          alt={photo.title}
          width={width}
          height={height}
          className="-z-10 object-cover"
          quality={40}
        />
        <DialogTrigger asChild>
          <div className="cursor-pointer bg-stone-950/80 w-full flex h-full absolute top-0 left-0 p-4 opacity-0 hover:opacity-100 transition-all ease-linear justify-center items-center font-serif text-lg">
            {photo.location}
          </div>
        </DialogTrigger>
        <DialogContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          onClick={() => setOpen(false)}
          className="border-none max-w-none p-0"
        >
          <div className="flex justify-center items-center h-[95vh] lg:mx-8 mx-2">
            <div className="text-white absolute top-[50%] left-[50] translate-y-[-50%]">
              <div className="flex justify-center items-center">
                <Spinner className="mr-2.5" />
                <div>Loading highest resolution...</div>
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
      </motion.div>
    </Dialog>
  );
};
