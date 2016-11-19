import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import * as actions from 'actions';
import {configure} from 'configureStore';
import router from 'app/router/';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
