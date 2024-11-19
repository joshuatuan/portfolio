import { Project } from "../types";
import AboutMe from "./AboutMe";
import InfoHeader from "./InfoHeader";
import ProjectList from "./ProjectList";
import Resume from "./Resume";
import TechStackList from "./TechStack";

type InfoProps = {
  resumeUrl: string;
  projects: Project[];
};

export default function InfoContainer({ resumeUrl, projects }: InfoProps) {
  return (
    <div className="mx-auto my-40 grid max-w-6xl gap-y-24 p-7 lg:grid-cols-[10rem_1fr] lg:gap-x-40 lg:gap-y-48 lg:p-14">
      <div className="justify-self-start lg:justify-self-end">
        <InfoHeader>About me</InfoHeader>
      </div>
      <div className="space-y-10">
        <AboutMe />
        <Resume resumeUrl={resumeUrl} />
      </div>

      <div className="justify-self-start lg:justify-self-end">
        <InfoHeader>Skills</InfoHeader>
      </div>
      <TechStackList />

      <div className="justify-self-start lg:justify-self-end">
        <InfoHeader>Projects</InfoHeader>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
}
