
import { Book } from 'lucide-react';
import PillarPage from '@/components/PillarPage';

const OpenAccessPublishing = () => {
  const pillarData = {
    icon: Book,
    title: "Open Access & Publishing",
    description: "Democratizing scientific publishing and peer review processes",
    examples: ["Decentralized peer review", "Open access journals", "Research NFTs"],
    color: "from-blue-500 to-blue-700",
    detailedContent: {
      overview: "The Open Access & Publishing pillar transforms scientific communication through decentralized peer review, open access publishing, and novel incentive mechanisms. We're creating systems that reward quality research and make scientific knowledge freely accessible to all.",
      challenges: [
        "High publication fees limiting researcher access",
        "Biased peer review processes",
        "Limited transparency in editorial decisions",
        "Slow publication timelines",
        "Lack of credit for peer reviewers"
      ],
      solutions: [
        "Decentralized peer review platforms with transparent reviewer incentives and quality scoring",
        "Blockchain-based open access journals with community governance and funding models",
        "Research NFTs that create new economic models for scientific publishing and attribution",
        "Automated quality assessment using AI and community validation"
      ],
      projects: [
        {
          name: "ReviewDAO",
          description: "Decentralized peer review platform with token incentives",
          status: "Active"
        },
        {
          name: "ScienceNFT",
          description: "Platform for minting and trading research as NFTs",
          status: "Development"
        },
        {
          name: "OpenJournal Protocol",
          description: "Decentralized protocol for community-governed scientific journals",
          status: "Research"
        }
      ]
    }
  };

  return <PillarPage pillarData={pillarData} />;
};

export default OpenAccessPublishing;
