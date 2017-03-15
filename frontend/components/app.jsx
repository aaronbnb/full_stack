import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import { hashHistory } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <h1>
        <img className='logo' src='http://www.samthejewishguy.com/wp-content/uploads/2015/09/Screen-Shot-2015-09-11-at-1.21.30-AM.png'></img>
      </h1>

      <GreetingContainer />
      { children }
    </header>
  </div>
);
// { children } === this.props.children
export default App;
