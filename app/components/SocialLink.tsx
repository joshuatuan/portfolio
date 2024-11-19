import Link from "next/link";
import { type ComponentType } from "react";
import { type LucideProps } from "lucide-react";

type SocialLinkProps = {
  Icon: ComponentType<LucideProps>;
  link: string;
  label: string;
};

export default function SocialLink({ Icon, link, label }: SocialLinkProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="rounded-2xl px-4 py-2 text-stone-700 transition-all duration-200 hover:bg-stone-100 hover:text-black hover:shadow-md"
    >
      <Icon height={35} width={35} />
      <span className="sr-only">{`${label} icon`}</span>
    </Link>
  );
}
