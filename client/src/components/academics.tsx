import { Card, CardContent } from "@/components/ui/card";

export default function Academics() {
  const academicPrograms = [
    {
      icon: "fas fa-flask",
      title: "Science & Technology",
      description: "State-of-the-art laboratories with hands-on experiments and STEM-focused learning.",
      subjects: ["Physics Lab", "Chemistry Lab", "Biology Lab", "Computer Lab"],
      color: "bg-primary",
      testId: "science-card"
    },
    {
      icon: "fas fa-palette",
      title: "Arts & Humanities",
      description: "Creative expression through visual arts, music, literature, and cultural studies.",
      subjects: ["Visual Arts", "Music & Dance", "Literature", "Drama & Theatre"],
      color: "bg-secondary",
      testId: "arts-card"
    },
    {
      icon: "fas fa-running",
      title: "Sports & Athletics",
      description: "Physical fitness and teamwork through diverse sporting activities and competitions.",
      subjects: ["Football & Cricket", "Basketball", "Athletics", "Yoga & Wellness"],
      color: "bg-accent border border-border",
      iconColor: "text-primary",
      testId: "sports-card"
    },
    {
      icon: "fas fa-laptop-code",
      title: "Digital Learning",
      description: "Modern technology integration with coding, robotics, and digital literacy programs.",
      subjects: ["Programming", "Robotics", "Digital Design", "AI & Machine Learning"],
      color: "bg-primary",
      testId: "technology-card"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="academics-title">Academic Excellence</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="academics-description">
            Our comprehensive curriculum is designed to nurture every aspect of student development, 
            from academic achievement to character building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {academicPrograms.map((program, index) => (
            <Card 
              key={index}
              className="border border-border hover:shadow-lg transition-all duration-300 group animate-fade-in"
              data-testid={program.testId}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`${program.icon} text-2xl ${program.iconColor || 'text-primary-foreground'}`}></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {program.subjects.map((subject, idx) => (
                    <li key={idx}>• {subject}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
