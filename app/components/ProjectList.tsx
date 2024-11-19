import { type Project as ProjectType } from "../types";
import Project from "./Project";

type ProjectListProps = {
  projects: ProjectType[];
};

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="space-y-40">
      {projects.map((project) => (
        <Project
          name={project.name}
          techStack={project.techStack}
          imageSrc={project.imageSrc}
          liveUrl={project.liveUrl}
          sourceCodeUrl={project.sourceCodeUrl}
          description={project.description}
          key={project.name}
        />
      ))}
    </div>
  );
}

export default ProjectList;
