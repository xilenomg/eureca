import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './TitleVersionItem.scss';

const TitleVersionItem = props => {
  const { item } = props;
  return (
    <div className="TitleVersionItem">
      <div className="--image" />
      <div className="--content">
        <div><strong>{item.title}</strong></div>
        <div><strong>Original:</strong> {item.isOriginalTitle ? 'Sim' : 'Não'}</div>
        {item.region && <div><strong>Região:</strong> {item.region}</div>}
        {item.language && <div><strong>Idioma:</strong> {item.language}</div>}
      </div>
      <Link to={`/title/${item.id}`}>Ver detalhes</Link>
    </div>
  );
};

TitleVersionItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default TitleVersionItem;
