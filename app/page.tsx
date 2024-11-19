import { createClient } from "@vercel/edge-config";
import Footer from "./components/Footer";
import InfoContainer from "./components/InfoContainer";
import Intro from "./components/Intro";
import { type Project } from "./types/types";

async function getPortfolioData(): Promise<Project[]> {
  const client = createClient(process.env.EDGE_CONFIG);
  const portfolioData = await client.getAll();
  return portfolioData;
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <Intro />
      <InfoContainer />
      <Footer />
    </main>
  );
}
