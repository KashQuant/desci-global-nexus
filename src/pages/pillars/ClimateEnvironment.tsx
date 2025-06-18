
import { Globe } from 'lucide-react';
import PillarPage from '@/components/PillarPage';

const ClimateEnvironment = () => {
  const pillarData = {
    icon: Globe,
    title: "Climate & Environment",
    description: "Accelerating climate science through global research networks and data sharing",
    examples: ["Carbon measurement protocols", "Biodiversity tracking", "Climate modeling"],
    color: "from-green-500 to-green-700",
    detailedContent: {
      overview: "The Climate & Environment pillar harnesses decentralized science to address the climate crisis through transparent carbon measurement, global biodiversity tracking, and collaborative climate modeling. We're building open protocols that enable worldwide coordination on environmental research and data sharing.",
      challenges: [
        "Inconsistent carbon measurement standards across regions",
        "Lack of real-time biodiversity monitoring data",
        "Limited access to climate modeling resources",
        "Fragmented environmental research efforts",
        "Verification challenges in carbon offset projects"
      ],
      solutions: [
        "Standardized, blockchain-verified carbon measurement protocols with real-time monitoring capabilities",
        "Decentralized biodiversity tracking networks using IoT sensors and citizen science contributions",
        "Open-source climate modeling platforms that democratize access to computational resources",
        "Smart contracts for verified carbon credits with transparent impact measurement"
      ],
      projects: [
        {
          name: "CarbonDAO",
          description: "Decentralized carbon credit verification and trading platform",
          status: "Active"
        },
        {
          name: "BioDiversity Net",
          description: "Global network for biodiversity monitoring using sensor networks",
          status: "Development"
        },
        {
          name: "ClimateModel Commons",
          description: "Open-source platform for collaborative climate modeling",
          status: "Research"
        }
      ]
    }
  };

  return <PillarPage pillarData={pillarData} />;
};

export default ClimateEnvironment;
