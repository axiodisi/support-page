import { Radio, Sparkles, Brain, Heart } from "lucide-react";
import { LucideIcon } from "lucide-react";

const ProjectCard = ({
  title,
  icon: Icon,
  description,
  supportLink,
  supportText,
}: {
  title: string;
  icon: LucideIcon;
  description: string;
  supportLink: string;
  supportText: string;
}) => (
  <div className="p-4 md:p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all">
    <div className="flex items-center gap-2 md:gap-3 mb-3">
      <Icon className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />
      <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
        {title}
      </h3>
    </div>
    <p className="text-sm md:text-base text-gray-300 mb-4">{description}</p>
    {supportLink && (
      <a
        href={supportLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm md:text-base w-full justify-center md:w-auto text-white hover:from-blue-500 hover:to-purple-500"
      >
        <Heart className="w-4 h-4" />
        {supportText}
      </a>
    )}
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black/95 to-purple-900/20">
      <main className="container mx-auto px-3 md:px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text">
          AI Projects
        </h1>
        <div className="grid gap-4 md:gap-6 mb-8 md:mb-12">
          <ProjectCard
            icon={Radio}
            title="RADIOAI"
            description="24/7 AI radio with three trans hosts discussing trending topics."
            supportLink="https://www.gofundme.com/manage/save-radioai-bridging-divides-one-conversation-at-a-time"
            supportText="Support Server Costs"
          />
          <ProjectCard
            icon={Sparkles}
            title="ByteSpark.Motivation"
            description="AI-powered Instagram motivation channel. 300+ unique shorts inspiring people daily."
            supportLink="https://ko-fi.com/bytespark"
            supportText="Buy Me a Coffee"
          />
          <ProjectCard
            icon={Brain}
            title="Thought Refiner"
            description="Privacy-first communication tool transforming complex thoughts into clear messages."
            supportLink="https://your-payment-link.com"
            supportText="Coming Soon"
          />
        </div>
        <div className="text-center text-gray-400 text-sm md:text-base">
          <p>
            All support helps keep these projects running and growing. Thank
            you! 💜
          </p>
        </div>
      </main>
    </div>
  );
}
