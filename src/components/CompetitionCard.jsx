import React, { useEffect, useState } from 'react';
import './CompetitionCard.css';

function processLinks(description) {
    let newDescription = description;

    return newDescription;
}

const CompetitionCard = (props) => {
  const {title, image, description} = props;
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isBottomVisible, setIsBottomVisible] = useState(true);

    useEffect(() => {
        if (window.innerWidth <= 1200) {
            setIsTopVisible(true);
            setIsBottomVisible(false);
        } else {
            setIsTopVisible(true);
            setIsBottomVisible(true);
        }
    }, []);

  return (
    <>
        <div className="competition-card">
            <div className="competition-card__top" id={`${isTopVisible ? '' : 'hidden'}`} 
            onClick={() => {
                if (window.innerWidth <= 1200) {
                    setIsTopVisible(!isTopVisible);
                }
            }}>
                <h1 className="competition-card__title">{title}</h1>
                <img src={image} alt="" className="competition-card__image" />
            </div>
            <div className="competition-card__bottom" id={`${isBottomVisible ? '' : 'hidden'}`} 
            onClick={() => {
                if (window.innerWidth <= 1200) {
                    setIsBottomVisible(!isBottomVisible);
                }
            }}>
                <p className="competition-card__description">{`${processLinks(description)}`}</p>
            </div>
        </div>
    </>
  )
}

export default CompetitionCard;