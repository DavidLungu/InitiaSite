import React from 'react';
import './InfoCard.css';

const InfoCard = (props) => {
  const title = props.title;
  const collaborator = props.collaborator;
  const link = props.link;
  const image = props.image;

  return (
    <div className="info-card">
        <h1 className="info-card__title">{title}</h1>
        <div className="info-card__collaborator">
          In collaboration with: <a href={link} target='_blank' className="info-card__link">{collaborator}</a>
        </div>
        <img src="" alt="" className="info-card__image" />
        <button className="info-card__btn">More Information</button>
    </div>
  )
}

export default InfoCard;