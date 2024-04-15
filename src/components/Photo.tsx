"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { extractPhotoDetails } from "@/lib/contentful";
import { IPhotoFields } from "@/types/generated/contentful";
import { motion } from "framer-motion";
import mixpanel from "mixpanel-browser";
import Image from "next/image";
import { useState } from "react";
import { Spinner } from "./Spinner";

export const Photo = ({ photo }: { photo: IPhotoFields }) => {
  const [open, setOpen] = useState(false);
  const { height, src, width } = extractPhotoDetails(photo);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: Math.random() * 1.5,
        }}
        className="w-full relative font-switzer"
      >
        <Image
          src={src}
          alt={photo.title}
          width={width}
          height={height}
          className="-z-10 object-cover"
          quality={30}
        />
        <DialogTrigger asChild>
          <div
            className="cursor-pointer bg-stone-950/0 w-full flex h-full absolute top-0 left-0 p-4 opacity-0 hover:opacity-100 transition-all ease-linear text-lg text-white"
            onClick={() => {
              mixpanel.track("Photo Click", { location: photo.location });
            }}
          ></div>
        </DialogTrigger>

        <DialogContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          onClick={() => setOpen(false)}
          className="border-none max-w-none p-0"
        >
          <div className="h-screen flex flex-col justify-end pt-12 pb-4 text-stone-50 items-center space-y-2">
            <div className="font-sans">
              <span className="font-semibold">{photo.location}</span>
              {photo.date && ` | ${photo.date}`}
            </div>
            <div className="flex justify-center items-center h-full lg:mx-8 md:mx-4 mx-2">
              <div className="absolute top-[50%] left-[50] translate-y-[-50%]">
                <div className="flex justify-center items-center">
                  <Spinner className="mr-2.5" />
                  <div className="font-switzer">
                    Loading highest resolution...
                  </div>
                </div>
              </div>
              <Image
                src={src}
                alt={photo.title}
                width={width}
                height={height}
                className="relative object-contain h-full"
                unoptimized
              />
            </div>
          </div>
        </DialogContent>
      </motion.div>
    </Dialog>
  );
};
