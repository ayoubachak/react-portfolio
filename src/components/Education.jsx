import React, {useState} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { schools } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ school }) => {
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
      date={school.date}
      iconStyle={{ background: school.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={school.icon}
            alt={school.company_name}
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
          {school.title}
        </h3>
        <a
          href={school.company_url}
          className='text-secondary text-[16px] font-semibold'  // Added 'underline' here
          style={{ margin: 0 }}
        >
          <span className="underline">{school.company_name}</span> . {school.employement_type}
        </a>
      </div>

      <ul
        className={`mt-5 list-disc ml-5 space-y-2 transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {school.points.map((point, index) => (
          <li
            key={`school-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Where I've been Studying
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {schools.map((school, index) => (
            <EducationCard
              key={`school-${index}`}
              school={school}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
