
import { Microscope } from 'lucide-react';
import PillarPage from '@/components/PillarPage';

const HealthMedicine = () => {
  const pillarData = {
    icon: Microscope,
    title: "Health & Medicine",
    description: "Advancing biomedical research through decentralized protocols and open collaboration",
    examples: ["Clinical trials transparency", "Drug discovery DAOs", "Patient data sovereignty"],
    color: "from-emerald-500 to-emerald-700",
    detailedContent: {
      overview: "The Health & Medicine pillar of DeSci focuses on revolutionizing biomedical research through decentralized protocols, transparent clinical trials, and patient-centric data ownership. By leveraging blockchain technology and DAOs, we're creating new models for drug discovery, clinical research, and healthcare innovation that put patients and researchers first.",
      challenges: [
        "Lack of transparency in clinical trial data",
        "High costs and long timelines for drug development",
        "Limited patient access to experimental treatments",
        "Centralized control over medical research funding",
        "Data silos preventing collaborative research"
      ],
      solutions: [
        "Blockchain-based clinical trial registries ensuring complete transparency and immutable records of all trial data and outcomes",
        "Decentralized drug discovery DAOs that crowd-source research funding and democratize pharmaceutical development",
        "Patient-controlled health data platforms using zero-knowledge proofs to enable research participation while maintaining privacy",
        "Smart contract-based research funding that automatically releases payments based on milestone achievements"
      ],
      projects: [
        {
          name: "TrialDAO",
          description: "Decentralized platform for transparent clinical trial management and patient recruitment",
          status: "Active"
        },
        {
          name: "MedChain",
          description: "Blockchain-based medical record system with patient-controlled access",
          status: "Development"
        },
        {
          name: "DrugDiscovery DAO",
          description: "Community-funded drug discovery platform focusing on rare diseases",
          status: "Active"
        }
      ]
    }
  };

  return <PillarPage pillarData={pillarData} />;
};

export default HealthMedicine;
