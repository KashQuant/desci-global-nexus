
import { Button } from '@/components/ui/button';

const KeyInitiatives = () => {
  const initiatives = [
    {
      title: "Open Research Protocols",
      description: "Developing standardized frameworks for transparent, reproducible scientific research across disciplines.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000&auto=format&fit=crop",
      category: "Research Standards"
    },
    {
      title: "Global Science Network",
      description: "Connecting researchers worldwide through decentralized collaboration platforms and shared resources.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop",
      category: "Collaboration"
    },
    {
      title: "Innovation Funding Mechanisms",
      description: "Creating new models for research funding through blockchain technology and community governance.",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2000&auto=format&fit=crop",
      category: "Funding"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic programs designed to transform how scientific research is conducted, funded, and shared globally
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9 relative h-48">
                <img 
                  src={initiative.image} 
                  alt={initiative.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {initiative.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {initiative.description}
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyInitiatives;
