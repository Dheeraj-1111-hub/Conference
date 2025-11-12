import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-primary rounded flex items-center justify-center text-white font-extrabold text-sm leading-none">
                <span className="block">ICISD</span>
              </div>
              <div>
                <div className="font-semibold">ICISD 2026</div>
                <div className="text-sm text-background/80">Madras Section</div>
              </div>
            </div>
            <p className="text-sm text-background/70">
              International Conference on Emerging Trends in Computing and
              Communication Technologies
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Conference
                </Link>
              </li>
              <li>
                <Link
                  to="/call-for-papers"
                  className="hover:text-primary transition-colors"
                >
                  Call for Papers
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  className="hover:text-primary transition-colors"
                >
                  Registration
                </Link>
              </li>
              <li>
                <Link
                  to="/speakers"
                  className="hover:text-primary transition-colors"
                >
                  Keynote Speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Department of CSE</li>
              <li>[Your College Name]</li>
              <li>Chennai, Tamil Nadu, India</li>
              <li className="pt-2">
                <a
                  href="mailto:ieeeconf2025@college.edu.in"
                  className="hover:text-primary transition-colors"
                >
                  ieeeconf2025@college.edu.in
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-background/80 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p className="mb-2">
            © {currentYear} ICISD 2026 | Organized by SRM Institute of Science and Technology, Vadapalani,
            Chennai, India
          </p>
          <p className="text-xs">Powered by Madras Section</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
