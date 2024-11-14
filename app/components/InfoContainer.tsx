import ProjectList from "./ProjectList";
import Resume from "./Resume";
import TechStackList from "./TechStack";

export default function InfoContainer() {
  return (
    <div className="mx-auto my-40 grid max-w-6xl gap-y-24 p-7 lg:grid-cols-[10rem_1fr] lg:gap-x-40 lg:gap-y-48 lg:p-14">
      <div className="justify-self-start lg:justify-self-end">
        <h3 className="inline-block border-b-[3px] border-stone-800 text-xl font-semibold uppercase">
          About me
        </h3>
      </div>
      <div className="space-y-10">
        <div className="max-w-2xl space-y-6 text-lg font-[450] leading-8">
          <p>
            I recently graduated from FEU Institute of Technology with a degree
            in Computer Science.
          </p>
          <p>
            I’m an aspiring software developer who loves bringing together
            design and tech. I enjoy using my technical skills and eye for
            design to build great looking, smooth, and scalable apps that offer
            top-notch user experience.
          </p>
          <p>
            When I’m not coding, I’m probably playing video games, eating, or
            shooting some hoops.
          </p>
        </div>
        <Resume />
      </div>

      <div className="justify-self-start lg:justify-self-end">
        <h3 className="mt-36 inline-block border-b-[3px] border-stone-800 text-xl font-semibold uppercase lg:mt-0">
          Skills
        </h3>
      </div>
      <TechStackList />

      <div className="justify-self-start lg:justify-self-end">
        <h3 className="mt-36 inline-block border-b-[3px] border-stone-800 text-xl font-semibold uppercase lg:mt-0">
          Projects
        </h3>
      </div>
      <ProjectList />
    </div>
  );
}
