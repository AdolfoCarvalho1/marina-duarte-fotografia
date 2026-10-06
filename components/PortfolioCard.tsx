import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { Work } from "@/lib/content";
import { cn } from "@/lib/ui";

export function PortfolioCard({ work, index }: { work: Work; index: number }) {
  return (
    <li className="mb-9 break-inside-avoid max-[640px]:mb-7">
      <Reveal delay={(index % 3) * 90}>
        <figure className="group m-0">
          <div className="overflow-hidden rounded-card bg-[#f4f3f1]">
            <Image
              src={work.src}
              alt={work.alt}
              width={work.width}
              height={work.height}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={cn(
                "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
                work.ratio === "portrait" ? "aspect-[4/5]" : "aspect-square"
              )}
            />
          </div>
          <figcaption className="mt-[14px] flex items-baseline justify-between gap-[14px]">
            <span>{work.title}</span>
            <span className="text-micro uppercase text-muted">{work.category}</span>
          </figcaption>
        </figure>
      </Reveal>
    </li>
  );
}
