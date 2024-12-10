import { ReactNode } from "react";

export default function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <h3 className="inline-block border-b-[3px] border-stone-800 text-xl font-semibold uppercase">
      {children}
    </h3>
  );
}
