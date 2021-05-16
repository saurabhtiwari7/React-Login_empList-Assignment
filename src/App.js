import React from 'react';
import DashboardPage from './DashboardPage';
import EmployeeList from './EmployeeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './LoginPage/LoginPage';
import ErrorPage from './ErrorPage';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (


    // <div>
    //   <DashboardPage />
    //  <LoginPage />

    // </div>

<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">DashboardPage</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/employee">Employee List</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={DashboardPage} />
           
          <Route path="/login" component={LoginPage} />
            
          <Route path="/employee" component={EmployeeList} />
           
          
          <Route component={ErrorPage} />
            
        </Switch>
      </div>
    </Router>


  )
}

export default App;
