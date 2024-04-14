import { LargeGallery } from "@/components/Gallery";
import { ThemeButton } from "@/components/ThemeButton";
import { fetchAllPhotos } from "@/contentful";
import { shuffleArray } from "@/lib/utils";

export const revalidate = 10;

export default async function Home() {
  const photos = await fetchAllPhotos();

  return (
    <main className="py-14 lg:px-16 sm:px-6 px-4">
      <div className="text-4xl font-semibold font-switzer">Freeman Jiang</div>

      <div className="mt-2 flex flex-col lg:flex-row justify-between gap-4">
        <div className="text-stone-600 dark:text-stone-400 text-lg font-inter">
          Currently based in{" "}
          <span className="font-semibold text-stone-950 dark:text-stone-100">
            Waterloo, Ontario
          </span>
          .
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>

      <LargeGallery photos={shuffleArray(photos)} />
    </main>
  );
}
