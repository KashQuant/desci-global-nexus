
import { Users, Building, Globe, Landmark } from 'lucide-react';

const GlobalImpact = () => {
  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Global Researchers",
      description: "Scientists and innovators worldwide"
    },
    {
      icon: Building,
      number: "180+",
      label: "Partner Institutions",
      description: "Universities and research centers"
    },
    {
      icon: Globe,
      number: "75+",
      label: "Countries",
      description: "Represented in our network"
    },
    {
      icon: Landmark,
      number: "$2.5B+",
      label: "Research Funding",
      description: "Facilitated through our platform"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Impact Through Decentralized Science
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a worldwide ecosystem that democratizes scientific research and accelerates breakthrough discoveries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalImpact;
