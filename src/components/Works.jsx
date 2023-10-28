import React, {useState} from "react";
import Tilt from "react-tilt";
import { motion , AnimatePresence} from "framer-motion";

import { styles } from "../styles";
import { github, lock } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ReactMarkdown from 'react-markdown';


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  closed_source,
}) => {

  const components = {
    // Custom component for paragraphs
    p: ({ node, children }) => {
      return <p className="mt-2 text-secondary text-[14px]">{children}</p>;
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

  return (
    <motion.div
    key={index}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
  >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {!closed_source ? 
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={github}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>  : 
              <div
                onClick={() => alert("The code for this repo is either private or contains private information")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={lock}
                  alt='source code'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            }
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <ReactMarkdown components={components}>{description}</ReactMarkdown>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const numberOfVisibleProjects = 3;
  const [visibleProjects, setVisibleProjects] = useState(numberOfVisibleProjects);

  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredProjects = projects.filter((project) =>
    selectedTags.every((tag) => project.tags.some((t) => t.name === tag))
  );

  const loadMoreProjects = () => {
    console.log("Load More clicked");
    setVisibleProjects((prevCount) => prevCount + numberOfVisibleProjects); // Load numberOfVisibleProjects more projects
  };
  const showLessProjects = () => {
    setVisibleProjects((prevCount) => Math.max(numberOfVisibleProjects, prevCount - numberOfVisibleProjects)); // Show numberOfVisibleProjects fewer projects, but not less than numberOfVisibleProjects
  };


  const filters = [
    "python",
    "java",
    "php",
    "rust",
    "C",
    "C++",
    "C#",
    "javascript",
    "react",
    "angular",
    "typescript",
    "flutter",
    "electronjs",
    "android-studio",
    "react-native",
    "spring-boot",
    "laravel",
    "django",
    "flask",
    "fast-api",
    "machine-learning",
    "deep-learning",
    "artificial-intelligence",
    "mysql",
    "pgsql",
    "mongodb",
    "raspberry-pi",
    "arduino",
    "esp32",
    "stm32",
    "lpcxpresso",
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The Following projects showcase my skills and experience through
          real-world examples. Each project is briefly described with
          links to code repositories in it. Have a quick overview of some of my work.<br/>
          Lots of the projects are <b>team projects</b> and are the projects I enjoyed the most.
          I tried to mention every person I've worked with.
        </motion.p>
      </div>
      <div className='w-full flex'>
        <motion.div className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          <p className={`${styles.sectionSubText}`}>Filters</p>
          <div className='flex flex-wrap gap-2'>
            {filters.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-[14px] ${
                  selectedTags.includes(tag) ? "blue-text-gradient" : ""
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className='mt-20 flex flex-wrap gap-7'>
        <AnimatePresence>
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </AnimatePresence>
      </div>

      {visibleProjects < filteredProjects.length && (
        <button onClick={loadMoreProjects} className="load-more-button mt-6 z-999">
          Load More
        </button>
      )}
      {visibleProjects > numberOfVisibleProjects && (
        <button onClick={showLessProjects} className="show-less-button ml-6 mt-6 z-999">
          Show Less
        </button>
      )}
      {filteredProjects.length === 0 && (
        <div className="no-projects">
          No Projects To Show now
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");
