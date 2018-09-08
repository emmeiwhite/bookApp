import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import BookList from './../containers/book-list';
import BooksReducer from './../reducers/index';

const store = createStore(BooksReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <BookList />
      </Provider>
    );
  }
}

export default App;
