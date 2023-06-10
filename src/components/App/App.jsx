import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home'
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';

function App() {

  return (
    <>

      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>

      <Router>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/Feelings'>
          <Feelings />
        </Route>

        <Route exact path='/Understanding'>
          <Understanding />
        </Route>

        <Route exact path='/Support'>
          <Support />
        </Route>

        <Route exact path='/Comments'>
          <Comments />
        </Route>

        <Route exact path='/Review'>
          <Review />
        </Route>

        <Route exact path='/ThankYou'>
          <ThankYou />
        </Route>

      </Router>

    </>
  );
}

export default App;
