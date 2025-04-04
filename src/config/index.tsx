// Types
import { ReactNode } from "react";
import { Laptop, Monitor, Database } from "lucide-react";
export type SocialLink = {
  url: string;
  ariaLabel: string;
};

export type SocialLinks = {
  // github: SocialLink;
  linkedin: SocialLink;
  // Extendable - add more social links here as needed
};

export interface Project {
  title: string;
  oneLiner?: string;
  subtitle: string;
  description: string | ReactNode;
  bullets: ReactNode[];
  date?: string;
  image?: string | null;
  tags?: string[];
  slug?: string;
  company?: string;
  link?: {
    label: string;
    href: string;
  };
  // Experience-specific fields
  position?: string;
  location?: string;
  type?: "fulltime" | "contract" | "internship" | "freelance";
  startDate?: string;
  endDate?: string;
  isPersonalProject?: boolean;
}

export interface Education {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
  grades?: {
    subject: string;
    grade: string;
    year: string;
  }[];
}


export interface Contact {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
} 
export interface Testimonial {
  name: string;
  image: string;
  quote: string;
  company?: string;
}

export interface Skills {
  title: string;
  description: string;
  icon: ReactNode;
}


export type Config = {
  name: string;
  contactEmail: string;
  hero: {
    title: string;
    subtitle: string;
    backgroundImage?: string;
  };
  social: SocialLinks;
  projects: Project[];
  // education: {
  //   items: Education[];
  //   title: string;
  //   subtitle: string;
  // };
  skills: {
    items: Skills[];
    title: ReactNode;
    description: ReactNode;
  };
  testimonials: {
    items: Testimonial[];
    title: string;
    subtitle: string;
  };
  contact: Contact;
};




// Configuration
export const config: Config = {
  name: "Kathedra",
  contactEmail: "ochasan@kathedra.co",
  hero: {
    title: "making the first upholstering robot",
    subtitle: "the future of lived design",
    backgroundImage: "/hero.png",
  },
  social: {
    // github: {
    //   url: "https://github.com/stevejobs",
    //   ariaLabel: "GitHub",
    // },
    linkedin: {
      url: "https://linkedin.com/company/kathedra",
      ariaLabel: "LinkedIn",
    },
  },
  projects: [
    {
      title: "iPhone Web App",
      oneLiner: "It's a revolutionary mobile web browser!",
      subtitle: "Lead Developer & CEO",
      description: "Created the world's first mobile web browser that actually works. No Flash needed!",
      bullets: [
        // "Convinced everyone that pinch-to-zoom was totally my idea",
        // "Implemented the 'magical' scroll bounce effect using CSS",
        // "Refused to add a back button because users don't need choices",
        // "Spent 6 months perfecting the border radius of buttons"
      ],
      company: "Apple Inc.",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3",
      tags: ["JavaScript", "CSS", "Innovation", "Reality Distortion"],
      position: "Chief Code Wizard",
      location: "Cupertino, CA",
      type: "fulltime",
      startDate: "2007",
      endDate: "2011",
      link: {
        label: "View Project",
        href: "https://www.apple.com/iphone"
      }
    },
  ],
  skills: {
    items: [
      {
        title: "Better Jobs",
        description: "reducing worker strain and injury and enabling creative work",
        icon: <Laptop />
    },
    {
      title: "Cut Costs", 
      description: "by reducing delays and lead times",
      icon: <Monitor />
    },
    {
      title: "Generate Revenue",
      description: "by competing with off-shored labor and producing new products", 
      icon: <Database />
    }, 
  ],
    title:<>revolutionizing furniture manufacturing with the first upholstery robot</>,
    description: <><b>the first automation system</b> to eliminate manual upholstering stretching, gluing, and tacking</>,
  },

  testimonials: {
    items: [
      {
        name: "Oliver Davila Chasan, Founder",
        image: "/team/oliver.png",
        quote: "Deep Tech investing @ HAX\nVC investing @ Triatomic\nBA Economics @ NYU",
        company: "Business Development"
      },
      {
        name: "David Michael Faes, Founder",
        image: "/team/david.png",
        quote: "AI/ML @ Lockheed Martin\nFirst employee @ Silana Robotics\nBA Computer Science @ Columbia",
        company: "Product Development"
      },
      {
        name: "Alison Bartsch, PhD",
        image: "/team/alison.png",
        quote: "Researcher @ CMU, Mechanical AI, Stanford Autonomous Labs\nPhD Mech E @ Carnegie Mellon\n14 articles on Deformable Materials",
        company: "Robotics/AI Engineer"
      },
      {
        name: "Jordan Zeeb, MSc",
        image: "/team/jordan.png",
        quote: "Mechatronics @ GoogleX, Zebra\nR&D Engineer @ SandboxAQ\nMSc Robotics @ Northwestern U",
        company: "Mechatronics Engineer"
      },
      {
        name: "Kyle Cash",
        image: "/team/kyle.png",
        quote: "Consultant @ K9Kyle\nBSc Mech E @ Columbia\nBA Physics @ Adelphi",
        company: "Mechanical Engineer"
      }
    ],
    title: "Kathedra's Team",
    subtitle: "Meet our talented team of experts"
  },
contact: {
  title: "Interested in our products?",
  subtitle: "Let's talk about how we can help you",
  buttonText: "Contact Me",
  buttonLink: "mailto:info@kathedra.co"
}
};
