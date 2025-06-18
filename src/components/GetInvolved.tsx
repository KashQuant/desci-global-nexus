
import { GraduationCap, Building, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GetInvolved = () => {
  const pathways = [
    {
      icon: GraduationCap,
      title: "For Students",
      description: "Join the next generation of decentralized science researchers and innovators",
      benefits: [
        "Access to research grants and funding",
        "Mentorship from leading DeSci experts",
        "Collaborative research opportunities",
        "Skills development in blockchain and science"
      ],
      cta: "Student Application"
    },
    {
      icon: Building,
      title: "For Institutions",
      description: "Partner with us to advance your research capabilities and global impact",
      benefits: [
        "Access to global research networks",
        "Funding mechanism development",
        "Protocol implementation support",
        "Cross-institutional collaboration"
      ],
      cta: "Institutional Partnership"
    },
    {
      icon: Award,
      title: "For Advisors",
      description: "Share your expertise and help shape the future of decentralized science",
      benefits: [
        "Influence research direction and policy",
        "Network with global thought leaders",
        "Speaking opportunities at events",
        "Recognition in research publications"
      ],
      cta: "Advisor Application"
    },
    {
      icon: Users,
      title: "For Contributors",
      description: "Contribute your skills to build the infrastructure of tomorrow's science",
      benefits: [
        "Flexible contribution opportunities",
        "Skill-based project matching",
        "Recognition and attribution",
        "Community governance participation"
      ],
      cta: "Join as Contributor"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join our global movement to democratize science and accelerate human progress through decentralized research
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {pathways.map((pathway, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500 rounded-lg mr-4">
                  <pathway.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{pathway.title}</h3>
              </div>
              <p className="text-blue-100 mb-6">{pathway.description}</p>
              <ul className="space-y-3 mb-8">
                {pathway.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-blue-100">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-white text-blue-900 hover:bg-gray-100">
                {pathway.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* DAO Gateway */}
        <div className="bg-gradient-to-r from-blue-800/50 to-purple-800/50 rounded-xl p-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Join the DAO</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Participate in governance decisions, vote on funding proposals, and help shape the future of decentralized science through our decentralized autonomous organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Connect Wallet
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Learn About Governance
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
