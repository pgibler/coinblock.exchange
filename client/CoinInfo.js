import React, { Component } from 'react';
import './CoinInfo.css';

class CoinInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Ethereum',
      price: 0.06345826,
      volume: 2671.817
    }
  }

  render() {
    const priceComponentClasses = ['coin-info__values__price__value'];

    if(this.state.newPrice) {
      priceComponentClasses.push('coin-info__values__price__value--update');
    }

    const volumeComponentClasses = ['coin-info__values__volume__value'];

    if(this.state.newVolume) {
      volumeComponentClasses.push('coin-info__values__price__value--update');
    }

    return (
      <div className="coin-info lightup-decoration">
        <img className="coin-info__image" src="/images/ethereum.png" />
        <div className="coin-info__identifier">
          <div className="coin-info__identifier__name">{this.state.name}</div>
          <input type="text" className="coin-info__identifier__symbol" defaultValue="ETH/BTC" />
        </div>
        <div className="coin-info__values">
          <div className="coin-info__values__price">
            <div className="coin-info__values__price__title">Price</div>
            <div className={priceComponentClasses.join(' ')}>Ƀ {this.state.price}</div>
          </div>
          <div className="coin-info__values__volume">
            <div className="coin-info__values__volume__title">Volume</div>
            <div className={volumeComponentClasses.join(' ')}>Ƀ {this.state.volume}</div>
          </div>
        </div>
        <div className="coin-info__values__charts">
          <img className="coin-info__values__charts__link" src="https://datavizcatalogue.com/methods/images/top_images/SVG/candlestick_chart.svg" />
        </div>
      </div>
    );
  }

  componentWillMount() {
    if(this.state.socket) {
      this.socket.close();
    }

    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${this.props.tickerSymbol.toLowerCase()}@aggTrade`);

    // Listen for messages
    socket.addEventListener('message', event => {
      const data = JSON.parse(event.data);

      this.setState({ price: data.p });
    });

    const ts = Math.round(new Date().getTime() / 1000);
    const tsYesterday = ts - (24 * 3600);

    const lastDayTradeInfoUrl = `https://www.binance.com/api/v1/ticker/24hr?symbol=${this.props.tickerSymbol.toUpperCase()}`;

    fetch(lastDayTradeInfoUrl).then(response => {
      this.setState({ volume: response.volume });
    });

    this.setState({ socket });
  }

  componentWillUnount(props) {
    this.state.socket.close();
  }
}

export default CoinInfo;