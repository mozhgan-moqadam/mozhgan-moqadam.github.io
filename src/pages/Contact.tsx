
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, AtSign, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <a href="mailto:Mozhganmogadam@gmail.com" className="hover:text-primary transition-colors">
                Mozhganmogadam@gmail.com
              </a>
            </div>
          
            
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-muted-foreground" />
              <a 
                href="https://www.linkedin.com/in/mozhgan-moqadam/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                linkedin.com/in/mozhgan-moqadam
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-muted-foreground" />
              <a 
                href="https://github.com/mozhgan-moqadam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                github.com/mozhgan-moqadam
              </a>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-semibold mb-4">Social</h2>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/mozhgan-moqadam/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
