import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import SolutionCard from '../components/SolutionCard.jsx';
import './Solutions.css';

const solutionCards = [
  {
    title: "2024 Hypothetics Texas Snowstorm Challenge Winner",
    cards: [
      {
        name: "Resistive Conductor Adaptors",
        authors: "John Fahoum & David Nguyen",
        school: "Carroll High School",
        link: "https://initia.club/snowstorm-winner.html"
      },
    ]
  },

    {
    title: "2023 Solutions to MIT Solve's Youth Innovation Challenge",
    cards: [
      {
        name: "Project Paani",
        authors: "Adway Kulkarni, Jayanth Annabhimoju, Atharva Kulkarni, Dhruv Ajmera, Atharv Raj",
        school: "Lone Star High School",
        link: "https://solve.mit.edu/challenges/solv-ed-youth-innovation-challenge-2/solutions/67006"
      },
      {
        name: "Project Pure",
        authors: "Agastya Lohit, Sudip Madala, Sai Medikonda, Samreen Kaur, Ankith Ganji",
        school: "Lone Star High School",
        link: "https://solve.mit.edu/challenges/solv-ed-youth-innovation-challenge-2/solutions/67633"
      },
      {
        name: "Pacific Springs",
        authors: "Nishanth Ramasani, Agastya Bhatlapenumarthy, Pranav Desu, Zuhair Khan, Saahas Pandiri",
        school: "Lone Star High School",
        link: "https://solve.mit.edu/challenges/solv-ed-youth-innovation-challenge-2/solutions/67476"
      },
      {
        name: "Project VianTerra",
        authors: "Rohith Jeganathan, Manas Muppala, Siddhartha Rangaraju",
        school: "Lone Star High School",
        link: "https://solve.mit.edu/challenges/solv-ed-youth-innovation-challenge-2/solutions/67482"
      },
    ]
  }
]

const Solutions = () => {
  return (
      <div className="page solutions-page">
        <div className="solutions-container">
        {
          solutionCards.map( solutionSection => (
            <section key={uuidv4()} className="solution-page__solution-section">
              <h1 className="solution-section__title">{solutionSection.title}</h1>
              {
                solutionSection.cards.map( solutionCard => (
                  <SolutionCard 
                  key={uuidv4()}
                  solutionName={solutionCard.name}
                  solutionAuthors={solutionCard.authors}
                  solutionSchool={solutionCard.school} 
                  solutionLink={solutionCard.link}
                />
                ))  
              }    
            </section>
          ))
        }
        </div>
      </div>
  )
}

export default Solutions