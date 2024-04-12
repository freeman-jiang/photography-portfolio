import { LargeGallery } from "@/components/Gallery";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="py-14 lg:px-16 sm:px-6 px-4">
      <div className="text-4xl font-semibold font-switzer">Freeman Jiang</div>

      <div className="mt-2 text-stone-600 text-lg font-inter">
        Currently based in{" "}
        <span className="font-semibold text-stone-950">Waterloo, Ontario</span>.
      </div>

      <LargeGallery />
    </main>
  );
}
