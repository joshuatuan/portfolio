import Image from "next/image";
import SocialLink from "./SocialLink";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";

export default function Intro() {
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

  return (
    <header className="min-h-screen p-10 sm:p-20 sm:pt-24 lg:pt-44 xl:p-36 xl:pt-60">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 lg:gap-x-14">
        <div className="relative mx-auto mb-4 h-44 w-44 overflow-hidden rounded-full shadow-xl md:mb-9 md:h-60 md:w-60 lg:order-2 lg:h-96 lg:w-96 xl:h-[30rem] xl:w-[30rem]">
          <Image
            src="/jmt.jpeg"
            alt="Portrait of Joshua Miguel Tuan"
            fill
            quality={80}
            className="object-cover"
          />
        </div>
        <div className="text-center lg:text-start">
          <div className="mb-6 md:mb-8">
            <p className="mb-2 text-2xl font-[450] md:mb-4 lg:text-3xl">
              Hi there 👋 I am
            </p>
            <h1 className="mb-4 text-4xl font-medium md:mb-6 lg:text-6xl">
              Joshua Miguel Tuan
            </h1>
            <p className="px-0 text-xl font-[450] leading-relaxed text-stone-800 md:max-w-3xl lg:px-0 xl:text-2xl xl:leading-loose">
              I’m a passionate front end web developer. I love building
              beautiful interfaces, web apps, and everything in between! Explore
              my portfolio to see my growing skills and dedication to quality
              development.
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
            {/* <Resume /> */}
          </div>
        </div>
      </div>
    </header>
  );
}
