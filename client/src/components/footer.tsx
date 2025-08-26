import schoolLogoPath from "@assets/ChatGPT Image Aug 27, 2025, 12_00_10 AM_1756234613382.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div className="space-y-4" data-testid="footer-school-info">
            <div className="flex items-center space-x-3">
              <img 
                src={schoolLogoPath} 
                alt="St. John's Public School Logo" 
                className="w-10 h-10 object-contain bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-bold text-lg">St. John's Public School</h3>
                <p className="text-sm opacity-90">Bikrampur, Begusarai</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Empowering students with quality education, strong values, and comprehensive development 
              for over two decades.
            </p>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('academics')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-academics"
                >
                  Academics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('facilities')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-facilities"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div data-testid="footer-programs">
            <h4 className="font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><span className="text-primary-foreground/80">Primary School</span></li>
              <li><span className="text-primary-foreground/80">Middle School</span></li>
              <li><span className="text-primary-foreground/80">High School</span></li>
              <li><span className="text-primary-foreground/80">Co-curricular</span></li>
              <li><span className="text-primary-foreground/80">Sports Program</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact-info">
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-secondary"></i>
                <span className="text-sm text-primary-foreground/80">Bikrampur, Begusarai, Bihar</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-secondary"></i>
                <span className="text-sm text-primary-foreground/80">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-secondary"></i>
                <span className="text-sm text-primary-foreground/80">info@stjohnsbegusarai.edu.in</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex space-x-3" data-testid="footer-social-links">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/90 transition-colors"
                  data-testid="social-facebook"
                >
                  <i className="fab fa-facebook-f text-secondary-foreground text-sm"></i>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/90 transition-colors"
                  data-testid="social-instagram"
                >
                  <i className="fab fa-instagram text-secondary-foreground text-sm"></i>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/90 transition-colors"
                  data-testid="social-youtube"
                >
                  <i className="fab fa-youtube text-secondary-foreground text-sm"></i>
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/90 transition-colors"
                  data-testid="social-linkedin"
                >
                  <i className="fab fa-linkedin text-secondary-foreground text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8" data-testid="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 St. John's Public School, Bikrampur. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-primary-foreground/80">Privacy Policy</span>
              <span className="text-primary-foreground/80">Terms of Service</span>
              <span className="text-primary-foreground/80">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
