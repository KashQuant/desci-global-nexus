
import { Calendar, MapPin, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventsForums = () => {
  const upcomingEvents = [
    {
      title: "Global DeSci Summit 2024",
      date: "March 15-17, 2024",
      location: "Berlin, Germany",
      type: "In-Person",
      attendees: "500+",
      description: "Three days of cutting-edge research presentations, policy discussions, and networking."
    },
    {
      title: "Climate Research Hackathon",
      date: "April 8-10, 2024",
      location: "Virtual",
      type: "Virtual",
      attendees: "200+",
      description: "Build solutions for climate data transparency and carbon credit verification."
    },
    {
      title: "Medical DeSci Workshop",
      date: "May 22, 2024",
      location: "San Francisco, CA",
      type: "Hybrid",
      attendees: "150+",
      description: "Exploring decentralized clinical trials and patient data sovereignty."
    }
  ];

  const pastEvents = [
    { title: "DeSci Infrastructure Forum", date: "January 2024", attendees: "300+" },
    { title: "Open Science Symposium", date: "December 2023", attendees: "450+" },
    { title: "Funding Mechanisms Workshop", date: "November 2023", attendees: "180+" }
  ];

  const workingGroups = [
    { name: "Healthcare Standards", members: 45, nextMeeting: "Weekly Thursdays" },
    { name: "Climate Data Protocols", members: 32, nextMeeting: "Bi-weekly Mondays" },
    { name: "Publishing Infrastructure", members: 28, nextMeeting: "Monthly 1st Friday" },
    { name: "Governance & Ethics", members: 39, nextMeeting: "Weekly Tuesdays" }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Events & Forums
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our global community through summits, workshops, and collaborative working groups
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.type === 'Virtual' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'Hybrid' ? 'bg-purple-100 text-purple-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {event.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{event.description}</p>
                  <Button className="w-full">Register Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Working Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Active Working Groups</h3>
            <div className="space-y-4">
              {workingGroups.map((group, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{group.name}</h4>
                    <span className="text-sm text-gray-500">{group.members} members</span>
                  </div>
                  <p className="text-sm text-gray-600">Next meeting: {group.nextMeeting}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6">Join a Working Group</Button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h3>
            <div className="space-y-4 mb-6">
              {pastEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{event.title}</h4>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{event.date}</span>
                    <span>{event.attendees} attendees</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full">View All Past Events</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsForums;
