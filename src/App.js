import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Memo from './pages/Memo';

const App = () => {
  return (
  <BrowserRouter>
    <Route path="/" component={Home} />
    <Route path="/memo" component={Memo} />
  </BrowserRouter>
  )
}

export default App;
