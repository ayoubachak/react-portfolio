import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas, BlobCanvas} from "./canvas";
import {github_icon, linkedin_icon, gmail_icon } from '../assets';


const Hero = () => {

  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTypingDone(true), 4000); // 4s is the duration of your typing animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#274060]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white ${typingDone ? 'blink-caret' : 'typing-effect'}`}>
          Hi, I'm <span className='text-[#274060]'>Ayoub</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 ${typingDone ? 'blink-caret' : 'typing-effect'}`}>
            FullStack Software Engineer <br className='sm:block hidden' />
            And Machine Learning Geek
          </p>
          <div className="button-icon-wrapper">
            <a href="./assets/docs/Ayoub Achak Resume.pdf" download className="download-button">
              Download My Resume
            </a>
            <a href="https://www.github.com/ayoubachak" className="social-media-icon">
              <img src={github_icon} alt="Ayoub Achak Github" />
            </a>
            <a href="https://www.linkedin.com/in/ayoubachak" className="social-media-icon">
              <img src={linkedin_icon} alt="Ayoub Achak Linkdin" />
            </a>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <BlobCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
