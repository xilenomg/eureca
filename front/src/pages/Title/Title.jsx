import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';
import TitleDetail from '../../components/TitleDetail/TitleDetail.jsx';

const Title = (props) => {
  const { match } = props;
  const { id } = match.params;

  return <div className="Title">
    <h1>Title</h1>
    <TitleDetail id={id} />
  </div>;
};

Title.propTypes = {
  match: PropTypes.object.isRequired
};


export default Title;