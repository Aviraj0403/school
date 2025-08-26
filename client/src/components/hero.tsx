import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-primary-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight" data-testid="hero-title">
              Empowering Future Leaders
            </h1>
            <p className="text-xl lg:text-2xl text-primary-foreground/90 font-light leading-relaxed" data-testid="hero-description">
              At St. John's Public School, we nurture young minds with excellence in education,
              character building, and holistic development to shape tomorrow's leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="button-start-admissions"
              >
                Start Admissions
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"  // You can keep or remove this if it interferes
                className="
    bg-white !important 
    text-blue-600 !important 
    border-2 border-primary-foreground 
    px-8 py-4 rounded-lg font-semibold text-lg
  "
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>

            </div>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800"
              alt="Modern school building with students"
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg" data-testid="hero-stat-years">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card text-foreground p-6 rounded-xl shadow-lg" data-testid="hero-stat-students">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm font-medium text-muted-foreground">Happy Students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
