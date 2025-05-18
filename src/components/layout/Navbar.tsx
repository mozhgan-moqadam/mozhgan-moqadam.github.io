
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-bold text-xl">Portfolio</Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          {/* <Link to="/projects" className="text-sm font-medium transition-colors hover:text-primary">
            Projects
          </Link> */}
          <Link to="/skills" className="text-sm font-medium transition-colors hover:text-primary">
            Skills
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
