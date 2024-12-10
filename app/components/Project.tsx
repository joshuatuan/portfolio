import { ArrowUpRightFromSquare, Code } from "lucide-react";
import Image from "next/image";
import { type Project as ProjectType } from "../types";
import LinkButton from "./ui/LinkButton";

export default function Project({
  name,
  techStack,
  imageSrc,
  liveUrl,
  sourceCodeUrl,
  description,
}: ProjectType) {
  return (
    <div>
      {/*PROJECT IMAGE */}
      <a
        href={liveUrl}
        target="_blank"
        className="mb-6 inline-block justify-self-start overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg"
      >
        <Image
          src={imageSrc}
          width={320}
          height={176}
          quality={80}
          alt={`project ${name} screenshot`}
          className="rounded-2xl object-cover transition-transform duration-300 hover:scale-110 hover:object-center"
        />
      </a>

      {/*PROJECT DESCRIPTION */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold text-stone-700">{name}</h3>
        <div className="mb-0 flex max-w-xl flex-wrap items-center gap-1.5 text-stone-700 sm:gap-2">
          {techStack.map((stack) => (
            <span
              className="rounded-full border-[1.5px] border-stone-300 bg-stone-50 px-3 py-2 text-sm font-medium"
              key={stack}
            >
              {stack}
            </span>
          ))}
        </div>

        <p className="mb-3 max-w-2xl text-sm leading-8 text-stone-700 sm:text-base sm:leading-9">
          {description}
        </p>

        <div className="flex gap-6 text-sm font-medium text-stone-700 sm:text-base">
          <LinkButton url={liveUrl}>
            View project
            <ArrowUpRightFromSquare className="h-5" />
          </LinkButton>

          <LinkButton url={sourceCodeUrl}>
            Source code
            <Code className="h-5" />
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
