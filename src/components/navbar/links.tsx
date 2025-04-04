import {
  HomeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  MessageSquareIcon,
  WrenchIcon,
  MailIcon,
} from "lucide-react";

interface Link {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export const links: Link[] = [
  // {
  //   name: "Experience",
  //   href: "#experience",
  //   icon: <BriefcaseIcon className="size-4" />,
  // },
  {
    name: "solutions",
    href: "#skills",
    icon: <WrenchIcon className="size-4" />,
  },
  // {
  //   name: "Education",
  //   href: "#education",
  //   icon: <GraduationCapIcon className="size-4" />,
  // },
  {
    name: "our team",
    href: "#team",
    icon: <MessageSquareIcon className="size-4" />,
  },
  {
    name: "contact us",
    href: "#contact",
    icon: <MailIcon className="size-4" />,
  }
];
