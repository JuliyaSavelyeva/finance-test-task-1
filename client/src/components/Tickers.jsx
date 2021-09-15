import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTickers } from '../tickers/tickers.action.js';
import { tickersSelector } from '../tickers/tickers.selector.js';
import ArrowDown from './ArrowDown.jsx';
import ArrowUp from './ArrowUp.jsx';
import History from './History.jsx';
import { colorTitle } from '../utils/tickersColorTitle.js';
import './tickers.scss';

const Tickers = ({ getTickersData, tickers }) => {
  const [redBackground, setRedBackground] = useState([]);
  const [percentVisible, setPercentVisible] = useState(true);

  const onTogglePercent = () => {
    setPercentVisible(!percentVisible);
  };

  const handleKeyDown = () => {
    setPercentVisible(!percentVisible);
  };

  const showRedBackground = data => setRedBackground(data);

  useEffect(() => {
    showRedBackground(redBackground);
  }, [redBackground, percentVisible]);

  useEffect(() => {
    getTickersData();
  }, [tickers]);

  if (!tickers && redBackground.length > 0) {
    return null;
  }

  return (
    <div className="tickers">
      <h2 className="tickers__title">Самые популярные акции в Google</h2>
      <ul className="tickers-list">
        {tickers.map(({ ticker, change_percent, dividend }, index) => {
          const redBackgroundStyle = redBackground[index]
            ? { backgroundColor: '#FCE8E6' }
            : { backgroundColor: '#e6f4ea' };

          const redColorStyle = redBackground[index] ? { color: '#a50e0e' } : { color: '#137333' };

          const arrow = redBackground[index] ? <ArrowDown /> : <ArrowUp />;
          return (
            <li key={ticker} className="tickers-list__item">
              <div className="tickers-list__link">
                <div className="ticker">
                  <span
                    className="ticker__logo"
                    style={{ backgroundColor: colorTitle[index].color }}
                  >
                    {ticker}
                  </span>
                  <span className="ticker__title">{colorTitle[index].title}</span>
                  <span className="ticker__subscribers">{`Подписчиков: ${colorTitle[index].subscribers}`}</span>
                </div>
                <div
                  className="yield"
                  onClick={onTogglePercent}
                  onKeyDown={handleKeyDown}
                  role="button"
                  tabIndex="0"
                  style={redBackgroundStyle}
                >
                  <span className="yield__arrow">{arrow}</span>
                  <span className="yield__digit" style={redColorStyle}>
                    {percentVisible ? `${change_percent}%` : dividend}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <History showRedBackground={showRedBackground} />
    </div>
  );
};

Tickers.propTypes = {
  tickers: PropTypes.arrayOf(PropTypes.shape()),
  getTickersData: PropTypes.func.isRequired,
};

Tickers.defaultProps = {
  tickers: [],
};

const mapState = state => ({
  tickers: tickersSelector(state),
});

const mapDispatch = {
  getTickersData: getTickers,
};

export default connect(mapState, mapDispatch)(Tickers);
