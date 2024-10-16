export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#experience',
  },
  {
    id: 5,
    name: 'Recognitions',
    href: '#recognitions',
  },
  {
    id: 6,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Star Performer',
    position: 'ThoughtFocus',
    source: '/assets/TF_Star_performer.jpg',
    img: 'assets/tf.png',
    review:
      'Working with Asma was a fantastic experience. She transformed our website into a modern, user-friendly platform. Her attention to detail and commitment to quality are unmatched. Highly recommend her for any web dev projects.',
  },
  {
    id: 2,
    name: 'Star Performer',
    position: 'TCS',
    source: '/assets/TCS_Star_performer.jpg',
    img: 'assets/tcs.png',
    review:
      'Asma was able to take our complex project requirements and turn them into a seamless, functional APIs. Her problem-solving abilities are outstanding.',
  },
  {
    id: 3,
    name: 'Best Team',
    position: 'TCS ',
    source: '/assets/TCS_Best_Team.jpg',
    img: 'assets/tcs.png',
    review:
      "Asma is a quick learner and able to adapt new technologies, frameworks quickly and contributed massively to project's success.",
  },
  // {
  //   id: 4,
  //   name: 'Ether Smith',
  //   position: 'CEO of BrightStar Enterprises',
  //   img: 'assets/review4.png',
  //   review:
  //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  // },
];

export const myProjects = [
  {
    title: 'Fizzi - 3D e-commerce landing Page',
    desc: 'Fizzi is a 3D animated e-commerce landing page for the fictional soda brand, Fizzi! Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, GSAP and Prismic, drei, Three.js, React.js and React-three-fiber.',
    href: 'https://fizzi-3d-soda.netlify.app/',
    gitref: 'https://github.com/asmashaik040/fizzi-drink',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Three.js',
        path: '/assets/threejs.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms by using Next.js, Tailwind CSS, TypeScript, React.js and shadCN that enhance operational workflows.',
    href: 'https://health-carepulse.netlify.app/',
    gitref: 'https://github.com/asmashaik040/health-care',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Next JS',
        path: '/assets/nextjs.png',
      },
    ],
  },
  {
    title: 'Muskaan - Online Dining Platform',
    desc: 'Muskaan is a comprehensive online dining platform that offers users a centralized dashboard to view the menu. It allows users to connect to restuarant management, view the services and food offered, and seamlessly reserve to experience fine dining.',
    subdesc:
      'Built with React.js, Vite, Tailwind CSS and JavaScript ensures a smooth and dining experience, tailored to meet the needs of modern consumers.',
    href: 'https://muskaan-dining.netlify.app',
    gitref: 'https://github.com/asmashaik040/Restaurant-app',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javaScript.png',
      },
      {
        id: 4,
        name: 'Vite',
        path: '/vite.svg',
      },
    ],
  },
  {
    title: 'Aurora - Modern UI Web Interface',
    desc: 'Aurora is a Software-as-a-Service application that empowers users to create stunning modern UI/UX principles.',
    subdesc:
      'Built with React.js, Vite, Tailwind CSS and JavaScript that exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.',
    href: 'https://aurora-saas.netlify.app',
    gitref: 'https://github.com/asmashaik040/aurora_saas',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javaScript.png',
      },
      {
        id: 4,
        name: 'Vite',
        path: '/vite.svg',
      },
    ],
  },
  {
    title: 'ReactJobs - Job Listing Portal',
    desc: 'ReactJobs is a jobs listing project where user can view the job listing, employer can add, edit and delete jobs. Using json-server for mock backend.',
    subdesc:
      'With ReactJobs, users can experience the future of collaboration, where multiple employers can post job opportunities to work together, by using React.js and Tailwind CSS latest features.',
    href: 'https://jobs-portal-reactjs.netlify.app/',
    gitref: 'https://github.com/asmashaik040/react-jobs',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/javaScript.png',
      },
      {
        id: 4,
        name: 'Vite',
        path: '/vite.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -2.5, 0] : [1, -4, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'ThoughtFocus, Bangalore',
    pos: 'Lead Front End Developer',
    duration: '2022 - 2024',
    title: "Led the development of pixel perfect product pages with styled components by transforming Figma files using jQuery, JavaScript, HTML and CSS and integrated with third party platform where lenders can easily access modern mortgage experience.",
    icon: '/assets/tf.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Tata Consultancy Services, Chennai',
    pos: 'Back End Developer',
    duration: '2019 - 2021',
    title: "Developed enterprise- level micro service APIs for CITI Mobile Banking Application using the latest technologies of Java 8, Spring Framework Integration that serves millions of banking requests every day.",
    icon: '/assets/tcs.png',
    animation: 'clapping',
  },
  // {
  //   id: 3,
  //   name: 'Notion',
  //   pos: 'Junior Web Developer',
  //   duration: '2019 - 2020',
  //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: '/assets/notion.svg',
  //   animation: 'salute',
  // },
];
