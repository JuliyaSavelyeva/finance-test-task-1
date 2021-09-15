import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { tickersSelector } from '../tickers/tickers.selector.js';
import './tickers.scss';

class History extends React.Component {
  state = {
    redBackground: [],
  };

  componentDidMount() {
    const { redBackground } = this.state;
    const { showRedBackground } = this.props;
    showRedBackground(redBackground);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { tickers } = this.props;
    const { redBackground } = this.state;
    const tickerDividends = tickers.map(({ dividend }, index) => {
      if (+dividend > +nextProps.tickers[index].dividend) {
        return true;
      }
      return false;
    });
    this.setState({
      redBackground: tickerDividends,
    });
  }

  componentDidUpdate() {
    const { redBackground } = this.state;
    const { showRedBackground } = this.props;
    showRedBackground(redBackground);
  }

  render() {
    return null;
  }
}

const mapState = state => ({
  tickers: tickersSelector(state),
});

History.propTypes = {
  tickers: PropTypes.arrayOf(PropTypes.shape()),
  showRedBackground: PropTypes.func.isRequired,
};

History.defaultProps = {
  tickers: [],
};

export default connect(mapState)(History);
