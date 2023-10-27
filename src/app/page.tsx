import { Gallery } from "@/components/Gallery";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="py-8">
      <div className="font-thin tracking-wide font-serif text-3xl lg:px-10 sm:px-6 text-center sm:text-left">
        Freeman Jiang
      </div>
      <Gallery />
    </main>
  );
}
