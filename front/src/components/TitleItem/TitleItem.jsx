import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TitleItem.scss';

const TitleItem = props => {
  const { item } = props;
  return (
    <div className="TitleItem">
      <div className="--image" />
      <div className="--content">
        <h2>{item.title}</h2>
        {item.TitleRating && item.TitleRating.averageRating && 
          <div>Rating: {item.TitleRating.averageRating}</div>
        }
        {item.TitleRating && item.TitleRating.numVotes && 
          <div>Votes: {item.TitleRating.numVotes}</div>
        }
      </div>
      <Link to={`/title/${item.id}`}>Ver detalhes</Link>
    </div>
  );
};

TitleItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default TitleItem;
