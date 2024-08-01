import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import InfoCard from '../components/InfoCard.jsx';

import './Compete.css';

const competingInfo = [
  {
    title: "Nutrition Challenge",
    collaborator: "Back2Basics Nutrition",
    collabLink: "https://back2basicsfxn.com/",
    image: "src/assets/cards/nutritionchallenge.png",
    competitionLink: "/competenutrition"
  },
  {
    title: "Innovative Medical Solutions",
    collaborator: "MeducationX",
    collabLink: "https://meducationx.org/",
    image: "src/assets/cards/innovativemedicalsolutions.png",
    competitionLink: "/competemeducation"
  },
];

const Compete = () => {
  return (
    <div className="page compete-page">
    <header className="page__header">
      <h1 className="page__title">Explore Open Challenges</h1>
      <h3 className="page__description">Our open challenges are in partnership with various non-profits, communities, businesses, and organizations.</h3>
    </header>
    <div className="compete-page__cards">
        {competingInfo.map(info => (
          <InfoCard 
            key={uuidv4()}
            title={info.title}
            collaborator={info.collaborator}
            collabLink={info.collabLink}
            image={info.image}
            competitionLink={info.competitionLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Compete;