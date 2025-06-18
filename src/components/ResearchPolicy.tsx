
import { FileText, MessageSquare, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResearchPolicy = () => {
  const resources = [
    {
      icon: FileText,
      title: "Research Whitepapers",
      count: "150+",
      description: "Comprehensive analysis of DeSci protocols and implementations"
    },
    {
      icon: MessageSquare,
      title: "Policy Proposals",
      count: "45+",
      description: "Community-driven policy recommendations and frameworks"
    },
    {
      icon: Users,
      title: "Open Reviews",
      count: "300+",
      description: "Peer-reviewed research available for public comment"
    },
    {
      icon: BookOpen,
      title: "Protocol Drafts",
      count: "75+",
      description: "Technical specifications and implementation guides"
    }
  ];

  const featuredPapers = [
    {
      title: "Decentralized Clinical Trials: A Framework for Global Health Research",
      authors: "Dr. Sarah Chen, Prof. Michael Rodriguez",
      category: "Health & Medicine",
      status: "Open for Review"
    },
    {
      title: "Blockchain-Based Carbon Credit Verification Systems",
      authors: "Dr. Elena Kowalski, Dr. James Park",
      category: "Climate & Environment",
      status: "Published"
    },
    {
      title: "DAO Governance Models for Scientific Research Funding",
      authors: "Prof. Alex Thompson, Dr. Maria Silva",
      category: "DeSci Infrastructure",
      status: "Draft"
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Research & Policy Lab
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A living library of research, policy recommendations, and protocol developments driving the future of decentralized science
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
              <resource.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-900 mb-1">{resource.count}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</div>
              <div className="text-sm text-gray-600">{resource.description}</div>
            </div>
          ))}
        </div>

        {/* Featured Research */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Research</h3>
          <div className="space-y-6">
            {featuredPapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-3">
                        {paper.category}
                      </span>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        paper.status === 'Published' ? 'bg-green-100 text-green-800' :
                        paper.status === 'Open for Review' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {paper.status}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{paper.title}</h4>
                    <p className="text-gray-600">{paper.authors}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Button variant="outline">
                      {paper.status === 'Open for Review' ? 'Review Paper' : 'Read More'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Browse All Research
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPolicy;
