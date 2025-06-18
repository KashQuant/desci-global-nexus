
import { useState } from 'react';
import { Menu, X, Atom, Microscope, Dna } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Research', href: '/research' },
    { name: 'Community', href: '#community' },
    { name: 'Events', href: '#events' },
    { name: 'Get Involved', href: '#get-involved' }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 shadow-lg border-b border-blue-700 sticky top-0 z-50">
      {/* Scientific pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex items-center justify-center h-full">
          <div className="grid grid-cols-12 gap-8 w-full max-w-7xl mx-auto px-4">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="flex justify-center">
                {i % 3 === 0 ? (
                  <Atom className="h-4 w-4 text-blue-300" />
                ) : i % 3 === 1 ? (
                  <Microscope className="h-4 w-4 text-blue-300" />
                ) : (
                  <Dna className="h-4 w-4 text-blue-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative bg-white rounded-full p-2 shadow-lg">
              <img 
                src="/lovable-uploads/c7770242-e3da-41ed-80f4-365f0a6a4137.png" 
                alt="World DeSci Forum Logo" 
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-white">
                World DeSci Forum
              </div>
              <div className="text-xs text-blue-200 font-medium">
                Advancing Global Decentralized Science
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-blue-100 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-blue-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-700 bg-blue-900/95 backdrop-blur-sm">
            <nav className="py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-blue-100 hover:text-white hover:bg-blue-800/50 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
