import { type ReactNode } from "react";
import { techStack } from "../constants/techStacks";
import { IconType } from "@icons-pack/react-simple-icons";

export default function TechStackList() {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-2 px-2 sm:grid-cols-3 lg:grid-cols-4">
      {techStack.map((stack) => (
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
