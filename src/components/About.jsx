import React, { useState, useRef, useEffect } from "react";
import Tilt from "react-tilt";
import { motion, useAnimation} from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import me from '../assets/docs/me.png';


const ServiceCard = ({ index, title, icon, bacK_tech }) => {
  const controls = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    controls.start({
      // rotateY: isFlipped ? 0 : 180,
    });
  };
  
  const tiltRef = useRef(null);

  return (
    <Tilt 
      ref={tiltRef}
      className='xs:w-[180px] w-full'
    >
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

const Image = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
      const { left, top, width, height } = cardRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const angleX = (deltaY / height) * 7;  // 7 is the max angle
      const angleY = -(deltaX / width) * 7;

      cardRef.current.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className="flex-none ml-10 bg-[#274060] p-4 rounded-[16px] neon-shadow mt-10 ">
      <img src={me} alt="Ayoub Achak" className="w-64 h-64 object-cover" />
    </div>
  );
};


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
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <div className="flex flex-wrap items-start">
        <p className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ${fadeIn ? 'fade-in show' : 'fade-in'}`}>

            Sharing was the key for me to learn So much in the tech field. Helping People Helped
            Me practice My knowledge.<br className='sm:block hidden' />
            I'm a Software Engineering student with a specialized focus on Computer Science and 
            Artificial Intelligence. <br className='sm:block hidden' />
            My technical skills are diverse, covering multiple programming languages 
            like {programming_langs.map((lang, index) => <span key={index} className="font-bold text-white" >{lang} <span className="w-2 h-2 bg-blue-200 rounded-full inline-block"></span> </span>)}  as well as a range of web technologies and machine learning tools.
          </p>
          <Image/>
      </div>

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
