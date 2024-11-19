import { ReactNode } from "react";

function InfoHeader({ children }: { children: ReactNode }) {
  return (
    <h3 className="inline-block border-b-[3px] border-stone-800 text-xl font-semibold uppercase">
      {children}
    </h3>
  );
}

export default InfoHeader;
