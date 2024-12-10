import Link from "next/link";
import { type ComponentType } from "react";
import { type LucideProps } from "lucide-react";
import { socialLinks } from "../constants/socialLinks";

type SocialLinkProps = {
  Icon: ComponentType<LucideProps>;
  link: string;
  label: string;
};

export default function SocialLinkList() {
  return (
    <div className="flex items-center justify-center gap-2 md:justify-normal">
      {socialLinks.map((social) => (
        <SocialLink
          Icon={social.icon}
          link={social.link}
          label={social.label}
          key={social.label}
        />
      ))}
    </div>
  );
}

function SocialLink({ Icon, link, label }: SocialLinkProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="rounded-full p-3 text-stone-700 transition-all duration-200 hover:bg-gray-200 hover:text-black hover:shadow-sm"
    >
      <Icon className="h-7 w-7 sm:h-9 sm:w-9" />
      <span className="sr-only">{`${label} icon`}</span>
    </Link>
  );
}
