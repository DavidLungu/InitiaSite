import React from 'react';

import './MemberCard.css'

const MemberCard = (props) => {
    const name = props.memberName;
    const school = props.memberSchool;
    const role = props.memberRole;
    const email = props.memberEmail;
    const about = props.memberAbout;
    const image = props.memberImage;

    return (
        <div className="member-card">
            <h2 className="role">{role}</h2>
            <h1 className="name">{name}</h1>
            <p>{about}</p>
        </div>
    )
}

export default MemberCard