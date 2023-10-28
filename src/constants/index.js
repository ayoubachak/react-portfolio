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
  blob,
  blob_bg,
  // project pics imports
  water_rocket_simulator,
  web_snake_game,
  reactfood,
  leafdoctor,
  minho,
  firebuster,
  silentstorm,
  handilizer,
  linefollower

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
    id: "the-leet-ai",
    title: "The Leet AI",
  },
  {
    id: "extraconnect",
    title: "ExtraConnect",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
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
    name: "cs",
    icon: cs,
  },
  {
    name: "php",
    icon: php,
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
      "Inferential statistics ( 32 hours )",
      "Operational research  ( 32 hours )",
      "Data Structures & Graph Theory ( 32 hours )",
      "Linux Os ( 32 hours )",
      "Object Oriented Programming ( 32 hours )",
      "Frontend Development ( 32 hours )",
      "Backend Development ( 32 hours )",
      "TCP/IP and Networking ( 32 hours )",
      "Wireless Networks ( 32 hours )",
      "Personal Developpement / Leadership and Soft Skills ( 73 hours )",
      "Maths for Engineers ( 64 hours )",
      "Database Design ( 64 hours )",
      "System Design And Fast Prototyping ( 32 hours )",
      "Industrial Systems CAD ( 32 hours )",
      "Sensors and Acquisition ( 32 hours )",
      "Industrial Automation ( 32 hours )",
      "UML Modelisation ( 32 hours )",
      "OOP : Java ( 32 hours )",
      "Economics and Laws of the company ( 70 hours )",
      "Problem Solving ( 32 hours )",
      "Data Analysis and Optimization ( 32 hours )",
      "Advanced Frontend Dev ( 32 hours )",
      "Backend Technologies ( 32 hours )",
      "Systems Security ( 32 hours )",
      "Network Administration ( 32 hours )",
      "JEE ( 32 hours )",
      "Design Patterns ( 32 hours )",
      "Database Administration ( 30 hours )",
      "NoSQL Databases ( 30 hours )",
      "Professional Communication and Soft Skills ( 72 hours )",
      "Mobile Dev ( Android ) ( 32 hours )",
      "IoT and Real-time systems (Node-Red, mqtt, Kafka) ( 32 hours )",
      "Artificial Intelligence ( 32 hours )",
      "Buisiness Intelligence ( 32 hours )",
      "Augmented Reality (Unity) ( 32 hours )",
      "Virtual Reality (Unity) ( 32 hours )",
      "Machine Learning and Text Analytics ( 32 hours )",
      "Deep Learning Techniques ( 32 hours )",
      "Cloud Computing ( 32 hours )",
      "Security and Virtualization ( 32 hours )",
      "Organisational Leadership and entrepreneurship ( 64 hours )",
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


const mustapha_fahmi = "[@Mustapha Fahmi](https://ma.linkedin.com/in/mustapha-fahmi-56218a1b2)"
const manal_mara = "[@Manal Mara](https://ma.linkedin.com/in/manal-mara)"
const marwan_farouk = "[@Marwan Farouk](https://ma.linkedin.com/in/marwane-farouk-2a724b194)"
const anas_labiad = "[@Anas Labiad](https://ma.linkedin.com/in/anas-labiad)"
const abdellah_adfaa = "[@Abdellah Adfaa](https://ma.linkedin.com/in/abdellah-adfaa-2ab8791b3)"
const abdellah_hallou = "[@Abdellah Hallou](https://www.linkedin.com/in/abdellah-hallou/)"
const ismail_essagar = "[@Ismail Essagar](https://ma.linkedin.com/in/ismail-essagar)"
const wiam_alimi = "[@Wiam Alimi](https://ma.linkedin.com/in/wiam-alimi-4755421b6)"
const alae_kasimi = "[@Alae Kacimi](https://ma.linkedin.com/in/alae-kacimi-932a82200)"
const amine_elarif = "[@Amin El Arif](https://ma.linkedin.com/in/elarif-amine)"
const mohammed_meziane = "[@Mohammed Meziane](https://ma.linkedin.com/in/mohammed-meziane-319371228)"
const ammar_nafir = "[@Ammar Nafir](https://ma.linkedin.com/in/ammar-nafir-8b0941200)"
const ghita_bouhmid = "[@Ghita Bouhmid](https://eh.linkedin.com/in/ghita-bouhmid-b0ab671b9)"
const imane_chtouk = "[@Imane Chtouk](https://ma.linkedin.com/in/imane-chtouk-a7177719a)"
const hamza_hanbali = "[@Hamza Hanbali](https://ma.linkedin.com/in/hamza-hanebali-2890a7201)"
const oussama_darrazi = "[@Oussama Darrazi](https://ma.linkedin.com/in/oussamadarrazi)"
const ayoub_essaghyr = "[@Ayoub Essaghyr](https://ma.linkedin.com/in/ayoub-essaghyr)"
const yassine_elidrissi = "[@Yassine El Idrissi](https://fr.linkedin.com/in/elidrissiyassine)"
const ismail_yazidi = "[@Ismail Yazidi](https://ma.linkedin.com/in/ismail-yazidi-49ab591a8)"
const mohamed_elhazami = "[@Mohammed El Hazami](https://ma.linkedin.com/in/mohamed-el-hazami-a20b211ba)"


const projects = [
  {
    name: "Handilizer (3rd Prize Winner in Capgemini Competition)", 
    description:
      `Worked on the Software of a Bionic Arm, a camera detects real-time hand movements and sends data to the hand to replicate the movement.\n\n**Teammates :** ${mustapha_fahmi}`,
    tags: [
      {
        name: "raspberry-pi",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
      {
        name: "mediapipe",
        color: "yellow-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
    ],
    image: handilizer,
    source_code_link: "https://github.com/ayoubachak/",
    closed_source: true,
  },
  {
    name: "NRC Line Follower (3rd Prize winner of the NRC Competition)", 
    description:
      `We built a line follower robot to reach a target and avoid the obstacles, and with a second mode where we controle it via a bluetooth application.\n\n**Teammates :** ${marwan_farouk} , ${manal_mara} , ${abdellah_adfaa}`,
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "mit-app-inventor",
        color: "pink-text-gradient",
      },
    ],
    image: linefollower,
    source_code_link: "https://github.com/ayoubachak/",
    closed_source: true,
  },
  {
    name: "SilentStorm (3rd Prize winners in the Aquisition Days Competition)", 
    description:
      `A watch for mute people connected to a mobile app via bluetooth with a screen terminal and touch sensors where they can write text using morse code and send the text to the app to be spoken.\n\n**Teammates :** ${amine_elarif} , ${wiam_alimi} , ${alae_kasimi} , ${mohammed_meziane}`,
    tags: [
      {
        name: "esp32",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
    ],
    image: silentstorm,
    source_code_link: "https://github.com/ayoubachak/",
    closed_source: true,
  },
  {
    name: "FireBuster (Finals in the Aquisition Days Competition)",
    description:
      `Gas and Flame detection system that transmits real-time data and sends SMS alerts upon detecting fires, used mapbox API for locating the fires on a map.\n\n**Teammates :** ${imane_chtouk} , ${ghita_bouhmid} , ${hamza_hanbali}`,
    tags: [
      {
        name: "esp32",
        color: "blue-text-gradient",
      },
      {
        name: "xamp",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "white-text-gradient",
      },
    ],
    image: firebuster,
    source_code_link: "https://github.com/ayoubachak/",
    closed_source: true,
  },
  {
    name: "Minho (3rd Prize Winner - MazeRunner Competition, 2020)",
    description:
      `Programming a robot to excel in solving complex mazes efficiently using ultra-sonic sensors and arduino.\n\n**Teammates :** ${mustapha_fahmi} , ${anas_labiad} , ${marwan_farouk} , ${oussama_darrazi}`,
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
    ],
    image: minho,
    source_code_link: "https://github.com/ayoubachak/",
    closed_source: true,
  },
  {
    name: "Leaf Doctor",
    description:
      `Simple App for agricultors to detect and identify the illness of the plant, we embedded the tflite model inside the app so that it's offline. We won the 1st place in Orange Competition where we were delivered the prize by the Minister of Education.\n\n**Teammates :** ${abdellah_hallou} , ${ismail_essagar}`,
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
      {
        name: "deep-learning",
        color: "white-text-gradient",
      },
    ],
    image: leafdoctor,
    source_code_link: "https://github.com/ayoubachak/Solution-challenge.git",
    closed_source: true,
  },
  {
    name: "User Interface for CAN Bus Interactions",
    description:
      "User Interface that collects and sends instructions to 3 difference sensors in the CAN Bus, with a 3d model of the accelerometer that rotates in real-time",
    tags: [
      {
        name: "qtcreator",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/buscan-ihm.git",
    closed_source: false,
  },
  {
    name: "CAN Bus with Motor",
    description:
      "Reading a wind sensor values and applying them to move a motor and controlling and sending the motor data through the CAN Bus",
    tags: [
      {
        name: "stm32",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/buscan-motor.git",
    closed_source: false,
  },
  {
    name: "CAN Bus with lps22hb and hts221 sensors",
    description:
      "Reading of the MPU9250 sensor data through i2c and sending data through a CAN Bus",
    tags: [
      {
        name: "stm32",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/buscan-lps22hb-hts221.git",
    closed_source: false,
  },
  {
    name: "CAN Bus with MPU9250 sensor",
    description:
      "Reading of the MPU9250 sensor data using i2c and sending data through a CAN Bus",
    tags: [
      {
        name: "stm32",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/buscan-mpu9250.git",
    closed_source: false,
  },
  {
    name: "Programming Language",
    description:
      "Worked on and implemented new features to an interpreted programming language running on LPCXPresso board.",
    tags: [
      {
        name: "lpcxpresso",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/projet_cm33.git",
    closed_source: false,
  },
  {
    name: "Serial Communication ( TX / RX )",
    description:
      "Code to simulate Serial Communication in a serial in microcontrollers using VHDL ",
    tags: [
      {
        name: "vhdl",
        color: "blue-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/serial-communication-vhdl.git",
    closed_source: false,
  },
  {
    name: "Accelerometer on LPCXPresso",
    description:
      "Simlpe code that reads accelerometer data through i2c bus in LPCXPresso Board",
    tags: [
      {
        name: "lpcxpresso",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "blue-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/sen_cm33_lab3_i2c.git",
    closed_source: false,
  },
  {
    name: "Knowledge Clash",
    description:
      `Multiplayer game where you can select a topic to discuss, the first player will ask a question and the second will try to answer, the judge is chatgpt LLM ( using openao api), the one with the least score loses.\n\n**Teammates :** ${abdellah_hallou} , ${ismail_essagar}`,
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "game",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/knowlege-Clash.git",
    closed_source:true,
  },
  {
    name: "AR Games",
    description:
      "This repo contains 2 games that use AR ( in mediapipe ) A snake game that's controlled by hand and camera, and a virtual painting game",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "blue-text-gradient",
      },
      {
        name: "game",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/AG-games.git",
    closed_source: false,
  },
  {
    name: "Spyder Robot Controller",
    description:
      "This is a bluthoot app I made to control the robot, use it if you need remote bluethooth connection to an HC05 bluthooth device and customize it as you wish",
    tags: [
      {
        name: "anrdoid-studio",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/SpyderRobotController.git",
    closed_source: false,
  },
  {
    name: "Spyder Robot",
    description:
      "Code for a spyder robot for the UM6P hackathon, after a tirelessly trying to make the robot walk we found out that the issue was in the motors and we resigned, the code logic is perfect tho",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/Spyder-Robot.git",
    closed_source: false,
  },
  {
    name: "Design Patterns",
    description:
      "Repo showing the most majorly used design patterns in java with explanation of each pattern",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "design-patterns",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/Design-Patterns.git",
    closed_source: false,
  },
  {
    name: "EasyArabic",
    description:
      `Translation App built for the football fans in Qatar for the 2022 world cup, used translation api.\n\n**Teammates :** ${abdellah_hallou} , ${ismail_essagar}`,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/EasyArabic.git",
    closed_source: true ,
  },
  {
    name: "AOS Software",
    description:
      `Building the software for an education project, using electron js and flask. Implemented build for different linux architectures using github CD/CI.\n\n**Teammates :** ${ayoub_essaghyr} , ${yassine_elidrissi} , ${ismail_yazidi} , ${mohamed_elhazami}`,
    tags: [
      {
        name: "electronjs",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "cyan-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/AOS-Software.git",
    closed_source: true,
  },
  {
    name: "Help Center Platform",
    description:
      `Platform to help create a help forume for a company with contact section to the company, you can create blogs topics and categories and receive reviews ( kinda like medium.com).\n\n**Teammates :** ${abdellah_hallou} , ${ismail_essagar}`,
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "cyan-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/Parc.git",
    closed_source: false,
  },
  {
    name: "Parc Management",
    description:
      `Spring boot / React app to manage Employees, Missions and vehicles in the company's parking, with chat functionality ( SocketIO ) and role management.\n\n**Teammates :** ${ismail_essagar} , ${ammar_nafir}`,
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/Parc.git",
    closed_source: false,
  },
  {
    name: "Collor Sniffer",
    description:
      "A chrome extension for taking a color out of a pixel in the page, it still have some bugs on brave but it should work fine on chrome",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "exetension",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/ColorSniffer.git",
    closed_source: false,
  },
  {
    name: "Web Chat App",
    description:
      "A very rocky chat app that I didn't want to publish here because of the very bad code, it's done in one night with no websockets 💀 ( don't look at the code )",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "meme",
        color: "white-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/Chat-App.git",
    closed_source: false,
  },
  {
    name: "Ensam Student Performance",
    description:
      `Studiying Student data from a survey to generate reports of student performance and discovering what affetcs their marks in school.\n\n**Teammates :** ${abdellah_hallou} , ${ismail_essagar}`,
    tags: [
      {
        name: "R",
        color: "blue-text-gradient",
      },
      {
        name: "data",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/studentPerfermance-Ensam.git",
    closed_source: false,
  },
  {
    name: "Esp Projects",
    description:
      "A set of projects for esp32 beginners",
    tags: [
      {
        name: "esp32",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/esp32-projects.git",
    closed_source: false,
  },
  {
    name: "ReactFood",
    description:
      "Simple React web app that will serve you dishes and its recipes and ingredients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "purple-text-gradient",
      },
    ],
    image: reactfood,
    source_code_link: "https://github.com/ayoubachak/ReactFood.git",
    closed_source: false,
  },
  {
    name: "Web Snake Game",
    description:
      "Simple Snake Game with the main loop and a special map rendered in the canvas",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "game",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "purple-text-gradient",
      },
    ],
    image: web_snake_game,
    source_code_link: "https://github.com/ayoubachak/web-snake-game.git",
    closed_source: false,
  },
  {
    name: "Water Rocket Simulator",
    description:
      "Website that will help you launch your rocket and land it by providing some charts",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "meme",
        color: "purple-text-gradient",
      },
    ],
    image: water_rocket_simulator,
    source_code_link: "https://github.com/ayoubachak/waterrocketsimulator.github.io.git",
    closed_source : false,
  },
  {
    name: "Thermal Torque calculator",
    description:
      "Simple App to calculate the thermal Torque, I made this for a friend :)",
    tags: [
      {
        name: "matlab",
        color: "blue-text-gradient",
      },
      {
        name: "desctop",
        color: "green-text-gradient",
      },
    ],
    image: blob,
    source_code_link: "https://github.com/ayoubachak/ThernoCouple-App-Matlab.git",
    closed_source : false,
  },
];

export { services, technologies, experiences,schools, testimonials, projects };
