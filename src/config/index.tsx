// Types
import { ReactNode } from "react";
import Worker from '@/components/icons/worker'
import Medical from '@/components/icons/medical'
import Ship from '@/components/icons/ship'
import Money from '@/components/icons/money'
import Briefcase from '@/components/icons/briefcase'
import Target from '@/components/icons/target'
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
  icon: ReactNode;
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
  name: "K A T H E D R A",
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
        icon: <Worker className="size-6" />
      },
      {
        title: "Physically Strenuous Work",
        description: "48 percent of Gen Z workers intend to leave within three to six months, citing physical stress.",
        icon: <Medical className="size-6" />
      },
      {
        title: "Supply Chain Disruption",
        description: "50% tariffs on furniture imports",
        icon: <Ship className="size-6" />
      },
    ],
    title: "Industry Challenges",
    subtitle: "Critical issues facing furniture manufacturing"
  },
  skills: {
    items: [
      {
        title: "Better Jobs",
        description: "Robotic manipulation of fabric reduces physical strain allowing workers to focus on creative aspects of their work.​",
        icon: <Briefcase className="size-6" />
      },
      {
        title: "Cut Costs",
        description: "Deep learning models predict fabric behavior, enabling automation for a high variety of materials and designs.​",
        icon: <Money className="size-6" />
      },
      {
        title: "Competitive Edge",
        description: "Enable faster, adaptable production to compete with offshore manufacturing",
        icon: <Target className="size-6" />
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
          "Deep Tech Investing @ HAX",
          "VC Investing @ Triatomic",
          "BA Economics @ NYU"
        ].join("\n"),
        company: "Business Development"
      },
      {
        name: "David Michael Faes, Founder",
        image: "/team/david.png",
        quote: [
          "AI/ML @ Lockheed Martin",
          "Systems Engineering @ MIT xPro",
          "BA Computer Science @ Columbia"
        ].join("\n"),
        company: "Product Development"
      },
      {
        name: "Alison Bartsch, PhD",
        image: "/team/alison.png",
        quote: [
          "Research @ CMU MAIL, Stanford ASL",
          "PhD Mech E @ Carnegie Mellon",
          "BS Aeronautics @ Stanford"
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
          "CS & Operations @ Cornell"
        ].join("\n"),
        company: "Robotics/Software Engineer"
      }
    ],
    title: "Kathedra's Team",
    subtitle: "Meet our talented team of experts"
  },
contact: {
  title: "Build the future with us",
  subtitle: "Reach out to learn more or join the revolution.u",
  buttonText: "Contact Us",
  buttonLink: "mailto:info@kathedra.co"
}
};
