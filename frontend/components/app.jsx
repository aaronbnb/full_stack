import GreetingContainer from './greeting/greeting_container';
import UserContainer from './users/user_container';
import React from 'react';
import { hashHistory } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
        <img className='logo'
          src='http://res.cloudinary.com/dn4jhnh54/image/upload/v1498538465/updatedlogo_hy3xrc.png'
          onClick={() => hashHistory.push("/")}>&nbsp;</img>

      <GreetingContainer />

    </header>
    { children }
  </div>
);
// { children } === this.props.children
export default App;
