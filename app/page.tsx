import { createClient } from "@vercel/edge-config";
import Footer from "./components/ui/Footer";
import PortfolioSections from "./components/PortfolioSections";
import HeroSection from "./components/HeroSection";

import { type Project, type Intro as IntroData } from "./types";

type PortfolioData = {
  intro: IntroData;
  projects: Project[];
  resumeUrl: string;
};

async function getPortfolioData(): Promise<PortfolioData | null> {
  const client = createClient(process.env.EDGE_CONFIG);
  const data = (await client.get("portfolioData")) as PortfolioData;
  return data;
}

export default async function Page() {
  const data = await getPortfolioData();

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center p-10 text-center md:text-xl">
        Failed to load portfolio data 😔 Please try again later
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <HeroSection introData={data.intro} />
      <PortfolioSections resumeUrl={data.resumeUrl} projects={data.projects} />
      <Footer />
    </main>
  );
}
