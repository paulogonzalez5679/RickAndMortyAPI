import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const BoxCharacterContent = ({
  id,
  name,
  status,
  species,
  gender,
  type,
  imageSource,
  originLocation,
  actualLocation,
  moreInfo,
}) => {
  return (
    <div className="box">
      <img className="box__image" alt={name} src={imageSource} />
      <div className="description">
        <div className="description__left">
          <p>
            {/* <Link className="name" to={`/characters/${moreInfo}`}>
              {name}
            </Link> */}
            {/* <Link to='/characters/`${moreInfo}`'className="nav__item">
              {name}
            </Link> */}
            {name}
          </p>
          <br/>
          <p>
            {status} - {species}
          </p>
          <p>{gender}</p>
          <p>{type}</p>
        </div>
        <div className="description__right">
          <p>Origin: {originLocation}</p>
          <p>Location: {actualLocation}</p>
        </div>
        <div className="more-info">
          <a className="more-info" href={`/characters/${moreInfo}`}>
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoxCharacterContent;
