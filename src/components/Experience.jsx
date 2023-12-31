import React, {useState} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3
          className='text-white text-[24px] font-bold cursor-pointer'
          onClick={toggleContent}
        >
          {experience.title}
          <span className={`arrow-icon ${isExpanded ? 'expanded' : ''}`}></span>
        </h3>
        <a
          href={experience.company_url}
          className='text-secondary text-[16px] font-semibold'  // Added 'underline' here
          style={{ margin: 0 }}
        >
          <span className="underline">{experience.company_name}</span> . {experience.employement_type}
        </a>
      </div>

      <ul
        className={`mt-5 list-disc ml-5 space-y-2 transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
