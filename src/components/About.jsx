import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion, useAnimation} from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, bacK_tech }) => {
  const controls = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    controls.start({
      // rotateY: isFlipped ? 0 : 180,
    });
  };

  return (
    <Tilt className='xs:w-[180px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)} // Assuming fadeIn is defined elsewhere
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        animate={controls}
        onClick={handleFlip}
        whileHover={{ scale: 1.05, cursor:"pointer" }} // Added hover effect here
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          {isFlipped ? (
            <div className='text-white text-[20px] font-bold text-center'>
              {bacK_tech.map((tech) =>{ 
                return <div>{tech}</div>
              })}
            </div>
          ) : (
            <>
              <img
                src={icon}
                alt='web-development'
                className='w-16 h-16 object-contain'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
              </h3>
            </>
          )}
        </div>
      </motion.div>
    </Tilt>
  );

}

const About = () => {
  const programming_langs = [
    "Python3",
    "C",
    "C++",
    "Rust",
    "Java",
    "JEE",
    "PHP",
    "JavaScript",
    "TypeScript",
    "MATLAB (🤮)",
    "R",
    "Bash",
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Sharing was the key for me to learn So much in the tech field. Helping People Helped
        Me practice My knowledge.<br className='sm:block hidden' />
        I'm a Software Engineering student with a specialized focus on Computer Science and 
        Artificial Intelligence. <br className='sm:block hidden' />
        My technical skills are diverse, covering multiple programming languages 
        like {programming_langs.map((lang) => <span className="font-bold text-white">{lang} <span className="w-2 h-2 bg-blue-200 rounded-full inline-block"></span> </span>)}  as well as a range of web technologies and machine learning tools.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => {
          return (
          <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} bacK_tech={service.back_tech} />
        )})}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
