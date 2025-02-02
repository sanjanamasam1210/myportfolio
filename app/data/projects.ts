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
    title: "Calendar",
    description: "Full-stack e-commerce solution with modern UI/UX",
    imageSrc: "/calendar.jpg",
    images: [
      "/calendar.jpg",
      "/calendar.jpg",
      "/calendar.jpg"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Product catalog with filters",
      "Shopping cart persistence",
      "Stripe payment integration"
    ],
    details: "Developed a responsive e-commerce platform with shopping cart functionality and payment gateway integration...",
    links: {
      live: "https://example.com",
      github: "https://github.com/example/ecommerce"
    }
  },
  {
    id: 2,
    title: "PrimeCart",
    description: "Analytics dashboard for social media metrics",
    imageSrc: "/primecart.jpg",
    images: [
      "/primecart.jpg",
      "/primecart.jpg"
    ],
    technologies: ["React", "TypeScript", "Chart.js", "Firebase"],
    details: "Created a real-time analytics dashboard with data visualization features...",
    links: {
      github: "https://github.com/example/dashboard"
    }
  },
  {
    id: 3,
    title: "Welcome",
    description: "Full-stack e-commerce solution with modern UI/UX",
    imageSrc: "/welcome.jpg",
    images: [
      "/welcome.jpg",
      "/welcome.jpg",
      "/welcome.jpg"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Product catalog with filters",
      "Shopping cart persistence",
      "Stripe payment integration"
    ],
    details: "Developed a responsive e-commerce platform with shopping cart functionality and payment gateway integration...",
    links: {
      live: "https://example.com",
      github: "https://github.com/example/ecommerce"
    }
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Full-stack e-commerce solution with modern UI/UX",
    imageSrc: "/calendar.jpg",
    images: [
      "/calendar.jpg",
      "/1.jpg",
      "/2.jpg",
      "/3.jpg",
      "/4.jpg"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    features: [
      "Product catalog with filters",
      "Shopping cart persistence",
      "Stripe payment integration"
    ],
    details: "Developed a responsive e-commerce platform with shopping cart functionality and payment gateway integration...",
    links: {
      live: "https://example.com",
      github: "https://github.com/example/ecommerce"
    }
  },
];
