
import { Atom } from 'lucide-react';
import PillarPage from '@/components/PillarPage';

const DesciInfrastructure = () => {
  const pillarData = {
    icon: Atom,
    title: "DeSci Infrastructure",
    description: "Building the foundational protocols and governance structures for decentralized science",
    examples: ["Research DAOs", "Funding mechanisms", "Identity protocols"],
    color: "from-purple-500 to-purple-700",
    detailedContent: {
      overview: "The DeSci Infrastructure pillar develops the foundational technologies and governance frameworks that enable decentralized science. From research DAOs to identity protocols, we're building the infrastructure layer that supports all other DeSci applications.",
      challenges: [
        "Lack of standardized governance models for research",
        "Complex funding mechanisms for scientific projects",
        "Identity verification challenges in decentralized systems",
        "Interoperability between different DeSci platforms",
        "Scalability limitations of current blockchain networks"
      ],
      solutions: [
        "Modular DAO frameworks specifically designed for scientific research governance and decision-making",
        "Multi-tier funding protocols that support everything from initial research to full development cycles",
        "Decentralized identity systems that maintain researcher credentials while preserving privacy",
        "Cross-chain protocols enabling seamless interaction between different DeSci platforms"
      ],
      projects: [
        {
          name: "ResearchDAO Framework",
          description: "Standardized governance framework for scientific research DAOs",
          status: "Active"
        },
        {
          name: "SciID Protocol",
          description: "Decentralized identity system for researchers and institutions",
          status: "Development"
        },
        {
          name: "FundingFlow",
          description: "Multi-stage funding protocol for scientific research projects",
          status: "Active"
        }
      ]
    }
  };

  return <PillarPage pillarData={pillarData} />;
};

export default DesciInfrastructure;
