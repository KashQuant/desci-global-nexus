
import { Users } from 'lucide-react';
import PillarPage from '@/components/PillarPage';

const CitizenScience = () => {
  const pillarData = {
    icon: Users,
    title: "Citizen Science",
    description: "Empowering global participation in scientific research and discovery",
    examples: ["Crowdsourced research", "Community data collection", "Public engagement"],
    color: "from-orange-500 to-orange-700",
    detailedContent: {
      overview: "The Citizen Science pillar democratizes scientific research by enabling global participation in data collection, analysis, and discovery. We're building platforms that allow anyone to contribute to scientific knowledge while maintaining research quality and integrity.",
      challenges: [
        "Quality control in crowdsourced data collection",
        "Limited incentives for citizen participation",
        "Lack of training resources for citizen scientists",
        "Difficulty in coordinating large-scale citizen science projects",
        "Integration challenges between citizen data and formal research"
      ],
      solutions: [
        "Blockchain-based reputation systems that ensure data quality while rewarding contributors",
        "Gamified research platforms that make scientific participation engaging and educational",
        "Decentralized training and certification programs for citizen scientists",
        "Smart contracts that automatically distribute rewards based on data quality and impact"
      ],
      projects: [
        {
          name: "CitizenDAO",
          description: "Decentralized platform for coordinating citizen science projects",
          status: "Active"
        },
        {
          name: "DataCrowd",
          description: "Crowdsourced data collection platform with quality assurance protocols",
          status: "Development"
        },
        {
          name: "ScienceQuest",
          description: "Gamified platform for citizen science participation and education",
          status: "Active"
        }
      ]
    }
  };

  return <PillarPage pillarData={pillarData} />;
};

export default CitizenScience;
