
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ResearchPolicy from '@/components/ResearchPolicy';
import { ArrowLeft, Search, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Research = () => {
  const researchCategories = [
    "All Research",
    "Health & Medicine", 
    "Climate & Environment",
    "Open Access & Publishing",
    "DeSci Infrastructure",
    "AI & Ethics",
    "Citizen Science"
  ];

  const featuredResearch = [
    {
      title: "Decentralized Clinical Trials: A Framework for Global Health Research",
      authors: "Dr. Sarah Chen, Prof. Michael Rodriguez, Dr. Elena Vasquez",
      category: "Health & Medicine",
      status: "Open for Review",
      downloads: 1243,
      published: "2024-06-15",
      abstract: "This comprehensive study presents a novel framework for conducting clinical trials using decentralized protocols, ensuring transparency, patient autonomy, and global accessibility while maintaining rigorous scientific standards."
    },
    {
      title: "Blockchain-Based Carbon Credit Verification Systems",
      authors: "Dr. Elena Kowalski, Dr. James Park, Prof. Maria Silva",
      category: "Climate & Environment",
      status: "Published",
      downloads: 892,
      published: "2024-06-10",
      abstract: "An innovative approach to carbon credit verification using blockchain technology, providing transparent, immutable records of environmental impact and enabling more effective climate action coordination."
    },
    {
      title: "DAO Governance Models for Scientific Research Funding",
      authors: "Prof. Alex Thompson, Dr. Maria Silva, Dr. David Kim",
      category: "DeSci Infrastructure",
      status: "Draft",
      downloads: 567,
      published: "2024-06-12",
      abstract: "Exploring optimal governance structures for research-focused DAOs, including voting mechanisms, funding allocation strategies, and community management approaches for scientific organizations."
    },
    {
      title: "Peer Review in Decentralized Publishing: Quality Assurance Mechanisms",
      authors: "Dr. Rachel Martinez, Prof. John Williams",
      category: "Open Access & Publishing",
      status: "Published",
      downloads: 734,
      published: "2024-06-08",
      abstract: "Analysis of decentralized peer review systems, examining quality control mechanisms, reviewer incentives, and community-driven quality assurance in open science publishing."
    },
    {
      title: "AI Ethics in Biomedical Research: A Decentralized Approach",
      authors: "Dr. Ahmad Hassan, Prof. Lisa Zhang, Dr. Roberto Fernandez",
      category: "AI & Ethics",
      status: "Open for Review",
      downloads: 456,
      published: "2024-06-14",
      abstract: "Proposing ethical frameworks for AI use in biomedical research within decentralized systems, addressing bias, transparency, and accountability in algorithmic research tools."
    },
    {
      title: "Citizen Science Data Quality: Blockchain-Based Verification",
      authors: "Dr. Jennifer Liu, Prof. Michael O'Brien",
      category: "Citizen Science",
      status: "Published",
      downloads: 623,
      published: "2024-06-07",
      abstract: "Innovative quality assurance mechanisms for citizen science data using blockchain verification, reputation systems, and community validation protocols."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 mr-4"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Research & Publications</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Discover cutting-edge research, policy papers, and collaborative studies driving the future of decentralized science
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search research papers, authors, or topics..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                {researchCategories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Research</h2>
            <p className="text-gray-600">Latest publications and ongoing research in decentralized science</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredResearch.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
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
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                  {paper.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">{paper.authors}</p>
                
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {paper.abstract}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Published: {paper.published}</span>
                  <span>{paper.downloads} downloads</span>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <Button size="sm" variant="outline">
                    {paper.status === 'Open for Review' ? 'Review Paper' : 'Read Full Paper'}
                  </Button>
                  <Button size="sm" variant="ghost">
                    Cite
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Load More Research
            </Button>
          </div>
        </div>
      </section>

      {/* Include the original Research Policy section */}
      <ResearchPolicy />
      
      <Footer />
    </div>
  );
};

export default Research;
