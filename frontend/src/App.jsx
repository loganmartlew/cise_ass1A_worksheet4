import React from 'react';
import {
  Route,
  Routes,
  NavLink,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';

import Home from './pages/Home';
import SEPractice from './pages/SEPractice';
import SubmitArticle from './pages/SubmitArticle';
import NotFoundPage from './pages/404';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className='header'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/SEPractice'>Select the Practice</NavLink>
          </li>
          <li>
            <NavLink to='/SubmitArticle'>Submit an Article</NavLink>
          </li>
        </ul>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SEPractice' element={<SEPractice />} />
            <Route path='/SubmitArticle' element={<SubmitArticle />} />
            <Route path='/404' element={<NotFoundPage />} />
            <Route path='*' element={<Navigate to='/404' replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
