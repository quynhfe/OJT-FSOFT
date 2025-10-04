import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route
              path='/'
              element={
                <Navigate
                  to='/posts'
                  replace
                />
              }
            />
            <Route
              path='/posts'
              element={<PostList />}
            />
            <Route
              path='/posts/:id'
              element={<PostDetail />}
            />
            <Route
              path='/users'
              element={<UserList />}
            />
            <Route
              path='/users/:id'
              element={<UserDetail />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
