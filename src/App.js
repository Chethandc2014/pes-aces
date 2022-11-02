import React  from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import PrivateRoute from './Utils/PrivateRoute';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className="content">
              <Route exact path="/" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
