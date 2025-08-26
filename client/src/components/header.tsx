import { useState } from "react";
import { Button } from "@/components/ui/button";
import schoolLogoPath from "@assets/ChatGPT Image Aug 27, 2025, 12_00_10 AM_1756234613382.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3" data-testid="header-logo">
            <img 
              src={schoolLogoPath} 
              alt="St. John's Public School Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold text-primary">St. John's Public School</h1>
              <p className="text-xs text-muted-foreground">Learning Today , Leading Tommorow</p>
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('academics')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-academics"
            >
              Academics
            </button>
            <button 
              onClick={() => scrollToSection('facilities')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-facilities"
            >
              Facilities
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-gallery"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2.5 rounded-lg font-semibold"
              data-testid="button-apply-now"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </Button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2" data-testid="mobile-menu">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('academics')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="mobile-nav-academics"
            >
              Academics
            </button>
            <button 
              onClick={() => scrollToSection('facilities')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="mobile-nav-facilities"
            >
              Facilities
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="mobile-nav-gallery"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-muted-foreground hover:text-primary transition-colors font-medium"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
            <div className="pt-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-2.5 rounded-lg font-semibold w-full"
                data-testid="mobile-button-apply-now"
              >
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
