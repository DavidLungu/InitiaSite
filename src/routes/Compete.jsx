import React from 'react';
import InfoCard from '../components/InfoCard.jsx';
import { v4 as uuidv4 } from 'uuid';

const competingInfo = [
  {
    title: "Nutrition Challenge",
    collaborator: "Back2Basics Nutrition",
    link: "https://back2basicsfxn.com/",
    image: ""
  },
  {
    title: "Innovative Medical Solutions",
    collaborator: "MeducationX",
    link: "https://meducationx.org/",
    image: ""
  },
];

const Compete = () => {
  return (
    <div className="compete-page">
      compete
      <div className="competing-cards">
        {competingInfo.map(info => (
          <InfoCard 
            key={uuidv4()}
            title={info.title}
            collaborator={info.collaborator}
            link={info.link}
            image={info.image}
          />
        ))}
      </div>
    </div>
  )
}

export default Compete;