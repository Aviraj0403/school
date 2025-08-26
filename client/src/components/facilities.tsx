export default function Facilities() {
  const facilities = [
    {
      icon: "fas fa-book",
      title: "Digital Library",
      description: "Extensive collection of books, journals, and digital resources with quiet study spaces.",
      color: "text-primary",
      testId: "facility-library"
    },
    {
      icon: "fas fa-microscope",
      title: "Science Labs",
      description: "Fully equipped laboratories for physics, chemistry, biology, and computer science.",
      color: "text-secondary",
      testId: "facility-labs"
    },
    {
      icon: "fas fa-futbol",
      title: "Sports Complex",
      description: "Multi-purpose grounds, gymnasium, and facilities for various indoor and outdoor sports.",
      color: "text-primary",
      testId: "facility-sports"
    },
    {
      icon: "fas fa-bus",
      title: "Safe Transport",
      description: "GPS-enabled buses with trained drivers ensuring safe and comfortable commute.",
      color: "text-secondary",
      testId: "facility-transport"
    },
    {
      icon: "fas fa-utensils",
      title: "Healthy Cafeteria",
      description: "Nutritious meals prepared with fresh ingredients in hygienic conditions.",
      color: "text-primary",
      testId: "facility-cafeteria"
    },
    {
      icon: "fas fa-heartbeat",
      title: "Medical Care",
      description: "On-campus medical facility with qualified nurse and first-aid services.",
      color: "text-secondary",
      testId: "facility-medical"
    },
    {
      icon: "fas fa-theater-masks",
      title: "Auditorium",
      description: "Modern auditorium with advanced audio-visual systems for events and performances.",
      color: "text-primary",
      testId: "facility-auditorium"
    },
    {
      icon: "fas fa-shield-alt",
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance ensuring student safety.",
      color: "text-secondary",
      testId: "facility-security"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="facilities-title">World-Class Facilities</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="facilities-description">
            Our campus provides a conducive environment for learning and growth with modern 
            infrastructure and comprehensive facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="text-center group animate-fade-in" data-testid={facility.testId}>
              <div className="w-24 h-24 bg-card rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-border group-hover:shadow-lg transition-shadow">
                <i className={`${facility.icon} text-4xl ${facility.color}`}></i>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{facility.title}</h3>
              <p className="text-muted-foreground">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
