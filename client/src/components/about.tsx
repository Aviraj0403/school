import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=800" 
              alt="Students learning in classroom environment" 
              className="rounded-2xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-primary" data-testid="about-title">About St. John's</h2>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description">
                Established with a vision to provide quality education, St. John's Public School has been 
                a beacon of academic excellence for over two decades, nurturing students to become confident, 
                responsible, and compassionate global citizens.
              </p>
            </div>

            <div className="grid gap-8">
              <Card className="border border-border shadow-sm" data-testid="mission-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-bullseye text-primary-foreground"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To provide a comprehensive education that develops intellectual curiosity, 
                        critical thinking, and moral values in every student.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border shadow-sm" data-testid="vision-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-eye text-secondary-foreground"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        To be a leading educational institution that shapes future leaders with 
                        strong character, innovative minds, and compassionate hearts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-border shadow-sm" data-testid="values-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 border border-border">
                      <i className="fas fa-heart text-primary"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
                      <p className="text-muted-foreground">
                        Excellence, Integrity, Innovation, Compassion, and Respect for diversity 
                        form the cornerstone of our educational philosophy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
