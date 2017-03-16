import GreetingContainer from './greeting/greeting_container';
import React from 'react';
import { hashHistory } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <h1>
        <img className='logo' src='https://s5.postimg.org/3okqvy5xj/logo.jpg'></img>
      </h1>

      <GreetingContainer />
      { children }
    </header>
    <body>
      <ul className='testpics'>
        <img src="https://dt1di5yzkuuog.cloudfront.net/products/000/452/859/f33f945f60ebd76d34c021545f361a30_medium.jpg?1464738759"
          ></img>
        <img src="https://dt1di5yzkuuog.cloudfront.net/products/000/461/867/4353ee2d03fb3654646a821248b415b5_medium.jpg?1465856402"
          ></img>
        <img src="https://dt1di5yzkuuog.cloudfront.net/products/000/587/568/2fcc5a26aaf6e9d97df47094a491ce18_medium.jpg?1481403164"
          ></img>

      </ul>
    </body>
  </div>
);
// { children } === this.props.children
export default App;
