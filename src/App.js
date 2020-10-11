import React, { Suspense, lazy } from "react"
import styled from 'styled-components'
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Header from './components/Header'
import Repos from './views/Repos'
import RepoDetail from './views/RepoDetail'
import UserSearch from './views/UserSearch'
import reducer from './redux/reducer'
const PUBLIC_URL = "https://dev-sandeep.github.io/repo-browser/";

const Fallback = ()=>(<h4>Loading...</h4>)

const RouterSt = styled.div`
  margin:15px;
  justify-content: center;
  display: flex;
`;

const reduxData = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Header title={"Awesome Github"} />
      <Suspense fallback={<Fallback />}>
        <Provider store={reduxData}>
          <Router basename={PUBLIC_URL}>
            <Switch>
              <RouterSt>
                <Route exact path="/" render={props=><UserSearch {...props} />} />
                <Route exact path="/:user/repos" render={props=><Repos {...props} />} />
                <Route exact path="/:user/repos/:repo" render={props=><RepoDetail {...props} />} />
              </RouterSt>
            </Switch>
          </Router>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
