import { ArrowUpRightFromSquare, Code } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { type ReactNode } from "react";

type ProjectProps = {
  name: string;
  children: ReactNode;
  techStack: string[];
  imageSrc: StaticImageData;
  liveUrl: string;
  sourceCodeUrl: string;
};

function Project({
  name,
  techStack,
  imageSrc,
  liveUrl,
  sourceCodeUrl,
  children,
}: ProjectProps) {
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
          placeholder="blur"
          quality={70}
          alt={`project ${name} screenshot`}
          className="h-44 w-80 rounded-2xl object-cover transition-transform duration-300 hover:scale-110 hover:object-center"
        />
      </a>

      {/*PROJECT DESCRIPTION */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold text-stone-700">{name}</h3>
        <div className="mb-2 flex max-w-xl flex-wrap items-center gap-2 text-stone-700">
          {techStack.map((stack) => (
            <span
              className="rounded-full border-[1.5px] border-stone-300 bg-stone-50 px-3 py-2 text-sm font-medium"
              key={stack}
            >
              {stack}
            </span>
          ))}
        </div>

        <p className="mb-2 max-w-2xl leading-9 text-stone-700">{children}</p>

        <div className="flex gap-6 text-base font-medium text-stone-700">
          <a
            className="flex items-center gap-1 rounded-2xl px-3 py-2 text-stone-700 transition-colors duration-200 hover:bg-stone-100 hover:text-black hover:shadow-sm"
            target="_blank"
            href={liveUrl}
          >
            View project
            <ArrowUpRightFromSquare className="h-5" />
          </a>
          <a
            className="flex items-center gap-1 rounded-2xl px-3 py-2 text-stone-700 transition-colors duration-200 hover:bg-stone-100 hover:text-black hover:shadow-sm"
            target="_blank"
            href={sourceCodeUrl}
          >
            Source code
            <Code className="h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
