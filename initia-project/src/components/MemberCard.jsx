import React from 'react';

import './MemberCard.css'

const MemberCard = (props) => {
    const name = props.memberName;
    const school = props.memberSchool;
    const role = props.memberRole;
    const email = props.memberEmail;
    const about = props.memberAbout;

    return (
        <div className="member-card">
            <div className="top">
                <h2 className="member__role">{role}</h2>
            </div>
            <div className="middle">
                <div className="left">
                    <img className="member__image" src={`src/assets/members/${name.split(' ').join('')}.png`} alt="" />
                    <h1 className="member__name">{name}</h1>
                    <h3 className="member__school">{school}</h3>
                </div>
                <div className="right">
                    <p>"{about}"</p>
                    <span className='email-link'>
                        <a href={`mailto:${email}`}>{email}</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MemberCard