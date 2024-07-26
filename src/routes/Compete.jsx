import React from 'react';
import InfoCard from '../components/InfoCard.jsx';
import { v4 as uuidv4 } from 'uuid';

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
    competitionLink: "/competemedical"
  },
];

const Compete = () => {
  return (
    <div className="compete-page">
    <header className="compete-page__header">
      <h1 className="compete-page__title">Explore Open Challenges</h1>
      <h3 className="compete-page__description">Our open challenges are in partnership with various non-profits, communities, businesses, and organizations.</h3>
    </header>
    <div className="competing-cards">
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