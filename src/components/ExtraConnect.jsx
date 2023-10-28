import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles"; 
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ReactMarkdown from 'react-markdown';


import {
  extraconnect,
  extraconnect_proj,
  proxynet,
  proxynet_icon,
  
  github_icon,
  instagram_icon,
  linkedin_icon,
} from '../assets';

const projectList = [
  { 
    id:1,
    background: extraconnect_proj, 
    logo: extraconnect, 
    linkIcon: linkedin_icon, 
    link:"https://www.linkedin.com/company/extraconnect/" ,
    description: 'Extra Connect', 

  },
  { 
    id:2,
    background: proxynet, 
    logo: proxynet_icon, 
    linkIcon: linkedin_icon,
    link:"https://www.linkedin.com/company/proxy-net-official/" ,
    description: 'Proxynet',
    markdownText: `Your Markdown text for Proxynet here...`
  },
];

/*
Proxynet is a decentralized social medial App which would work on either Peer-to-peer connection or BlockChain.
The data in the app is almost never shared with a central server, The app is made using **Flutter** and is ** Cross-platform ** 
The app can also be used to share media, watch posts from people nearby and chatting with peer-to-peer communication.
*/

const ExtraConnect = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [text, setText] = useState("");

  const getMarkdownText = (project) => {
    if (project.id === 1) {
      let desc = "  I founded ExtraConnect in 2021 with [@Anas Labiad](https://ma.linkedin.com/in/anas-labiad)."
       desc+="\nOur startup idea have been selected to participate in “THE STARTUPPER OF THE YEAR” challenge , organized by \“Total-Energies\”."
       desc+="\nWe've Leveraged 4 Fleet Management Solutions:"      
       desc+="\n* **24-7 garde** : Device you attach to your vehicle to track it and send alerts to the authorities when an accident occurs with the help of the car's shock sensor. " 
       desc+="\n* **Autotrucking** : Device you attach to the staff vehicule to manage the fleet."
       desc+="\n* **Potholes Manager** : Device that will detect the potholes and geo-locate them for road maintainance data."
       desc+="\n* **Quick Health Care** : Solution for Ensurence companies, the device will collect the data like a black box."
       desc+="\n\nYou can also follow our Social Medial on the following links:"
       desc+=`\n![side-by-side](${github_icon}) ![side-by-side](${instagram_icon}) ![side-by-side](${linkedin_icon})`;
      
      return desc;
    }
    if (project.id === 2) {
      return `  Proxynet is a decentralized social medial App which would work on either Peer-to-peer connection or BlockChain.\n\nThe data in the app is almost never shared with a central server, The app is made using **Flutter** and is **Cross-platform**\n\nThe app can also be used to share media, watch posts from people nearby and chatting with peer-to-peer communication.`;
    }
    return '';
  };

  const components = {
    // Custom component for paragraphs
    p: ({ node, children }) => {
      const childArray = Array.isArray(children) ? children : [children];
      if (childArray.some(child => child.props && child.props.alt === 'side-by-side')) {
        return (
          <div>
            <p>{children.filter(child => !(child.props && child.props.alt === 'side-by-side'))}</p>
            <div className="flex items-center">
              {children.filter(child => child.props && child.props.alt === 'side-by-side')}
            </div>
          </div>
        );
      }
      return <p>{children}</p>;
    },
    // Custom component for images
    img: ({ node, alt, src }) => {
      const linkMap = {
        'side-by-side': {
          'github': 'https://www.github.com/ExtraConnect',
          'instagram': 'https://www.instagram.com/extra.connect/',
          'linkedin': 'https://www.linkedin.com/company/extraconnect/',
        }
      };
      if (alt === 'side-by-side') {
        let platform = '';
        if (src.includes('github')) {
          platform = 'github';
        } else if (src.includes('instagram')) {
          platform = 'instagram';
        } else if (src.includes('linkedin')) {
          platform = 'linkedin';
        }
        return (
          <a href={linkMap[alt][platform]} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
          </a>
        );
      }
      return <img src={src} alt={alt} />;
    },
    a: ({ node, children, ...props }) => {
      return (
        <a {...props} style={{ textDecoration: 'underline', fontWeight: 'bold' }}>
          {children}
        </a>
      );
    },
    li: ({ node, children, ...props }) => {
      return (
        <li {...props} style={{ listStyleType:'circle' }}>
          {children}
        </li>
      );
    },

  };

  // useEffect(() => {
  //   let index = 0;
  //   const currentMarkdownText = getMarkdownText(projectList[currentProject]);
  //   const timer = setInterval(() => {
  //     setText((prevText) => prevText + currentMarkdownText[index]);
  //     index++;
  //     if (index >= currentMarkdownText.length - 1) {
  //       clearInterval(timer);
  //     }
  //   }, 10); // Speed of typing

  //   return () => clearInterval(timer);
  // }, [currentProject]);

  // Instant Rendering
  useEffect(() => {
    setText(getMarkdownText(projectList[currentProject]));
  }, [currentProject]);

  // AUtoScroll 
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentProject((prev) => (prev + 1) % projectList.length);
  //   }, 20000); // Change every 2 seconds
  //   return () => clearInterval(timer);
  // }, []);

  const handleNext = () => {
    setCurrentProject((prev) => (prev + 1) % projectList.length);
    setText(""); // Reset the text when changing the project
  };

  const handlePrev = () => {
    setCurrentProject((prev) => (prev - 1 + projectList.length) % projectList.length);
    setText(""); // Reset the text when changing the project
  };

  return (
    <>
      <motion.div variants={textVariant()}>
  <p className={`${styles.sectionSubText} text-center`}>
    Connectivity and Networking
  </p>
  <h2 className={`flex items-center justify-center ${styles.sectionHeadText} text-center`}>
    <span>ExtraConnect</span>
    <img src={extraconnect} alt="icon" className="ml-2 w-16 h-16" />
  </h2>
</motion.div>
<div className='mt-20 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8'>
  <motion.div className='flex-1'>
    <div className='bg-[#1D1836] p-8 rounded-[16px]'>
      <ReactMarkdown components={components}>{text}</ReactMarkdown>
    </div>
  </motion.div>
  <motion.div className='flex-1 flex flex-col items-center'>
    <button onClick={handlePrev} className="z-10 mb-5 md:mb-0 md:mr-5">Previous</button>
    <div className='project-card-container relative shadow-cyanGlow rounded-lg min-w-[300px] min-h-[200px]'>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <img src={projectList[currentProject].background} alt="Project Background" className='object-cover w-full h-full rounded-lg' />
          <img src={projectList[currentProject].logo} alt="Project Logo" className='absolute top-0 right-0 m-2 rounded-full w-12 h-12 bg-[#274060] cyan-shadow' />
          <a href={projectList[currentProject].link} target='_blank' className='absolute top-0 left-0 m-2 rounded-full w-12 h-12'>
            <img src={projectList[currentProject].linkIcon} alt="Link Icon" className='w-full h-full' />
          </a>
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000bb] to-transparent p-4 rounded-b-lg'>
            <p className='text-white'>{projectList[currentProject].description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
    <button onClick={handleNext} className="z-10 mt-5 md:mt-0 md:ml-5">Next</button>
  </motion.div>
</div>

    </>
  );
};

export default SectionWrapper(ExtraConnect, "extraconnect");