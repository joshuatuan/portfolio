import SocialLinkList from "./SocialLinkList";
import { type Intro } from "../types";
import ProfilePicture from "./ProfilePicture";
import ProfileIntro from "./ProfileIntro";

type HeroSectionProps = {
  introData: Intro;
};

export default function HeroSection({ introData }: HeroSectionProps) {
  const { introText, profilePicUrl } = introData;
  return (
    <header className="flex min-h-screen flex-col items-center justify-center p-10 sm:p-20">
      <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 lg:gap-x-16">
        <ProfilePicture profilePicUrl={profilePicUrl} />
        <div className="text-center lg:text-start">
          <ProfileIntro introText={introText} />
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-7 lg:justify-start">
            <SocialLinkList />
          </div>
        </div>
      </div>
    </header>
  );
}
