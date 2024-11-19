import Image from "next/image";
import SocialLink from "./SocialLink";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { type Intro } from "../types";

export type IntroProps = {
  introData: Intro;
};

export default function Intro({ introData }: IntroProps) {
  const socialLinks = [
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/joshua-miguel-tuan-21861b26a/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      link: "mailto:itsjoshuatuan@gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      link: "https://github.com/joshuatuan",
      label: "GitHub",
    },
    {
      icon: Facebook,
      link: "https://www.facebook.com/joshuamigueI/",
      label: "Facebook",
    },
  ];
  const { introText, profilePicUrl } = introData;
  return (
    <header className="min-h-screen p-10 sm:p-20 sm:pt-24 lg:pt-44 xl:p-36 xl:pt-60">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 lg:gap-x-14">
        <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full shadow-xl md:mb-9 md:h-60 md:w-60 lg:order-2 lg:h-96 lg:w-96 xl:h-[30rem] xl:w-[30rem]">
          <Image
            src={profilePicUrl}
            alt="Portrait of Joshua Miguel Tuan"
            quality={60}
            className="object-cover"
            fill
          />
        </div>
        <div className="text-center lg:text-start">
          <div className="mb-8 md:mb-8">
            <p className="mb-2 text-2xl font-[450] md:mb-4 lg:text-3xl">
              Hi there 👋 I am
            </p>
            <h1 className="mb-8 text-4xl font-medium md:mb-6 lg:text-6xl">
              Joshua Miguel Tuan
            </h1>
            <p className="text-xl font-[450] leading-relaxed text-stone-800 md:max-w-3xl lg:px-0 xl:text-2xl xl:leading-loose">
              {introText}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-7 lg:justify-start">
            <div className="flex items-center justify-center gap-1 md:justify-normal">
              {socialLinks.map((social) => (
                <SocialLink
                  Icon={social.icon}
                  link={social.link}
                  label={social.label}
                  key={social.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
