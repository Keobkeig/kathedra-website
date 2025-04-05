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

export interface Problem {
  title: string;
  description: string;
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
  problems: {
    items: Problem[];
    title: string;
    subtitle: string;
  };
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
  problems: {
    items: [
      {
        title: "Global Labor Shortage",
        description: "80% of manufacturers can't find enough workers.",
      },
      {
        title: "Physically Strenuous Work",
        description: "48 percent of Gen Z workers intend to leave within three to six months, citing physical stress.",
      },
      {
        title: "Supply Chain Disruption",
        description: "50% tariffs on furniture imports",
      },
    ],
    title: "Industry Challenges",
    subtitle: "Critical issues facing furniture manufacturing"
  },
  skills: {
    items: [
      {
        title: "Purpose-Built Solution",
        description: "Developed with manufacturers and designers to handle high-variety custom orders",
        icon: <Monitor />
      },
      {
        title: "AI-Driven Automation",
        description: "Computer vision and deep learning predict fabric behavior, adapting to new materials and designs in real-time",
        icon: <Laptop />
      },
      {
        title: "Competitive Edge",
        description: "Enable faster, adaptable production to compete with offshore manufacturing",
        icon: <Database />
      },
    ],
    title: <>revolutionizing furniture manufacturing with the first upholstery robot</>,
    description: <>automating fabric stretching, gluing, and stapling to create safer, engaging jobs while reducing lead times</>,
  },

  testimonials: {
    items: [
      {
        name: "Oliver Davila Chasan, Founder",
        image: "/team/oliver.png",
        quote: [
          "Deep Tech investing @ HAX",
          "VC investing @ Triatomic",
          "BA Economics @ NYU"
        ].join("\n"),
        company: "Business Development"
      },
      {
        name: "David Michael Faes, Founder",
        image: "/team/david.png",
        quote: [
          "AI/ML @ Lockheed Martin",
          "First employee @ Silana Robotics",
          "BA Computer Science @ Columbia"
        ].join("\n"),
        company: "Product Development"
      },
      {
        name: "Alison Bartsch, PhD",
        image: "/team/alison.png",
        quote: [
          "Researcher @ CMU, Mechanical AI, Stanford Autonomous Labs",
          "PhD Mech E @ Carnegie Mellon",
          "14 articles on Deformable Materials"
        ].join("\n"),
        company: "Robotics/AI Engineer"
      },
      {
        name: "Jordan Zeeb, MSc",
        image: "/team/jordan.png",
        quote: [
          "Mechatronics @ GoogleX, Zebra",
          "R&D Engineer @ SandboxAQ",
          "MSc Robotics @ Northwestern U"
        ].join("\n"),
        company: "Mechatronics Engineer"
      },
      {
        name: "Kyle Cash",
        image: "/team/kyle.png",
        quote: [
          "Consultant @ K9Kyle",
          "BSc Mech E @ Columbia",
          "BA Physics @ Adelphi"
        ].join("\n"),
        company: "Mechanical Engineer"
      },
      {
        name: "Richie Xue",
        image: "/team/richie.jpeg",
        quote: [
          "Software @ CUAUV",
          "AI/ML @ Google",
          "Computer Science & Operations Research @ Cornell"
        ].join("\n"),
        company: "Robotics/Software Engineer"
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
