import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import MemberCard from '../components/MemberCard.jsx';

const members = [
    {
        name: "Jayanth Annabhimoju",
        school: "Lone Star High School",
        role: "Founder & President",
        email: "jayanth@initia.club",
        about: "Hey, I'm Jayanth. I am the founder and president of Initia. I enjoy running, and playing tennis. I am interested in business and finance and am excited to lead many other aspiring entrepreneurs and innovators in the coming years with Initia."
    },
    {
        name: "Adway Kulkarni",
        school: "Texas Academy of Mathematics & Science",
        role: "Founder & Vice President",
        email: "adway@initia.club",
        about: "Hey, I'm Adway. I am the vice president of Initia.​ I'm a science enthusiast involved in leading young minds towards a greater cause. I enjoy playing the viola and playing chess with my friends."
    },
    {
        name: "Sahad Valiani",
        school: "Uplift North Hills Preparatory",
        role: "Founder",
        email: "sahad@initia.club",
        about: "Hey, I'm Sahad. I am one of the Founders of Initia. I love to practice Taekwondo and play ice hockey and chess. I am passionate about the medical field and love science."
    },
]

const Team = () => {
  return (
    <div className="team-page">
        {/* <p>Meet The Team</p> */}
        <div className="members">
            {members.map( member => (
                <MemberCard 
                    key={uuidv4()}
                    memberName={member.name}
                    memberSchool={member.school}
                    memberRole={member.role}
                    memberEmail={member.email}
                    memberAbout={member.about}
                />
            ))}
        </div>
    </div>
  )
}

export default Team