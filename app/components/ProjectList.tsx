// import wildO2 from "@/public/screenshots/wildO/wildO2.png";
// import Pizza2 from "@/public/screenshots/pizza/pizza2.png";
// import popcorn1 from "@/public/screenshots/popcorn/popcorn1.png";
// import quizzy1 from "@/public/screenshots/quizzy/quizzy1.png";
import Project from "./Project";

function ProjectList() {
  return (
    <div className="space-y-40">
      <Project
        name="The wild Oasis"
        techStack={[
          "Typescript",
          "NextJS",
          "Supabase",
          "Next Auth",
          "Tailwind",
          "Responsive design",
        ]}
        imageSrc="https://raw.githubusercontent.com/joshuatuan/portfolio/refs/heads/assets/images/wildO/wildO2.png"
        liveUrl="https://the-wild-o-ruby.vercel.app/"
        sourceCodeUrl="https://github.com/joshuatuan/WildO/"
      >
        A full-stack e-commerce web app for cabin reservations, built with
        Next.js and Supabase. The platform supports user authentication via
        NextAuth, allowing users to sign in with either credentials or a Google
        account. It offers a responsive design optimized for various devices and
        includes comprehensive CRUD functionality for managing reservations
        seamlessly.
      </Project>

      <Project
        name="Popcan"
        techStack={[
          "React",
          "Supabase",
          "React Query",
          "Supabase Auth",
          "Tailwind",
        ]}
        imageSrc="https://raw.githubusercontent.com/joshuatuan/portfolio/refs/heads/assets/images/popcorn/popcorn1.png"
        liveUrl="https://popcan.vercel.app/"
        sourceCodeUrl="https://github.com/joshuatuan/popcan"
      >
        A movie rating web app where users can search for movies via the OMDB
        API, rate and save their favorite films, and view personalized ratings.
        User accounts are managed with Supabase Auth, with each user&apos;s
        saved ratings are stored in supabase database. Built with React, React
        Query, and Tailwind CSS, the app offers a smooth, responsive experience
        for browsing and rating movies.
      </Project>

      <Project
        name="Quizzy"
        techStack={["React", "Typescript", "Tailwind", "Dark mode"]}
        imageSrc="https://raw.githubusercontent.com/joshuatuan/portfolio/refs/heads/assets/images/quizzy/quizzy1.png"
        liveUrl="https://quizzy-lac-ten.vercel.app/"
        sourceCodeUrl="https://github.com/joshuatuan/quizzy"
      >
        A quiz web app that lets users challenge themselves with a variety of
        quizzes sourced from the Trivia API. Users can select different
        difficulty levels to suit their skill, with questions dynamically
        fetched for each session. Built with React and TypeScript, and featuring
        a responsive dark mode with Tailwind CSS.
      </Project>

      <Project
        name="PizzaHot"
        techStack={["React", "Redux", "Tailwind"]}
        imageSrc="https://raw.githubusercontent.com/joshuatuan/portfolio/refs/heads/assets/images/pizza/pizza2.png"
        liveUrl="https://pizza-hot-seven.vercel.app/"
        sourceCodeUrl="https://github.com/joshuatuan/pizzaHot/"
      >
        A pizza ordering web app where users can browse a variety of pizzas,
        place orders, and manage their cart. The app fetches pizza data and
        handles order creation via an API. Built with React and Redux for state
        management, and React Router for seamless navigation and handling
        loaders and actions on each route.
      </Project>
    </div>
  );
}

export default ProjectList;
