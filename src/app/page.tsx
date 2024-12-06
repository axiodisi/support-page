import { Radio, Sparkles, Brain, Heart } from "lucide-react";

const ProjectCard = ({
  title,
  icon: Icon,
  description,
  supportLink,
  supportText,
}: {
  title: string;
  icon: any;
  description: string;
  supportLink: string;
  supportText: string;
}) => (
  <div className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/50 transition-all">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-8 h-8 text-pink-500" />
      <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
        {title}
      </h3>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    {supportLink && (
      <a
        href={supportLink}
        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
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
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text">
          AI Projects
        </h1>
        <div className="grid gap-6 mb-12">
          <ProjectCard
            icon={Radio}
            title="RADIOAI"
            description="24/7 AI radio with three trans hosts discussing trending topics."
            supportLink="https://gofundme.com/your-radioai"
            supportText="Support Server Costs"
          />
          <ProjectCard
            icon={Sparkles}
            title="ByteSpark.Motivation"
            description="AI-powered Instagram motivation channel. 300+ unique shorts inspiring people daily."
            supportLink="https://ko-fi.com/your-bytespark"
            supportText="Buy Me a Coffee"
          />
          <ProjectCard
            icon={Brain}
            title="Thought Refiner"
            description="Privacy-first communication tool transforming complex thoughts into clear messages."
            supportLink="https://your-payment-link.com"
            supportText="Purchase Tokens"
          />
        </div>
        <div className="text-center text-gray-400">
          <p>
            All support helps keep these projects running and growing. Thank
            you! 💜
          </p>
        </div>
      </main>
    </div>
  );
}
