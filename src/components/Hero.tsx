
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Inspiring globe background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=2000&auto=format&fit=crop"
          alt="Earth from space - inspiring global perspective"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Advancing Global
            <span className="block text-blue-300">Decentralized Science</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            A worldwide foundation committed to accelerating scientific innovation through 
            decentralized research, open collaboration, and global knowledge sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-3 flex items-center gap-3">
              <img 
                src="/lovable-uploads/c7770242-e3da-41ed-80f4-365f0a6a4137.png" 
                alt="Logo" 
                className="h-5 w-5 object-contain"
              />
              Join the Movement
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 flex items-center gap-3"
            >
              <img 
                src="/lovable-uploads/c7770242-e3da-41ed-80f4-365f0a6a4137.png" 
                alt="Logo" 
                className="h-5 w-5 object-contain"
              />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
