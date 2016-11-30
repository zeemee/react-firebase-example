import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduxData from './redux_reducers'
import ChatRoom from './react_components/ChatRoom';

let store = createStore(reduxData);

ReactDOM.render(
  <Provider store={store}>
    <ChatRoom />
  </Provider>,
  document.getElementById('content')
);
