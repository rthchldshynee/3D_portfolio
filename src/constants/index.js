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
    propclear,
    modern,
    threedport,
    threejs,
    underdogo,
    shoplebron,
    wix,
    fas,
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
      title: "Junior Web Developer",
      company_name: "Intelligration LLC",
      icon: meta,
      iconBg: "#383E56",
      date: "May 2023 - June 2024",
      points: [
        "Developed and maintained  a WordPress-based marketing website for a fantasy stock trading platform using PHP and modern web standards.",
        "Implement and optimize on-page SEO elements including meta tags, structured data, and keyword-rich content",
        "Collaborate with the design team to implement responsive web designs",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Underdogs Agency LLC",
      icon: mt,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2025",
      points: [
        "Build, maintain and update multiple clients marketing website in shopify, framer, webflow,  squarespace, wordpress, wix, and other web technologies and languages",
        "Implement multiple custom code solutions where needed",
        "Consistently delivered requested edits ahead of time",
        "Collaborate directly with the CEO and other co-workers on a daily basis. ",
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
        "I've worked with RC and even though she's new to the industry, she stepped up and made a beautiful outcome for the project.",
      name: "Timothy Cody",
      designation: "President/CEO",
      company: "Drive Alive App",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After RC optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PropertyClear",
      description:
        "Web-based platform that allows users to search, view, and manage properties from various real-estate, providing a convenient and efficient solution for renting, buying and selling properties.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "yellow-text-gradient",
        },
        {
          name: "Dbeaver",
          color: "green-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "red-text-gradient",
        },
        
      ],
      image: propclear,
      source_code_link: "https://github.com/T9-F24-COMP231/T9-F24-COMP231",
    },
    {
      name: "Modern Tagalog",
      description:
        "Web application that focused on language learning and communication. It auto-translated chat page to help users converse in tagalog and learn more easily.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "socketio",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "yellow-text-gradient",
        },
      ],
      image: modern,
      source_code_link: "https://github.com/rthchldshynee/modern-tagalog/tree/chat-rc",
    },
    {
      name: "3D_Portfolio",
      description:
        "A dynamic personal portfolio website showcasing my development expertise through interactive 3D elements and animations. Features with Three.js for 3D graphics, Vite+React for front-end architecture, and Tailwind CSS for styling.",
      tags: [
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "vite+react",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: threedport,
      source_code_link: "https://github.com/rthchldshynee/3D_portfolio",
    },
    {
      name: "Framer Project",
      description:
        "Built from scratch using Framer. Complete company website development featuring modern design and responsive layout. Created an engaging digital presence that effectively communicates the brand's mission and services through intuitive navigation and compelling visual storytelling. ",
      tags: [
        {
          name: "framer",
          color: "blue-text-gradient",
        },
        {
          name: "brand design",
          color: "green-text-gradient",
        },
        {
          name: "responsive design",
          color: "pink-text-gradient",
        },
      ],
      image: underdogo,
      source_code_link: "https://www.getunderdogs.com/",
    },
    {
      name: "Shopify Project",
      description:
        "Developed a comprehensive shopping experience featuring all collections and products from LeBron James' brand. Implemented seamless product browsing, collection organization, and streamlined checkout process to enhance customer engagement and conversion rates. ",
      tags: [
        {
          name: "shopify",
          color: "blue-text-gradient",
        },
        {
          name: "brand design",
          color: "green-text-gradient",
        },
        {
          name: "responsive design",
          color: "pink-text-gradient",
        },
      ],
      image: shoplebron,
      source_code_link: "https://shoplebron.com/",
    },
    {
      name: "Wix Project",
      description:
        "Custom website built using Wix. Designed and developed a personalized website showcasing professional portfolio and services. Created a clean, user-friendly interface with optimized content presentation and responsive design elements tailored to client specifications.",
      tags: [
        {
          name: "wix",
          color: "blue-text-gradient",
        },
        {
          name: "brand design",
          color: "green-text-gradient",
        },
        {
          name: "responsive design",
          color: "pink-text-gradient",
        },
      ],
      image: wix,
      source_code_link: "https://www.lindseyconrad.com/ ",
    },
    {
      name: "Squarespace Project",
      description:
        "Website revamp using Squarespace. Complete website redesign and revamping focusing on improved visual hierarchy and content organization. Enhanced the organization's digital presence with modern aesthetics while maintaining accessibility and user engagement for the arts community.",
      tags: [
        {
          name: "squarespace",
          color: "blue-text-gradient",
        },
        {
          name: "brand design",
          color: "green-text-gradient",
        },
        {
          name: "responsive design",
          color: "pink-text-gradient",
        },
      ],
      image: fas,
      source_code_link: "https://www.forartssakecle.org/ ",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };