import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-16 text-center">
      <Link
        href="https://github.com/joshuatuan/portfolio"
        target="_blank"
        className="inline-flex justify-center border-b-[2.5px] border-transparent text-center text-sm font-semibold transition-transform duration-200 hover:-translate-y-1 hover:border-stone-700 hover:shadow-md sm:text-base md:text-xl"
      >
        Designed and built by Joshua Miguel Tuan
      </Link>
    </footer>
  );
}
