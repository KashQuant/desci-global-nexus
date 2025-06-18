
import { Microscope, Globe, Book, Atom, Dna, Users, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PillarPageProps {
  pillarData: {
    icon: any;
    title: string;
    description: string;
    examples: string[];
    color: string;
    detailedContent: {
      overview: string;
      challenges: string[];
      solutions: string[];
      projects: Array<{
        name: string;
        description: string;
        status: string;
      }>;
    };
  };
}

const PillarPage = ({ pillarData }: PillarPageProps) => {
  const { icon: Icon, title, description, examples, color, detailedContent } = pillarData;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-r ${color} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 mr-4"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Pillars
            </Button>
          </div>
          <div className="flex items-center mb-6">
            <div className="p-4 bg-white/20 rounded-lg mr-6">
              <Icon className="h-12 w-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-xl opacity-90">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {detailedContent.overview}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Focus Areas</h3>
                <ul className="space-y-2">
                  {examples.map((example, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${color}`}></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Challenges</h3>
              <ul className="space-y-3 mb-8">
                {detailedContent.challenges.map((challenge, index) => (
                  <li key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">DeSci Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {detailedContent.solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution {index + 1}</h3>
                <p className="text-gray-600">{solution}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detailedContent.projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">{project.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Active' ? 'bg-green-100 text-green-800' :
                    project.status === 'Development' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PillarPage;
