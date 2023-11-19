import { Gallery } from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="py-8">
      <div className="px-4 font-thin tracking-wide text-3xl lg:px-10 sm:px-6 text-center sm:text-left flex justify-between">
        <div className="font-serif">Freeman Jiang</div>
        <Link
          href="https://uwaterloo.ca/co-operative-education/work-abroad/photo-contest/vote#Photo-05"
          target="_blank"
        >
          <Button>Vote for me!</Button>
        </Link>
      </div>
      <Gallery />
    </main>
  );
}
