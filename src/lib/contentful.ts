import { IPhotoFields } from "@/types/generated/contentful";
import { AssetDetails } from "contentful";

export const extractContentfulFileUrl = (url: string) => {
  return `https:${url}`;
};

interface PhotoDetails {
  src: string;
  width: number;
  height: number;
}

export const extractPhotoDetails = (
  photoFields: IPhotoFields
): PhotoDetails => {
  const file = photoFields.image.fields.file!;
  const width = (file.details as AssetDetails).image!.width;
  const height = (file.details as AssetDetails).image!.height;
  const src = extractContentfulFileUrl(file.url as string);

  return { src, width, height };
};
