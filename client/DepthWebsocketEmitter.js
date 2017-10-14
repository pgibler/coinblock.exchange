import React, { Component } from 'react';
import './DepthWebsocketEmitter.css'

class DepthWebsocketEmitter extends Component {
  constructor(props) {
    super(props);

    this.loadSymbol('ethbtc')
  }

  render() {
    return (
      <div>

      </div>
    );
  }

  loadSymbol(symbol) {
    const preparedSignal = symbol.toLowerCase();

    const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${preparedSignal}@depth`);

    // Close if it's open.
    if(socket.readyState === WebSocket.OPEN) {
      socket.close();
    }

    socket.addEventListener('message', event => {
      console.log(event.data)
    });
  }
}

export default DepthWebsocketEmitter;