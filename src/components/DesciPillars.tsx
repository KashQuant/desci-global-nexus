
import { Microscope, Globe, Book, Atom, Dna, Award, Users, Beaker } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DesciPillars = () => {
  const pillars = [
    {
      icon: Microscope,
      title: "Health & Medicine",
      description: "Advancing biomedical research through decentralized protocols and open collaboration",
      examples: ["Clinical trials transparency", "Drug discovery DAOs", "Patient data sovereignty"],
      color: "from-emerald-500 to-emerald-700"
    },
    {
      icon: Globe,
      title: "Climate & Environment",
      description: "Accelerating climate science through global research networks and data sharing",
      examples: ["Carbon measurement protocols", "Biodiversity tracking", "Climate modeling"],
      color: "from-green-500 to-green-700"
    },
    {
      icon: Book,
      title: "Open Access & Publishing",
      description: "Democratizing scientific publishing and peer review processes",
      examples: ["Decentralized peer review", "Open access journals", "Research NFTs"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Atom,
      title: "DeSci Infrastructure",
      description: "Building the foundational protocols and governance structures for decentralized science",
      examples: ["Research DAOs", "Funding mechanisms", "Identity protocols"],
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: Dna,
      title: "AI & Ethics in Research",
      description: "Ensuring responsible AI development and ethical research practices",
      examples: ["Algorithmic transparency", "Bias detection", "Ethical AI frameworks"],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: Users,
      title: "Citizen Science",
      description: "Empowering global participation in scientific research and discovery",
      examples: ["Crowdsourced research", "Community data collection", "Public engagement"],
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pillars of Decentralized Science
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the diverse domains where decentralized science is transforming research, collaboration, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${pillar.color} text-white mr-4`}>
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Areas:</h4>
                  <ul className="space-y-1">
                    {pillar.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Explore Research
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesciPillars;
