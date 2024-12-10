import { type ReactNode } from "react";

type LinkButtonProps = {
  url: string;
  children: ReactNode;
};

export default function LinkButton({ url, children }: LinkButtonProps) {
  return (
    <a
      className="sn:hover:shadow-sm flex items-center gap-1 rounded-2xl py-2 text-stone-700 transition-colors duration-200 hover:text-black sm:px-3 sm:hover:bg-gray-200"
      target="_blank"
      href={url}
    >
      {children}
    </a>
  );
}
