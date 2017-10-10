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
              <input type="text" className="coin-info__identifier__symbol" defaultValue="ETH/BTC" />
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
            <div class="coin-info__values__charts">
              <img class="coin-info__values__charts__link" src="https://datavizcatalogue.com/methods/images/top_images/SVG/candlestick_chart.svg" />
            </div>
          </div>
          <div className="app__panel__bottom">
            <div className="tickers">
              <h3>Tickers</h3>
              <div className="tickers__list"></div>
            </div>
            <div className="order">
              <h3>Order</h3>
              <div className="order__tools">
                <div className="order__tools__selection">
                  <a className="order__tools__selection__buy" href="#">Buy</a>
                  <a className="order__tools__selection__sell" href="#">Sell</a>
                </div>
                <div className="order__tools__form">
                  <div className="order__tools__form__head-line">
                    <div className="order__tools__form__head-line__buy-token-message">
                      Buy ETH
                    </div>
                    <div className="order__tools__form__head-line__available-market-currency">
                      Ƀ 2.5 available
                    </div>
                  </div>
                  <div className="order__tools__form__fields">
                    <div className="order__tools__form__fields__field">
                      <span class="order__tools__form__fields__field__label">Units</span>
                      <input type="text" defaultValue="5020" />
                      <span className="order__tools__form__fields__field__currency-abbreviation">ETH</span>
                    </div>
                    <div className="order__tools__form__fields__field">
                      <span class="order__tools__form__fields__field__label">Rate</span>
                      <input type="text" defaultValue="0.51" />
                      <span className="order__tools__form__fields__field__currency-abbreviation">Ƀ per unit</span>
                      <a href="#" className="order__tools__form__fields__field__limit">Limit</a>
                      <a href="#" className="order__tools__form__fields__field__market">Market</a>
                    </div>
                    <div className="order__tools__form__fields__field">
                      <span class="order__tools__form__fields__field__label">Total</span>
                      <input type="text" defaultValue="2560.20" />
                      <span className="order__tools__form__fields__field__currency-abbreviation">Ƀ</span>
                    </div>
                  </div>
                </div>
                <div className="order__tools__selection__submit-order">
                  <a href="#" className="order__tools__selection__submit-order__button">Submit</a>
                </div>
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
