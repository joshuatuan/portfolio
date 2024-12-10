import { type ReactNode } from "react";

type DlButtonProps = {
  url: string;
  downloadName: string;
  children: ReactNode;
};

export default function DownloadButton({
  url,
  downloadName,
  children,
}: DlButtonProps) {
  return (
    <a
      href={url}
      download={downloadName}
      className="inline-flex items-center gap-2 rounded-3xl border-[2px] border-stone-600 bg-stone-50 px-3.5 py-2 font-medium text-stone-700 transition-all duration-200 hover:border-stone-800 hover:bg-stone-800 hover:text-stone-50 hover:shadow-md sm:px-7 sm:py-[7px] sm:text-lg"
    >
      {children}
    </a>
  );
}
