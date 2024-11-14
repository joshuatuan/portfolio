import { FileText } from "lucide-react";

export default function Resume() {
  return (
    <a
      href="/JoshuaMiguelTuan_resume.pdf"
      download="JoshuaMiguelTuan_Resume.pdf"
      className="inline-flex items-center gap-2 rounded-3xl border-[2px] border-stone-600 bg-stone-50 px-7 py-[7px] text-lg font-medium text-stone-700 transition-all duration-200 hover:border-stone-800 hover:bg-stone-800 hover:text-stone-50 hover:shadow-md"
    >
      <FileText height={26} width={26} />
      Resume
    </a>
  );
}
