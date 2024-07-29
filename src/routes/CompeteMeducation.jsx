import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CompetitionCard from '../components/CompetitionCard';

const meducationCards = [
  {
    title: "Task",
    image: './cards/meducationcomp-task.png',
    description: "Participants must create an innovative medical solution that can be used to combat some sort of difficulty in the medical field."
  },
  {
    title: "Submission",
    image: './cards/competition-submission.png',
    description: "Competitors are to write a research paper on the given prompt. This written piece must be a minimum of 2000 words. "
  },
  {
    title: "Awards",
    image: './cards/competition-awards.png',
    description: "1st Place - 50 Service Hours\n2nd Place - 40 Service Hours\n3rd Place - 30 Service Hours"
  },
  {
    title: "Team",
    image: './cards/competition-team.png',
    description: "Submissions are to be done as a team. Each team will consist of 2-6 members. "
  },
  {
    title: "Judges",
    image: './cards/competition-judges.png',
    description: "Submissions will be judged by college ​professors in the respective field. More information will be ​available soon."
  },
  {
    title: "Guidelines & Rubric",
    image: './cards/competition-rubric.png',
    description: "Submissions are to follow the <link1>Rules & Guidelines</link1>, and will be judged according to <link2>This Rubric</link2>."
  },
]

const CompeteMeducation = () => {
  return (
    <div className="page compete-page__meducation">
      <header className="page__header">
        <h1 className="page__title">MeducationX Competition</h1>
        {/* <h3 className="page__description">
          <span className='compete-page__description'>
            In today’s society, the biggest dietary challenge has been to consume nutrient-dense foods, aka healthy foods. Of course, maintaining this lifestyle has become increasingly challenging with the rise of high-fat, glucose-rich, and processed fast foods that tend to be less expensive and more convenient than healthier alternatives.
            {'\n\n'}
            To counter this challenge, Initia is partnering with Niti Shah, a master's degree holder who also serves as the CEO of Back2Basics. Should your competition entry demonstrate expertise and exceed our expectations, there is a chance your piece could be featured on her reputed nutrition website. We challenge you to enhance the public’s general awareness of nutritional advantages through an innovative program, either in the form of a written blog or video.
          </span>
        </h3> */}
        <div className="compete-page__collaborator">
          In collaboration with: <a href='https://meducationx.org/' target='_blank' className="compete-page__link">MeducationX</a>
        </div>
      </header>
      <div className="competition__cards">
        {meducationCards.map( meducationCard => (
          <CompetitionCard 
            key={uuidv4()} 
            title={meducationCard.title}
            image={meducationCard.image}
            description={meducationCard.description}
          />
        ))}
      </div>
    </div>
  )
}

export default CompeteMeducation