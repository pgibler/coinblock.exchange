import React, { Component } from 'react';
import './App.css';
import DepthWebsocketEmitter from './DepthWebsocketEmitter.js';
import CoinInfo from './CoinInfo.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <video className="app__background-video" loop autoPlay>
          <source src="background-animation.webm" type="video/webm" />
        </video>
        <header className="app__header">
          <h1 className="app__header__title">coinblock.exchange</h1>
          {/* <div className="app__header__currency-toggle">
            <a className="app__header__currency-toggle__dollar">$</a>
            <a className="app__header__currency-toggle__bitcoin">Ƀ</a>
          </div> */}
        </header>
        <div className="app__panel">
          <CoinInfo tickerSymbol="ethbtc" />
          <div className="app__panel__bottom">
            <div className="tickers lightup-decoration">
              <h3>Tickers</h3>
              <div className="data__list">
                <div className="data__list__header">
                  <div>Symbol</div>
                  <div>Change</div>
                  <div>Price</div>
                </div>
                <div className="data__list__ticker">
                  <div>ETH/BTC</div>
                  <div>+0.04%</div>
                  <div>0.00158001</div>
                </div>
                <div className="data__list__ticker">
                  <div>MNR/BTC</div>
                  <div>+0.14%</div>
                  <div>0.06326500</div>
                </div>
                <div className="data__list__ticker">
                  <div>ZCH/BTC</div>
                  <div>+0.45%</div>
                  <div>0.00021834</div>
                </div>
                <div className="data__list__ticker">
                  <div>MON/BTC</div>
                  <div>+50.41%</div>
                  <div>0.00167500</div>
                </div>
                <div className="data__list__ticker">
                  <div>PAY/BTC</div>
                  <div>+130.84%</div>
                  <div>0.00016483</div>
                </div>
                <div className="data__list__ticker">
                  <div>OMG/BTC</div>
                  <div>+15.49%</div>
                  <div>0.00591900</div>
                </div>
                <div className="data__list__ticker">
                  <div>LTC/BTC</div>
                  <div>+0.94%</div>
                  <div>0.00021502</div>
                </div>
                <div className="data__list__ticker">
                  <div>NEO/BTC</div>
                  <div>+7.14%</div>
                  <div>0.04760010</div>
                </div>
                <div className="data__list__ticker">
                  <div>LSK/BTC</div>
                  <div>+5.40%</div>
                  <div>0.00000019</div>
                </div>
                <div className="data__list__ticker">
                  <div>BCC/BTC</div>
                  <div>+0.74%</div>
                  <div>0.00004200</div>
                </div>
                <div className="data__list__ticker">
                  <div>ARK/BTC</div>
                  <div>+0.47%</div>
                  <div>0.00020625</div>
                </div>
                <div className="data__list__ticker">
                  <div>XRP/BTC</div>
                  <div>+0.64%</div>
                  <div>0.00232617</div>
                </div>
                <div className="data__list__ticker">
                  <div>XVG/BTC</div>
                  <div>+10.54%</div>
                  <div>0.00000124</div>
                </div>
                <div className="data__list__ticker">
                  <div>XRP/ADA</div>
                  <div>+0.14%</div>
                  <div>0.00032617</div>
                </div>
                <div className="data__list__ticker">
                  <div>ARK/BTC</div>
                  <div>+0.47%</div>
                  <div>0.00020625</div>
                </div>
                <div className="data__list__ticker">
                  <div>XRP/BTC</div>
                  <div>+0.64%</div>
                  <div>0.00232617</div>
                </div>
                <div className="data__list__ticker">
                  <div>XVG/BTC</div>
                  <div>+10.54%</div>
                  <div>0.00000124</div>
                </div>
                <div className="data__list__ticker">
                  <div>XRP/ADA</div>
                  <div>+0.14%</div>
                  <div>0.00032617</div>
                </div>
                <div className="data__list__ticker">
                  <div>XRP/ADA</div>
                  <div>+0.14%</div>
                  <div>0.00032617</div>
                </div>
                <div className="data__list__ticker">
                  <div>ARK/BTC</div>
                  <div>+0.47%</div>
                  <div>0.00020625</div>
                </div>
                <div className="data__list__ticker">
                  <div>XRP/BTC</div>
                  <div>+0.64%</div>
                  <div>0.00232617</div>
                </div>
                <div className="data__list__ticker">
                  <div>XVG/BTC</div>
                  <div>+10.54%</div>
                  <div>0.00000124</div>
                </div>
                <div className="data__list__ticker">
                  <div>XRP/ADA</div>
                  <div>+0.14%</div>
                  <div>0.00032617</div>
                </div>
              </div>
            </div>
            <div className="order lightup-decoration">
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
                      <span className="order__tools__form__fields__field__label">Units</span>
                      <input type="text" defaultValue="5020" />
                      <span className="order__tools__form__fields__field__currency-abbreviation">ETH</span>
                    </div>
                    <div className="order__tools__form__fields__field">
                      <span className="order__tools__form__fields__field__label">Rate</span>
                      <input className="order__tools__form__fields__field__rate" type="text" defaultValue="0.06345826" />
                      <span className="order__tools__form__fields__field__currency-abbreviation">Ƀ per unit</span>
                      <a href="#" className="order__tools__form__fields__field__limit">Limit</a>
                      <a href="#" className="order__tools__form__fields__field__market">Market</a>
                    </div>
                    <div className="order__tools__form__fields__field">
                      <span className="order__tools__form__fields__field__label">Total</span>
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
            <div className="positions-and-orders lightup-decoration">
              <div className="positions">
                <h3>Positions</h3>
                <div className="data__list">
                  <div className="data__list__header">
                    <div>Symbol</div>
                    <div>Change</div>
                    <div>Price</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>ETH/BTC</div>
                    <div>+0.04%</div>
                    <div>0.00158001</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>MNR/BTC</div>
                    <div>+0.14%</div>
                    <div>0.06326500</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>ZCH/BTC</div>
                    <div>+0.45%</div>
                    <div>0.00021834</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>MON/BTC</div>
                    <div>+50.41%</div>
                    <div>0.00167500</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>PAY/BTC</div>
                    <div>+130.84%</div>
                    <div>0.00016483</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>OMG/BTC</div>
                    <div>+15.49%</div>
                    <div>0.00591900</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>LTC/BTC</div>
                    <div>+0.94%</div>
                    <div>0.00021502</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>NEO/BTC</div>
                    <div>+7.14%</div>
                    <div>0.04760010</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>LSK/BTC</div>
                    <div>+5.40%</div>
                    <div>0.00000019</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>BCC/BTC</div>
                    <div>+0.74%</div>
                    <div>0.00004200</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>ARK/BTC</div>
                    <div>+0.47%</div>
                    <div>0.00020625</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>XRP/BTC</div>
                    <div>+0.64%</div>
                    <div>0.00232617</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>XVG/BTC</div>
                    <div>+10.54%</div>
                    <div>0.00000124</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>XRP/ADA</div>
                    <div>+0.14%</div>
                    <div>0.00032617</div>
                  </div>
                </div>
              </div>
              <div className="orders">
                <h3>Orders</h3>
                <div className="data__list">
                  <div className="data__list__header">
                    <div>Symbol</div>
                    <div>Change</div>
                    <div>Price</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>ETH/BTC</div>
                    <div>+0.04%</div>
                    <div>0.00158001</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>MNR/BTC</div>
                    <div>+0.14%</div>
                    <div>0.06326500</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>ZCH/BTC</div>
                    <div>+0.45%</div>
                    <div>0.00021834</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>MON/BTC</div>
                    <div>+50.41%</div>
                    <div>0.00167500</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>PAY/BTC</div>
                    <div>+130.84%</div>
                    <div>0.00016483</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>OMG/BTC</div>
                    <div>+15.49%</div>
                    <div>0.00591900</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>LTC/BTC</div>
                    <div>+0.94%</div>
                    <div>0.00021502</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>NEO/BTC</div>
                    <div>+7.14%</div>
                    <div>0.04760010</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>LSK/BTC</div>
                    <div>+5.40%</div>
                    <div>0.00000019</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>BCC/BTC</div>
                    <div>+0.74%</div>
                    <div>0.00004200</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>ARK/BTC</div>
                    <div>+0.47%</div>
                    <div>0.00020625</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>XRP/BTC</div>
                    <div>+0.64%</div>
                    <div>0.00232617</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>XVG/BTC</div>
                    <div>+10.54%</div>
                    <div>0.00000124</div>
                  </div>
                  <div className="data__list__ticker">
                    <div>XRP/ADA</div>
                    <div>+0.14%</div>
                    <div>0.00032617</div>
                  </div>
                </div>
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
