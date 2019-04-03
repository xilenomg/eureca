import React, { Component, Fragment } from 'react';
import { getTitles } from '../../utils/Request.jsx';
import TitleItem from '../TitleItem/TitleItem.jsx';
import Loading from '../Loading/Loading.jsx';
import './TitlesList.scss';

class TitlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: [],
      page: 1,
      loading: false
    };
  }

  componentDidMount() {
    this.getTitlesFromAPI();
  }

  getTitlesFromAPI = () => {
    const { page } = this.state;
    this.setState(
      () => {
        return {
          loading: true,
          titles: []
        };
      },
      () => {
        getTitles(page).then(titles => {
          this.setState({
            titles,
            loading: false
          });
        });
      }
    );
  };

  doPrevious = () => {
    this.setState(
      state => {
        return {
          page: state.page - 1
        };
      },
      () => {
        this.getTitlesFromAPI();
      }
    );
  };

  doNext = () => {
    this.setState(
      state => {
        return {
          page: state.page + 1
        };
      },
      () => {
        this.getTitlesFromAPI();
      }
    );
  };

  render() {
    const { titles, loading, page } = this.state;

    return (
      <div className="TitlesList">
        {loading && <Loading />}
        {titles && titles.length > 0 && 
          <Fragment>
            <div className="--controls">
              <button onClick={this.doPrevious} className="secondary" disabled={page <= 1}>
                Página Anterior
              </button>
              <button onClick={this.doNext} className="primary">
                Próxima Página
              </button>
            </div>
            <div className="--items">
              {titles.map(title => {
                return <TitleItem key={title.id} item={title} />;
              })}
            </div>
          </Fragment>
        }
      </div>
    );
  }
}

export default TitlesList;
