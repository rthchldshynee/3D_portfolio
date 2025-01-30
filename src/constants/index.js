import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    headset,
    mt,
    upwork,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Operation Supervisor",
      company_name: "Inspiro Relia Inc.",
      icon: headset,
      iconBg: "#383E56",
      date: "July 2018 - Aug 2022",
      points: [
        "Developing and monitoring call center KPI's, generates performance decks and analytics report for clients.",
        "Conducting supervisory oversight and quality assurance monitoring to maintain service excellence.",
        "Leading real-time coaching sessions and provides constructive feedback to agents to improve performance metrics.",
        "Participating in calibration sessions and team meetings to ensure consistency in service delivery and quality.",
      ],
    },
    {
      title: "Project-Based Web Designer",
      company_name: "Upwork Freelance",
      icon: upwork,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Mar 2023",
      points: [
        "Creates and develops custom websites for clients using modern design tools and frameworks",
        "Collaborates with clients through design consultations to transform their vision into functional and visually appealing websites.",
        "Implements responsive designs and optimizes website performance across different devices and browsers to ensure maximum user engagement.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "PropertyClear - School Final Project",
      icon: meta,
      iconBg: "#383E56",
      date: "Sept 2024 - Dec 2024",
      points: [
        "Led full-stack development of a real estate web application using React, Node.js, Express, and PostgreSQL, implementing user authentication and database management from concept to deployment.",
        "Managed complete Agile development cycle including sprint planning, story pointing, and velocity tracking to meet project deadlines.",
        "Built responsive front-end interfaces and RESTful API endpoints for seamless data management and user experience.",
        "Successfully deployed the application to production, implementing proper version control and deployment workflows.",

,
      ],
    },
    {
      title: "Web Developer",
      company_name: "Modern Tagalog - Personal project",
      icon: mt,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Present",
      points: [
        "Developing and maintaining web applications focused on language learning and communication.",
        "Implementing auto-translated chat page to help people converse in Tagalog and learn more easily",
        "Created original schema design for the relational database that runs in the application",
        "Using express, PHP, node-mysql, and socket io to quickly save chats in the database",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but RC proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };