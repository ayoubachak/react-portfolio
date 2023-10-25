import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  nodejs,
  git,
  docker,
  cbi,
  kezakoo,
  miratti,
  carrent,
  jobit,
  tripguide,
  java,
  python,
  c,
  cpp,
  cs,
  spring,
  php,
  rust,
  sql,
  ismail,
  abdellah,
  ensam,
  enib,
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
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FullStack WebDev",
    icon: web,
    back_tech :["ReactJS", "Python", "PHP", "Java", "GraphQL", "JQuery" ],
  },
  {
    title: "Mobile and Desktop",
    icon: mobile,
    back_tech :["ReactNative","AndroidStudio", "Electron.js", "PyQt5", "tkinter"],
  },
  {
    title: "Cloud and CD/CI",
    icon: backend,
    back_tech :[ "AWS", "Github","BitBucket", "Docker", "Kubernates"],
  },
  {
    title: "ML and DL",
    icon: creator,
    back_tech :["TensorFlow", "OpenCV", "PyTorch", "Neat", "SKLearn", "Pandas", "Numpy"],
  },
  {
    title: "Embedded Systems and IoT",
    icon: web,
    back_tech :["Arduino", "RaspberryPi", "ESP32/82", "STM32", "LPCXpersso" ],
  },
  {
    title: "Game Dev",
    icon: mobile,
    back_tech :[ "Unity", "PyGame", "Java" ],
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "cs",
    icon: cs,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "rust",
    icon: rust,
  },
];

const experiences = [
  {
    title: "Software Engineer | Python (Flask), React (TypeScript)",
    company_name: "@CBI",
    company_url: "https://www.cbi.ma",
    employement_type: "Internship",
    icon: cbi,
    iconBg: "#383E56",
    date: "May 2023 - Sep 2023 (4 Months)",
    points: [
      "I spearheaded the development of an innovative Cisco Router / Switch automation project, resulting in the creation of a versatile automation device powered by a Raspberry Pi Zero W",
      "Designed and created a groundbreaking automation device using Raspberry Pi",
      "Implemented versatile connectivity options including Serial, Telnet, and SSH, enabling users to collect and manage device logs, execute upgrade procedures, and run automated network commands, with logs tracked and stored for reference.",
      "Addressed a critical company challenge by providing a user-friendly graphical interface for clients, reducing the need for manual command execution and onsite visits",
      "Deployed the application as a Linux service, powered by a Flask server and a React (TypeScript) frontend, delivering updates via CI/CD pipelines and ensuring seamless communication through WebSocket technology.",
      "Revolutionized operational efficiency, enabling remote automation for clients and eliminating the need for on-site personnel",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "@Kezakoo",
    company_url: "https://www.kezakoo.com",
    employement_type: "Part-Time",
    icon: kezakoo,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Jan 2023 (9 months)",
    points: [
      "Making UI/UX/DX and backend improvements, to make the experience usable and enjoyable for Millions of Moroccan Students",
      "Accelerated feature delivery by 40% through streamlined deployments (BitBucket, AWS).",
      "Increased student engagement by 30% with a gamification system (PHP, WordPress, JS).",
      "Improved resource accessibility, reducing search time by 50% (AjaxSearchPro, ElasticSearch, Kibana).",
      "Efficiently managed the Dev Team, achieving a 20% productivity boost.",
      "Enhanced mobile app performance, resulting in a 25% increase in user satisfaction with responsive APIs.",
    ],
  },
  {
    title: "Android And FullStack Developper",
    company_name: "@Miratti",
    company_url: "https://www.mirattibags.com",
    employement_type: "Part-Time",
    icon: miratti,
    iconBg: "#383E56",
    date: "May 2022 - Sep 2022 (5 months)",
    points: [
      "Leading the next generation of IoT-connected Luxurious Leather bags in Morocco",
      "Created an IoT Android app with Gatt Server for BLE, incorporating Nrf, RFID, GPS, and 3G connectivity. Built using open-source solutions and technologies including Android Studio, Bitbucket, Java, and was hosted on Github.",
      "Collaboration with protomain.com for the hardware. Ensure the meet of quality to our customers",
      "Creation and deployment of a portfolio website me.mirattibags.com for the Miratti community.",
      "Adding User Auth and SMTP Setup on mirattibags.com for sharing data between apps via WordPress RestAPI",
    ],
  },
];
const schools = [
  {
    title: "Computer Science Engineer",
    company_name: "Ecole Nationale des Ingenieurs Brest",
    company_url: "https://www.enib.fr",
    employement_type: "France",
    icon: enib,
    iconBg: "#E6DEDD",
    date: "2023 - Present ( Graduation 2025 )",
    points: [
      "Studying low-level programming",
    ],
  },
  {
    title: "Software Engineering and Artificial Intelligence",
    company_name: "Ecole Nationale des Arts et Metiers Casablanca",
    company_url: "http://www.ensam-casa.ma",
    employement_type: "Morocco",
    icon: ensam,
    iconBg: "#383E56",
    date: "2019 - 2023 ( 4 years Done)",
    points: [
      "Studiying about many topics",
    ],
  },
  
];

const testimonials = [
  {
    testimonial: "Working with Ayoub on various projects has been an experience that I truly cherish. His dedication and commitment to delivering impeccable work was truly inspiring. His proactive approach and ability to effectively manage tasks never ceased to impress me. Together we have reached remarkable milestones, from winning competitions to successful speedrun projects. The memories we made during this time are truly unforgettable. He always makes me want to work with him again and overcome challenges together, and I'm sure you feel the same if he's on your team.",
    name: "Ismail Essagar",
    designation: "Software Engineer",
    company: "",
    image: ismail,
  },
  {
    testimonial:
      "I've had the pleasure of working closely with Ayoub in a team on numerous projects. He puts his full effort into the things he is working on. Ayoub is super motivated and always ready for all great new projects. His curious nature and discipline make him easy to work with! He’s a great team player, who always keeps an eye on everything and brings important ideas and perspectives to the projects in a great manner.",
    name: "Abdellah Hallou",
    designation: "Software And ML Engineer",
    company: "",
    image: abdellah,
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

export { services, technologies, experiences,schools, testimonials, projects };
