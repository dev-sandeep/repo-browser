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
import reducer from './redux/reducer'

const Repos = lazy(()=>import("./views/Repos"));
const RepoDetails = lazy(()=>import("./views/RepoDetail"));
const Users = lazy(()=>import("./views/UserSearch"));
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
          <Router>
            <Switch>
              <RouterSt>
                <Route exact path="/" component={Users} />
                <Route exact path="/:user/repos" component={Repos} />
                <Route exact path="/:user/repos/:repo" component={RepoDetails} />
              </RouterSt>
            </Switch>
          </Router>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
