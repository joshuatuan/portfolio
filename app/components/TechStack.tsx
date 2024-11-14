import { type ReactNode } from "react";

import {
  type IconType,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNpm,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "@icons-pack/react-simple-icons";
const myTechStack = [
  {
    name: "React JS",
    Icon: SiReact,
  },
  {
    name: "Git",
    Icon: SiGit,
  },
  {
    name: "Supabase",
    Icon: SiSupabase,
  },
  {
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    name: "NPM",
    Icon: SiNpm,
  },
  {
    name: "Python",
    Icon: SiPython,
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
  },
  {
    name: "React Query",
    Icon: SiReactquery,
  },
  {
    name: "Next.JS",
    Icon: SiNextdotjs,
  },
  {
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    name: "Vite",
    Icon: SiVite,
  },
  {
    name: "Redux",
    Icon: SiRedux,
  },
];

export default function TechStackList() {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-2 px-2 sm:grid-cols-3 lg:grid-cols-4">
      {myTechStack.map((stack) => (
        <TechStack Icon={stack.Icon} name={stack.name} key={stack.name} />
      ))}
    </div>
  );
}

type TechStackProps = {
  Icon: IconType;
  name: ReactNode;
};
function TechStack({ Icon, name }: TechStackProps) {
  return (
    <div className="flex items-center gap-2 rounded-full bg-stone-50 px-5 py-3 text-xs font-medium shadow-sm lg:text-sm">
      <Icon size={24} className="text-stone-700" color="" />
      <span>{name}</span>
    </div>
  );
}
//
