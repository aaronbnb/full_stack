import GreetingContainer from './greeting/greeting_container';
import UserContainer from './users/user_container';
import React from 'react';
import { hashHistory } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <h1>
        <img className='logo' src='https://s5.postimg.org/3okqvy5xj/logo.jpg' onClick={() => hashHistory.push("/")}></img>
      </h1>

      <GreetingContainer />

    </header>
    { children }
  </div>
);
// { children } === this.props.children
export default App;
