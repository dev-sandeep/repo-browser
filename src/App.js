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
  background: #eaebec;
  margin-top: 0px;
  padding: 10px;
  justify-content: center;
  display: flex;
  min-height: 100vh;
  & > section{
    padding: 10px;
    background: #fff;
    width:800px;
    box-shadow: 5px 5px 10px #bababa;
  }
`;

const reduxData = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Header title={"Awesome Github"} />
      <Suspense fallback={<Fallback />}>
        <Provider store={reduxData}>
          <RouterSt>
            <Router basename={window.location.pathname || ''}>
                <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/:user/repos" component={Repos} />
                <Route exact path="/:user/repos/:repo" component={RepoDetails} />
                </Switch>
              </Router>
            </RouterSt>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
