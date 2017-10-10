import React, { Component } from 'react';
import './App.css';
import DepthWebsocketEmitter from './DepthWebsocketEmitter.js';
import SelectedTicker from './SelectedTicker';
import AvailableTickers from './AvailableTickers';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__header__title">coinblock.exchange</h1>
          {/* <div className="app__header__currency-toggle">
            <a className="app__header__currency-toggle__dollar">$</a>
            <a className="app__header__currency-toggle__bitcoin">Ƀ</a>
          </div> */}
        </header>
        <div className="app__panel">
          <div className="coin-info">
            <img className="coin-info__image" src="ethereum.png" />
            <div className="coin-info__identifier">
              <div className="coin-info__identifier__name">Ethereum</div>
              <input type="text" className="coin-info__identifier__symbol" value="ETH/BTC" />
            </div>
            <div className="coin-info__values">
              <div className="coin-info__values__last">
                <div className="coin-info__values__last__title">Last</div>
                <div className="coin-info__values__last__value">Ƀ 0.5142344</div>
              </div>
              <div className="coin-info__values__volume">
                <div className="coin-info__values__volume__title">Volume</div>
                <div className="coin-info__values__volume__value">Ƀ 5132.03</div>
              </div>
            </div>
            <img className="coin-info__graph" src="line_chart.png" />
          </div>
          <div className="app__panel__bottom">
            <div className="tickers">
              <h3>Tickers</h3>
              <div className="tickers-list">
              </div>
            </div>
            <div className="order">
              <h3>Order</h3>
              <div className="order__mode">
                <button>Buy</button>
                <button>Sell</button>
              </div>
            </div>
            <div className="positions-and-orders">
              <h3>Positions</h3>
              <div className="positions">
              </div>
              <h3>Orders</h3>
              <div className="orders">
              </div>
            </div>
          </div>
        </div>
        <div className="app_footer">
          &copy; 2017 coinblock.exchange
        </div>
        {/* <DepthWebsocketEmitter /> */}
      </div>
    );
  }
}

export default App;
