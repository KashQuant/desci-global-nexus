
import { Users, Building, Award, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GlobalCommunity = () => {
  const advisors = [
    {
      name: "Dr. Sarah Chen",
      role: "Medical Research Advisor",
      institution: "Stanford Medical School",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&auto=format&fit=crop&crop=face"
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Climate Science Lead",
      institution: "MIT Climate Lab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop&crop=face"
    },
    {
      name: "Dr. Elena Kowalski",
      role: "Blockchain Protocol Expert",
      institution: "ETH Zurich",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=300&auto=format&fit=crop&crop=face"
    }
  ];

  const partners = [
    { name: "Harvard Medical School", type: "Academic Partner", logo: "🏥" },
    { name: "Climate DAO", type: "Research Partner", logo: "🌍" },
    { name: "BioProtocol Foundation", type: "Technology Partner", logo: "🧬" },
    { name: "Open Science Institute", type: "Policy Partner", logo: "📚" },
    { name: "Research Commons", type: "Infrastructure Partner", logo: "⚡" },
    { name: "Global Health Network", type: "Community Partner", logo: "🔬" }
  ];

  const regions = [
    { name: "North America", nodes: 25, active: true },
    { name: "Europe", nodes: 32, active: true },
    { name: "Asia Pacific", nodes: 18, active: true },
    { name: "Latin America", nodes: 12, active: false },
    { name: "Africa", nodes: 8, active: false },
    { name: "Middle East", nodes: 6, active: false }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A worldwide network of researchers, institutions, and innovators advancing decentralized science
          </p>
        </div>

        {/* Advisors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <img 
                  src={advisor.image} 
                  alt={advisor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-bold text-gray-900 mb-1">{advisor.name}</h4>
                <p className="text-blue-600 font-medium mb-1">{advisor.role}</p>
                <p className="text-gray-500 text-sm">{advisor.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Partners & Affiliations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{partner.logo}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                    <p className="text-sm text-gray-500">{partner.type}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Nodes */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Regional Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {regions.map((region, index) => (
              <div key={index} className={`p-4 rounded-lg border-2 ${
                region.active ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{region.name}</h4>
                    <p className="text-sm text-gray-600">{region.nodes} research nodes</p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${
                    region.active ? 'bg-green-500' : 'bg-gray-400'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 mr-4">
              Join Our Network
            </Button>
            <Button size="lg" variant="outline">
              View Regional Map
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCommunity;
