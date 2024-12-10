import { Project } from "../types";
import AboutMe from "./AboutMe";
import SectionHeader from "./ui/SectionHeader";
import ProjectList from "./ProjectList";
import TechStackList from "./TechStackList";
import DownloadButton from "./ui/DownloadButton";
import { FileText } from "lucide-react";

type InfoProps = {
  resumeUrl: string;
  projects: Project[];
};

export default function PortfolioSections({ resumeUrl, projects }: InfoProps) {
  return (
    <div className="mx-auto my-40 grid max-w-6xl gap-y-24 p-7 lg:grid-cols-[10rem_1fr] lg:gap-x-40 lg:gap-y-48 lg:p-14">
      <div className="justify-self-start lg:justify-self-end">
        <SectionHeader>About me</SectionHeader>
      </div>

      <div className="space-y-10">
        <AboutMe />
        <DownloadButton
          downloadName="JoshuaMiguelTuan_Resume.pdf"
          url={resumeUrl}
        >
          <FileText height={26} width={26} />
          Resume
        </DownloadButton>
      </div>

      <div className="justify-self-start lg:justify-self-end">
        <SectionHeader>Skills</SectionHeader>
      </div>
      <TechStackList />

      <div className="justify-self-start lg:justify-self-end">
        <SectionHeader>Projects</SectionHeader>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
}
