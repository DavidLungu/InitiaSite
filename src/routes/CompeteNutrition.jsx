import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CompetitionCard from '../components/CompetitionCard';

const nutritionCards = [
  {
    title: "Task",
    image: './cards/nutritioncomp-task.png',
    description: "Write a blog/recipe containing a detailed exposition of how to structure your meal, or come up with a healthy nutrient-dense recipe—whether it’s a breakfast, lunch, dinner, or dessert item. The item must be both appetizing and healthy. A team will only pick one of these topics and write a well-developed piece."
  }, 
  {
    title: "Submission",
    image: './cards/competition-submission.png',
    description: "Competitors are to write a  blog/recipe on the given prompt. This written piece must be a minimum of 2000 words. Competitors also have the option of submitting a supplemental video (optional) as well as the paper."
  }, 
  {
    title: "Awards",
    image: './cards/competition-awards.png',
    description: "1st Place - 50 Service Hours + Potential feature on the <link1>Back2Basics<link1/> Website\n2nd Place - 45 Service Hours\n3rd Place - 40 Service Hours\n4th Place - 30 Service Hours\n5th Place - 20 Service Hours",
    link1: 'https://back2basicsfxn.com/'
  },  
  {
    title: "Team",
    image: './cards/competition-team.png',
    description: "Submissions are to be done as a team. Each team will consist of 2-6 members."
  },  
  {
    title: "Judges",
    image: './cards/competition-judges.png',
    description: "Submissions will be judged by Niti Shah. With her background in Nutrition, she'll handpick the best submissions."
  },  
  {
    title: "Guidelines & Rubric",
    image: './cards/competition-rubric.png',
    description: "Submissions are to follow the <link1>Rules & Guidelines</link1>, and will be judged according to <link2>This Rubric</link2>.",
    link1: 'https://docs.google.com/document/d/1JYNIXJ2KYk8Cpb_E0VshbDGqg8aztEJopAucTEg0f3E/edit',
    link2: 'https://docs.google.com/document/d/1JYNIXJ2KYk8Cpb_E0VshbDGqg8aztEJopAucTEg0f3E/edit'
  },
] 

const CompeteNutrition = () => {
  return (
    <div className="page compete-page__nutrition">
      <header className="page__header">
        <h1 className="page__title">Nutrition Competition</h1>
        {/* <h3 className="page__description">
          <span className='compete-page__description'>
            In today’s society, the biggest dietary challenge has been to consume nutrient-dense foods, aka healthy foods. Of course, maintaining this lifestyle has become increasingly challenging with the rise of high-fat, glucose-rich, and processed fast foods that tend to be less expensive and more convenient than healthier alternatives.
            {'\n\n'}
            To counter this challenge, Initia is partnering with Niti Shah, a master's degree holder who also serves as the CEO of Back2Basics. Should your competition entry demonstrate expertise and exceed our expectations, there is a chance your piece could be featured on her reputed nutrition website. We challenge you to enhance the public’s general awareness of nutritional advantages through an innovative program, either in the form of a written blog or video.
          </span>
        </h3> */}
        <div className="compete-page__collaborator">
          In collaboration with: <a href='https://back2basicsfxn.com/' target='_blank' className="compete-page__link">Back2Basics Nutrition</a>
        </div>
      </header>
      <div className="competition__cards">
        {nutritionCards.map( nutritionCard => (
          <CompetitionCard 
            key={uuidv4()} 
            title={nutritionCard.title}
            image={nutritionCard.image}
            description={nutritionCard.description}
          />
        ))}
      </div>
    </div>
  )
}

export default CompeteNutrition