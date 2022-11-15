import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import DramaMore from './DramaMore';
import TopDetail from './TopDetail';
import DramaDetail from './DramaDetail';


const App = () => {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/DramaMore' element={<DramaMore />} />
          <Route exact path='/Netflix/:movieId' element={<TopDetail />} />
          <Route exact path='/Drama/:movieId' element={<DramaDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
