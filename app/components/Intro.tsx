import Image from "next/image";
import SocialLink from "./SocialLink";
import { type Intro } from "../types";
import { socialLinks } from "../constants/socialLinks";

export type IntroProps = {
  introData: Intro;
};

export default function Intro({ introData }: IntroProps) {
  const { introText, profilePicUrl } = introData;
  return (
    <header className="flex min-h-screen flex-col items-center justify-center p-10 sm:p-20">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 lg:gap-x-16">
        <div className="relative mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full shadow-xl md:mb-9 md:h-60 md:w-60 lg:order-2 lg:h-96 lg:w-96">
          <Image
            src={profilePicUrl}
            alt="Portrait of Joshua Miguel Tuan"
            quality={50}
            className="object-cover"
            fill
            priority
          />
        </div>
        <div className="text-center lg:text-start">
          <div className="mb-8 md:mb-8">
            <p className="mb-2 text-2xl font-bold md:mb-4 lg:text-3xl">
              Hi there 👋 I am
            </p>
            <h1 className="mb-8 text-4xl font-bold md:mb-6 lg:mb-9 lg:text-5xl xl:text-6xl">
              Joshua Miguel Tuan
            </h1>
            <p className="text-xl font-[450] leading-relaxed text-stone-800 md:max-w-2xl lg:px-0 xl:text-2xl xl:leading-loose">
              {introText}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-7 lg:justify-start">
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
          </div>
        </div>
      </div>
    </header>
  );
}
