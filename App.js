import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import UpcomingMore from './More/UpcomingMore';
import DramaMore from './More/DramaMore';
import ActionMore from './More/ActionMore';
import FantasyMore from './More/FantasyMore';
import Detail from './Detail/Detail';
import HomeSearch from './Search/HomeSearch';
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Netflix/:movieId' element={<Detail />} />
          <Route exact path='/UpcomingMore' element={<UpcomingMore />} />
          <Route exact path='/DramaMore' element={<DramaMore />} />
          <Route exact path='/ActionMore' element={<ActionMore />} />
          <Route exact path='/FantasyMore' element={<FantasyMore />} />
          <Route exact path='/Search' element={<HomeSearch/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;