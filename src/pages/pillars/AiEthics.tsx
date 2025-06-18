
import { Dna } from 'lucide-react';
import PillarPage from '@/components/PillarPage';

const AiEthics = () => {
  const pillarData = {
    icon: Dna,
    title: "AI & Ethics in Research",
    description: "Ensuring responsible AI development and ethical research practices",
    examples: ["Algorithmic transparency", "Bias detection", "Ethical AI frameworks"],
    color: "from-indigo-500 to-indigo-700",
    detailedContent: {
      overview: "The AI & Ethics pillar focuses on developing responsible AI systems for scientific research while establishing ethical frameworks for emerging technologies. We're creating transparent, accountable AI tools that enhance research while protecting human rights and values.",
      challenges: [
        "Black box AI algorithms in research applications",
        "Bias in AI training data affecting research outcomes",
        "Lack of ethical oversight in AI research",
        "Limited transparency in AI decision-making processes",
        "Unequal access to AI research tools and capabilities"
      ],
      solutions: [
        "Explainable AI frameworks specifically designed for scientific research applications",
        "Decentralized bias detection and mitigation protocols for AI training datasets",
        "Community-governed ethical review boards for AI research projects",
        "Open-source AI tools and models that democratize access to advanced research capabilities"
      ],
      projects: [
        {
          name: "EthicalAI DAO",
          description: "Decentralized governance for AI ethics in scientific research",
          status: "Active"
        },
        {
          name: "BiasCheck Protocol",
          description: "Automated bias detection system for AI research datasets",
          status: "Development"
        },
        {
          name: "OpenAI Research",
          description: "Open-source AI models specifically designed for scientific applications",
          status: "Research"
        }
      ]
    }
  };

  return <PillarPage pillarData={pillarData} />;
};

export default AiEthics;
