export default function Gallery() {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Annual Day Celebration",
      description: "Cultural performances and awards",
      testId: "gallery-annual-function"
    },
    {
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Science Laboratory",
      description: "Hands-on learning experience",
      testId: "gallery-science-lab"
    },
    {
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Digital Library",
      description: "Quiet study environment",
      testId: "gallery-library"
    },
    {
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Sports Activities",
      description: "Physical fitness and teamwork",
      testId: "gallery-sports"
    },
    {
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Smart Classrooms",
      description: "Interactive digital learning",
      testId: "gallery-classroom"
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: "Graduation Day",
      description: "Celebrating achievements",
      testId: "gallery-graduation"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4" data-testid="gallery-title">Campus Life</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="gallery-description">
            Glimpses of our vibrant school life, events, achievements, and memorable moments 
            that make St. John's a special place to learn and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl shadow-lg animate-fade-in cursor-pointer"
              data-testid={item.testId}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
