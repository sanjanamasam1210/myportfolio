export interface Project {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Calendar",
      description: "Description of Project 1",
      imageSrc: "/calendar.jpg"
    },
    {
      id: 2,
      title: "PrimeCart",
      description: "Description of Project 2",
      imageSrc: "/primecart.jpg"
    },
    {
      id: 3,
      title: "Welcome",
      description: "Description of Project 3",
      imageSrc: "/welcome.jpg"
    },
    // Add more projects as needed
  ];
  