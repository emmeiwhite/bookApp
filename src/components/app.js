import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import BookList from './../containers/book-list';
import BookDetail from './../containers/book_detail';

import rootReducer from './../reducers/index';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
            <BookList />
            <BookDetail />
         </div> 
      </Provider>
    );
  }
}

export default App;
