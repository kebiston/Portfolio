import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kebiston Pushparaj",
  url: "https://Kebiston.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/San+Francisco,+CA",
  description:
    "Tech enthusiast with experience in development and networking. I enjoy building things, fixing things, and working with global teams - especially Japanese clients.",
  summary:
    "Japanese-speaking software professional N3 level with 3 years of experience in software development, quality assurance, and process. Provenability to deliver high-quality software solutions and optimize testing processes. Adept at collaborating with cross-functional teams, includingJapanese teams, and leveraging technical expertise to drive project success. Committed to continuous learning and staying current with industrytrends.",
  avatarUrl: "/me.png",
  skills: [
    "Japanese (N3)",
    "Java",
    "Javascript",
    "jquery",
    "MySql",
    "React",
    "Figma",
    "Networking",
    "Git",
    "HTML/CSS",
    "TailwindCSS",
    "sturts2",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Resume" },
  ],
  contact: {
    email: "kebiston.p2000@gmail.com",
    tel: "+91 7092890503",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kebiston",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kebiston-p-2b0350326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/KebistonM",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:kebiston.p2000@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Mosaique PVT.LTD",
      // href: "https://atomic.finance",
      badges: [],
      location: "Hybrid",
      title: "Network Support Engineer (Trainee)",
      logoUrl: "/mosaique.png",
      start: "May 2025",
      end: "Present",
      description:
        "I'm responsible for implementing and maintaining the company’s network infrastructure. My work includes configuring LAN/WAN networks, managing IP addressing, setting up secure VPN connections, and performing routine network troubleshooting. I ensure smooth connectivity for all users by monitoring network performance, resolving technical issues, and applying best practices for network stability and security.",
    },
    {
      company: "Objectways Technologies",
      badges: [],
      href: "https://objectways.com/",
      location: "Remote",
      title: " Bilingual technical support engineer (Japanese/English)",
      logoUrl: "/objectways.png",
      start: "January 2025",
      end: "Present",
      description:
        "I work as a Bilingual Japanese Support Specialist, acting as a communication bridge between customers and the development team. My role includes identifying and verifying user issues, translating technical information between Japanese and English, and ensuring clear and accurate communication. I also test AI-based tools, review call results, validate system accuracy, and prepare detailed reports for the development team. Through consistent issue analysis and testing, I help improve product quality, enhance customer satisfaction, and support the development team in implementing the right fixes and updates.",
    },
    {
      company: "Sathi systems PVT.LTD",
      href: "http://ssdev.microbit.co.jp/sathisys_HP/contact.html",
      badges: [],
      location: "Thirunelveli, India",
      title: "Bilingual Java Developer (Japanese/English)",
      logoUrl: "",
      start: "January 2022",
      end: "December 2024",
      description:
        "I was responsible for developing and maintaining both front-end and back-end components of web applications. My role involved building clean and efficient Java-based solutions, designing user-friendly interfaces, and integrating system functionalities to ensure smooth application performance. I also performed thorough testing of web applications to identify issues, validate features, and ensure high-quality delivery. ",
    },
  ],
  education: [
    {
      school: "Anna University",
      href: "https://www.annauniv.edu/index.php#gsc.tab=0",
      degree: "BTech in Information Technology",
      logoUrl: "/annauniv.jpg",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "学校管理システム　(School Management System)",
      href: "https://drive.google.com/drive/folders/1Muc1gUvUZa9BU4KvLY8OaVfiN7Z_8FhN",
      dates: "Jan 2022 - Mar 2022",
      active: false,
      description:
        "Developed a web-based student management system for educational institutions using Java, JSP, and Apache Struts.The system enables administrators to manage student records, perform advanced searches, and export data via an intuitive Japanese-language UI.Implemented an MVC architecture with frontend UI design, backend business logic, and database integration on a Tomcat environment.",
      technologies: [
        "Java",
        "JSP",
        "Apache Struts",
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
      ],
      links: [
        {
          type: "UI",
          href: "https://drive.google.com/drive/folders/1Muc1gUvUZa9BU4KvLY8OaVfiN7Z_8FhN",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project1.png",
      // video:
      //   "/project1.png",
    },
  ],
  hackathons: [
    {
      title: "Cisco Certified Netwrork Associate (CCNA)",
      dates: "May - Sept 2025",
      location: "India",
      description:
        "Valid: Sept 2025 - Sept 2028 | CISCO ID: CSC0149904",
      image:
        "/ccna.jpg",
      // mlh: "/ccnacert.png",
      links: [],
    },
    {
      title: "Japanese Language Proficiency Test N3",
      dates: "July 2025",
      location: "India",
      description:
        "Completed my japanese language proficiency test N3 level.",
      image:
        "/jlpt.jpg",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
      ],
} as const;
