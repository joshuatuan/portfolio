import { createClient } from "@vercel/edge-config";
import Footer from "./components/Footer";
import InfoContainer from "./components/InfoContainer";
import Intro from "./components/Intro";

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
    return <div>Failed to load portfolio data. Please try again later.</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Intro introData={data.intro} />
      <InfoContainer resumeUrl={data.resumeUrl} projects={data.projects} />
      <Footer />
    </main>
  );
}
