
import { Globe } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Foundation",
      links: [
        "About Us",
        "Mission & Vision",
        "Leadership",
        "Governance",
        "Annual Report"
      ]
    },
    {
      title: "Programs",
      links: [
        "Research Initiatives",
        "Global Network",
        "Innovation Labs",
        "Policy Framework",
        "Education"
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "Research Papers",
        "Best Practices",
        "Tools & Platforms",
        "Community Guidelines"
      ]
    },
    {
      title: "Connect",
      links: [
        "Join Network",
        "Partner With Us",
        "Events",
        "News & Updates",
        "Contact"
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="h-8 w-8 text-blue-400" />
              <div className="text-xl font-bold">
                World DeSci Forum
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              A global foundation advancing decentralized science through open collaboration, innovation, and knowledge sharing.
            </p>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 World DeSci Forum. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
