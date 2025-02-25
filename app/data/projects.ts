// export interface Project {
//     id: number;
//     title: string;
//     description: string;
//     imageSrc: string;
//   }
  
//   export const projects: Project[] = [
//     {
//       id: 1,
//       title: "Calendar",
//       description: "Description of Project 1",
//       imageSrc: "/calendar.jpg"
//     },
//     {
//       id: 2,
//       title: "PrimeCart",
//       description: "Description of Project 2",
//       imageSrc: "/primecart.jpg"
//     },
//     {
//       id: 3,
//       title: "Welcome",
//       description: "Description of Project 3",
//       imageSrc: "/welcome.jpg"
//     },
//     {
//       id: 4,
//       title: "Portfolio",
//       description: "Description of Project 4",
//       imageSrc: "/calendar.jpg"
//     },
    
//     // Add more projects as needed
//   ];
  

export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc: string; // Cover image for main page
  images?: string[]; // Array of images for project page (optional)
  technologies?: string[];
  features?: string[];
  details?: string;
  links?: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Kofi Kinara",
    description: "Full-stack Hyderabad Cafes listing platform",
    imageSrc: "/welcome.jpg",
    images: [
      "/welcome.jpg",
      "/welcome.jpg",
      "/welcome.jpg"
    ],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    features: [
      "Product catalog with filters",
      "Shopping cart persistence",
      "Stripe payment integration"
    ],
    details: "A Platform for displaying all the Hyderabad Cafes at one place, where one could list a cafe or review one, this Project is still in development",
    links: {
      live: "https://kofi-kinara.vercel.app/",
      github: "https://github.com/sanjanamasam1210/KofiKinara"
    }
  },
  {
    id: 2,
    title: "Portfolio",
    description: "My Portfolio",
    imageSrc: "/calendar.jpg",
    images: [
      "/calendar.jpg",
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg"
    ],
    technologies: ["Next.js", "PostreSQL", "Supabase", "Prisma", "Tailwind CSS", "TypeScript"],
    features: [
      "Product catalog with filters",
      "Shopping cart persistence",
      "Stripe payment integration"
    ],
    details: "Developed a responsive Portfolio to showcase all my projects ",
    links: {
      live: "https://sanjanamasam.vercel.app/",
      github: "https://github.com/sanjanamasam1210/myportfolio"
    }
  },
  {
    id: 3,
    title: "Calendar",
    description: "The Calendar Scheduling Platform is a comprehensive full-stack application that simplifies meeting scheduling and calendar management. ",
    imageSrc: "/calendar.jpg",
    images: [
      "/calendar.jpg",
      "/calendar.jpg",
      "/calendar.jpg"
    ],
    technologies: ["Next.js", "PostreSQL", "Supabase", "Prisma", "Tailwind CSS", "TypeScript"],
    features: [
      "Product catalog with filters",
      "Shopping cart persistence",
      "Stripe payment integration"
    ],
    details: " It features dynamic booking forms, real-time updates, and a fully custom-built calendar system, all wrapped in a clean, responsive interface.",
    links: {
      live: "https://example.com",
      github: "https://github.com/sanjanamasam1210/Calendar/tree/auth-implement"
    },
  },
  {
    id: 4,
    title: "PrimeCart",
    description: "This MERN stack project implements a full-fledged Ecommerce platform",
    imageSrc: "/primecart.jpg",
    images: [
      "/primecart.jpg",
      "/primecart.jpg"
    ],
    technologies: ["React", "JavaScript", "MongoDB", "NodeJS", "Express"],
    details: "It is integrated with payment gateway functionality. It includes an admin dashboard for managing products and orders, and a user dashboard for browsing and purchasing items securely.",
    links: {
      github: "https://github.com/sanjanamasam1210/mern-ecommerce"
    }
  },
];
