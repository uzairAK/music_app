import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { configureStore } from '../../store';
import Register from '../register/register';
import Login from '../login/login';
import Dashboard from '../admin/admin';
import clearCache from '../clearCache/clearCache';
import UserInfo from '../admin/UserInfo';
import UserDashboard from '../user/user';
import UserProfile from '../user/UserProfile';

const store = configureStore();

const App = () => (
    <Provider store = {store}>
      <Router>
        <Route path='/user' render={(props) => <UserDashboard {...props} content={<UserProfile />} />}/>
        <Route path='/admin' render={(props) => <Dashboard {...props} content={<UserInfo {...props} />} />}/>
        <Route path='/clear' render={(props) => <clearCache {...props} />}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' component={Register}/>
      </Router>
    </Provider>
)

export default App;
