
import { Globe, Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      title: "Research",
      links: [
        "Research Library",
        "Policy Papers",
        "Protocol Drafts",
        "Open Reviews",
        "Submit Research"
      ]
    },
    {
      title: "Community",
      links: [
        "Global Network",
        "Working Groups",
        "Advisory Board",
        "Partners",
        "Regional Nodes"
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "Best Practices",
        "Tools & Platforms",
        "Guidelines",
        "Developer API"
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Newsletter" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest research updates, event announcements, and DeSci developments delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Button className="bg-white text-blue-900 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="h-8 w-8 text-blue-400" />
              <div className="text-xl font-bold">
                World DeSci Forum
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A global foundation advancing decentralized science through open collaboration, innovation, and knowledge sharing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
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
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2024 World DeSci Forum. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Code of Conduct</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
