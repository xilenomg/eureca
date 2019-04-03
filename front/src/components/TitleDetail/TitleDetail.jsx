import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTitle } from '../../utils/Request.jsx';
import Loading from '../Loading/Loading.jsx';
import TitleVersionItem from '../TitleVersionItem/TitleVersionItem.jsx';

import './TitleDetail.scss';

class TitleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      loading: false
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.getTitleFromAPI(id);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      () => {
        return {
          loading: true,
          title: null
        };
      },
      () => {
        this.getTitleFromAPI(nextProps.id);
      }
    );
  }

  getTitleFromAPI = id => {
    getTitle(id).then(title => {
      this.setState({
        title,
        loading: false
      });
    });
  };

  render() {
    const { title, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    if (title) {
      return (
        <div className="TitleDetail">
          <h2>{title.title.title}</h2>
          {title.title.TitleRating.averageRating && 
            <div>Rating: {title.title.TitleRating.averageRating}</div>
          }
          <div>Votes: {title.title.TitleRating.numVotes}</div>
          <div>
            <h3>Versões</h3>
            <div className="--items">
              <div className="--carousel">
                {title.titles.map(title => {
                  return <TitleVersionItem key={title.id} item={title} />;
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

TitleDetail.propTypes = {
  id: PropTypes.string.isRequired
};

export default TitleDetail;
